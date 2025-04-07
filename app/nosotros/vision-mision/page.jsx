'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NosotrosMisionVision() {
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
      {/* Hero Section - Versión refinada */}
<<<<<<< Updated upstream
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
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-gray-900/80" ></div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Nuestra  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-green-300"> Visión y Misión </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl text-white/90 font-light mb-8"
            >
              "Comprometidos con la excelencia ambiental, guiados por una visión sostenible."
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <a
                href="#visionmision"
                className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-full hover:bg-white/20 transition-all font-medium"
              >
                Conocer más
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div id="visionmision" className="container mx-auto max-w-6xl pt-16">
=======
            <div className="relative w-full h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)' }}>
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
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-gray-900/80" ></div>
              
              <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    Nuestra  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-green-300"> Visión y Misión </span>
                  </h1>
                  
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-xl md:text-2xl text-white/90 font-light mb-8"
                  >
                    "Comprometidos con la excelencia ambiental, guiados por una visión sostenible."
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
                      Conocer más
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </a>
                  </motion.div>
                </motion.div>
              </div>
            </div>
      
      <div className="container mx-auto max-w-6xl pt-16">
>>>>>>> Stashed changes
        {/* Título principal con efecto especial */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 relative"
        >
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-400 to-green-400 rounded-full"></div>
          {/* <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 mb-6">
            Misión y Visión
          </h1> */}
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Los pilares fundamentales que definen nuestro compromiso con la excelencia ambiental
          </p>
        </motion.div>

        {/* Tarjetas premium de Misión y Visión */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-24">
          {/* Tarjeta de Misión con efecto vidrio */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative bg-white/80 backdrop-blur-sm p-10 rounded-2xl shadow-xl border border-white/20 overflow-hidden"
          >
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-100 rounded-full opacity-20"></div>
            <div className="absolute -left-10 -bottom-10 w-60 h-60 bg-blue-200 rounded-full opacity-10"></div>

            <div className="flex items-center mb-8 relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-5 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
                NUESTRA MISIÓN
              </h2>
            </div>

            <ul className="space-y-5 text-gray-700 relative z-10 pl-2">
              {[
                "Somos un grupo humano responsable y comprometido con la sociedad y el medio ambiente",
                "Brindamos resultados confiables y oportunos según requisitos contractuales",
                "Contamos con personal altamente calificado y tecnología de punta",
                "Aseguramiento de calidad y mejora continua en todas nuestras actividades",
                "Cultura de excelencia en nuestros procesos y servicios"
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-start group"
                >
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-3 mt-1 group-hover:bg-blue-200 transition-all">
                    <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-gray-800 font-medium group-hover:text-green-700 transition-colors">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Tarjeta de Visión con efecto vidrio */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative bg-white/80 backdrop-blur-sm p-10 rounded-2xl shadow-xl border border-white/20 overflow-hidden"
          >
            <div className="absolute -left-10 -top-10 w-40 h-40 bg-green-100 rounded-full opacity-20"></div>
            <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-green-200 rounded-full opacity-10"></div>

            <div className="flex items-center mb-8 relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mr-5 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800">
                NUESTRA VISIÓN
              </h2>
            </div>

            <div className="relative z-10">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-gray-700 mb-6 text-lg"
              >
                Ser la empresa peruana mejor posicionada del sector medioambiental, acreditada y reconocida como Laboratorio de Ensayos y Organismo de Inspección con cobertura nacional.
              </motion.p>

              <h3 className="text-lg font-semibold text-green-700 mb-4">Nos comprometemos con:</h3>

              <ul className="space-y-4 pl-2">
                {[
                  "Cultura de excelencia y responsabilidad social",
                  "Mejora continua e innovación tecnológica",
                  "Desarrollo sostenible y prácticas ecoamigables",
                  "Expansión nacional con altos estándares de calidad"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + (0.1 * index) }}
                    className="flex items-start group mb-4" // Añadí mb-4 para más espacio
                  >
                    <span className="flex-shrink-0 w-6 h-6 bg-green-50 rounded-full flex items-center justify-center mr-3 mt-0.5 border-2 border-green-400 group-hover:bg-green-100 transition-all">
                      <span className="w-3 h-3 bg-green-500 rounded-full group-hover:bg-green-600 transition-colors"></span>
                    </span>
                    <span className="text-gray-800 font-medium text-lg group-hover:text-green-600 transition-colors">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Botón premium para descargar PDF */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="text-center"
        >
          <div className="inline-block bg-gradient-to-r from-blue-500 to-green-500 p-0.5 rounded-full shadow-lg hover:shadow-xl transition-shadow">
            <a
              href="/gato_explosion.pdf" // Asegúrate de que el archivo esté en la carpeta "public"
              download="gato_explosion.pdf" // Nombre del archivo al descargar
              className="flex items-center px-8 py-4 bg-white rounded-full text-gray-800 font-medium hover:bg-transparent hover:text-white transition-all duration-300 group"
            >
              <svg
                className="w-6 h-6 mr-3 text-blue-600 group-hover:text-white transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Descargar documento completo
              <svg
                className="w-5 h-5 ml-3 text-green-600 group-hover:text-white transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-4">* Documento oficial en formato PDF</p>
        </motion.div>
      </div>

    </section>
  );
}