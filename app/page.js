'use client';
import AnimatedBackground from '@/components/AnimatedBackground';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

export default function Home() {
  const serviciosRef = useRef(null);
  const isInView = useInView(serviciosRef, { once: true, margin: "-100px" });

  // Array de imágenes para el slider
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
    }, 5000); // Cambia cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-gray-100 overflow-x-hidden">
      {/* Hero Section con cambio automático */}
      <div
        className="relative w-full h-[400px] md:h-[600px] lg:h-[900px] bg-cover bg-center flex items-center justify-center transition-all duration-1000"
        style={{
          backgroundImage: `url(${heroImages[currentImageIndex]})`,
          clipPath: 'polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)',
        }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-30 transition duration-500"></div>
        <div className="relative text-white text-center px-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-lg">
            BIENVENIDO A AUROLAB
          </h1>
          <Link href="/contacto">
            <button className="mt-6 mx-auto px-4 py-2 md:px-6 md:py-3 bg-white text-blue-900 font-bold rounded-lg shadow-md hover:bg-blue-600 hover:text-white transition flex justify-center items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-test-tube-diagonal-icon"
              >
                <path d="M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3" />
                <path d="m16 2 6 6" />
                <path d="M12 16H4" />
              </svg>
              <span>Quiero ver más información</span>
            </button>
          </Link>
        </div>
      </div>
  

      {/* Servicios */}
      <div className="container mx-auto mt-12 px-4 bg-white/80 backdrop-blur-sm rounded-lg">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-blue-700 uppercase">
          Atención a Nivel Nacional
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
          {[
            {
              title: "Monitoreo Ambiental",
              description: "Evaluación de propiedades químicas y físicas en muestras.",
              image: "/fisicoquimico.jpg",
              button: "→ Ver más información",
              href: "/monitoreo-ambiental",
            },
            {
              title: "Monitoreo Ocupacional",
              description: "Detección de microorganismos en diversas muestras.",
              image: "/microbiologico.jpg",
              button: "→ Ver más información",
              href: "/monitoreo-ambiental/monitoreo-ocupacional",
            },
            {
              title: "Analisis de Laboratorio",
              description: "Control y evaluación de calidad ambiental.",
              image: "/monitoreo.jpg",
              button: "→ Ver más información",
              href: "/analisis",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={400}
                  height={300}
                  className="w-full h-[200px] md:h-[300px] object-cover"
                />
                <div className="absolute inset-0 bg-blue-900 opacity-0 hover:opacity-40 transition duration-300"></div>
                <svg
                  className="absolute bottom-0 left-0 w-full"
                  viewBox="0 0 500 50"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0,50 C150,0 350,0 500,50 L500,50 L0,50 Z"
                    className="fill-white"
                  ></path>
                </svg>
              </div>
              <div className="p-4 md:p-6 text-center">
                <h3 className="text-lg md:text-xl font-bold text-blue-900">{service.title}</h3>
                <p className="text-sm md:text-base text-gray-600 mt-2">{service.description}</p>
                <Link href={service.href}>
                  <span className="mt-4 inline-block px-3 py-1 md:px-4 md:py-2 text-blue-900 border border-blue-900 rounded-lg hover:bg-blue-900 hover:text-white transition">
                    {service.button}
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sección Adicional */}
      <div className="max-w-6xl mx-auto p-4 md:p-6 text-center mt-16 bg-white/80 backdrop-blur-sm rounded-lg" ref={serviciosRef}>
        <h2 className="text-center text-2xl md:text-3xl font-bold text-blue-700 uppercase mb-8">
          ACREDITACIONES
        </h2>

        {/* Grilla de logos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-20 gap-x-12 justify-items-center">
          {[
            { src: '/inacal.png', alt: 'INACAL', description: '', width: 280, height: 280 },
            { src: '/ias.png', alt: 'IAS', description: '', width: 380, height: 380 },
            { src: '/iso.png', alt: 'ISO 17025', description: '', width: 130, height: 130 },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col items-center text-center space-y-4"
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={item.width}
                height={item.height}
                className="object-contain"
              />
              <p className="text-lg font-semibold text-gray-800">{item.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Botón centrado */}
        <div className="mt-12 flex justify-center">
          <Link href="/acreditaciones">
            <button className="px-4 py-2 md:px-6 md:py-3 bg-blue-700 text-white font-bold rounded-lg shadow-md hover:bg-green-600 hover:shadow-lg transition-all">
              Quiero ver más información
            </button>
          </Link>
        </div>
      </div>

    </main>
  );
}
