const nodemailer = require("nodemailer");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Configuración del transporte SMTP
const transporter = nodemailer.createTransport({
    host: "mail.aurolab.com.pe",
    port: 465,
    secure: true,
    auth: {
        user: "test1@aurolab.com.pe",
        pass: "Hkc]eJ0(Zl3X",
    },
});

// Ruta para manejar el envío de correos
app.post("/send-email", async (req, res) => {
    const { fullName, company, position, ruc, phone, email, services, referenceInfo } = req.body;

    try {
        await transporter.sendMail({
            from: '"Contacto AUROLAB" <test1@aurolab.com.pe>',
            to: "user@aurolab.com.pe",
            subject: "Nueva Solicitud de Cotización",
            html: `
  <div style="font-family: Arial, sans-serif; background-color: #f7f7f7; padding: 20px; color: #333;">
    <div style="background-color: #ffffff; padding: 30px; border-radius: 10px; max-width: 600px; margin: auto; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
      <h2 style="color: #007BFF;">Solicitud de Cotización</h2>
      <p><strong>Nombre completo:</strong> ${fullName}</p>
      <p><strong>Empresa:</strong> ${company}</p>
      <p><strong>Cargo:</strong> ${position}</p>
      <p><strong>RUC:</strong> ${ruc}</p>w
      <p><strong>Teléfono:</strong> ${phone}</p>
      <p><strong>Correo electrónico:</strong> ${email}</p>
      <p><strong>Servicios de interés:</strong> ${services}</p>
      <p><strong>Información adicional o referencia:</strong> ${referenceInfo}</p>
    </div>
  </div>
`
        });

        res.status(200).json({ message: "Correo enviado con éxito" });
    } catch (error) {
        console.error("Error al enviar el correo:", error);
        res.status(500).json({ message: "Error al enviar el correo" });
    }
});

// Inicia el servidor
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
