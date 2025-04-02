'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';

export default function AnalisisLaboratorio() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <main className="bg-gray-100 relative overflow-x-hidden">
      {/* Nuevo fondo de ondas dinámicas */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="relative w-full h-full">
          {/* Primera capa de ondas */}
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-blue-50 opacity-70">
            <svg 
              viewBox="0 0 1200 120" 
              preserveAspectRatio="none" 
              className="absolute top-0 left-0 w-full h-full"
            >
              <path 
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
                opacity=".25" 
                className="fill-blue-100"
              ></path>
              <path 
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
                opacity=".5" 
                className="fill-blue-200"
              ></path>
              <path 
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
                className="fill-blue-300"
              ></path>
            </svg>
          </div>
          
          {/* Segunda capa de ondas (animada) */}
          <motion.div 
            className="absolute bottom-0 left-0 w-full h-1/2 bg-blue-100 opacity-30"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%'],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%233b82f6\' fill-opacity=\'0.2\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
              backgroundSize: '300px 300px',
            }}
          />
        </div>
      </div>

      {/* Hero Section */}
      <div
        className="relative w-full h-[600px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url(/analisis-lab4.jpg)",
          clipPath: 'polygon(0 0, 100% 0, 100% 95%, 70% 100%, 0 95%)',
        }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-30"></div>
        <div className="relative text-white text-center">
          <h1 className="text-5xl font-bold drop-shadow-lg">
            ANÁLISIS DE LABORATORIO
          </h1>
          <p className="mt-4 text-xl">
            Servicios especializados en análisis físico-químicos y microbiológicos.
          </p>
        </div>
      </div>

      {/* Sección de Análisis Químicos */}
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900">
            ANÁLISIS DE LABORATORIO QUE REALIZAMOS
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Análisis Químico */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
          >
            <Link href="/analisis/quimico">
              <div className="cursor-pointer">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">
                  ANÁLISIS QUÍMICO
                </h3>
                <Image
                  src="/icono-quimico.png"
                  alt="Análisis Químico"
                  width={100}
                  height={100}
                  className="mx-auto filter grayscale brightness-50 hover:grayscale-0 hover:brightness-100 hover:invert-[60%] sepia-[70%] saturate-[500%] hue-rotate-[120deg] transition-all duration-300"
                />
              </div>
            </Link>
          </motion.div>

          {/* Análisis Microbiológico */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
          >
            <Link href="/analisis/microbiologico">
              <div className="cursor-pointer">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">
                  ANÁLISIS MICROBIOLÓGICO
                </h3>
                <Image
                  src="/icono-micro.png"
                  alt="Análisis Microbiológico"
                  width={100}
                  height={100}
                  className="mx-auto filter grayscale brightness-50 hover:grayscale-0 hover:brightness-100 hover:invert-[60%] sepia-[70%] saturate-[500%] hue-rotate-[120deg] transition-all duration-300"
                />
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
            description:
              "Los parámetros acreditados que analizamos son los Sólidos Suspendidos Totales, Sólidos Totales, Sólidos Disueltos Totales, DQO y DBO.",
            image: "/lab-fisico-quimico.jpg",
            date: "9 agosto, 2024",
            link: "#",
          },
          {
            title: "ANÁLISIS DE LABORATORIO DE PARÁMETROS MICROBIOLÓGICOS",
            description:
              "Como parte de los monitoreos de riesgos biológicos ocupacionales, nosotros le brindamos el servicio de análisis microbiológico de Bacterias, Mohos y Levaduras, Coliformes Totales, Escherichia Coli, Partículas Respirables, Partículas Inhalables.",
            image: "/lab-microbiologico.jpg",
            date: "9 agosto, 2024",
            link: "#",
          },
          {
            title: "MONITOREOS AMBIENTALES",
            description:
              "Ofrecemos el apoyo con operarios para ejecutar sus monitoreos ambientales sobre el componente agua. Aseguramos muestreos representativos porque contamos con procedimientos acreditados en la materia.",
            image: "/monitoreos-ambientales.jpg",
            date: "18 noviembre, 2024",
            link: "#",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: index * 0.2, duration: 0.6, ease: "easeOut" }}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 my-12`}
          >
            {/* Imagen con efecto de hover */}
            <motion.div
              className="flex-1 w-full md:w-auto overflow-hidden rounded-lg shadow-lg"
              initial={{ opacity: 0, x: index % 2 === 0 ? -200 : 200 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2 + 0.1, duration: 0.05, ease: "easeOut" }}
              whileHover={{ scale: 1.03 }}
            >
              <motion.div
                className="w-full h-full"
                whileHover={{ filter: "brightness(0.8)" }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={800}
                  height={500}
                  className="w-full h-auto rounded-lg"
                />
              </motion.div>
            </motion.div>

            {/* Texto */}
            <motion.div
              className="flex-1 w-full md:w-auto"
              initial={{ opacity: 0, x: index % 2 === 0 ? 200 : -200 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2 + 0.2, duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="text-2xl font-bold text-blue-900">{item.title}</h2>
              <p className="text-gray-600 mt-4">{item.description}</p>
              <div className="mt-4 text-sm text-gray-500">
                <span>{item.date}</span>
                <a href={item.link} className="ml-4 text-blue-600 hover:text-blue-800">Ver Más »</a>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}