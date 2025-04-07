'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";

export default function AnalisisMicrobiologico() {
  const fila1 = [
    {
      title: "Análisis microbiológicos de agua",
      icon: "/icons/microbiologico-agua.png",
    },
    {
      title: "Análisis microbiológicos de lodos (biosólidos)",
      icon: "/icons/microbiologico-lodos.png",
    },
    {
      title: "Análisis de agentes biológicos en el aire",
      icon: "/icons/microbiologico-aire.png",
    },
  ];

  const fila2 = [
    {
      title: "Análisis microbiológicos de superficies",
      icon: "/icons/microbiologico-superficies.png",
    },
    {
      title: "Análisis microbiológicos en alimentos",
      icon: "/icons/microbiologico-alimentos.png",
    },
  ];

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

  return (
    <main className="bg-gray-100">
      {/* Hero Section */}
      <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)' }}>
        <div className="absolute inset-0">
          <Image
            src={heroImages[currentImageIndex]}
            alt="Fondo Análisis Microbiológico"
            fill
            className="object-cover object-center"
            quality={100}
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-gray-900/80"></div>
        <div className="relative text-center text-white px-4 max-w-4xl z-10">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 drop-shadow-lg">
            Análisis Microbiológico
          </h1>
          <p className="text-lg md:text-xl font-light">
            Realizamos análisis microbiológicos especializados para garantizar la calidad y seguridad en diferentes industrias.
          </p>
        </div>
      </div>

      {/* Servicios */}
      <section className="py-16 px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-900">
            Nuestros Servicios de Análisis Microbiológico
          </h2>
          <p className="mt-4 text-gray-700">
            Ofrecemos una amplia gama de servicios de análisis microbiológico para diferentes industrias.
          </p>
        </div>

        {/* Fila 1 */}
        <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto mb-10">
          {fila1.map((servicio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center w-[280px]"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={servicio.icon}
                  alt={servicio.title}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-blue-800">
                {servicio.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Fila 2 */}
        <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
          {fila2.map((servicio, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-center w-[280px]"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={servicio.icon}
                  alt={servicio.title}
                  className="w-16 h-16 object-contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-blue-800">
                {servicio.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
