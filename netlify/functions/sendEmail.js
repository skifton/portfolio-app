const nodemailer = require("nodemailer");

exports.handler = async (event) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "skifdev.info@gmail.com",
      pass: "storeA2002!",
    },
  });

  const { name, email, message, subject } = JSON.parse(event.body);

  const mailOptions = {
    from: "skifdev.info@gmail.com",
    to: "antoniestories@gmail.com",
    subject: subject || "Mail from skifdev",
    html: `
      <html>
        <body>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        </body>
      </html>
    `,
  };

  const info = await transporter.sendMail(mailOptions);

  return {
    statusCode: 200,
    body: "Your data has been successfully sent!",
  };
};
