'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function FloatingButtons() {
  return (
    <div className="fixed right-4 bottom-6 flex flex-col items-end z-50">
      {/* Botón de Servicios con más separación arriba */}
      <div className="mb-36">
        <Link
          href="/servicios"
          className="bg-[#102770] text-white px-4 py-2 rounded-lg shadow-lg flex items-center justify-center text-lg font-medium transform rotate-[-90deg] origin-bottom-right hover:bg-[#0e245f] transition"
        >
          📥 Servicios
        </Link>
      </div>

      {/* Botón de WhatsApp con ícono desde carpeta public */}
      <a
        href="https://wa.me/51941678446"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 rounded-full shadow-lg flex items-center justify-center hover:bg-green-600 transition"
        aria-label="WhatsApp"
      >
        <Image
          src="/social.png" // Asegúrate que el nombre y la ruta coinciden
          alt="WhatsApp"
          width={28}
          height={28}
          className="object-contain"
        />
      </a>
    </div>
  );
}
