import { sendContactEmail } from "@/lib/nodmailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { fullName, message, email, phone } = body;

    if (!fullName && !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // ! To be tested
    // const sentEmail = await sendContactEmail({
    //   fullName,
    //   message,
    //   email,
    //   phone,
    // });
    // if (sentEmail instanceof Error) return sentEmail;

    return new NextResponse(null, { status: 202 });
  } catch (error) {
    console.error("Error in contact-us route:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
