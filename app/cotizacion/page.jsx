'use client';

import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Cotizacion() {
  return (
    <main className="bg-gray-100 min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-8 space-y-8">
        <h1 className="text-3xl font-bold text-blue-900 mb-4">📄 Solicita una Cotización</h1>
        <p className="text-gray-700">
          Si deseas cotizar nuestros servicios, puedes contactarnos por los siguientes medios. Estamos atentos a tu solicitud.
        </p>

        {/* WhatsApp */}
        <div className="flex items-center gap-4 bg-green-100 p-4 rounded-md shadow">
          <Image
            src="/whatsapp-icon.jpg" // Coloca el ícono en /public o cambia por un ícono externo
            alt="WhatsApp"
            width={32}
            height={32}
          />
          <div className="flex-1">
            <h2 className="font-bold text-lg text-green-700">WhatsApp Directo</h2>
            <p className="text-sm">
              ¿Necesitas atención inmediata? Escríbenos directamente por WhatsApp.
            </p>
          </div>
          <a
            href="https://wa.me/51941678446"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 text-white px-4 py-2 rounded-md font-medium hover:bg-green-700 transition"
          >
            Chatear
          </a>
        </div>

        {/* Correo */}
        <div className="flex items-start gap-4">
          <Mail className="text-blue-500 mt-1" size={28} />
          <div>
            <h2 className="font-bold text-lg">Correo Electrónico</h2>
            <p>
              Envía tu solicitud a:
              <br />
              <a
                href="mailto:comercial@aurolab.com.pe"
                className="text-blue-700 font-medium hover:underline"
              >
                comercial@aurolab.com.pe
              </a>
            </p>
          </div>
        </div>

        {/* Horario */}
        <div className="flex items-start gap-4">
          <Clock className="text-yellow-500 mt-1" size={28} />
          <div>
            <h2 className="font-bold text-lg">Horario de Atención</h2>
            <ul className="text-gray-700 list-disc list-inside">
              <li>Lunes a Viernes: 9:00 a.m. - 6:00 p.m.</li>
              <li>Sábados: 9:00 a.m. - 1:00 p.m.</li>
              <li>Domingo: Cerrado</li>
              <li className="mt-2 font-medium text-green-600">
                * Realizamos actividades 24/7 si se requiere cadena de frío o urgencia técnica.
              </li>
            </ul>
          </div>
        </div>

        {/* Ubicación */}
        <div className="flex items-start gap-4">
          <MapPin className="text-red-500 mt-1" size={28} />
          <div>
            <h2 className="font-bold text-lg">Visítanos</h2>
            <p>
              Estamos en la <strong>Avenida Canadá</strong>, entre la calle <strong>RosaLuz</strong> y <strong>Santa Rosa</strong>.
            </p>
          </div>
        </div>

        {/* Mapa de ubicación */}
        <div className="mt-6">
          <iframe
            title="Ubicación AuroLab"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.805692193881!2d-76.99977778525445!3d-12.118870946401503!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8e4a3f1b39b%3A0xaaaa!2sAv.%20Canad%C3%A1%2C%20Lima!5e0!3m2!1ses-419!2spe!4v1616783028190!5m2!1ses-419!2spe"
            width="100%"
            height="300"
            className="rounded-lg shadow-md"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Botón volver */}
        <div className="text-center mt-10">
          <Link href="/">
            <button className="px-6 py-3 bg-[#21CDAD] text-white rounded-lg font-semibold hover:bg-[#1fb49a] transition">
              ← Volver al inicio
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

