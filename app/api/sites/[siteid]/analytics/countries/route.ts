import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

interface Params {
  params: Promise<{ siteId: string }>;
}

export async function GET(req: NextRequest, { params }: Params) {
  const { siteId } = await params

  if (!siteId) {
    return NextResponse.json({ error: "Missing siteId" }, { status: 400 });
  }

  try {
    const data = await prisma.visit.groupBy({
      by: ["country"],
      where: { siteId },
      _count: {
        country: true,
      },
      orderBy: {
        _count: {
          country: "desc",
        },
      },
    });

    const formatted = data.map((item) => ({
      country: item.country || "Unknown",
      count: item._count.country,
    }));

    return NextResponse.json(formatted);
  } catch (error) {
    console.error("Countries Analytics Error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
