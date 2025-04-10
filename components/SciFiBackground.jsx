'use client';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function SciFiBackground() {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Configuración de partículas energéticas
  const energyParticles = isClient ? Array.from({ length: 15 }).map((_, i) => ({
    id: i,
    size: Math.random() * 8 + 4,
    x: Math.random() * 100,
    y: Math.random() * 100,
    speed: Math.random() * 0.2 + 0.1,
    color: `hsla(${Math.random() * 60 + 190}, 80%, 60%, ${Math.random() * 0.4 + 0.3})`,
    path: Math.random() > 0.5 ? 'linear' : 'sinusoidal'
  })) : [];

  // Configuración de ondas moleculares
  const molecularWaves = isClient ? Array.from({ length: 5 }).map((_, i) => ({
    id: i,
    size: Math.random() * 300 + 200,
    x: Math.random() * 100,
    y: Math.random() * 100,
    speed: Math.random() * 0.05 + 0.02,
    thickness: Math.random() * 3 + 1
  })) : [];

  // Configuración de circuitos digitales
  const digitalCircuits = isClient ? Array.from({ length: 8 }).map((_, i) => ({
    id: i,
    points: Array.from({ length: Math.floor(Math.random() * 5) + 3 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100
    })),
    speed: Math.random() * 0.3 + 0.1,
    opacity: Math.random() * 0.2 + 0.1
  })) : [];

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Fondo base con gradiente científico */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-blue-800/10 to-cyan-700/15" />
      
      {/* Circuitos digitales animados */}
      {digitalCircuits.map((circuit) => (
        <motion.svg
          key={`circuit-${circuit.id}`}
          className="absolute"
          style={{
            left: `${circuit.points[0].x}%`,
            top: `${circuit.points[0].y}%`,
            opacity: circuit.opacity
          }}
          viewBox="0 0 100 100"
          animate={{
            opacity: [circuit.opacity * 0.5, circuit.opacity, circuit.opacity * 0.5]
          }}
          transition={{
            duration: 2 + Math.random() * 3,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
        >
          <polyline
            points={circuit.points.map(p => `${p.x},${p.y}`).join(' ')}
            fill="none"
            stroke="url(#circuitGradient)"
            strokeWidth="0.5"
            strokeDasharray="2 3"
          />
        </motion.svg>
      ))}

      {/* Ondas moleculares */}
      {molecularWaves.map((wave) => (
        <motion.div
          key={`wave-${wave.id}`}
          className="absolute rounded-full border border-cyan-400/30"
          style={{
            width: `${wave.size}px`,
            height: `${wave.size}px`,
            left: `${wave.x}%`,
            top: `${wave.y}%`,
            borderWidth: `${wave.thickness}px`
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.1, 0.3]
          }}
          transition={{
            duration: 10 + Math.random() * 20,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear'
          }}
        />
      ))}

      {/* Partículas energéticas */}
      {energyParticles.map((particle) => (
        <motion.div
          key={`particle-${particle.id}`}
          className="absolute rounded-full"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            backgroundColor: particle.color,
            boxShadow: `0 0 10px 2px ${particle.color}`
          }}
          animate={{
            x: particle.path === 'linear' 
              ? [`0%`, `${(Math.random() - 0.5) * 20}%`]
              : [0, Math.sin(Date.now() * 0.001) * 10],
            y: particle.path === 'linear' 
              ? [`0%`, `${(Math.random() - 0.5) * 20}%`]
              : [0, Math.cos(Date.now() * 0.001) * 10],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
        />
      ))}

      {/* Efecto de rejilla científica */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="cyan" strokeWidth="0.5" />
          </pattern>
          <linearGradient id="circuitGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="50%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  );
}