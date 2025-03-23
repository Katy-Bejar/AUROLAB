import Link from 'next/link';
import { Search } from 'lucide-react';
import { useState, useRef } from 'react';

const NavItem = ({ link, isOpen, toggle, close, isMobile = false }) => {
  const hasSubmenu = link.sublinks && link.sublinks.length > 0;
  const [isHovered, setIsHovered] = useState(false);
  const submenuRef = useRef(null); // Referencia para el submenú
  const timeoutRef = useRef(null); // Referencia para el timeout

  const shouldShowDropdown = isMobile ? isOpen : isHovered;

  // Función para manejar el evento onMouseEnter
  const handleMouseEnter = () => {
    if (!isMobile) {
      setIsHovered(true);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current); // Limpia el timeout si existe
      }
    }
  };

  // Función para manejar el evento onMouseLeave
  const handleMouseLeave = () => {
    if (!isMobile) {
      // Cierra el submenú después de un pequeño retraso
      timeoutRef.current = setTimeout(() => {
        setIsHovered(false);
      }, 200); // Ajusta el retraso según sea necesario
    }
  };

  // Función para manejar el evento onMouseEnter del submenú
  const handleSubmenuMouseEnter = () => {
    if (!isMobile) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current); // Limpia el timeout si existe
      }
    }
  };

  // Función para manejar el evento onMouseLeave del submenú
  const handleSubmenuMouseLeave = () => {
    if (!isMobile) {
      // Cierra el submenú después de un pequeño retraso
      timeoutRef.current = setTimeout(() => {
        setIsHovered(false);
      }, 200); // Ajusta el retraso según sea necesario
    }
  };

  return (
    <li
      className="relative"
      onMouseEnter={handleMouseEnter} // Usa la función personalizada para onMouseEnter
      onMouseLeave={handleMouseLeave} // Usa la función personalizada para onMouseLeave
    >
      {hasSubmenu ? (
        <>
          <div className="flex items-center">
            <Link
              href={link.href || '#'}
              className="text-blue-900 font-semibold hover:text-[#21CDAD] transition-colors duration-200 flex items-center"
              onClick={(e) => {
                if (isMobile) {
                  e.preventDefault();
                  toggle();
                } else {
                  close(); // permite navegación en desktop
                }
              }}
            >
              {link.name}
              <span className="ml-1 text-sm">▼</span>
            </Link>
          </div>

          {/* Submenú */}
          {shouldShowDropdown && (
            <ul
              ref={submenuRef} // Asigna la referencia al submenú
              className={`${
                isMobile
                  ? 'pl-4 mt-2 space-y-2'
                  : 'absolute bg-white shadow-lg mt-2 py-2 w-52 z-50 rounded-lg'
              }`}
              onMouseEnter={handleSubmenuMouseEnter} // Mantén el submenú abierto cuando el cursor está sobre él
              onMouseLeave={handleSubmenuMouseLeave} // Cierra el submenú cuando el cursor lo deja
            >
              {link.sublinks.map((sublink, idx) => (
                <li key={idx}>
                  <Link
                    href={sublink.href}
                    className="block px-4 py-2 text-blue-900 font-medium hover:text-[#21CDAD] hover:bg-gray-100 transition-colors duration-200"
                    onClick={close}
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
          onClick={close}
        >
          {link.name}
        </Link>
      )}
    </li>
  );
};

export default NavItem;