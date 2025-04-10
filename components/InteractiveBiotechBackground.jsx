'use client';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useState, useRef, useMemo } from 'react';

export default function InteractiveBiotechBackground() {
  const [isClient, setIsClient] = useState(false);
  const containerRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Generamos los datos de los elementos usando useMemo para consistencia
  const { cellularElements, dnaStrands, microorganisms } = useMemo(() => {
    if (!isClient) return { cellularElements: [], dnaStrands: [], microorganisms: [] };
    
    const cellularElements = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      size: Math.random() * 40 + 20,
      x: Math.random() * 100,
      y: Math.random() * 100,
      speed: Math.random() * 0.1 + 0.05,
      type: Math.floor(Math.random() * 3),
      color: `hsla(${Math.random() * 120 + 160}, 70%, 60%, ${Math.random() * 0.3 + 0.2})`,
      rotation: Math.random() * 360
    }));
    
    const dnaStrands = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      width: Math.random() * 10 + 5,
      length: Math.random() * 50 + 30,
      x: Math.random() * 100,
      y: Math.random() * 100,
      speed: Math.random() * 0.5 + 0.2,
      color: `hsla(${Math.random() * 60 + 180}, 80%, 60%, ${Math.random() * 0.2 + 0.1})`
    }));
    
    const microorganisms = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      size: Math.random() * 15 + 5,
      x: Math.random() * 100,
      y: Math.random() * 100,
      speedX: (Math.random() - 0.5) * 0.2,
      speedY: (Math.random() - 0.5) * 0.2,
      color: `hsla(${Math.random() * 90 + 200}, 80%, 70%, ${Math.random() * 0.4 + 0.3})`,
      reaction: Math.random() * 20 + 10
    }));
    
    return { cellularElements, dnaStrands, microorganisms };
  }, [isClient]);

  useEffect(() => {
    setIsClient(true);
    
    const handleMouseMove = (e) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        mouseX.set((e.clientX - rect.left) / rect.width * 100);
        mouseY.set((e.clientY - rect.top) / rect.height * 100);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Función para generar formas celulares
  const getCellularShape = (type) => {
    switch(type) {
      case 0: // Forma de célula irregular
        return (
          <path 
            d="M30,50 Q40,30 50,50 Q60,70 50,90 Q40,70 30,50 Z" 
            fill="currentColor"
          />
        );
      case 1: // Forma de bacteria
        return (
          <ellipse 
            cx="50" 
            cy="50" 
            rx="30" 
            ry="15" 
            fill="currentColor"
          />
        );
      case 2: // Forma de virus
        return (
          <>
            <circle cx="50" cy="50" r="20" fill="currentColor" />
            {Array.from({ length: 6 }).map((_, i) => (
              <line 
                key={i}
                x1="50" y1="50"
                x2={50 + Math.cos(i * 60 * Math.PI/180) * 35}
                y2={50 + Math.sin(i * 60 * Math.PI/180) * 35}
                stroke="currentColor"
                strokeWidth="3"
              />
            ))}
          </>
        );
      default:
        return <circle cx="50" cy="50" r="25" fill="currentColor" />;
    }
  };

  if (!isClient) return null;

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-0 overflow-hidden pointer-events-none"
    >
      {/* Fondo base con gradiente de laboratorio */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-teal-800/15 to-cyan-700/10" />
      
      {/* Trayectorias de ADN */}
      {dnaStrands.map((strand) => (
        <DNAStrand 
          key={`dna-${strand.id}`}
          strand={strand}
          mouseX={mouseX}
          mouseY={mouseY}
        />
      ))}
      
      {/* Elementos celulares */}
      {cellularElements.map((cell) => (
        <CellElement
          key={`cell-${cell.id}`}
          cell={cell}
          mouseX={mouseX}
          mouseY={mouseY}
          getCellularShape={getCellularShape}
        />
      ))}
      
      {/* Microorganismos interactivos */}
      {microorganisms.map((micro) => (
        <Microorganism
          key={`micro-${micro.id}`}
          micro={micro}
          mouseX={mouseX}
          mouseY={mouseY}
        />
      ))}
      
      {/* Efecto de microscopio (patrón de puntos)} */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle at center, currentColor 1px, transparent 1px)',
        backgroundSize: '20px 20px'
      }} />
    </div>
  );
}

// Componentes separados para cada tipo de elemento
function DNAStrand({ strand, mouseX, mouseY }) {
  const x = useTransform(mouseX, [0, 100], [-5, 5]);
  const y = useTransform(mouseY, [0, 100], [-5, 5]);
  
  return (
    <motion.div
      className="absolute"
      style={{
        width: `${strand.width}px`,
        height: `${strand.length}px`,
        left: `${strand.x}%`,
        top: `${strand.y}%`,
        background: `linear-gradient(to bottom, transparent, ${strand.color}, transparent)`,
        x,
        y
      }}
      animate={{
        rotate: [0, 180, 360],
        opacity: [0.3, 0.7, 0.3]
      }}
      transition={{
        duration: 15 + Math.random() * 20,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'linear'
      }}
    />
  );
}

function CellElement({ cell, mouseX, mouseY, getCellularShape }) {
  const x = useTransform(mouseX, [0, 100], [cell.x - 2, cell.x + 2]);
  const y = useTransform(mouseY, [0, 100], [cell.y - 2, cell.y + 2]);
  
  return (
    <motion.svg
      className="absolute"
      style={{
        width: `${cell.size}px`,
        height: `${cell.size}px`,
        x,
        y,
        left: `${cell.x}%`,
        top: `${cell.y}%`,
        color: cell.color,
        rotate: cell.rotation
      }}
      viewBox="0 0 100 100"
      animate={{
        rotate: cell.rotation + 360,
        scale: [0.9, 1.1, 0.9]
      }}
      transition={{
        duration: 8 + Math.random() * 10,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut'
      }}
    >
      {getCellularShape(cell.type)}
    </motion.svg>
  );
}

function Microorganism({ micro, mouseX, mouseY }) {
  const distance = useTransform(
    [mouseX, mouseY], 
    ([mx, my]) => {
      const dx = mx - micro.x;
      const dy = my - micro.y;
      return Math.sqrt(dx * dx + dy * dy);
    }
  );
  
  const x = useTransform(
    distance,
    [0, 100],
    [micro.x, micro.x + (micro.x - 50) * 0.2],
    { clamp: true }
  );
  
  const y = useTransform(
    distance,
    [0, 100],
    [micro.y, micro.y + (micro.y - 50) * 0.2],
    { clamp: true }
  );
  
  const scale = useTransform(
    distance,
    [0, micro.reaction],
    [1.5, 1],
    { clamp: true }
  );
  
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: `${micro.size}px`,
        height: `${micro.size}px`,
        left: x,
        top: y,
        scale,
        backgroundColor: micro.color,
        boxShadow: `0 0 15px ${micro.color}`
      }}
      animate={{
        x: [0, micro.speedX * 50, 0],
        y: [0, micro.speedY * 50, 0]
      }}
      transition={{
        duration: 10 + Math.random() * 15,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut'
      }}
    />
  );
}