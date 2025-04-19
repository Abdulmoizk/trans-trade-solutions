import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, subject, phone, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true", 
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${process.env.SMTP_USER}>`, 
      replyTo: email, 
      to: process.env.SMTP_USER,
      subject: `Form Submission from Website`,
      html: `
      <div style="font-family: Arial, sans-serif; color: #333;">
        
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <div style="padding: 10px; background-color: #f9f9f9; border-left: 3px solid #1850A0;">
          <p>${message}</p>
        </div>
        
        <hr style="border: 1px solid #ddd; margin: 20px 0;">
        
        <p><em><strong>Sender Information:</strong></em></p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ""}
        <p><em>This message was sent from the contact form on your website.</em></p>
      </div>
    `
    
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (err) {
    console.error("Email sending error:", err);
    return new Response(JSON.stringify({ success: false, error: "Internal Server Error" }), { status: 500 });
  }
}
