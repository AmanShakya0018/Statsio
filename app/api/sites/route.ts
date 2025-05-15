import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authoptions";
import prisma from "@/lib/db";

export async function POST(req: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  const { name, domain } = body;

  if (!name || !domain) {
    return NextResponse.json({ error: "Name and domain are required" }, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const site = await prisma.site.create({
    data: {
      name,
      domain,
      userId: user.id,
    },
  });

  return NextResponse.json(site, { status: 201 });
}

export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  const sites = await prisma.site.findMany({
    where: { userId: user.id },
    include: {
        _count: { select: { visits: true } },
      },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(sites, { status: 200 });
}
