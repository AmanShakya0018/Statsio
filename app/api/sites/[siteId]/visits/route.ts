import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

interface Params {
  params: Promise<{ siteId: string }>;
}

export async function GET(req: NextRequest, { params }: Params) {
  try {
    const { siteId } = await params;

    if (!siteId) {
      return NextResponse.json({ error: "Missing siteId in URL" }, { status: 400 });
    }

    const site = await prisma.site.findUnique({
      where: { id: siteId },
    });

    if (!site) {
      return NextResponse.json({ error: "Invalid siteId" }, { status: 400 });
    }

    const visits = await prisma.visit.findMany({
      where: { siteId },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(visits);
  } catch (error) {
    console.error("Visits API Error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
