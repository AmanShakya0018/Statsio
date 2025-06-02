import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

interface Params {
  params: Promise<{ siteId: string }>;
}

export async function GET(req: NextRequest, { params }: Params) {

  const { siteId } = await params

  if (!siteId) return NextResponse.json({ error: "Missing siteId" }, { status: 400 });

  try {
    const data = await prisma.visit.groupBy({
      by: ["os"],
      where: { siteId },
      _count: { os: true },
      orderBy: {
        _count: { os: "desc" },
      },
    });

    const formatted = data.map((item) => ({
      os: item.os || "Unknown",
      count: item._count.os,
    }));

    return NextResponse.json(formatted);
  } catch (error) {
    console.error("OS Analytics Error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
