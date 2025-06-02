import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

interface Params {
  params: Promise<{ siteId: string }>;
}

export async function GET(req: NextRequest, { params }: Params) {
  const { siteId } = await params;

  try {
    const visits = await prisma.visit.findMany({
      where: { siteId },
      select: { createdAt: true },
    });

    const countsByDate: Record<string, number> = {};

    for (const visit of visits) {
      const date = visit.createdAt.toISOString().split("T")[0];
      countsByDate[date] = (countsByDate[date] || 0) + 1;
    }

    const result = Object.entries(countsByDate)
      .map(([date, count]) => ({ date, count }))
      .sort((a, b) => a.date.localeCompare(b.date));

    return NextResponse.json(result);
  } catch (error) {
    console.error("Timeseries Analytics Error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
