'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NosotrosPoliticas() {
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

  const politicas = [
    {
      titulo: "Política de Calidad y Competencia Técnica",
      descripcion: "Implementamos sistemas de gestión que aseguran la excelencia en nuestros servicios analíticos, cumpliendo y superando estándares internacionales con mejora continua.",
      imagen: "/politica-calidad.jpg",
      icono: "🔬",
      tags: ["ISO 17025:2017", "Competencia técnica", "Mejora continua"],
      color: "from-blue-500 to-blue-700"
    },
    {
      titulo: "Política de Imparcialidad y",
      descripcion: "Mantenemos total independencia en nuestros juicios técnicos, garantizando confidencialidad y evitando cualquier conflicto de interés en nuestras evaluaciones.",
      imagen: "/politica-imparcialidad.jpg",
      icono: "⚖️",
      tags: ["Objetividad", "Confidencialidad", "Ética profesional"],
      color: "from-purple-500 to-purple-700"
    }
  ];

  return (
    <section className="w-full overflow-x-hidden bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImages[currentImageIndex]}
            alt="Fondo Políticas Aurolab"
            fill
            className="object-cover transform scale-100 group-hover:scale-105 transition-transform duration-1000 ease-out"
            quality={100}
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-gray-900/80"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Nuestros <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-green-300">Compromisos</span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl text-white/90 font-light mb-8"
            >
              Los principios fundamentales que guían cada una de nuestras acciones y decisiones
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <a
                href="#politicas"
                className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-full hover:bg-white/20 transition-all font-medium"
              >
                Conocer nuestras políticas
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Sección de políticas */}
      <div id="politicas" className="w-full py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          {/* Encabezado */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Políticas Institucionales
            </h2>
            <div className="w-20 h-0.5 bg-gradient-to-r from-blue-500 to-green-500 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Los lineamientos que aseguran la excelencia y ética en nuestros servicios
            </p>
          </motion.div>

          {/* Grid de políticas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {politicas.map((politica, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
              >
                <div className={`h-3 bg-gradient-to-r ${politica.color}`}></div>

                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">{politica.icono}</div>
                    <h3 className="text-2xl font-bold text-gray-900">{politica.titulo}</h3>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {politica.descripcion}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {politica.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">¿Preguntas sobre nuestras políticas?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Estamos disponibles para brindarte la información que necesites.
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-medium"
            >
              Contactar
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7-7m7 7H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}