'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AnalisisLaboratorio() {
  // Referencia para detectar cuándo la sección está en la vista
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <main className="bg-gray-100">
      {/* Hero Section */}
      <div
        className="relative w-full h-[600px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url(/analisis-lab2.jpg)", // Cambia esta imagen por la que desees
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

      {/* Sección de Análisis Físico-Químico, Microbiológico y Monitoreos Ambientales */}
      <div className="container mx-auto mt-12 px-4" ref={sectionRef}>
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
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }} // Estado inicial: invisible y desplazado horizontalmente
            animate={isInView ? { opacity: 1, x: 0 } : {}} // Estado animado: visible y en su posición original
            transition={{ delay: index * 0.3, duration: 0.6, ease: "easeOut" }} // Retraso, duración y suavizado de la animación
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 my-12`}
          >
            {/* Imagen */}
            <motion.div
              className="flex-1 w-full md:w-auto"
              initial={{ opacity: 0, x: index % 2 === 0 ? -200 : 200 }} // Estado inicial: imagen fuera de la pantalla
              animate={isInView ? { opacity: 1, x: 0 } : {}} // Estado animado: imagen en su posición
              transition={{ delay: index * 0.3 + 0.1, duration: 0.6, ease: "easeOut" }} // Retraso adicional para la imagen
            >
              <Image
                src={item.image}
                alt={item.title}
                width={800}
                height={500}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>

            {/* Texto */}
            <motion.div
              className="flex-1 w-full md:w-auto"
              initial={{ opacity: 0, x: index % 2 === 0 ? 200 : -200 }} // Estado inicial: texto fuera de la pantalla
              animate={isInView ? { opacity: 1, x: 0 } : {}} // Estado animado: texto en su posición
              transition={{ delay: index * 0.3 + 0.2, duration: 0.6, ease: "easeOut" }} // Retraso adicional para el texto
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