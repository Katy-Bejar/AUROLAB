'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Link from 'next/link';

// Elimina la anotación de tipo :Engine y usa JSDoc en su lugar
/**
 * @param {import("tsparticles-engine").Engine} engine
 */
const particlesInit = async (engine) => {
  await loadFull(engine);
};

export default function AnalisisLaboratorio() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });


  return (
    <main className="bg-gray-100 relative">
      {/* Fondo de partículas */}
      <div className="absolute inset-0 z-0">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
              },
              modes: {
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#3b82f6", // Azul similar al tema
              },
              links: {
                color: "#93c5fd", // Azul más claro
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
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