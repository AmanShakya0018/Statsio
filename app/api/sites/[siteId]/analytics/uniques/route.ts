import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

interface Params {
  params: Promise<{ siteId: string }>;
}

export async function GET(req: NextRequest, { params }: Params) {
  const { siteId } = await params;

  if (!siteId) {
    return NextResponse.json({ error: "Missing siteId" }, { status: 400 });
  }


  try {
    const visits = await prisma.visit.findMany({
      where: {
        siteId,
      },
      select: {
        ip: true,
        createdAt: true,
      },
    });

    const uniqueByDay: Record<string, Set<string>> = {};

    for (const { ip, createdAt } of visits) {
      const dateStr = createdAt.toISOString().split("T")[0];
      if (!uniqueByDay[dateStr]) uniqueByDay[dateStr] = new Set();
      uniqueByDay[dateStr].add(ip);
    }

    const result = Object.entries(uniqueByDay).map(([date, ips]) => ({
      date,
      count: ips.size,
    }));

    return NextResponse.json(result);
  } catch (error) {
    console.error("Unique Visitors API Error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
