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
      by: ["browser"],
      where: { siteId },
      _count: {
        browser: true,
      },
      orderBy: {
        _count: {
          browser: "desc",
        },
      },
    });

    const formatted = data.map((item) => ({
      browser: item.browser || "Unknown",
      count: item._count.browser,
    }));

    return NextResponse.json(formatted);
  } catch (error) {
    console.error("Browser Analytics Error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
