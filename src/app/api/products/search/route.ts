import { NextRequest, NextResponse } from "next/server";

import { prisma } from "@/shared/config/prisma/prisma-client";

export async function GET(req: NextRequest) {
   const reqParams = req.nextUrl.searchParams.get("query") || "";

   const products = await prisma.product.findMany({
      where: {
         name: {
            contains: reqParams,
            mode: "insensitive",
         },
      },
      take: 5,
   });

   return NextResponse.json(products);
}
