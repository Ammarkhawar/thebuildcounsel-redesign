import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      intentType,
      firmName,
      practiceArea,
      budget,
      services,
      oneTimePackages,
      challenge,
      email,
    } = body;

    const isMonthly = intentType === "monthly";

    const servicesHtml = isMonthly
      ? `<p><strong>Services:</strong> ${(services as string[]).join(", ")}</p>
         <p><strong>Monthly Budget:</strong> ${budget}</p>`
      : `<p><strong>One-time packages:</strong> ${(oneTimePackages as string[]).join(", ")}</p>`;

    const { error } = await resend.emails.send({
      from: "The Build Counsel <onboarding@resend.dev>",
      to: ["info@thebuildcounsel.com"],
      replyTo: email,
      subject: `New ${isMonthly ? "Monthly Plan" : "One-time Project"} Application — ${firmName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #0e0e0e; color: #f5f2f0; border-radius: 12px;">
          <h2 style="color: #C8411C; margin-top: 0;">New Application — The Build Counsel</h2>
          <hr style="border-color: rgba(200,65,28,0.2); margin: 16px 0;" />

          <p><strong>Type:</strong> ${isMonthly ? "Monthly Retainer" : "One-time Project"}</p>
          <p><strong>Firm Name:</strong> ${firmName}</p>
          <p><strong>Practice Area:</strong> ${practiceArea}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #C8411C;">${email}</a></p>

          ${servicesHtml}

          <p><strong>Message:</strong></p>
          <blockquote style="border-left: 3px solid #C8411C; margin: 8px 0; padding: 8px 16px; color: #ccc;">
            ${challenge}
          </blockquote>

          <hr style="border-color: rgba(200,65,28,0.2); margin: 16px 0;" />
          <p style="font-size: 12px; color: #666;">Submitted via thebuildcounsel.com</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Apply route error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
