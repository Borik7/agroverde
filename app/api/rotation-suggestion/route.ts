import { fetchRotationAI } from "@/lib/rotationAI";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { regionId, firstYearFamily, secondYearFamily } = body;

    if (!regionId || !firstYearFamily || !secondYearFamily) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const result = await fetchRotationAI({
      regionId,
      firstYearFamily,
      secondYearFamily,
    });

    return NextResponse.json({ result });
  } catch (error) {
    console.error("Ошибка в ask-gemini route:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
