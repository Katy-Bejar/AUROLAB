'use client';
import { motion } from "framer-motion";
import Image from "next/image";

export default function PresentacionAurolab() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* Hero section con imagen de fondo */}
      <div className="relative h-[60vh] w-full">
        <Image
          src="/home-fondo3.jpg" // Reemplaza con imagen de tu laboratorio
          alt="Laboratorios Aurolab"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/30 to-transparent"></div>
        
        {/* Título superpuesto */}
        <div className="absolute bottom-0 left-0 right-0 pb-20 px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-white mb-4"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">AUROLAB</span>ORATORIO E INGENIERIA SAC
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl text-blue-100 max-w-3xl mx-auto"
          >
            Excelencia científica al servicio del desarrollo industrial y ambiental
          </motion.p>
        </div>
      </div>

      {/* Sección descriptiva */}
      <div className="relative bg-white py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Tarjeta flotante con descripción */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-white shadow-2xl rounded-xl p-10 -mt-32 mb-20 border border-gray-100"
          >
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></div>
            
            <div className="prose prose-lg max-w-4xl mx-auto text-gray-700">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
                Soluciones Integrales en <span className="text-blue-600">Análisis Ambientales</span>
              </h2>
              
              <p className="text-xl leading-relaxed mb-6">
                En <strong>Aurolaboratorio e Ingeniería SAC</strong>, nos especializamos en la prestación de servicios de muestreo, monitoreo y ensayos de muestras ambientales y ocupacionales, brindando soporte técnico-científico a los diversos sectores productivos del Perú.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-4">Nuestros Servicios</h3>
                  <ul className="space-y-3">
                    {[
                      "Muestreo ambiental y ocupacional",
                      "Análisis fisicoquímicos y microbiológicos",
                      "Monitoreo de calidad de aire, agua y suelo",
                      "Asesoría técnica especializada",
                      "Desarrollo de protocolos de muestreo"
                    ].map((service, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-4">Sectores que Atendemos</h3>
                  <ul className="space-y-3">
                    {[
                      "Minero Metalúrgico",
                      "Hidrocarburos y Energía",
                      "Agroindustrial",
                      "Pesquero y Acuícola",
                      "Manufactura e Industria",
                      "Construcción e Infraestructura"
                    ].map((sector, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{sector}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Equipo directivo con diseño elegante */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Liderazgo con <span className="text-blue-600">Experiencia</span></h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Conoce al equipo que dirige nuestra organización hacia la excelencia técnica
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sancho Velásquez Ancani",
                  position: "Director General",
                  expertise: "Más de 20 años en gestión de laboratorios",
                  image: "/images/equipo/director-general.jpg"
                },
                {
                  name: "Julia Coronel Delgado",
                  position: "Directora Técnica",
                  expertise: "Especialista en análisis ambientales",
                  image: "/images/equipo/directora-tecnica.jpg"
                },
                {
                  name: "Alex Depaz Ramos",
                  position: "Gerente de Operaciones",
                  expertise: "Experto en sistemas de calidad",
                  image: "/images/equipo/gerente-operaciones.jpg"
                }
              ].map((person, index) => (
                <div key={index} className="group relative overflow-hidden rounded-xl">
                  <div className="relative h-80 overflow-hidden">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent flex items-end p-6">
                    <div className="text-left">
                      <h3 className="text-white text-xl font-bold">{person.name}</h3>
                      <p className="text-blue-300 font-medium">{person.position}</p>
                      <p className="text-blue-100 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {person.expertise}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Mensaje final */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-r from-blue-600 to-green-500 rounded-xl p-10 text-center text-white"
          >
            <h3 className="text-2xl font-bold mb-4">Comprometidos con la Calidad y el Medio Ambiente</h3>
            <p className="text-lg max-w-3xl mx-auto mb-6">
              En Aurolab combinamos tecnología avanzada con talento humano especializado para ofrecer resultados confiables que cumplan con los más altos estándares internacionales.
            </p>
            <button className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg">
              Contactar a Nuestros Especialistas
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}