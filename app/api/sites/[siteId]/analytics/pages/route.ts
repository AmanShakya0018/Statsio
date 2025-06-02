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
      by: ["pathname"],
      where: { siteId },
      _count: {
        pathname: true,
      },
      orderBy: {
        _count: {
          pathname: "desc",
        },
      },
    });

    const formatted = data.map((item) => ({
      pathname: item.pathname,
      count: item._count.pathname,
    }));

    return NextResponse.json(formatted);
  } catch (error) {
    console.error("Pages Analytics Error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
