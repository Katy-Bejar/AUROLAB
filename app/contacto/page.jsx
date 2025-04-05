'use client';
import { motion } from "framer-motion";

export default function Contacto() {
  return (
    <div className="bg-gray-100 text-gray-800 min-h-screen flex flex-col items-center justify-center px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl w-full">
        
        {/* Sección de texto */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center px-2"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Solicita una Cotización
          </h1>
          <p className="text-base text-gray-700 mb-3 leading-relaxed">
            En <span className="font-semibold text-blue-900">AUROLAB</span>, estamos comprometidos en ofrecerte soluciones personalizadas para tus necesidades. Completa el formulario con tus datos y los detalles del servicio que necesitas.
          </p>
          <p className="text-base text-gray-700 leading-relaxed">
            Nuestro equipo de especialistas se pondrá en contacto contigo lo antes posible para brindarte la mejor atención y asesoramiento.
          </p>
          <p className="text-base text-gray-700 mt-4">
            <span className="font-semibold text-blue-900">¿Tienes dudas?</span> No dudes en escribirnos, estamos aquí para ayudarte.
          </p>

          {/* Mapa */}
          <div className="mt-8">
            <h2 className="text-xl font-bold text-blue-900 mb-3">Estamos en</h2>
            <div className="w-full h-56 rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.835434509374!2d-122.4194154846815!3d37.77492977975962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f0b1b1b1%3A0x2b0b1b1b1b1b1b1b!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1616161616161!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
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
          className="bg-white p-6 md:p-8 rounded-xl shadow-lg"
        >
          <form className="space-y-4 text-sm">
            {[
              { id: "fullName", label: "Nombres y Apellidos", placeholder: "Ingresa tus nombres y apellidos", type: "text" },
              { id: "company", label: "Empresa", placeholder: "Ingresa el nombre de tu empresa", type: "text" },
              { id: "position", label: "Cargo", placeholder: "Ingresa tu cargo", type: "text" },
              { id: "ruc", label: "RUC", placeholder: "Ingresa el RUC de tu empresa", type: "text" },
              { id: "phone", label: "Celular de Contacto", placeholder: "Ingresa tu número de celular", type: "tel" },
              { id: "email", label: "Correo Electrónico", placeholder: "Ingresa tu correo electrónico", type: "email" },
            ].map(({ id, label, placeholder, type }) => (
              <div key={id}>
                <label htmlFor={id} className="block font-medium text-gray-700">
                  {label}
                </label>
                <input
                  type={type}
                  id={id}
                  name={id}
                  placeholder={placeholder}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            ))}

            {/* Servicios */}
            <div>
              <label htmlFor="services" className="block font-medium text-gray-700">
                ¿Qué servicios necesitas?
              </label>
              <select
                id="services"
                name="services"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              >
                <option value="">Seleccionar</option>
                <option value="analisis-ambiental">Análisis Ambientales</option>
                <option value="asesoria-tecnica">Asesoría Técnica</option>
                <option value="capacitaciones">Capacitaciones</option>
                <option value="gestion-contingengencias">Gestión de Contingencias</option>
                <option value="monitoreo-ocupacional">Monitoreo Ocupacional</option>
                <option value="planificacion-logistica">Planificación Logística</option>
              </select>
            </div>

            {/* Información Referencial */}
            <div>
              <label htmlFor="referenceInfo" className="block font-medium text-gray-700">
                Información Referencial del Servicio
              </label>
              <textarea
                id="referenceInfo"
                name="referenceInfo"
                rows={3}
                placeholder="Escribe información adicional sobre el servicio que necesitas"
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              ></textarea>
            </div>

            {/* Botón de envío */}
            <div className="text-center pt-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md shadow hover:bg-blue-700 transition-all duration-300 text-sm"
              >
                Quiero una Cotización
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
