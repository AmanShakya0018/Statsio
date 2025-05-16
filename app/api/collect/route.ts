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
    const { siteId, pathname, referrer, userAgent, screenWidth } = await req.json();
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    console.log("IP Detected:", ip);

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

    const isMobile = screenWidth && screenWidth < 768;
    let country = "India";

    try {
      const geoRes = await fetch(`https://ipwho.is/${ip}`);
      const geo = await geoRes.json();
      if (geo && geo.success !== false && geo.country) {
        country = geo.country;
      }
    } catch (err) {
      console.warn("Geolocation failed, using default country: India", err);
    }

    await prisma.visit.create({
      data: {
        siteId,
        pathname,
        referrer: referrer || "",
        userAgent,
        device: isMobile ? "mobile" : "desktop",
        country,
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
