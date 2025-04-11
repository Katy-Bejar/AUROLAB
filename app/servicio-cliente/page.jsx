'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import { FaWhatsapp, FaEnvelope, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import MolecularBackground from '@/components/MolecularBackground';

export default function ServicioCliente() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <MolecularBackground />
      <div className="max-w-6xl mx-auto">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              SERVICIO AL CLIENTE
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estamos aquí para atenderte y brindarte el mejor servicio
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Sección izquierda - Contacto */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="p-8 md:p-10">
              {/* Recepción de muestras */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <FaMapMarkerAlt className="text-blue-500 mr-3" />
                  Recepción de Muestra
                </h2>
                <div className="bg-blue-50 rounded-lg p-6 mb-6">
                  <p className="text-gray-800 mb-4">
                    <strong>Dirección:</strong> Avenida Canadá, entre la calle Rosaluz y la calle Santa Rosa
                  </p>
                  <button className="inline-flex items-center px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    <FaMapMarkerAlt className="mr-2" />
                    Ver en mapa
                  </button>
                </div>
                <p className="text-gray-600 mb-4">
                  <strong>¡Esperamos verte pronto!</strong>
                </p>
              </div>

              {/* Contacto inmediato */}
              <div className="mb-10">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Contacto inmediato</h3>
                <a 
                  href="https://wa.me/51941678446" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-5 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors mb-4"
                >
                  <FaWhatsapp className="text-xl mr-2" />
                  WhatsApp: 941 678 446
                </a>
                <p className="text-sm text-gray-500">
                  Horario de respuesta: Lunes a Viernes 8:00-18:00
                </p>
              </div>

              {/* Solicitud de cotización */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Solicitud de cotización</h3>
                <a 
                  href="mailto:comercial@aurolab.com.pe" 
                  className="inline-flex items-center px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors mb-4"
                >
                  <FaEnvelope className="mr-2" />
                  comercial@aurolab.com.pe
                </a>
                <p className="text-gray-600">
                  Envíanos tus requerimientos y te responderemos a la brevedad
                </p>
              </div>
            </div>
          </motion.div>

          {/* Sección derecha - Horario y Mapa */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Horario de atención */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-8 md:p-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <FaClock className="text-blue-500 mr-3" />
                  Horario de Atención
                </h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Lunes a Viernes</span>
                    <span className="text-gray-900">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between py-3 border-b border-gray-100">
                    <span className="text-gray-700 font-medium">Sábado</span>
                    <span className="text-gray-900">9:00 - 13:00</span>
                  </div>
                  <div className="flex justify-between py-3">
                    <span className="text-gray-700 font-medium">Domingo</span>
                    <span className="text-gray-900">Cerrado</span>
                  </div>
                </div>

                <div className="mt-6 bg-blue-50 rounded-lg p-4">
                  <p className="text-blue-800">
                    <strong>Servicio 24/7:</strong> Para muestras que requieran cadena de frío o tengan límite de caducidad
                  </p>
                </div>
              </div>
            </div>

            {/* Mapa */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Ubicación</h3>
                
                {/* Contenedor del mapa */}
                <div className="relative h-64 md:h-80 w-full rounded-lg overflow-hidden mb-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.23456789!2d-77.0123456!3d-12.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDA3JzI0LjQiUzc3wrAwMCczOC4xIlc!5e0!3m2!1ses!2spe!4v1234567890123!5m2!1ses!2spe"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                {/* Puntos de referencia */}
                <div className="mt-4">
                  <h4 className="font-medium text-gray-900 mb-2">Puntos de referencia cercanos:</h4>
                  <ul className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                    {[
                      "Parque Rosa Luz",
                      "Notar Imperial",
                      "Mol Imperial Puente Piedra",
                      "Parque Vista Alegre",
                      "Visita Alegre",
                      "CORPORACION PACINGENIEROS",
                      "Mirago Sant",
                      "Oficiales Olivos"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-4 h-4 text-blue-500 mr-1 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}