'use client';
import { motion } from "framer-motion";
import Image from "next/image";

export default function PresentacionAurolab() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-white">
      {/* Hero section con imagen de fondo */}
      <div className="relative h-[60vh] w-full"
      style={{ clipPath: 'polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)' }}>
        <Image
          src="/home-fondo3.jpg" // Imagen del laboratorio o equipo de trabajo
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
            Soluciones integrales en análisis ambiental y ocupacional
          </motion.p>
        </div>
      </div>

      {/* Introducción sobre la empresa */}
      <div className="bg-white py-12 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg md:text-xl text-gray-700 leading-relaxed"
          >
            <strong>AUROLABORATORIO E INGENIERÍA S.A.C.</strong> En AuroLaboratorio brindamos soluciones especializadas en muestreo, monitoreo y análisis ambiental y ocupacional, adaptadas a las necesidades del sector industrial, minero, energético, agroindustrial y más.
          </motion.p>
        </div>
      </div>


      {/* Sección descriptiva */}
      <div className="relative bg-white py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          {/* Sección de Apoyo y Servicios */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-20"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Columna de Apoyo */}
              <div className="bg-blue-50 rounded-xl p-8 border border-blue-100">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Nuestro Apoyo</h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Contamos con un sistema logístico y procedimientos acreditados para atender sus consultas, planificar y ejecutar el servicio, aplicando medidas preventivas y de atención de contingencias que garantizan resultados confiables.
                </p>
              </div>

              {/* Columna de Oferta */}
              <div className="bg-green-50 rounded-xl p-8 border border-green-100">
                <div className="flex items-center mb-6">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Lo que Ofrecemos</h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Canales de comunicación que permiten una atención rápida. Precios competitivos de accesibilidad al cliente. Servicios de soporte para asegurarle un monitoreo eficiente.
                </p>
                <ul className="space-y-3">
                  {[
                    "Respuesta rápida a consultas",
                    "Precios competitivos",
                    "Soporte técnico especializado",
                    "Monitoreo eficiente",
                    "Resultados confiables"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Equipo grupal */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestro <span className="text-blue-600">Equipo</span></h2>
              <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Nuestro personal está constituido por un grupo de especialistas en materia ambiental con experiencia en análisis de laboratorio para brindar un servicio de calidad.
              </p>
            </div>

            {/* Galería del equipo grupal */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
              {[
                {
                  name: "Juan Pérez",
                  role: "Especialista en Análisis Químico",
                  image: "/perfil-trabajador.png"
                },
                {
                  name: "María López",
                  role: "Ingeniera Ambiental",
                  image: "/perfil-trabajador.png"
                },
                {
                  name: "Carlos Gómez",
                  role: "Técnico en Monitoreo",
                  image: "/perfil-trabajador.png"
                },
                {
                  name: "Ana Torres",
                  role: "Coordinadora de Proyectos",
                  image: "/perfil-trabajador.png"
                },
                {
                  name: "Luis Fernández",
                  role: "Especialista en Seguridad Ocupacional",
                  image: "/perfil-trabajador.png"
                },
                {
                  name: "Sofía Ramírez",
                  role: "Analista de Calidad",
                  image: "/perfil-trabajador.png"
                },
                {
                  name: "Pedro Castillo",
                  role: "Ingeniero Químico",
                  image: "/perfil-trabajador.png"
                },
                {
                  name: "Laura Vega",
                  role: "Especialista en Gestión Ambiental",
                  image: "/perfil-trabajador.png"
                }
              ].map((person, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="relative w-full h-48">
                    <Image
                      src={person.image}
                      alt={person.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-bold text-gray-900">{person.name}</h3>
                    <p className="text-gray-600">{person.role}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Especialidades del equipo */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {[
                {
                  title: "Experiencia Técnica",
                  description: "Profesionales con amplia trayectoria en análisis de laboratorio",
                  icon: "🔬"
                },
                {
                  title: "Enfoque Ambiental",
                  description: "Especialización en materia ambiental y ocupacional",
                  icon: "🌿"
                },
                {
                  title: "Trabajo en Equipo",
                  description: "Colaboración multidisciplinaria para soluciones integrales",
                  icon: "👥"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
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
            className="bg-gradient-to-r from-blue-600 to-green-500 rounded-xl p-10 text-center text-white shadow-xl"
          >
            <h3 className="text-2xl font-bold mb-4">Confíe en Expertos Ambientales</h3>
            <p className="text-lg max-w-3xl mx-auto mb-6">
              En Aurolab combinamos experiencia técnica con compromiso ambiental para ofrecer resultados confiables que cumplan con los más altos estándares de calidad.
            </p>
            <a
              href="/contacto" // Ruta de la página de contacto
              className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Contactar a Nuestro Equipo
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}