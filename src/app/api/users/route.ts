import { NextResponse } from "next/server";

import { prisma } from "@/shared/config/prisma/prisma-client";

export async function GET() {
   const users = await prisma.user.findMany();

   return NextResponse.json(users);
}

export function POST() {}
