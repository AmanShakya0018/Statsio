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
        pathname: true,
        ip: true,
      },
    });

    const pathnameMap: Record<
      string,
      { views: number; visitors: Set<string> }
    > = {};

    for (const { pathname, ip } of visits) {
      const key = pathname || "/";
      if (!pathnameMap[key]) {
        pathnameMap[key] = { views: 0, visitors: new Set() };
      }
      pathnameMap[key].views += 1;
      pathnameMap[key].visitors.add(ip);
    }

    const result = Object.entries(pathnameMap)
      .map(([pathname, data]) => ({
        pathname,
        count: data.views,
        visitors: data.visitors.size,
      }))
      .sort((a, b) => b.count - a.count);

    return NextResponse.json(result);
  } catch (error) {
    console.error("Pages Analytics Error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
