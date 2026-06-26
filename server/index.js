import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

const smtpHost = process.env.SMTP_HOST;
const smtpPort = Number(process.env.SMTP_PORT || 587);
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const recipientEmail = process.env.EMAIL_RECIPIENT || process.env.SMTP_USER;

if (!smtpHost || !smtpUser || !smtpPass) {
  console.warn(
    "WARNING: SMTP credentials are missing. Email sending will not work until environment variables are configured."
  );
}

const transporter = nodemailer.createTransport({
  host: smtpHost,
  port: smtpPort,
  secure: smtpPort === 465,
  auth: {
    user: smtpUser,
    pass: smtpPass,
  },
});

app.post("/api/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email and message are required." });
  }

  try {
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: recipientEmail,
      subject: `New portfolio message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>${message.replace(/\n/g, "<br />")}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    return res.json({ ok: true, info });
  } catch (error) {
    console.error("send-email error", error);
    return res.status(500).json({ error: "Failed to send email." });
  }
});

app.listen(port, () => {
  console.log(`API server listening on http://localhost:${port}`);
});
