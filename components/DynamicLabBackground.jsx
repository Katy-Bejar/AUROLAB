'use client';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useRef, useMemo, useState } from 'react';

function Particle({ particle, mouseX, mouseY }) {
  const x = useTransform(mouseX, [0, 100], [particle.x - 10, particle.x + 10]);
  const y = useTransform(mouseY, [0, 100], [particle.y - 10, particle.y + 10]);

  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: `${particle.size}px`,
        height: `${particle.size}px`,
        x,
        y,
        left: `${particle.x}%`,
        top: `${particle.y}%`,
        backgroundColor: particle.color,
        boxShadow: `0 0 15px ${particle.color}`,
      }}
      animate={{
        y: [particle.y, particle.y + (particle.animY), particle.y],
        x: [particle.x, particle.x + (particle.animX), particle.x],
        rotate: particle.type === 1 ? [0, 180, 360] : undefined,
      }}
      transition={{
        duration: particle.duration,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    >
      {particle.type === 2 && (
        <div className="absolute inset-0 rounded-full animate-pulse" />
      )}
    </motion.div>
  );
}

export default function DynamicLabBackground() {
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isMounted, setIsMounted] = useState(false);

  // Generamos una semilla estable para SSR
  const seed = useMemo(() => Math.floor(Math.random() * 10000), []);

  const particles = useMemo(() => {
    const random = (index, max) => {
      // Función pseudoaleatoria basada en la semilla
      const x = Math.sin(seed + index * 1000) * 10000;
      return (x - Math.floor(x)) * max;
    };

    return Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      size: random(i, 12) + 4,
      x: random(i + 1, 100),
      y: random(i + 2, 100),
      animX: random(i + 3, 10) - 5,
      animY: random(i + 4, 20) - 10,
      color: `hsla(${random(i + 5, 60) + 180}, 80%, 60%, ${random(i + 6, 0.4) + 0.2})`,
      type: Math.floor(random(i + 7, 3)),
      duration: 4 + random(i + 8, 6),
    }));
  }, [seed]);

  const waves = useMemo(() => {
    const random = (index, max) => {
      const x = Math.sin(seed + index * 1000) * 10000;
      return (x - Math.floor(x)) * max;
    };

    return Array.from({ length: 6 }).map((_, i) => ({
      id: i,
      size: random(i, 200) + 100,
      x: random(i + 10, 100),
      y: random(i + 20, 100),
      thickness: random(i + 30, 2) + 1,
    }));
  }, [seed]);

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set(((e.clientX - rect.left) / rect.width) * 100);
        mouseY.set(((e.clientY - rect.top) / rect.height) * 100);
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  if (!isMounted) return null;

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-teal-800/10" />

      {waves.map((wave) => (
        <motion.div
          key={`wave-${wave.id}`}
          className="absolute rounded-full border border-cyan-400/30"
          style={{
            width: `${wave.size}px`,
            height: `${wave.size}px`,
            left: `${wave.x}%`,
            top: `${wave.y}%`,
            borderWidth: `${wave.thickness}px`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 8 + wave.thickness * 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {particles.map((particle) => (
        <Particle 
          key={`particle-${particle.id}`} 
          particle={particle} 
          mouseX={mouseX} 
          mouseY={mouseY} 
        />
      ))}

      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%">
          <pattern
            id="grid-pattern"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3b82f6" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>
    </div>
  );
}