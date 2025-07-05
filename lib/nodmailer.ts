import nodemailer from "nodemailer";

export async function sendContactEmail({
  fullName,
  email,
  phone,
  message,
}: {
  fullName: string;
  email?: string;
  phone?: string;
  message: string;
}): Promise<"OK" | Error> {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"AgroVerde Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      subject: "Նոր կապի հարցումը՝ կայքից",
      text: `
        Անուն և Ազգանուն: ${fullName}
        Էլ․ փոստ: ${email || "Չի նշված"}
        Հեռախոս: ${phone || "Չի նշված"}
        Հաղորդագրություն:
        ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return "OK";
  } catch (error) {
    return new Error("Failed to send email");
  }
}
