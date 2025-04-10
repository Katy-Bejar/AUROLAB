'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import DynamicLabBackground from "@/components/DynamicLabBackground";
import { FaFlask, FaMicroscope, FaWater, FaChartLine, FaCertificate, FaArrowRight } from 'react-icons/fa';

export default function AnalisisLaboratorio() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <main className="bg-gradient-to-b from-blue-50 to-white relative overflow-x-hidden min-h-screen">
      {/* Contenido principal */}
      <div className="relative z-10">
        {/* Hero Section - Mejorado para mobile */}
        <section
          className="relative w-full h-[70vh] min-h-[500px] max-h-[800px] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: "linear-gradient(rgba(30, 70, 130, 0.5), rgba(30, 70, 130, 0.5)), url(/analisis-lab4.jpg)",
            clipPath: 'polygon(0 0, 100% 0, 100% 90%, 50% 97%, 0 90%)',
          }}
        >
          <motion.div 
            className="relative text-white text-center px-6 max-w-6xl"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.2 } }
            }}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white"
              variants={fadeInUp}
            >
              ANÁLISIS DE LABORATORIO
            </motion.h1>
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8"
              variants={fadeInUp}
            >
              Servicios especializados en análisis físico-químicos y microbiológicos con los más altos estándares de calidad.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link 
                href="#servicios" 
                className="inline-block px-6 py-2 sm:px-8 sm:py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Nuestros Servicios
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            className="absolute bottom-8 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </motion.div>
        </section>

        {/* Sección de servicios destacados */}
        <section id="servicios" className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-3 sm:mb-4">
              SERVICIOS DE LABORATORIO
            </h2>
            <div className="w-20 sm:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mt-3 sm:mt-4 rounded-full"></div>
            <p className="mt-4 sm:mt-6 text-gray-600 max-w-3xl mx-auto text-base sm:text-lg">
              Ofrecemos análisis confiables y precisos con tecnología de vanguardia y personal altamente calificado.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {/* Análisis Químico */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group border border-blue-50 hover:border-blue-100"
            >
              <Link href="/analisis/quimico">
                <div className="cursor-pointer text-center">
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <div className="p-3 sm:p-4 bg-blue-50 rounded-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      <FaFlask className="text-2xl sm:text-3xl" />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-blue-800 mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors">
                    ANÁLISIS QUÍMICO
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">Evaluación precisa de parámetros físico-químicos en muestras ambientales.</p>
                  <ul className="text-left text-sm sm:text-base text-gray-500 space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full mt-1.5 sm:mt-2 mr-2 flex-shrink-0"></span>
                      Sólidos suspendidos totales
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full mt-1.5 sm:mt-2 mr-2 flex-shrink-0"></span>
                      DQO y DBO
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full mt-1.5 sm:mt-2 mr-2 flex-shrink-0"></span>
                      Metales pesados
                    </li>
                  </ul>
                  <span className="inline-flex items-center mt-2 sm:mt-4 text-blue-600 font-medium group-hover:text-blue-800 transition-colors text-sm sm:text-base">
                    Ver detalles <FaArrowRight className="ml-1 sm:ml-2 text-sm" />
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Análisis Microbiológico */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group border border-blue-50 hover:border-blue-100"
            >
              <Link href="/analisis/microbiologico">
                <div className="cursor-pointer text-center">
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <div className="p-3 sm:p-4 bg-blue-50 rounded-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      <FaMicroscope className="text-2xl sm:text-3xl" />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-blue-800 mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors">
                    ANÁLISIS MICROBIOLÓGICO
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">Detección e identificación de microorganismos con metodologías certificadas.</p>
                  <ul className="text-left text-sm sm:text-base text-gray-500 space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full mt-1.5 sm:mt-2 mr-2 flex-shrink-0"></span>
                      Bacterias y hongos
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full mt-1.5 sm:mt-2 mr-2 flex-shrink-0"></span>
                      Coliformes totales
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full mt-1.5 sm:mt-2 mr-2 flex-shrink-0"></span>
                      E. coli
                    </li>
                  </ul>
                  <span className="inline-flex items-center mt-2 sm:mt-4 text-blue-600 font-medium group-hover:text-blue-800 transition-colors text-sm sm:text-base">
                    Ver detalles <FaArrowRight className="ml-1 sm:ml-2 text-sm" />
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Monitoreos */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5 }}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group border border-blue-50 hover:border-blue-100"
            >
              <Link href="/monitoreo-ambiental">
                <div className="cursor-pointer text-center">
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <div className="p-3 sm:p-4 bg-blue-50 rounded-full text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                      <FaWater className="text-2xl sm:text-3xl" />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-blue-800 mb-3 sm:mb-4 group-hover:text-blue-600 transition-colors">
                    MONITOREO AMBIENTAL
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">Muestreos representativos con procedimientos acreditados para análisis de agua.</p>
                  <ul className="text-left text-sm sm:text-base text-gray-500 space-y-1 sm:space-y-2 mb-4 sm:mb-6">
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full mt-1.5 sm:mt-2 mr-2 flex-shrink-0"></span>
                      Muestreo profesional
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full mt-1.5 sm:mt-2 mr-2 flex-shrink-0"></span>
                      Cadena de custodia
                    </li>
                    <li className="flex items-start">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full mt-1.5 sm:mt-2 mr-2 flex-shrink-0"></span>
                      Informes detallados
                    </li>
                  </ul>
                  <span className="inline-flex items-center mt-2 sm:mt-4 text-blue-600 font-medium group-hover:text-blue-800 transition-colors text-sm sm:text-base">
                    Ver detalles <FaArrowRight className="ml-1 sm:ml-2 text-sm" />
                  </span>
                </div>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Sección de características */}
        <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-12 sm:py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-3 sm:mb-4">
                ¿POR QUÉ ELEGIRNOS?
              </h2>
              <div className="w-20 sm:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mt-3 sm:mt-4 rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: <FaCertificate className="text-3xl sm:text-4xl text-blue-600" />,
                  title: "Acreditación",
                  description: "Laboratorio acreditado bajo la norma ISO/IEC 17025"
                },
                {
                  icon: <FaChartLine className="text-3xl sm:text-4xl text-blue-600" />,
                  title: "Precisión",
                  description: "Resultados confiables con equipos de última generación"
                },
                {
                  icon: <FaFlask className="text-3xl sm:text-4xl text-blue-600" />,
                  title: "Experiencia",
                  description: "Más de 15 años de experiencia en análisis ambientales"
                },
                {
                  icon: <FaMicroscope className="text-3xl sm:text-4xl text-blue-600" />,
                  title: "Rapidez",
                  description: "Tiempos de respuesta competitivos sin sacrificar calidad"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="bg-white p-6 sm:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow text-center"
                >
                  <div className="mb-3 sm:mb-4">{item.icon}</div>
                  <h3 className="text-lg sm:text-xl font-bold text-blue-800 mb-2 sm:mb-3">{item.title}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sección de Análisis detallados */}
        <section className="container mx-auto mt-8 sm:mt-12 px-4 sm:px-6 py-12 sm:py-16 relative z-10" ref={sectionRef}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-3 sm:mb-4">
              NUESTROS ANÁLISIS
            </h2>
            <div className="w-20 sm:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mt-3 sm:mt-4 rounded-full"></div>
            <p className="mt-4 sm:mt-6 text-gray-600 max-w-3xl mx-auto text-base sm:text-lg">
              Conoce en detalle los servicios de análisis que ofrecemos en nuestro laboratorio.
            </p>
          </motion.div>

          {[
            {
              title: "ANÁLISIS DE PARÁMETROS FÍSICOS-QUÍMICOS",
              description: "Los parámetros acreditados que analizamos son los Sólidos Suspendidos Totales, Sólidos Totales, Sólidos Disueltos Totales, DQO y DBO. Utilizamos metodologías estandarizadas y equipos de alta precisión para garantizar resultados confiables.",
              image: "/lab-fisico-quimico.jpg",
              features: [
                "Equipos de última generación",
                "Métodos estandarizados EPA, APHA",
                "Control de calidad riguroso",
                "Informes detallados"
              ]
            },
            {
              title: "ANÁLISIS DE PARÁMETROS MICROBIOLÓGICOS",
              description: "Como parte de los monitoreos de riesgos biológicos ocupacionales, nosotros le brindamos el servicio de análisis microbiológico de Bacterias, Mohos y Levaduras, Coliformes Totales, Escherichia Coli, Partículas Respirables, Partículas Inhalables.",
              image: "/lab-microbiologico.jpg",
              features: [
                "Salas limpias certificadas",
                "Medios de cultivo controlados",
                "Identificación molecular",
                "Protocolos de bioseguridad"
              ]
            },
            {
              title: "MONITOREOS AMBIENTALES",
              description: "Ofrecemos el apoyo con operarios para ejecutar sus monitoreos ambientales sobre el componente agua. Aseguramos muestreos representativos porque contamos con procedimientos acreditados en la materia y cadena de custodia documentada.",
              image: "/monitoreos-ambientales.jpg",
              features: [
                "Personal certificado",
                "Equipos de muestreo calibrados",
                "Cadena de custodia",
                "Transporte adecuado de muestras"
              ]
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-50px" }}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-6 sm:gap-8 my-10 sm:my-16 bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-blue-50 overflow-hidden`}
            >
              {/* Imagen */}
              <motion.div
                className="flex-1 w-full overflow-hidden rounded-lg sm:rounded-xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-56 sm:h-64 md:h-80 lg:h-96 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded-lg sm:rounded-xl"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={index === 0}
                  />
                </div>
              </motion.div>

              {/* Texto */}
              <div className="flex-1 w-full p-3 sm:p-4 md:p-6">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 mb-3 sm:mb-4">{item.title}</h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">{item.description}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                  {item.features.map((feature, i) => (
                    <div key={i} className="flex items-start">
                      <div className="flex-shrink-0 mt-1 sm:mt-1.5">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </div>
                      <p className="ml-2 text-sm sm:text-base text-gray-700">{feature}</p>
                    </div>
                  ))}
                </div>
                
                <div className="text-center">
                  <Link 
                    href="#" 
                    className="inline-block px-4 sm:px-6 py-2 sm:py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-sm sm:shadow-md text-sm sm:text-base"
                  >
                    Solicitar Servicio
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-800 to-blue-600 py-12 sm:py-16 text-white">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">¿Listo para comenzar?</h2>
              <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-6 sm:mb-8">Contáctenos hoy mismo para obtener más información sobre nuestros servicios de análisis de laboratorio.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <Link 
                  href="/contacto" 
                  className="px-6 sm:px-8 py-2 sm:py-3 bg-white text-blue-700 rounded-lg font-medium hover:bg-blue-50 transition-all duration-300 shadow-sm sm:shadow-md text-sm sm:text-base"
                >
                  Contáctenos
                </Link>
                <Link 
                  href="/servicios" 
                  className="px-6 sm:px-8 py-2 sm:py-3 border border-white text-white rounded-lg font-medium hover:bg-white hover:text-blue-700 transition-all duration-300 text-sm sm:text-base"
                >
                  Ver Todos los Servicios
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </main>
  );
}