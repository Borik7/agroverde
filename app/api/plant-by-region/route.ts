import { getPlantsByRegion } from "@/lib/plantsByRegion";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { regionId } = body;

    if (!regionId) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }
    const result = await getPlantsByRegion(regionId);

    return NextResponse.json({ result });
  } catch (error) {
    console.error("Error in plant-by-region route:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
