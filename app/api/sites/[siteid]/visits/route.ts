import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

interface Params {
  params: Promise<{ siteid: string }>;
}

export async function GET(req: NextRequest, { params }: Params) {
  try {
    const { siteid } = await params;

    if (!siteid) {
      return NextResponse.json({ error: "Missing siteid in URL" }, { status: 400 });
    }

    const site = await prisma.site.findUnique({
      where: { id: siteid },
    });

    if (!site) {
      return NextResponse.json({ error: "Invalid siteid" }, { status: 400 });
    }

    const visits = await prisma.visit.findMany({
      where: { siteId: siteid },
      orderBy: { createdAt: "desc" },
    });

    return NextResponse.json(visits);
  } catch (error) {
    console.error("Visits API Error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
