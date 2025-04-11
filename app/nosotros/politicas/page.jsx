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
      icono: "🔬",
      iconColor: "text-blue-500 bg-blue-100",
      tags: ["ISO 17025:2017", "Competencia técnica", "Mejora continua"],
      color: "bg-gradient-to-r from-blue-500 to-blue-600"
    },
    {
      titulo: "Política de Imparcialidad",
      descripcion: "Mantenemos total independencia en nuestros juicios técnicos, garantizando confidencialidad y evitando cualquier conflicto de interés en nuestras evaluaciones.",
      icono: "⚖️",
      iconColor: "text-purple-500 bg-purple-100",
      tags: ["Objetividad", "Confidencialidad", "Ética profesional"],
      color: "bg-gradient-to-r from-purple-500 to-purple-600"
    }
  ];

  return (
    <section className="w-full overflow-x-hidden bg-white ">
      {/* Hero Section con iconos coloridos */}
      <div className="relative w-full h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-gray-900">
        {/* Fondo con transición */}
        <div className="absolute inset-0 transition-opacity duration-1000">
          {heroImages.map((img, index) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
            >
              <Image
                src={img}
                alt="Laboratorio Aurolab"
                fill
                className="object-cover"
                quality={90}
                priority
              />
            </div>
          ))}
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-gray-900/50"></div>

        {/* Contenido Hero */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
  
  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 animate-gradient-x">
                Políticas Científicas
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
            >
              Los principios que garantizan la excelencia en cada análisis
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <a
                href="#politicas"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-medium shadow-lg"
              >
                Ver nuestras políticas
                <span className="ml-2">👇</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Sección de políticas con iconos coloridos */}
      <div id="politicas" className="w-full py-16 md:py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          {/* Encabezado */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros <span className="text-blue-600">Compromisos</span>
            </h2>
            <div className="flex justify-center mb-6">
              <span className="text-2xl mx-2">🔍</span>
              <span className="text-2xl mx-2">📊</span>
              <span className="text-2xl mx-2">🧫</span>
            </div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Los lineamientos que aseguran la calidad e integridad científica
            </p>
          </motion.div>

          {/* Grid de políticas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {politicas.map((politica, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all"
              >
                {/* Cabecera con gradiente */}
                <div className={`h-2 ${politica.color}`}></div>

                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`text-4xl p-3 rounded-lg mr-4 ${politica.iconColor}`}>
                      {politica.icono}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900">{politica.titulo}</h3>
                  </div>

                  <p className="text-gray-700 mb-6 pl-16">
                    {politica.descripcion}
                  </p>

                  <div className="flex flex-wrap gap-2 pl-16">
                    {politica.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Final */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center bg-blue-50 rounded-xl p-8"
          >
            <div className="text-4xl mb-4">📩</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">¿Tienes preguntas?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Nuestro equipo científico está listo para ayudarte
            </p>
            <Link
              href="/contacto"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Contactar
              <span className="ml-2">✉️</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}