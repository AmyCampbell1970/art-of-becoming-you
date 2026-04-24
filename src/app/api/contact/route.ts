import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { firstName, lastName, email, phone, message } = body;

  await resend.emails.send({
    from: "The Art of Becoming You <onboarding@resend.dev>",
    to: "theartofbecomingyou@gmail.com",
    replyTo: email,
    subject: `New message from ${firstName} ${lastName}`,
    text: `
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || "Not provided"}

Message:
${message}
    `.trim(),
  });

  return NextResponse.json({ ok: true });
}
