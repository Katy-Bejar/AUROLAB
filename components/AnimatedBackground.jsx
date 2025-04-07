'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function AnimatedBackground({ children }) {  // <- Acepta children
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const initialParticles = Array.from({ length: 15 }).map((_, i) => ({  // Reduce el número para mejor rendimiento
        id: i,
        x: Math.random() * 100,  // % del contenedor padre (no de window)
        y: Math.random() * 100,
        size: Math.random() * 30 + 20,  // Tamaño más pequeño
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        color: `rgba(150, 200, 246, ${Math.random() * 0.3 + 0.2})`,  // Opacidad más baja
      }));
      setParticles(initialParticles);
    }
  }, []);

  useEffect(() => {
    if (particles.length === 0) return;

    let animationId;
    const animateParticles = () => {
      setParticles(prevParticles => {
        return prevParticles.map(particle => {
          let newX = particle.x + particle.vx;
          let newY = particle.y + particle.vy;
          let newVx = particle.vx;
          let newVy = particle.vy;

          // Rebotar en los bordes
          if (newX < 0 || newX > window.innerWidth) {
            newVx = -newVx * 0.95;
            newX = newX < 0 ? 0 : window.innerWidth;
          }
          if (newY < 0 || newY > window.innerHeight) {
            newVy = -newVy * 0.95;
            newY = newY < 0 ? 0 : window.innerHeight;
          }

          return {
            ...particle,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy
          };
        });
      });
      animationId = requestAnimationFrame(animateParticles);
    };

    animationId = requestAnimationFrame(animateParticles);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, [particles.length]);

  
  return (
    <div className="relative w-full h-full overflow-hidden">  {/* Contenedor relativo */}
      {/* Fondo animado */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full backdrop-blur-sm"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.x}%`,  // Usa % para que sea relativo al padre
              top: `${particle.y}%`,
              backgroundColor: particle.color,
              boxShadow: `0 0 10px ${particle.color}`,
            }}
            animate={{
              x: [`${particle.x}%`, `${particle.x + particle.vx}%`],
              y: [`${particle.y}%`, `${particle.y + particle.vy}%`],
              scale: [0.9, 1.1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}
      </div>
      
      {/* Contenido de la sección (children) */}
      <div className="relative z-10">  {/* Asegura que el contenido esté encima */}
        {children}
      </div>
    </div>
  );
}
