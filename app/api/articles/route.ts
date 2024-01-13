import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/prisma/client";

const createArticleSchema = z.object({
  title: z.string().min(1).max(255),
  description: z.string().min(1),
  body: z.string().min(1),
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  const validation = createArticleSchema.safeParse(body);

  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const newArticle = await prisma.article.create({
    data: {
      title: body.title,
      description: body.description,
      body: body.body,
    },
  });

  return NextResponse.json(newArticle, { status: 201 });
}
