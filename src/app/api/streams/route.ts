import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/lib/db";

const streamSchema = z.object({
  creatorId: z.string(),
  streamUrl: z.string().url(),
});

const YT_REGEX = new RegExp("^https?://(www.)?youtube.com/watch?v=[w-]{11}$");

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const data = streamSchema.parse(body);
    const url = data.streamUrl;
    if (!YT_REGEX.test(url)) {
      return NextResponse.json(
        { message: "wrong url format!" },
        { status: 400 }
      );
    }
    const extractedId = url.split("?v=")[1];
    await prisma.stream.create({
      data: {
        userId: data.creatorId,
        url: data.streamUrl,
        type: "Youtube",
        extractedId,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { message: "error adding a stream!" },
      { status: 400 }
    );
  }
}
