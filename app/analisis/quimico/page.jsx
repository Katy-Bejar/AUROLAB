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

        {/* Subapartados */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center"
        >
          {/* Subapartado 1 */}
          <a
            href="#"
            className="block bg-white p-6 rounded-lg shadow-md hover:ring-3 hover:ring-blue-200 hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-blue-900 mb-4">
              Agentes químicos salud ocupacional
            </h3>
            <p className="text-gray-600">
              Evaluamos agentes químicos en el ambiente laboral para garantizar la seguridad ocupacional.
            </p>
            <div className="mt-4 flex justify-center">
              <Image
                src="/saludocupasionalagente.jpg"
                alt="Agentes químicos salud ocupacional"
                width={330}
                height={330}
                className="rounded-lg"
              />
            </div>
          </a>

          {/* Subapartado 2 */}
          <a
            href="#"
            className="block bg-white p-6 rounded-lg shadow-md hover:ring-3 hover:ring-blue-200 hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-blue-900 mb-4">
              Análisis químicos en aguas
            </h3>
            <p className="text-gray-600">
              Realizamos análisis detallados de calidad de agua para diferentes aplicaciones industriales y ambientales.
            </p>
            <div className="mt-4 flex justify-center">
              <Image
                src="/Analisisenaguas.jpg"
                alt="Análisis químicos en aguas"
                width={370}
                height={370}
                className="rounded-lg"
              />
            </div>
          </a>

          {/* Subapartado 3 */}
          <a
            href="#"
            className="block bg-white p-6 rounded-lg shadow-md hover:ring-3 hover:ring-blue-200 hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-blue-900 mb-4">
              Análisis químico – calidad de aire
            </h3>
            <p className="text-gray-600">
              Monitoreamos la calidad del aire para cumplir con normativas ambientales y de salud.
            </p>
            <div className="mt-4 flex justify-center">
              <Image
                src="/Analisis-de-calidad-de-aire.jpg"
                alt="Análisis químico – calidad de aire"
                width={450}
                height={450}
                className="rounded-lg"
              />
            </div>
          </a>
        </motion.div>
      </div>

      {/* Espacio adicional al final */}
      <div className="h-12"></div>
    </main>
  );
}