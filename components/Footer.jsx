import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white text-[#011D59] py-8 md:py-12 border-t border-gray-200 relative z-20">
      <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
        {/* Logo y descripción */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex flex-col items-center sm:items-start">
            <Image
              src="/aurolab.jpg"
              alt="Logo AuroLab"
              width={120}
              height={80}
              className="mb-4 rounded-lg w-auto h-auto"
              priority
            />
            <p className="text-sm text-[#011D59]/80 text-center sm:text-left max-w-xs">
              Comprometidos con la calidad en servicios de análisis y monitoreo ambiental.
            </p>
          </div>
        </div>

        {/* Nosotros */}
        <div className="text-center sm:text-left">
          <h3 className="font-semibold text-lg mb-3 md:mb-4 text-[#011D59]">Nosotros</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/nosotros" className="hover:text-[#21CDAD] transition-colors">¿Quiénes somos?</Link></li>
            <li><Link href="/analisis/quimico" className="hover:text-[#21CDAD] transition-colors">Análisis Fisicoquímico</Link></li>
            <li><Link href="/analisis/microbiologico" className="hover:text-[#21CDAD] transition-colors">Análisis Microbiológico</Link></li>
            <li><Link href="/monitoreo" className="hover:text-[#21CDAD] transition-colors">Monitoreo Ambiental</Link></li>
          </ul>
        </div>

        {/* Contacto */}
        <div className="text-center sm:text-left">
          <h3 className="font-semibold text-lg mb-3 md:mb-4 text-[#011D59]">Contáctanos</h3>
          <ul className="space-y-2 md:space-y-3 text-sm">
            <li className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-2">
              <Phone size={16} className="text-green-600 flex-shrink-0" />
              <a href="tel:+51941678446" className="hover:text-[#21CDAD] transition-colors">+51 941 678 446</a>
            </li>
            <li className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-2">
              <Mail size={16} className="text-green-600 flex-shrink-0" />
              <a href="mailto:comercial@aurolab.com.pe" className="hover:text-[#21CDAD] transition-colors">
                comercial@aurolab.com.pe
              </a>
            </li>
            <li className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-2">
              <MapPin size={16} className="text-green-600 flex-shrink-0" />
              <span className="text-center sm:text-left">Avenida Canadá, entre RosaLuz y Santa Rosa</span>
            </li>
          </ul>
        </div>

        {/* Redes Sociales */}
        <div className="sm:col-span-2 lg:col-span-1 text-center sm:text-left">
          <h3 className="font-semibold text-lg mb-3 md:mb-4 text-[#011D59]">Síguenos</h3>
          <div className="flex justify-center sm:justify-start flex-wrap gap-3 md:gap-4">
            {[
              { href: "https://www.facebook.com/AuroLaboratorio/", src: "/facebook.png", alt: "Facebook" },
              { href: "https://www.instagram.com/aurolaboratorio/", src: "/instagram.png", alt: "Instagram" },
              { href: "https://www.youtube.com/channel/UCPfSUFOpvglkc-Q30QLEeXg", src: "/youtube.png", alt: "YouTube" },
              { href: "https://www.linkedin.com/company/aurolab-s-a-c/", src: "/linkedin.png", alt: "LinkedIn" },
              { href: "https://www.tiktok.com/@laboratorioauro?lang=es", src: "/tiktok.png", alt: "TikTok" },
            ].map((icon, index) => (
              <a
                key={index}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-200 hover:scale-110"
                aria-label={icon.alt}
              >
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={28}
                  height={28}
                  className="w-6 h-6 md:w-7 md:h-7 object-contain hover:filter hover:brightness-0 hover:sepia hover:hue-rotate-[190deg] hover:saturate-200"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Créditos inferiores */}
      <div className="mt-8 md:mt-10 text-center text-sm text-[#011D59]/60 px-4">
        &copy; {new Date().getFullYear()} AuroLab S.A.C. | Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;