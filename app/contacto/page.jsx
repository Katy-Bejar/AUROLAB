'use client';
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contacto() {
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    position: "",
    ruc: "",
    phone: "",
    email: "",
    services: "",
    referenceInfo: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://aurolab.com.pe/sendEmail.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type",
          "Access-Control-Allow-Methods": "POST",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("¡Tu mensaje ha sido enviado con éxito!");
        setFormData({
          fullName: "",
          company: "",
          position: "",
          ruc: "",
          phone: "",
          email: "",
          services: "",
          referenceInfo: "",
        });
      } else {
        console.error("Error al enviar el correo");
      }
    } catch (error) {
      console.error("Error al enviar el correo:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen flex items-center justify-center px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl w-full">
        {/* Sección de texto */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <h1 className="text-4xl font-bold text-blue-900 mb-6">
            Solicita una Cotización
          </h1>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            En <span className="font-semibold text-blue-900">AUROLAB</span>, estamos comprometidos en ofrecerte soluciones personalizadas para tus necesidades. Completa el formulario con tus datos y los detalles del servicio que necesitas.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Nuestro equipo de especialistas se pondrá en contacto contigo lo antes posible para brindarte la mejor atención y asesoramiento.
          </p>

          {/* Mapa */}
          <div className="mt-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Estamos en</h2>
            <div className="w-full h-64 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d-122.4194154846815!3d37.77492977975962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f0b1b1b1%3A0x2b0b1b1b1b1b1b1b!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1616161616161!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Ubicación de AUROLAB"
              ></iframe>
            </div>
          </div>
        </motion.div>

        {/* Formulario de contacto */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-6 rounded-lg shadow-lg"
        >
          <form className="space-y-4 text-sm" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Nombres y Apellidos
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                placeholder="Ingresa tus nombres y apellidos"
                value={formData.fullName}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                Empresa
              </label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Ingresa el nombre de tu empresa"
                value={formData.company}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="position" className="block text-sm font-medium text-gray-700">
                Cargo
              </label>
              <input
                type="text"
                id="position"
                name="position"
                placeholder="Ingresa tu cargo"
                value={formData.position}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="ruc" className="block text-sm font-medium text-gray-700">
                RUC
              </label>
              <input
                type="text"
                id="ruc"
                name="ruc"
                placeholder="Ingresa el RUC de tu empresa"
                value={formData.ruc}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Celular de Contacto
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Ingresa tu número de celular"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Ingresa tu correo electrónico"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label htmlFor="services" className="block text-sm font-medium text-gray-700">
                ¿Qué servicios necesitas?
              </label>
              <select
                id="services"
                name="services"
                value={formData.services}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Seleccionar</option>
                <option value="analisis-quimico">Análisis Químico</option>
                <option value="analisis-microbiologico">Análisis Microbiológico</option>
                <option value="monitoreo-ambiental">Monitoreo Ambiental</option>
              </select>
            </div>

            <div>
              <label htmlFor="referenceInfo" className="block text-sm font-medium text-gray-700">
                Información Referencial del Servicio
              </label>
              <textarea
                id="referenceInfo"
                name="referenceInfo"
                rows="3"
                placeholder="Escribe información adicional sobre el servicio que necesitas"
                value={formData.referenceInfo}
                onChange={handleChange}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              ></textarea>
            </div>

            <div className="text-center pt-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-blue-600 text-white font-semibold py-2 rounded-md shadow hover:bg-blue-700 transition-all duration-300 text-sm ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                  }`}
              >
                {isSubmitting ? "Enviando..." : "Quiero una Cotización"}
              </motion.button>
            </div>
          </form>
          {successMessage && (
            <p className="text-center text-green-600 mt-4">{successMessage}</p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
