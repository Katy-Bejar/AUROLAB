'use client';
import { motion } from "framer-motion";

export default function Contacto() {
  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center text-blue-900 mb-6">
        Contáctanos
      </h1>
      <p className="text-lg text-center text-gray-700 mb-8">
        Consulta nuestros informes y reportes de servicio. Estamos aquí para ayudarte.
      </p>

      {/* Secciones lado a lado */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl w-full p-12">
        {/* Sección de Recepción de Muestra */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-100 p-10 rounded-lg shadow-lg"
        >
          <h2 className="text-3xl font-semibold text-blue-900 flex items-center mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8 mr-3 text-blue-900"
            >
              <path d="M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3" />
              <path d="m16 2 6 6" />
              <path d="M12 16H4" />
            </svg>
            Recepción de Muestras
          </h2>
          <p className="text-base mb-4">
            En caso requiera comunicación inmediata, comuníquese vía WhatsApp:{" "}
            <a
              href="https://wa.me/+51941678446"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-blue-600"
            >
              941678446
            </a>
          </p>
          <p className="text-base mb-6">
            Envía tu solicitud de cotización al siguiente correo:{" "}
            <a
              href="mailto:comercial@aurolab.com.pe"
              className="text-blue-900 underline"
            >
              comercial@aurolab.com.pe
            </a>
          </p>
          <h3 className="text-2xl font-semibold text-blue-900 flex items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-8 w-8 mr-3 text-blue-900"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 8 10" />
            </svg>
            Horario de Atención
          </h3>
          <ul className="space-y-3 text-base">
            <li>
              <span className="font-medium text-gray-700">Lunes a viernes:</span>{" "}
              9:00 - 18:00
            </li>
            <li>
              <span className="font-medium text-gray-700">Sábado:</span> 9:00 - 13:00
            </li>
            <li>
              <span className="font-medium text-gray-700">Domingo:</span> Cerrado
            </li>
            <li>
              <span className="font-medium text-gray-700">
                Actividades 24/7:
              </span>{" "}
              Algunas actividades que requieren cadena de frío o tienen límite de
              caducidad.
            </li>
          </ul>
        </motion.div>

        {/* Sección de Visítanos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gray-100 p-10 rounded-lg shadow-lg"
        >
          <h3 className="text-3xl font-semibold text-blue-900 mb-6 text-center">Visítanos</h3>
          <p className="text-lg mb-8 text-center">
            Estamos en la Avenida Canadá, entre la calle RosaLuz y la calle Santa
            Rosa. ¡Esperamos verte pronto!
          </p>
          <div className="grid grid-cols-1 gap-6">
            {/* Mapa de Google Maps */}
            <div className="rounded-lg overflow-hidden shadow-md">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.1234567890123!2d-76.9945678!3d-12.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1234567890abcdef%3A0xabcdef1234567890!2sAvenida%20Canad%C3%A1%2C%20Lima!5e0!3m2!1ses!2spe!4v1234567890123"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}