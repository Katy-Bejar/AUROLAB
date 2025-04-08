'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import AnimatedBackground from '@/components/AnimatedBackground';

export default function AnalisisLaboratorio() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <main className="bg-blue-100 relative overflow-x-hidden">
      {/* Fondo animado */}
      <AnimatedBackground />

      {/* Contenido principal */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div
          className="relative w-full h-[600px] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: "url(/analisis-lab4.jpg)",
            clipPath: 'polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)',
          }}
        >
          <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-[1px]"></div>
          <motion.div 
            className="relative text-white text-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold drop-shadow-lg mb-6">
              ANÁLISIS DE LABORATORIO
            </h1>
            <p className="text-xl max-w-2xl mx-auto leading-relaxed">
              Servicios especializados en análisis físico-químicos y microbiológicos con los más altos estándares de calidad.
            </p>
          </motion.div>
        </div>

        {/* Sección de Análisis Químicos */}
        <div className="container mx-auto px-4 py-16 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-blue-900">
              ANÁLISIS DE LABORATORIO QUE REALIZAMOS
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Análisis Químico */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group border border-blue-50 hover:border-blue-100"
            >
              <Link href="/analisis/quimico">
                <div className="cursor-pointer">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">
                    ANÁLISIS QUÍMICO
                  </h3>
                  <div className="relative h-32 w-full">
                    <Image
                      src="/icono-quimico.png"
                      alt="Análisis Químico"
                      fill
                      className="object-contain mx-auto transition-all duration-300 group-hover:scale-110"
                      style={{ filter: 'invert(40%) sepia(60%) saturate(500%) hue-rotate(180deg)' }}
                    />
                  </div>
                  <p className="mt-4 text-gray-600">Análisis precisos de parámetros físico-químicos con tecnología de vanguardia</p>
                </div>
              </Link>
            </motion.div>

            {/* Análisis Microbiológico */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group border border-blue-50 hover:border-blue-100"
            >
              <Link href="/analisis/microbiologico">
                <div className="cursor-pointer">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">
                    ANÁLISIS MICROBIOLÓGICO
                  </h3>
                  <div className="relative h-32 w-full">
                    <Image
                      src="/icono-micro.png"
                      alt="Análisis Microbiológico"
                      fill
                      className="object-contain mx-auto transition-all duration-300 group-hover:scale-110"
                      style={{ filter: 'invert(40%) sepia(60%) saturate(500%) hue-rotate(180deg)' }}
                    />
                  </div>
                  <p className="mt-4 text-gray-600">Detección e identificación de microorganismos con metodologías certificadas</p>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Sección de Análisis Físico-Químico, Microbiológico y Monitoreos Ambientales */}
        <div className="container mx-auto mt-12 px-4 relative z-10" ref={sectionRef}>
          {[
            {
              title: "ANÁLISIS DE LABORATORIO DE PARÁMETROS FÍSICOS-QUÍMICOS",
              description: "Los parámetros acreditados que analizamos son los Sólidos Suspendidos Totales, Sólidos Totales, Sólidos Disueltos Totales, DQO y DBO.",
              image: "/lab-fisico-quimico.jpg",
              date: "9 agosto, 2024",
              link: "#",
            },
            {
              title: "ANÁLISIS DE LABORATORIO DE PARÁMETROS MICROBIOLÓGICOS",
              description: "Como parte de los monitoreos de riesgos biológicos ocupacionales, nosotros le brindamos el servicio de análisis microbiológico de Bacterias, Mohos y Levaduras, Coliformes Totales, Escherichia Coli, Partículas Respirables, Partículas Inhalables.",
              image: "/lab-microbiologico.jpg",
              date: "9 agosto, 2024",
              link: "#",
            },
            {
              title: "MONITOREOS AMBIENTALES",
              description: "Ofrecemos el apoyo con operarios para ejecutar sus monitoreos ambientales sobre el componente agua. Aseguramos muestreos representativos porque contamos con procedimientos acreditados en la materia.",
              image: "/monitoreos-ambientales.jpg",
              date: "18 noviembre, 2024",
              link: "#",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 my-16 bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-blue-50`}
            >
              {/* Imagen */}
              <motion.div
                className="flex-1 w-full overflow-hidden rounded-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-64 md:h-80 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </motion.div>

              {/* Texto */}
              <div className="flex-1 w-full">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">{item.title}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{item.date}</span>
                  <a href={item.link} className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                    Ver Más <span className="ml-1">→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}