'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NosotrosValores() {
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
    <section className="w-full overflow-x-hidden bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-gray-900">
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
        
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-gray-900/50"></div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 animate-gradient-x">
                Nuestros Valores
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto"
            >
              "En Aurolab, nuestros valores reflejan el compromiso con la calidad, la sostenibilidad y el bienestar colectivo"
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <a
                href="#valores"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-medium shadow-lg"
              >
                Conocer nuestros valores
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Sección de valores */}
      <div id="valores" className="w-full py-16 md:py-24 px-6 bg-white">
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
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                Pilares Fundamentales
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 via-green-400 to-purple-400 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Los principios que guían nuestro trabajo y compromiso con la excelencia
            </p>
          </motion.div>

          {/* Grid de valores */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {[
              {
                title: "Innovación",
                icon: "💡",
                color: "bg-blue-100 text-blue-600",
                description: "Buscamos constantemente nuevas soluciones y mejoras para ofrecer lo mejor a nuestros clientes."
              },
              {
                title: "Integridad",
                icon: "🔍",
                color: "bg-purple-100 text-purple-600",
                description: "Actuamos con honestidad, ética y transparencia en todas nuestras operaciones."
              },
              {
                title: "Excelencia",
                icon: "⭐",
                color: "bg-green-100 text-green-600",
                description: "Nos esforzamos por superar expectativas y entregar resultados de la más alta calidad."
              },
              {
                title: "Compromiso",
                icon: "🤝",
                color: "bg-indigo-100 text-indigo-600",
                description: "Dedicación total a nuestros clientes, colaboradores y el medio ambiente."
              },
              {
                title: "Trabajo en Equipo",
                icon: "👥",
                color: "bg-yellow-100 text-yellow-600",
                description: "Valoramos la colaboración y el respeto mutuo para alcanzar objetivos comunes."
              },
              {
                title: "Responsabilidad Social",
                icon: "🌱",
                color: "bg-teal-100 text-teal-600",
                description: "Contribuimos activamente al desarrollo sostenible de nuestras comunidades."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-all group"
              >
                <div className="p-8">
                  <div className="flex flex-col items-center mb-6">
                    <div className={`text-5xl p-4 rounded-full mb-4 ${value.color} transition-transform group-hover:scale-110`}>
                      {value.icon}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 text-center group-hover:text-blue-600 transition-colors">
                      {value.title}
                    </h3>
                  </div>

                  <p className="text-gray-700 text-center group-hover:text-gray-800 transition-colors">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Final - Versión mejorada */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-8 md:p-10 border border-gray-200"
          >
            <div className="max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Documento Completo de Valores</h3>
              <p className="text-gray-600 mb-6">
                Explora nuestro marco de valores institucionales en detalle
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/nosotros/valores/viewer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all font-medium shadow-md flex-1 max-w-xs mx-auto"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Ver PDF
                </Link>
               
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}