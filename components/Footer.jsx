import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#FFFFFF] text-[#011D59] py-12 mt-16 border-t border-gray-200">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo */}
        <div>
          <Image
            src="/aurolab.jpg"
            alt="Logo AuroLab"
            width={120}
            height={80}
            className="mb-4 rounded-lg"
          />
          <p className="text-sm text-[#011D59]/80">
            Comprometidos con la calidad en servicios de análisis y monitoreo ambiental.
          </p>
        </div>

        {/* Nosotros */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-[#011D59]">Nosotros</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/nosotros" className="hover:text-[#21CDAD]">¿Quiénes somos?</Link></li>
            <li><Link href="/analisis/quimico" className="hover:text-[#21CDAD]">Análisis Fisicoquímico</Link></li>
            <li><Link href="/analisis/microbiologico" className="hover:text-[#21CDAD]">Análisis Microbiológico</Link></li>
            <li><Link href="/monitoreo" className="hover:text-[#21CDAD]">Monitoreo Ambiental</Link></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-[#011D59]">Contáctanos</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-green-600" />
              <a href="tel:+51941678446" className="hover:text-[#21CDAD]">+51 941 678 446</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-green-600" />
              <a href="mailto:comercial@aurolab.com.pe" className="hover:text-[#21CDAD]">
                comercial@aurolab.com.pe
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-green-600" />
              <span>Avenida Canadá, entre RosaLuz y Santa Rosa</span>
            </li>
          </ul>
        </div>

        {/* Redes Sociales */}
        <div>
          <h3 className="font-semibold text-lg mb-4 text-[#011D59]">Síguenos</h3>
          <div className="flex gap-4 items-center">
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
                className="transition transform hover:scale-110"
              >
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={28}
                  height={28}
                  className="transition w-7 h-7 object-contain hover:filter hover:brightness-0 hover:sepia hover:hue-rotate-[190deg] hover:saturate-200"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Créditos inferiores */}
      <div className="mt-10 text-center text-sm text-[#011D59]/60">
        &copy; {new Date().getFullYear()} AuroLab S.A.C. | Todos los derechos reservados.
      </div>
    </footer>
  );
};

export default Footer;

