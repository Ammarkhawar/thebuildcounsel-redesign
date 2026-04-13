import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await req.json();
    const { firmName, practiceArea, budget, services, challenge, email } = body;

    if (!firmName || !practiceArea || !budget || !services?.length || !challenge || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // ── Send email via Resend ──────────────────────────────────────────────
    await resend.emails.send({
      from: "The Build Counsel <applications@thebuildcounsel.com>",
      to: "info@thebuildcounsel.com",
      replyTo: email,
      subject: `New Application: ${firmName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #f9f9f9; border-radius: 8px;">
          <h2 style="color: #C8411C; margin-bottom: 4px;">New Application Received</h2>
          <p style="color: #666; margin-top: 0; margin-bottom: 24px; font-size: 13px;">Submitted via thebuildcounsel.com</p>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #888; font-size: 13px; width: 160px;">Firm Name</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 14px; font-weight: 600;">${firmName}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #888; font-size: 13px;">Practice Area</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 14px;">${practiceArea}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #888; font-size: 13px;">Monthly Budget</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 14px;">${budget}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #888; font-size: 13px; vertical-align: top;">Services Needed</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 14px;">${services.join(", ")}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; color: #888; font-size: 13px; vertical-align: top;">Challenge</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-size: 14px;">${challenge}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #888; font-size: 13px;">Email</td>
              <td style="padding: 10px 0; font-size: 14px;"><a href="mailto:${email}" style="color: #C8411C;">${email}</a></td>
            </tr>
          </table>

          <div style="margin-top: 28px;">
            <a href="mailto:${email}" style="background: #C8411C; color: white; padding: 12px 24px; border-radius: 20px; text-decoration: none; font-size: 14px; font-weight: 500;">Reply to ${firmName}</a>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Application submission error:", err);
    return NextResponse.json({ error: "Submission failed" }, { status: 500 });
  }
}
