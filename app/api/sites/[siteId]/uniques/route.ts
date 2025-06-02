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
    const uniques = await prisma.visit.findMany({
      where: { siteId },
      distinct: ['ip'],
      select: { ip: true },
    });

    return NextResponse.json({ uniqueVisitors: uniques.length });
  } catch (error) {
    console.error("Unique Visitors API Error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
