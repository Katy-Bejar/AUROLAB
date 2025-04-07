'use client';

import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

export default function AnalisisLaboratorio() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Configuración para burbujas siempre visibles
  const bubbles = isClient ? Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    size: Math.random() * 80 + 40, // Burbujas grandes (40-120px)
    left: Math.random() * 100,
    top: Math.random() * 100, // Posición vertical aleatoria inicial
    delay: Math.random() * 3,
    duration: Math.random() * 30 + 30, // Movimiento más lento
    opacity: Math.random() * 0.6 + 0.4, // Más opacas (0.4-1.0)
    color: `rgba(${Math.floor(Math.random() * 56 + 150)}, ${Math.floor(Math.random() * 56 + 150)}, 246, 0.6)`, // Azules vibrantes
    direction: Math.random() > 0.5 ? 1 : -1 // Dirección de movimiento
  })) : [];

  // Configuración para moléculas grandes
  const molecules = isClient ? Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    size: Math.random() * 50 + 30, // Moléculas más grandes
    left: Math.random() * 100,
    top: Math.random() * 100,
    rotate: Math.random() * 360,
    delay: Math.random() * 5,
    duration: Math.random() * 40 + 40,
    type: Math.floor(Math.random() * 3),
    opacity: Math.random() * 0.5 + 0.5 // Más visibles
  })) : [];

  // Función para generar moléculas visibles
  const getMoleculeSVG = (type) => {
    const colors = [
      "rgba(59, 130, 246, 0.8)",    // Azul sólido
      "rgba(100, 200, 255, 0.7)",   // Azul claro
      "rgba(30, 100, 200, 0.8)"      // Azul oscuro
    ];
    
    const strokeColors = [
      "rgba(59, 130, 246, 0.6)",
      "rgba(100, 200, 255, 0.5)",
      "rgba(30, 100, 200, 0.6)"
    ];
    
    const color = colors[Math.floor(Math.random() * colors.length)];
    const strokeColor = strokeColors[Math.floor(Math.random() * strokeColors.length)];
    
    switch(type) {
      case 0: // Molécula simple grande
        return (
          <>
            <circle cx="50" cy="50" r="12" fill={color} />
            <circle cx="80" cy="50" r="8" fill={color} />
            <path d="M50 50 L80 50" stroke={strokeColor} strokeWidth="3" />
          </>
        );
      case 1: // Molécula triangular grande
        return (
          <>
            <circle cx="50" cy="30" r="10" fill={color} />
            <circle cx="30" cy="70" r="10" fill={color} />
            <circle cx="70" cy="70" r="10" fill={color} />
            <path d="M50 30 L30 70 L70 70 Z" stroke={strokeColor} strokeWidth="2.5" fill="none" />
          </>
        );
      case 2: // Molécula compleja grande
        return (
          <>
            <circle cx="50" cy="50" r="15" fill={color} />
            <circle cx="30" cy="30" r="7" fill={color} />
            <circle cx="70" cy="30" r="7" fill={color} />
            <circle cx="30" cy="70" r="7" fill={color} />
            <circle cx="70" cy="70" r="7" fill={color} />
            <path d="M50 50 L30 30 M50 50 L70 30 M50 50 L30 70 M50 50 L70 70" 
                  stroke={strokeColor} strokeWidth="2" />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <main className="bg-blue-100 relative overflow-x-hidden min-h-screen">
      {/* Fondo animado MUY visible - solo en cliente */}
      {isClient && (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Capa de degradado azul */}
          <div className="absolute inset-0 bg-gradient-to-b from-blue-200/40 to-blue-100/20" />
          
          {/* Burbujas distribuidas por toda la pantalla */}
          {bubbles.map((bubble) => (
            <motion.div
              key={`bubble-${bubble.id}`}
              className="absolute rounded-full backdrop-blur-sm"
              style={{
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
                left: `${bubble.left}%`,
                top: `${bubble.top}%`,
                opacity: bubble.opacity,
                backgroundColor: bubble.color,
                boxShadow: `0 0 20px ${bubble.color}`
              }}
              animate={{
                top: `${bubble.top + (Math.random() * 20 - 10)}%`,
                left: `${bubble.left + (Math.random() * 10 * bubble.direction)}%`,
                opacity: [bubble.opacity * 0.9, bubble.opacity, bubble.opacity * 0.9],
                scale: [0.95, 1.05, 0.95]
              }}
              transition={{
                duration: bubble.duration,
                delay: bubble.delay,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut'
              }}
            />
          ))}
          
          {/* Moléculas grandes y visibles */}
          {molecules.map((molecule) => (
            <motion.svg
              key={`molecule-${molecule.id}`}
              className="absolute"
              style={{
                width: `${molecule.size}px`,
                height: `${molecule.size}px`,
                left: `${molecule.left}%`,
                top: `${molecule.top}%`,
                rotate: `${molecule.rotate}deg`,
                opacity: molecule.opacity,
                filter: 'drop-shadow(0 0 5px rgba(59, 130, 246, 0.5))'
              }}
              viewBox="0 0 100 100"
              animate={{
                x: [0, (Math.random() * 60 - 30), 0],
                y: [0, (Math.random() * 60 - 30), 0],
                rotate: [molecule.rotate, molecule.rotate + 180, molecule.rotate + 360],
                opacity: [molecule.opacity * 0.8, molecule.opacity, molecule.opacity * 0.8]
              }}
              transition={{
                duration: molecule.duration,
                delay: molecule.delay,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut'
              }}
            >
              {getMoleculeSVG(molecule.type)}
            </motion.svg>
          ))}
        </div>
      )}

      {/* Contenido principal */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div
          className="relative w-full h-[600px] bg-cover bg-center flex items-center justify-center"
          style={{
            backgroundImage: "url(/analisis-lab4.jpg)",
            clipPath: 'polygon(0 0, 100% 0, 100% 90%, 50% 100%, 0 90%)',
          }}
        >
          <div className="absolute inset-0 bg-blue-900/40 backdrop-blur-[1px]"></div>
          <motion.div 
            className="relative text-white text-center px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold drop-shadow-lg mb-6">
              ANÁLISIS DE LABORATORIO
            </h1>
            <p className="text-xl max-w-2xl mx-auto leading-relaxed">
              Servicios especializados en análisis físico-químicos y microbiológicos con los más altos estándares de calidad.
            </p>
          </motion.div>
        </div>

        {/* Sección de Análisis Químicos */}
        <div className="container mx-auto px-4 py-16 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-blue-900">
              ANÁLISIS DE LABORATORIO QUE REALIZAMOS
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Análisis Químico */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group border border-blue-50 hover:border-blue-100"
            >
              <Link href="/analisis/quimico">
                <div className="cursor-pointer">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">
                    ANÁLISIS QUÍMICO
                  </h3>
                  <div className="relative h-32 w-full">
                    <Image
                      src="/icono-quimico.png"
                      alt="Análisis Químico"
                      fill
                      className="object-contain mx-auto transition-all duration-300 group-hover:scale-110"
                      style={{ filter: 'invert(40%) sepia(60%) saturate(500%) hue-rotate(180deg)' }}
                    />
                  </div>
                  <p className="mt-4 text-gray-600">Análisis precisos de parámetros físico-químicos con tecnología de vanguardia</p>
                </div>
              </Link>
            </motion.div>

            {/* Análisis Microbiológico */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group border border-blue-50 hover:border-blue-100"
            >
              <Link href="/analisis/microbiologico">
                <div className="cursor-pointer">
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">
                    ANÁLISIS MICROBIOLÓGICO
                  </h3>
                  <div className="relative h-32 w-full">
                    <Image
                      src="/icono-micro.png"
                      alt="Análisis Microbiológico"
                      fill
                      className="object-contain mx-auto transition-all duration-300 group-hover:scale-110"
                      style={{ filter: 'invert(40%) sepia(60%) saturate(500%) hue-rotate(180deg)' }}
                    />
                  </div>
                  <p className="mt-4 text-gray-600">Detección e identificación de microorganismos con metodologías certificadas</p>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Sección de Análisis Físico-Químico, Microbiológico y Monitoreos Ambientales */}
        <div className="container mx-auto mt-12 px-4 relative z-10" ref={sectionRef}>
          {[
            {
              title: "ANÁLISIS DE LABORATORIO DE PARÁMETROS FÍSICOS-QUÍMICOS",
              description: "Los parámetros acreditados que analizamos son los Sólidos Suspendidos Totales, Sólidos Totales, Sólidos Disueltos Totales, DQO y DBO.",
              image: "/lab-fisico-quimico.jpg",
              date: "9 agosto, 2024",
              link: "#",
            },
            {
              title: "ANÁLISIS DE LABORATORIO DE PARÁMETROS MICROBIOLÓGICOS",
              description: "Como parte de los monitoreos de riesgos biológicos ocupacionales, nosotros le brindamos el servicio de análisis microbiológico de Bacterias, Mohos y Levaduras, Coliformes Totales, Escherichia Coli, Partículas Respirables, Partículas Inhalables.",
              image: "/lab-microbiologico.jpg",
              date: "9 agosto, 2024",
              link: "#",
            },
            {
              title: "MONITOREOS AMBIENTALES",
              description: "Ofrecemos el apoyo con operarios para ejecutar sus monitoreos ambientales sobre el componente agua. Aseguramos muestreos representativos porque contamos con procedimientos acreditados en la materia.",
              image: "/monitoreos-ambientales.jpg",
              date: "18 noviembre, 2024",
              link: "#",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 my-16 bg-white/90 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-blue-50`}
            >
              {/* Imagen */}
              <motion.div
                className="flex-1 w-full overflow-hidden rounded-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-64 md:h-80 w-full">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </motion.div>

              {/* Texto */}
              <div className="flex-1 w-full">
                <h2 className="text-2xl font-bold text-blue-900 mb-4">{item.title}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{item.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{item.date}</span>
                  <a href={item.link} className="text-blue-600 hover:text-blue-800 font-medium flex items-center">
                    Ver Más <span className="ml-1">→</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}