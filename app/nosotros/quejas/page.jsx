'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NosotrosQuejas() {
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
              Flujograma de  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-green-300"> Atención a Quejas  </span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl text-white/90 font-light mb-8"
            >
              Conozca nuestro proceso formal para la gestión de quejas y reclamos
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

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 py-16 max-w-6xl">
        {/* Compromiso Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestro <span className="text-blue-600">Compromiso</span>
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 text-xl max-w-3xl mx-auto">
              En AuroLab contamos con un procedimiento establecido para atender sus quejas, garantizando:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Respuesta oportuna",
                description: "Dentro de los plazos establecidos por normativa",
                icon: "⏱️"
              },
              {
                title: "Confidencialidad",
                description: "Trato profesional y manejo confidencial de su información",
                icon: "🔒"
              },
              {
                title: "Seguimiento completo",
                description: "Acompañamiento hasta la resolución final",
                icon: "📈"
              },
              {
                title: "Mejora continua",
                description: "Sus comentarios nos ayudan a mejorar nuestros servicios",
                icon: "🔄"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all"
              >
                <div className="p-6">
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Flujograma Section - Actualizado según la imagen */}
        <motion.div
          id="flujograma"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
          className="mb-20 bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100 shadow-sm"
        >
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                <span className="text-blue-600">Proceso de</span> Atención
              </h2>
              <div className="w-20 h-1 bg-blue-600 mb-6"></div>
              <p className="text-gray-700 mb-6 text-lg leading-relaxed">
                Nuestro flujograma de atención a quejas sigue un proceso claro y estructurado:
              </p>

              {/* Proceso actualizado según la imagen */}
              <div className="relative">
                {/* Línea vertical */}
                <div className="absolute left-6 top-0 h-full w-0.5 bg-blue-400"></div>

                {/* Pasos del proceso */}
                <div className="space-y-8 pl-10">
                  {/* Paso 1: Queja */}
                  <div className="relative">
                    <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                      1
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <h3 className="font-bold text-lg text-blue-800">QUEJA</h3>
                      <p className="text-gray-700">Inicio del proceso</p>
                    </div>
                  </div>

                  {/* Paso 2: Recepción */}
                  <div className="relative">
                    <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                      2
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <h3 className="font-bold text-lg text-blue-800">RECEPCIÓN</h3>
                      <p className="text-gray-700">Registro y acuse de recibo</p>
                    </div>
                  </div>

                  {/* Paso 3: Evaluación */}
                  <div className="relative">
                    <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                      3
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <h3 className="font-bold text-lg text-blue-800">EVALUACIÓN</h3>
                      <p className="text-gray-700">Revisión de la queja y análisis</p>
                    </div>
                  </div>

                  {/* Paso 4: Investigación */}
                  <div className="relative">
                    <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                      4
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <h3 className="font-bold text-lg text-blue-800">INVESTIGACIÓN</h3>
                      <p className="text-gray-700">Indagación de los hechos</p>
                    </div>
                  </div>

                  {/* Paso 5: Respuesta */}
                  <div className="relative">
                    <div className="absolute -left-10 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold">
                      5
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                      <h3 className="font-bold text-lg text-blue-800">RESPUESTA</h3>
                      <p className="text-gray-700">Comunicación de la decisión</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a
                  href="/documentos/flujograma-quejas.pdf"
                  download="Flujograma-de-Quejas-AuroLab.pdf"
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all shadow-md font-medium text-lg"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                  Descargar PDF
                </a>
                <a
                  href="#contacto"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 border border-blue-200 rounded-full hover:bg-blue-50 transition-all font-medium text-lg"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                  Contactar
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 bg-white p-6 rounded-xl shadow-md border border-gray-100">
              <div className="relative h-[45rem] w-full">
                <Image
                  src="/nosotros/flujograma.png"
                  alt="Vista previa del flujograma de quejas"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-center text-gray-500 mt-4 text-sm">
                Vista previa del proceso de atención a quejas
              </p>
            </div>
          </div>
        </motion.div>

        {/* Contacto Section */}
        <motion.div
          id="contacto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
            <h2 className="text-2xl md:text-3xl font-bold">
              ¿Cómo presentar una queja o reclamo?
            </h2>
            <p className="opacity-90 mt-2">
              Contamos con múltiples canales para atender sus requerimientos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            {/* Teléfono */}
            <div className="p-8 group hover:bg-blue-50 transition-colors">
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-100 p-4 rounded-full mb-4 group-hover:bg-white transition-colors">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Por teléfono</h3>
                <p className="text-gray-600 mb-4">
                  Línea directa de atención
                </p>
                <a
                  href="tel:011234567"
                  className="text-blue-600 font-medium text-lg hover:text-blue-800 transition-colors"
                >
                  (01) 123-4567
                </a>
                <p className="text-sm text-gray-500 mt-2">
                  Lunes a Viernes: 8:00 am - 6:00 pm
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="p-8 group hover:bg-blue-50 transition-colors">
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-100 p-4 rounded-full mb-4 group-hover:bg-white transition-colors">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Por correo electrónico</h3>
                <p className="text-gray-600 mb-4">
                  Envíe todos los detalles de su caso
                </p>
                <a
                  href="mailto:quejas@aurolab.com.pe"
                  className="text-blue-600 font-medium text-lg hover:text-blue-800 transition-colors"
                >
                  quejas@aurolab.com.pe
                </a>
                <p className="text-sm text-gray-500 mt-2">
                  Respuesta en 24-48 horas hábiles
                </p>
              </div>
            </div>

            {/* Presencial */}
            <div className="p-8 group hover:bg-blue-50 transition-colors">
              <div className="flex flex-col items-center text-center">
                <div className="bg-blue-100 p-4 rounded-full mb-4 group-hover:bg-white transition-colors">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Presencialmente</h3>
                <p className="text-gray-600 mb-4">
                  Visite nuestras oficinas principales
                </p>
                <p className="text-gray-800 font-medium">
                  Av. Ejemplo 123, Lima
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Con cita previa
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}