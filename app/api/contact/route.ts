import nodemailer from "nodemailer";
import { z } from "zod";

// Validation schema matching the client-side schema
const contactFormSchema = z.object({
  name: z.string().min(1).max(200),
  email: z.string().email().max(200),
  subject: z.string().min(1).max(200),
  phone: z.string().regex(/^\+?\d{10,15}$/).optional(),
  message: z.string().min(1).max(5000),
});

// Sanitize HTML to prevent XSS
function sanitizeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

// Validate environment variables
function validateEnvVars() {
  const required = ["SMTP_HOST", "SMTP_PORT", "SMTP_USER", "SMTP_PASS"];
  const missing = required.filter((key) => !process.env[key]);

  if (missing.length > 0) {
    throw new Error(`Missing required environment variables: ${missing.join(", ")}`);
  }
}

export async function POST(req: Request) {
  try {
    // Validate environment variables
    validateEnvVars();

    // Parse and validate request body
    const body = await req.json();
    const validatedData = contactFormSchema.parse(body);

    // Sanitize all user inputs
    const sanitizedData = {
      name: sanitizeHtml(validatedData.name),
      email: sanitizeHtml(validatedData.email),
      subject: sanitizeHtml(validatedData.subject),
      phone: validatedData.phone ? sanitizeHtml(validatedData.phone) : undefined,
      message: sanitizeHtml(validatedData.message),
    };

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send email with sanitized content
    await transporter.sendMail({
      from: `"${sanitizedData.name}" <${process.env.SMTP_USER}>`,
      replyTo: validatedData.email, // Use original email for reply-to (safe)
      to: process.env.SMTP_USER,
      subject: `Form Submission: ${sanitizedData.subject}`,
      html: `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h2 style="color: #ED2228;">New Contact Form Submission</h2>
        <p><strong>Subject:</strong> ${sanitizedData.subject}</p>
        <p><strong>Message:</strong></p>
        <div style="padding: 10px; background-color: #f9f9f9; border-left: 3px solid #ED2228;">
          <p style="white-space: pre-wrap;">${sanitizedData.message}</p>
        </div>
        
        <hr style="border: 1px solid #ddd; margin: 20px 0;">
        
        <p><em><strong>Sender Information:</strong></em></p>
        <p><strong>Name:</strong> ${sanitizedData.name}</p>
        <p><strong>Email:</strong> ${validatedData.email}</p>
        ${sanitizedData.phone ? `<p><strong>Phone:</strong> ${sanitizedData.phone}</p>` : ""}
        <p><em>This message was sent from the contact form on your website.</em></p>
      </div>
    `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Email sending error:", err);

    // Handle validation errors
    if (err instanceof z.ZodError) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Invalid form data",
          details: err.errors,
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Handle missing env vars
    if (err instanceof Error && err.message.includes("Missing required")) {
      console.error("Configuration error:", err.message);
      return new Response(
        JSON.stringify({
          success: false,
          error: "Server configuration error",
        }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Generic error
    return new Response(
      JSON.stringify({
        success: false,
        error: "Internal Server Error",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
