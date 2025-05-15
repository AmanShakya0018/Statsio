import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function OPTIONS() {
  return NextResponse.json({}, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}

export async function POST(req: NextRequest) {
  try {
    const { siteId, pathname, referrer, userAgent } = await req.json();

    if (!siteId || !pathname || !userAgent) {
      return NextResponse.json({ error: "Missing fields" }, {
        status: 400,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    const site = await prisma.site.findUnique({
      where: { id: siteId },
    });

    if (!site) {
      return NextResponse.json({ error: "Invalid siteId" }, {
        status: 400,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    await prisma.visit.create({
      data: {
        siteId,
        pathname,
        referrer: referrer || "",
        userAgent,
      },
    });

    return NextResponse.json({ success: true }, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error) {
    console.error("Collect API Error:", error);
    return NextResponse.json({ error: "Server error" }, {
      status: 500,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    });
  }
}
