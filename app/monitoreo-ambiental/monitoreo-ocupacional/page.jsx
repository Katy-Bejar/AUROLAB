"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import MolecularBackground from '@/components/MolecularBackground';

export default function MonitoreoOcupacional() {
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
    <section className="text-gray-800">
      <MolecularBackground/>
      {/* Hero con fondo dinámico */}
      <div className="relative w-full h-[75vh] flex items-center justify-center overflow-hidden" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)' }}>
        <div className="absolute inset-0">
          <Image
            src={heroImages[currentImageIndex]}
            alt="Fondo Monitoreo Ocupacional"
            fill
            className="object-cover object-center"
            quality={100}
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-gray-900/80"></div>
        <div className="relative z-10 text-center text-white px-6 max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Monitoreo Ocupacional
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl md:text-2xl mb-8"
          >
            Protegiendo la salud de los trabajadores en su entorno laboral.
          </motion.p>
        </div>
      </div>

      {/* Descripción */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/ocupacional.jpg"
              alt="Medición ocupacional en industria"
              width={600}
              height={400}
              className="rounded-lg shadow-lg hover:shadow-blue-300 transition-shadow duration-300"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-blue-800 mb-6">¿Por qué realizar monitoreo ocupacional?</h2>
            <p className="text-lg mb-4">
              El monitoreo ocupacional permite evaluar la exposición de los trabajadores a agentes físicos, químicos y biológicos en el ambiente laboral.
              Es clave para prevenir enfermedades profesionales y garantizar condiciones seguras.
            </p>
            <ul className="list-disc pl-6 text-blue-900 space-y-2">
              <li>Evaluación de ruido, iluminación y temperatura</li>
              <li>Medición de agentes químicos (vapores, gases, partículas)</li>
              <li>Detección de radiaciones ionizantes y no ionizantes</li>
              <li>Cumplimiento del Reglamento de Seguridad y Salud en el Trabajo</li>
              <li>Protección legal y médica del trabajador</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Parámetros monitoreados */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
            Parámetros que Evaluamos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {["Ruido ocupacional (dBA, dosimetría por jornada)",
              "Iluminación (lux) en áreas de trabajo",
              "Temperatura, humedad, velocidad del aire",
              "Medición de sustancias químicas en el aire",
              "Partículas respirables, neblinas, humos",
              "Radiación UV y EMF (frecuencia ocupacional)",
              "Monitoreo biológico de exposición (plomo, mercurio)",
              "Condiciones ergonómicas y vibraciones"].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-blue-300 hover:shadow-2xl border-l-4 border-blue-500 hover:border-blue-600 transition duration-300 transform hover:scale-105 group"
              >
                <p className="text-blue-900 font-medium group-hover:text-blue-800 transition-colors duration-300 flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-500 group-hover:text-blue-700 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-800 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">¿Necesitas una evaluación ocupacional en tu empresa?</h2>
        <p className="text-lg mb-6">Contáctanos para un monitoreo especializado y normativo</p>
        <button className="bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition duration-300">
          Solicitar evaluación
        </button>
      </section>
    </section>
  );
}
