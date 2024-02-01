import sendgrid from "@sendgrid/mail";
import { NextRequest, NextResponse } from "next/server";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: NextRequest) {
  const { name, email, message } = await request.json();

  try {
    await sendgrid.send({
      to: process.env.EMAIL!,
      from: process.env.EMAIL!,
      subject: `Message from ${name} (${email})`,
      html: `<div>${message}</div>`,
    });
    return NextResponse.json({
      message: "Message sent. I'll get back to you soon!",
    });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
