import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

interface Params {
  params: Promise<{ id: string }>
}

export async function DELETE(req: NextRequest, { params }: Params) {

  const { id } = await params;

  if (!id) {
    return NextResponse.json({ success: false, message: "Site ID is missing" }, { status: 400 })
  }

  try {

    const deletedProject = await prisma.site.delete({
      where: {
        id: id
      }
    })

    if (!deletedProject) {
      return NextResponse.json({ success: false, message: "Project not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: "Project deleted successfully" }, { status: 200 })

  } catch (error) {
    console.error("Error deleting post:", error);
    return NextResponse.json({ success: false, message: "Internal Server Error" }, { status: 500 });
  }
}