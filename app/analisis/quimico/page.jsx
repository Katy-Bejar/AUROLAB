'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AnalisisQuimico() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <main className="bg-gray-100">
      {/* Hero Section */}
      <div
        className="relative w-full h-[400px] md:h-[600px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url(/analisis-quimico.jpg)", // Cambia esta imagen por la que desees
          clipPath: 'polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)', // Curva en la parte inferior
        }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-30"></div>
        <div className="relative text-white text-center px-4">
          <h1 className="text-3xl md:text-5xl font-bold drop-shadow-lg">
            ANÁLISIS QUÍMICO
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Realizamos análisis químicos detallados para diferentes industrias.
          </p>
        </div>
      </div>

      {/* Sección de Contenido */}
      <div className="container mx-auto mt-12 px-4" ref={sectionRef}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center p-6 md:p-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900">
            Nuestros Servicios de Análisis Químico
          </h2>
          <p className="mt-4 text-base md:text-lg text-gray-600">
            Ofrecemos una amplia gama de servicios de análisis químico para garantizar la calidad y seguridad de sus productos.
          </p>
        </motion.div>
      </div>
    </main>
  );
}