'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

export default function AnalisisQuimico() {
  const heroImages = [
    "/home-fondo1.jpg",
    "/home-fondo2.jpg",
    "/home-fondo3.jpg",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <main className="bg-gray-100">
      {/* Hero dinámico */}
      <div
        className="relative w-full h-[400px] md:h-[450px] flex items-center justify-center overflow-hidden"
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)' }}
      >
        <div className="absolute inset-0">
          <Image
            src={heroImages[currentImageIndex]}
            alt="Fondo Análisis Químico"
            fill
            className="object-cover"
            quality={100}
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-gray-900/80"></div>

        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Análisis Químico
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-4 text-lg md:text-xl"
          >
            Realizamos análisis químicos detallados para diferentes industrias.
          </motion.p>
        </div>
      </div>

      {/* Sección de contenido */}
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

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center"
        >
          {[
            {
              title: 'Agentes químicos salud ocupacional',
              desc: 'Evaluamos agentes químicos en el ambiente laboral para garantizar la seguridad ocupacional.',
              img: '/saludocupasionalagente.jpg',
            },
            {
              title: 'Análisis químicos en aguas',
              desc: 'Realizamos análisis detallados de calidad de agua para diferentes aplicaciones industriales y ambientales.',
              img: '/Analisisenaguas.jpg',
            },
            {
              title: 'Análisis químico – calidad de aire',
              desc: 'Monitoreamos la calidad del aire para cumplir con normativas ambientales y de salud.',
              img: '/Analisis-de-calidad-de-aire.jpg',
            },
          ].map((item, index) => (
            <a
              key={index}
              href="#"
              className="block bg-white p-6 rounded-lg shadow-md hover:ring-3 hover:ring-blue-200 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-blue-900 mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
              <div className="mt-4 flex justify-center">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={360}
                  height={360}
                  className="rounded-lg"
                />
              </div>
            </a>
          ))}
        </motion.div>
      </div>

      <div className="h-12"></div>
    </main>
  );
}
