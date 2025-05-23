import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

interface Params {
  params: Promise<{ id: string }>
}

export async function PUT(req: NextRequest, { params }: Params) {

  const { id } = await params;
  const { name, domain } = await req.json();

  if (!id) {
    return NextResponse.json({ success: false, message: "Site ID is missing" }, { status: 400 })
  }

  if (!name || !domain) {
    return NextResponse.json({ success: false, message: "Site Name or Domain is missing" }, { status: 400 })
  }

  try {

    const updatedProject = await prisma.site.update({
      where: {
        id: id
      },
      data: {
        name, domain
      }
    })

    if (!updatedProject) {
      return NextResponse.json({ success: false, message: "Project details cannot be updated" }, { status: 404 })
    }

    return NextResponse.json({ success: true, message: "Project updated successfully" }, { status: 200 })


  } catch (error) {
    console.error("Error updating project:" + error);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 })
  }

}