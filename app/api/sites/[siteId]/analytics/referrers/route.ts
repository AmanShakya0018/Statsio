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
      where: { siteId },
      select: {
        referrer: true,
        ip: true,
      },
    });

    const referrerMap: Record<
      string,
      { views: number; visitors: Set<string> }
    > = {};

    for (const { referrer, ip } of visits) {
      const key = referrer || "Direct";
      if (!referrerMap[key]) {
        referrerMap[key] = { views: 0, visitors: new Set() };
      }
      referrerMap[key].views += 1;
      referrerMap[key].visitors.add(ip);
    }

    const result = Object.entries(referrerMap)
      .map(([referrer, data]) => ({
        referrer,
        count: data.views,
        visitors: data.visitors.size,
      }))
      .sort((a, b) => b.count - a.count);

    return NextResponse.json(result);
  } catch (error) {
    console.error("Referrers Analytics Error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

