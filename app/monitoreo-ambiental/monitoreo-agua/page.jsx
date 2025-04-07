"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function MonitoreoAgua() {
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
    <section className="bg-white text-gray-800">
      {/* Hero con fondo dinámico */}
      <div className="relative w-full h-[75vh] flex items-center justify-center overflow-hidden" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)' }}>
        <div className="absolute inset-0">
          <Image
            src={heroImages[currentImageIndex]}
            alt="Fondo Monitoreo Agua"
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
            Monitoreo de calidad de agua
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl md:text-2xl mb-8"
          >
            Garantizando la pureza y seguridad del recurso más vital para la vida.
          </motion.p>
        </div>
      </div>

      {/* Información destacada */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/monitoreo-agua.jpg"
              alt="Equipo tomando muestras de agua"
              width={600}
              height={400}
              className="rounded-lg shadow-lg hover:shadow-blue-300 transition-shadow duration-300"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-blue-800 mb-6">¿Por qué monitorear el agua?</h2>
            <p className="text-lg mb-4">
              El monitoreo de agua es fundamental para garantizar su uso seguro en consumo humano,
              actividades industriales, recreativas y agrícolas. Evaluamos parámetros clave
              según los estándares de calidad ambiental y normativa vigente.
            </p>
            <ul className="list-disc pl-6 text-blue-900 space-y-2">
              <li>Detección de contaminantes químicos, físicos y biológicos</li>
              <li>Protección de cuerpos de agua naturales y subterráneos</li>
              <li>Cumplimiento de los Límites Máximos Permisibles (LMP)</li>
              <li>Evaluación de impacto ambiental en proyectos y operaciones</li>
              <li>Contribución al desarrollo sostenible y salud pública</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Servicios específicos */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
            Parámetros que Monitoreamos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {["pH, Conductividad, Temperatura, OD, Salinidad",
              "Caudal, Cloro libre y total",
              "Análisis microbiológico y parasitológico",
              "Metales totales y disueltos (arsénico, plomo, mercurio)",
              "Aniones y cationes (nitratos, sulfatos, calcio, magnesio)",
              "TPH (hidrocarburos totales del petróleo)",
              "Pesticidas, fenoles, COVs, BTEX, PAHs, PCBs",
              "Evaluación hidrobiológica y calidad ecológica del agua"].map((item, i) => (
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

      {/* CTA */}
      <section className="bg-blue-800 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">¿Necesitas monitorear tu fuente de agua?</h2>
        <p className="text-lg mb-6">Contáctanos para un análisis detallado y confiable</p>
        <button className="bg-white text-blue-800 px-6 py-3 rounded-lg font-semibold hover:bg-blue-100 transition duration-300">
          Solicitar evaluación
        </button>
      </section>
    </section>
  );
}