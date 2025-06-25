import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const toEmail = "delivered@resend.dev";

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    console.log("Pesan dari:", email);
    console.log("Subjek:", subject);
    console.log("Isi pesan:", message);
    if (!email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    const data = await resend.emails.send({
      from: fromEmail,
      to: [toEmail], // Kirim hanya ke email kamu
      subject: `Contact from ${email}: ${subject}`,
      html: `
        <h2>New Message from Portfolio Website</h2>
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Gagal mengirim email:", error);
    return NextResponse.json({ error: "Gagal mengirim email" }, { status: 500 });
  }

  
}