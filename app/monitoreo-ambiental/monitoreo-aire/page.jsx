"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import MolecularBackground from '@/components/MolecularBackground';

export default function MonitoreoAire() {
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
      <MolecularBackground />
      {/* Hero dinámico con curva y superposición */}
      <div className="relative w-full h-[75vh] flex items-center justify-center overflow-hidden" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)' }}>
        <div className="absolute inset-0">
          <Image
            src={heroImages[currentImageIndex]}
            alt="Fondo Monitoreo Aire"
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
            Monitoreo de Calidad de Aire
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl md:text-2xl mb-8"
          >
            Medimos la calidad del aire para un entorno más limpio y saludable.
          </motion.p>
        </div>
      </div>

      {/* Descripción */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/monitoreo-calidad-aire.jpg"
              alt="Captadores de aire en operación"
              width={600}
              height={400}
              className="rounded-lg shadow-lg hover:shadow-blue-300 transition-shadow duration-300"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-blue-800 mb-6">¿Por qué monitorear el aire?</h2>
            <p className="text-lg mb-4">
              El monitoreo de aire es esencial para identificar riesgos a la salud pública,
              cumplir con regulaciones ambientales y reducir impactos negativos en el ambiente.
            </p>
            <ul className="list-disc pl-6 text-blue-900 space-y-2">
              <li>Detección de gases contaminantes como SO₂, NO₂, CO, O₃</li>
              <li>Control de material particulado (PM10, PM2.5)</li>
              <li>Evaluación de compuestos orgánicos volátiles (COVs)</li>
              <li>Cumplimiento de normativas ECA y LMP</li>
              <li>Prevención de enfermedades respiratorias</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Parámetros monitoreados */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
            Parámetros que Monitoreamos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              "Material particulado: PM10, PM2.5, PTS",
              "Gases contaminantes: SO₂, NO₂, CO, O₃, H₂S",
              "Compuestos Orgánicos Volátiles (COVs)",
              "Metales pesados en aire: Pb, Hg",
              "Hidrocarburos totales y fraccionados",
              "Evaluación de emisiones en fuentes fijas",
              "Barrido de metales (ICP-MS, ICP-OES)",
              "Medición de olores y compuestos reducidos"
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-blue-300 hover:shadow-2xl border-l-4 border-blue-400 hover:border-blue-600 transition duration-300 transform hover:scale-105 group"
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

      {/* CTA final */}
      <section className="bg-blue-800 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">¿Necesitas monitoreo de calidad del aire?</h2>
        <p className="text-lg mb-6">Contáctanos para una evaluación precisa y confiable</p>
        <button className="bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition duration-300">
          Solicitar evaluación
        </button>
      </section>
    </section>
  );
}