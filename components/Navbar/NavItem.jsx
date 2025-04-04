import Link from 'next/link';
import { Search } from 'lucide-react';
import { useState, useRef } from 'react';

const NavItem = ({ link, isOpen, toggle, close, isMobile = false, closeMobileMenu }) => {
  const hasSubmenu = link.sublinks && link.sublinks.length > 0;
  const [isHovered, setIsHovered] = useState(false);
  const submenuRef = useRef(null);
  const timeoutRef = useRef(null);

  const shouldShowDropdown = isMobile ? isOpen : isHovered;

  // Función para manejar el evento onMouseEnter
  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsHovered(true);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  };

  // Función para manejar el evento onMouseLeave
  const handleMouseLeave = () => {
    if (!isMobile) {
      timeoutRef.current = setTimeout(() => {
        setIsHovered(false);
      }, 200);
    }
  };

  // Función para manejar el evento onMouseEnter del submenú
  const handleSubmenuMouseEnter = () => {
    if (!isMobile) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    }
  };

  // Función para manejar el evento onMouseLeave del submenú
  const handleSubmenuMouseLeave = () => {
    if (!isMobile) {
      timeoutRef.current = setTimeout(() => {
        setIsHovered(false);
      }, 200);
    }
  };

  return (
    <li
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {hasSubmenu ? (
        <>
          <div className="flex items-center">
            {/* Enlace principal */}
            <Link
              href={link.href || '#'}
              className="text-blue-900 font-semibold hover:text-[#21CDAD] transition-colors duration-200 flex items-center"
              onClick={(e) => {
                if (isMobile) {
                  // En móviles, navega directamente al hacer clic en el texto
                  if (typeof closeMobileMenu === 'function') {
                    closeMobileMenu(); // Cierra el menú móvil
                  }
                } else {
                  close(); // Cierra el menú en desktop
                }
              }}
            >
              {link.name}
            </Link>
            {/* Botón para desplegar el submenú en móviles */}
            {link.sublinks && link.sublinks.length > 0 && (
              <button
                onClick={(e) => {
                  e.preventDefault(); // Evita la navegación
                  toggle(); // Despliega el submenú
                }}
                className="ml-1 text-sm focus:outline-none"
              >
                ▼
              </button>
            )}
          </div>

          {/* Submenú */}
          {shouldShowDropdown && (
            <ul
              ref={submenuRef}
              className={`${
                isMobile
                  ? 'pl-6 mt-2 space-y-2' // Ajuste de padding para móviles
                  : 'absolute bg-white shadow-lg mt-2 py-2 w-52 z-50 rounded-lg'
              }`}
              onMouseEnter={handleSubmenuMouseEnter}
              onMouseLeave={handleSubmenuMouseLeave}
            >
              {link.sublinks.map((sublink, idx) => (
                <li key={idx}>
                  <Link
                    href={sublink.href}
                    className="block px-4 py-2 text-blue-900 font-medium hover:text-[#21CDAD] hover:bg-gray-100 transition-colors duration-200"
                    onClick={() => {
                      close(); // Cierra el menú móvil después de hacer clic
                      if (typeof closeMobileMenu === 'function') {
                        closeMobileMenu(); // Cierra el menú móvil
                      }
                    }}
                  >
                    {sublink.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </>
      ) : link.href === "#cms-search-popup" ? (
        <a href={link.href} className={link.className}>
          <Search size={22} className="text-blue-900 hover:text-[#21CDAD] transition-colors duration-200" />
        </a>
      ) : (
        <Link
          href={link.href || '#'}
          className="text-blue-900 font-semibold hover:text-[#21CDAD] transition-colors duration-200"
          onClick={() => {
            close(); // Cierra el menú móvil después de hacer clic
            if (typeof closeMobileMenu === 'function') {
              closeMobileMenu(); // Cierra el menú móvil
            }
          }}
        >
          {link.name}
        </Link>
      )}
    </li>
  );
};

export default NavItem;