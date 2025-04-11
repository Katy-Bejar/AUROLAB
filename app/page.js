'use client';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';
import MolecularBackground from '@/components/MolecularBackground';

export default function Home() {
  const serviciosRef = useRef(null);
  const isInView = useInView(serviciosRef, { once: true, margin: "-100px" });

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
    <div className="overflow-x-hidden">
      <MolecularBackground />
      {/* Hero Section */}
      <div
        className="relative w-full h-[350px] md:h-[650px] lg:h-[900px] bg-cover bg-center flex items-center justify-center transition-all duration-1000"
        style={{
          backgroundImage: `url(${heroImages[currentImageIndex]})`,
          clipPath: 'polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)',
        }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-40 transition duration-500"></div>
        <div className="relative text-white text-center px-4 w-full max-w-full mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg"
          >
            BIENVENIDO A AUROLAB
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Link href="/contacto" className="inline-block">
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
          </motion.div>
        </div>
      </div>
      {/* Servicios - Versión Laboratorio con fondo alternativo */}
      <div className="w-full max-w-7xl mx-auto mt-12 md:mt-20 px-4">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-white rounded-xl shadow-md p-6 border-2 border-blue-200 overflow-hidden"
        >
          {/* Nuevo fondo científico alternativo */}
          <div className="absolute inset-0 opacity-[15%] bg-blue-50">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <pattern
                id="hexagon-pattern"
                width="120"
                height="104"
                patternUnits="userSpaceOnUse"
              >
                {/* Estructura molecular hexagonal */}
                <path
                  d="M30 0L90 0L120 52L90 104L30 104L0 52Z"
                  stroke="#3b82f6"
                  strokeWidth="1.2"
                  fill="none"
                  strokeOpacity="0.6"
                />
                {/* Puntos en los vértices */}
                <circle cx="30" cy="0" r="2.5" fill="#3b82f6" fillOpacity="0.5" />
                <circle cx="90" cy="0" r="2.5" fill="#3b82f6" fillOpacity="0.5" />
                <circle cx="120" cy="52" r="2.5" fill="#3b82f6" fillOpacity="0.5" />
                <circle cx="90" cy="104" r="2.5" fill="#3b82f6" fillOpacity="0.5" />
                <circle cx="30" cy="104" r="2.5" fill="#3b82f6" fillOpacity="0.5" />
                <circle cx="0" cy="52" r="2.5" fill="#3b82f6" fillOpacity="0.5" />

                {/* Elementos de laboratorio abstractos */}
                {/* Pipeta */}
                <path
                  d="M40 20L40 40M35 40L45 40"
                  stroke="#60a5fa"
                  strokeWidth="1.5"
                  strokeOpacity="0.7"
                />
                {/* Matraz Erlenmeyer */}
                <path
                  d="M100 60Q95 80 110 80Q115 60 100 60Z"
                  stroke="#60a5fa"
                  strokeWidth="1.2"
                  strokeOpacity="0.6"
                  fill="none"
                />
                {/* Líneas de conexión molecular */}
                <line x1="60" y1="30" x2="80" y2="30" stroke="#93c5fd" strokeWidth="1" strokeOpacity="0.5" />
                <line x1="70" y1="20" x2="70" y2="40" stroke="#93c5fd" strokeWidth="1" strokeOpacity="0.5" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#hexagon-pattern)" />
            </svg>
          </div>

          <div className="relative z-10">
            <h2 className="text-center text-2xl md:text-3xl font-bold text-blue-800 uppercase mb-8 relative">
              <span className="relative inline-block bg-white/90 px-4 py-2 rounded-lg shadow-sm">
                Atención a Nivel Nacional
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-500 rounded-full"></span>
              </span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
              {[
                {
                  title: "Monitoreo Ambiental",
                  description: "Evaluación de propiedades químicas y físicas en muestras.",
                  image: "/fisicoquimico.jpg",
                  button: "→ Ver más información",
                  href: "/monitoreo-ambiental",
                  borderColor: "border-blue-300 hover:border-blue-400",
                  bgColor: "from-blue-50/90",
                  icon: (
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M12 2v4M5 10l2 2m10-2l-2 2M3 17h18M8 22h8M7 14h10v6a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2v-6z" />
                    </svg>
                  )
                },
                {
                  title: "Monitoreo Ocupacional",
                  description: "Detección de microorganismos en diversas muestras.",
                  image: "/microbiologico.jpg",
                  button: "→ Ver más información",
                  href: "/monitoreo-ambiental/monitoreo-ocupacional",
                  borderColor: "border-green-300 hover:border-green-400",
                  bgColor: "from-green-50/90",
                  icon: (
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  )
                },
                {
                  title: "Análisis de Laboratorio",
                  description: "Control y evaluación de calidad ambiental.",
                  image: "/monitoreo.jpg",
                  button: "→ Ver más información",
                  href: "/analisis",
                  borderColor: "border-indigo-300 hover:border-indigo-400",
                  bgColor: "from-indigo-50/90",
                  icon: (
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                    </svg>
                  )
                },
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:-translate-y-1 hover:shadow-xl border-2 ${service.borderColor}`}
                >
                  <div className="relative h-60 md:h-72 group">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-all duration-300 group-hover:brightness-90"
                      priority={index < 2}
                    />
                    {/* Efecto hover científico más marcado */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${service.bgColor} to-transparent opacity-0 group-hover:opacity-100 transition duration-500 backdrop-blur-[1px]`}></div>
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
                  <div className="p-5 text-center bg-white/95 backdrop-blur-[3px]">
                    <div className="flex justify-center mb-3">
                      <div className="p-3 rounded-full bg-blue-100/90 text-blue-700 shadow-sm">
                        {service.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">{service.title}</h3>
                    <p className="text-gray-700 mb-4 text-sm md:text-base">{service.description}</p>
                    <Link href={service.href}>
                      <span className="inline-flex items-center px-4 py-2 text-blue-800 border border-blue-200 rounded-lg hover:bg-blue-700 hover:text-white transition-all font-medium hover:border-blue-700 hover:scale-[1.02] gap-2">
                        {service.button}
                      </span>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>


      {/* Acreditaciones - Versión con fondo más notorio */}
      <div className="w-full max-w-7xl mx-auto mt-20 md:mt-28 px-4">
        <motion.div
          ref={serviciosRef}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-white rounded-xl shadow-md p-8 border-2 border-blue-200 overflow-hidden"
        >
          {/* Fondo científico más visible */}
          <div className="absolute inset-0 opacity-15 bg-blue-50"> {/* Aumenté la opacidad y agregué fondo base */}
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <pattern
                id="lab-pattern-improved"
                width="80"
                height="80"
                patternUnits="userSpaceOnUse"
              >
                {/* Tubo de ensayo con trazo más grueso */}
                <path
                  d="M20 20h8v30h-3v-10h-5z"
                  stroke="#2563eb"
                  strokeWidth="1.5"
                  fill="none"
                />
                {/* Molécula más destacada */}
                <circle cx="60" cy="30" r="5" fill="#2563eb" fillOpacity="0.7" />
                <line x1="60" y1="20" x2="60" y2="40" stroke="#2563eb" strokeWidth="1.5" />
                <line x1="50" y1="30" x2="70" y2="30" stroke="#2563eb" strokeWidth="1.5" />
                {/* Gotas/líquido más visibles */}
                <path
                  d="M40 60q5-5 10 0"
                  stroke="#2563eb"
                  strokeWidth="2"
                  fill="none"
                />
                <circle cx="45" cy="55" r="3" fill="#2563eb" fillOpacity="0.8" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#lab-pattern-improved)" />
            </svg>
          </div>

          <div className="relative z-10">
            <h2 className="text-center text-2xl md:text-3xl font-bold text-blue-800 uppercase mb-10 relative">
              <span className="relative inline-block bg-white/80 px-4 py-2 rounded-lg">
                ACREDITACIONES
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-blue-500 rounded-full"></span>
              </span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 justify-items-center">
              {[
                {
                  src: '/inacal.png',
                  alt: 'INACAL',
                  width: 280,
                  height: 280,
                  bgColor: "bg-blue-50/80 backdrop-blur-[2px]"  // Aumenté la opacidad aquí también
                },
                {
                  src: '/ias.png',
                  alt: 'IAS',
                  width: 380,
                  height: 380,
                  bgColor: "bg-blue-100/80 backdrop-blur-[2px]"  // Aumenté la opacidad
                },
                {
                  src: '/iso.png',
                  alt: 'ISO 17025',
                  width: 130,
                  height: 130,
                  bgColor: "bg-blue-50/80 backdrop-blur-[2px]"  // Aumenté la opacidad
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex flex-col items-center w-full"
                >
                  <div className={`w-full p-5 ${item.bgColor} rounded-lg shadow-sm hover:shadow-md transition-all duration-300 border border-blue-200 hover:border-blue-300`}>
                    <div className="relative w-full h-40 flex items-center justify-center p-2">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={item.width}
                        height={item.height}
                        className="object-contain w-full h-full"
                        priority={index === 0}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <Link href="/acreditaciones">
                <button className="px-6 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  <span>Ver acreditaciones completas</span>
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
      <br></br><br></br>
    </div>
  );
}