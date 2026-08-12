import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        error: "Name, email and message are required.",
      });
    }

    const { data, error } = await resend.emails.send({
      from: "Tcongs Website <onboarding@resend.dev>",
      to: ["tcongsinfotech@gmail.com"],
      replyTo: email,
      subject: `New Website Enquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>Tcongs Infotech Website Enquiry</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Message:</strong></p>
          <p>${message}</p>
        </div>
      `,
    });

    if (error) {
      console.error(error);

      return res.status(500).json({
        error: "Failed to send email.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Your details have been sent successfully.",
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Server error.",
    });
  }
}