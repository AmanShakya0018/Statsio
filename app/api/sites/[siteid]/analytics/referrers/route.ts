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
    const data = await prisma.visit.groupBy({
      by: ["referrer"],
      where: { siteId },
      _count: {
        referrer: true,
      },
      orderBy: {
        _count: {
          referrer: "desc",
        },
      },
    });

    const formatted = data.map((item) => ({
      referrer: item.referrer || "Direct",
      count: item._count.referrer,
    }));

    return NextResponse.json(formatted);
  } catch (error) {
    console.error("Referrers Analytics Error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
