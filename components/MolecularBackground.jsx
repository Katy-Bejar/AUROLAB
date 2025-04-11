'use client';

import React, { useMemo } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const MolecularBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const options = useMemo(() => ({
    fullScreen: { enable: true, zIndex: -1 },
    background: {
      color: {
        value: "#e3f2fd", // Azul claro
      },
    },
    fpsLimit: 60,
    detectRetina: true,
    reduceMotion: {
      enable: true,
      factor: 2,
    },
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          area: 1000,
        },
      },
      color: {
        value: "#21CDAD", // Color de los átomos
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 0.6,
        random: true,
      },
      size: {
        value: { min: 7, max: 12 },
        random: true,
      },
      links: {
        enable: true,
        distance: 120,
        color: "#64b5f6", // Enlaces
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        outModes: {
          default: "bounce",
        },
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 60,
          duration: 0.7,
        },
      },
    },
  }), []);

  return (
    <div className="fixed inset-0 -z-10">
      <Particles id="tsparticles" init={particlesInit} options={options} />
    </div>
  );
};

export default MolecularBackground;
