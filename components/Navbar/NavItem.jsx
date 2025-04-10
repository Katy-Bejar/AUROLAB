import Link from 'next/link';
import { Search } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

const NavItem = ({ link, isOpen, toggle, close, isMobile = false, closeMobileMenu }) => {
  const hasSubmenu = link.sublinks && link.sublinks.length > 0;
  const [isHovered, setIsHovered] = useState(false);
  const submenuRef = useRef(null);
  const navItemRef = useRef(null);
  const timeoutRef = useRef(null);

  const shouldShowDropdown = isMobile ? isOpen : isHovered;

  // Manejo de hover para desktop (solo en el botón de dropdown)
  const handleButtonMouseEnter = () => {
    if (!isMobile) {
      clearTimeout(timeoutRef.current);
      setIsHovered(true);
    }
  };

  const handleButtonMouseLeave = () => {
    if (!isMobile) {
      timeoutRef.current = setTimeout(() => {
        setIsHovered(false);
      }, 200);
    }
  };

  // Manejo de hover para el menú desplegado
  const handleDropdownMouseEnter = () => {
    if (!isMobile) {
      clearTimeout(timeoutRef.current);
      setIsHovered(true);
    }
  };

  const handleDropdownMouseLeave = () => {
    if (!isMobile) {
      timeoutRef.current = setTimeout(() => {
        setIsHovered(false);
      }, 200);
    }
  };

  // Cerrar al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navItemRef.current && !navItemRef.current.contains(event.target)) {
        setIsHovered(false);
      }
    };

    if (!isMobile && isHovered) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isHovered, isMobile]);

  // Limpiar timeouts al desmontar
  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <li
      className="relative"
      ref={navItemRef}
    >
      {hasSubmenu ? (
        <div className="flex flex-col">
          <div className="flex items-center relative">
            {/* Enlace principal - navega directamente */}
            <Link
              href={link.href || '#'}
              className={`text-blue-900 font-semibold hover:text-[#21CDAD] transition-colors duration-200 flex items-center ${
                isMobile ? 'py-2 px-3' : ''
              }`}
              onClick={(e) => {
                if (isMobile) {
                  if (!isOpen) {
                    closeMobileMenu?.();
                  } else {
                    e.preventDefault();
                  }
                }
              }}
            >
              {link.name}
            </Link>
            
            {/* Botón para desplegar el submenú */}
            {hasSubmenu && (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  toggle();
                }}
                onMouseEnter={handleButtonMouseEnter}
                onMouseLeave={handleButtonMouseLeave}
                className={`ml-1 focus:outline-none ${
                  isMobile ? 'p-2 text-blue-900' : 'text-blue-700 hover:text-[#21CDAD]'
                }`}
                aria-expanded={isOpen}
                aria-label={`${isOpen ? 'Cerrar' : 'Abrir'} submenú`}
              >
                {isOpen ? '▲' : '▼'}
              </button>
            )}
          </div>

          {/* Submenú */}
          {shouldShowDropdown && (
            <ul
              ref={submenuRef}
              className={`${
                isMobile
                  ? 'pl-4 mt-1 space-y-1'
                  : 'absolute left-0 top-full bg-white shadow-lg mt-1 py-1 w-56 z-50 rounded-md border border-gray-100'
              }`}
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
            >
              {link.sublinks.map((sublink, idx) => (
                <li key={idx}>
                  <Link
                    href={sublink.href}
                    className={`block px-4 py-2 text-blue-900 font-medium hover:text-[#21CDAD] ${
                      isMobile ? 'hover:bg-gray-50' : 'hover:bg-blue-50'
                    } transition-colors duration-200`}
                    onClick={() => {
                      close();
                      closeMobileMenu?.();
                    }}
                  >
                    {sublink.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      ) : link.href === "#cms-search-popup" ? (
        <a
          href={link.href}
          className="flex items-center p-2 text-blue-900 hover:text-[#21CDAD] transition-colors duration-200"
          aria-label="Buscar"
        >
          <Search size={22} />
        </a>
      ) : (
        <Link
          href={link.href || '#'}
          className={`text-blue-900 font-semibold hover:text-[#21CDAD] transition-colors duration-200 ${
            isMobile ? 'block py-2 px-3' : ''
          }`}
          onClick={() => {
            close();
            closeMobileMenu?.();
          }}
        >
          {link.name}
        </Link>
      )}
    </li>
  );
};

export default NavItem;