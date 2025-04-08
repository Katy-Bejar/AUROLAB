'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function AnimatedBackground() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Configuración para burbujas
  const bubbles = isClient ? Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    size: Math.random() * 60 + 30, // Tamaño reducido para mejor rendimiento
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 3,
    duration: Math.random() * 25 + 25,
    opacity: Math.random() * 0.5 + 0.3,
    color: `rgba(${Math.floor(Math.random() * 56 + 150)}, ${Math.floor(Math.random() * 56 + 150)}, 246, 0.5)`,
    direction: Math.random() > 0.5 ? 1 : -1
  })) : [];

  // Configuración para moléculas
  const molecules = isClient ? Array.from({ length: 10 }).map((_, i) => ({
    id: i,
    size: Math.random() * 40 + 20,
    left: Math.random() * 100,
    top: Math.random() * 100,
    rotate: Math.random() * 360,
    delay: Math.random() * 5,
    duration: Math.random() * 30 + 30,
    type: Math.floor(Math.random() * 3),
    opacity: Math.random() * 0.4 + 0.4
  })) : [];

  // Función para generar moléculas
  const getMoleculeSVG = (type) => {
    const colors = ["rgba(59, 130, 246, 0.7)", "rgba(100, 200, 255, 0.6)", "rgba(30, 100, 200, 0.7)"];
    const color = colors[type];
    const strokeColor = color.replace(/[\d\.]+\)$/, '0.5)');

    switch(type) {
      case 0: return (
        <>
          <circle cx="50" cy="50" r="10" fill={color} />
          <circle cx="80" cy="50" r="6" fill={color} />
          <path d="M50 50 L80 50" stroke={strokeColor} strokeWidth="2.5" />
        </>
      );
      case 1: return (
        <>
          <circle cx="50" cy="30" r="8" fill={color} />
          <circle cx="30" cy="70" r="8" fill={color} />
          <circle cx="70" cy="70" r="8" fill={color} />
          <path d="M50 30 L30 70 L70 70 Z" stroke={strokeColor} strokeWidth="2" fill="none" />
        </>
      );
      case 2: return (
        <>
          <circle cx="50" cy="50" r="12" fill={color} />
          <circle cx="30" cy="30" r="5" fill={color} />
          <circle cx="70" cy="30" r="5" fill={color} />
          <circle cx="30" cy="70" r="5" fill={color} />
          <circle cx="70" cy="70" r="5" fill={color} />
          <path d="M50 50 L30 30 M50 50 L70 30 M50 50 L30 70 M50 50 L70 70" 
                stroke={strokeColor} strokeWidth="1.8" />
        </>
      );
      default: return null;
    }
  };

  if (!isClient) return null;

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" 
         style={{ height: 'calc(100vh - [altura-del-footer])' }}>
      {/* Capa de degradado azul */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-200/30 to-blue-100/10" />
      
      {/* Burbujas */}
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
            boxShadow: `0 0 15px ${bubble.color}`
          }}
          animate={{
            top: `${bubble.top + (Math.random() * 15 - 7.5)}%`,
            left: `${bubble.left + (Math.random() * 8 * bubble.direction)}%`,
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
      
      {/* Moléculas */}
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
            filter: 'drop-shadow(0 0 4px rgba(59, 130, 246, 0.4))'
          }}
          viewBox="0 0 100 100"
          animate={{
            x: [0, (Math.random() * 40 - 20), 0],
            y: [0, (Math.random() * 40 - 20), 0],
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
  );
}