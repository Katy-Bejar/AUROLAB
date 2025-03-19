export const links = {
    inicio: {
      name: "Inicio",
      href: "/",
    },
    nosotros: {
      name: "Nosotros",
      href: "/nosotros",
    },
    analisisLaboratorio: {
      name: "Análisis de Laboratorio",
      href: "/analisis",
      sublinks: [
        {
          name: "Análisis Químico",
          href: "/analisis/quimico",
        },
        {
          name: "Análisis Microbiológico",
          href: "/analisis/microbiologico",
        },
      ],
    },
    monitoreo: {
      name: "Monitoreo",
      href: "/monitoreo",
    },
    servicioCliente: {
      name: "Servicio al Cliente",
      sublinks: [
        {
          name: "Repositorio de Informes",
          href: "/servicio-cliente/repositorio-informes",
        },
      ],
    },
    search: {
      name: "Buscar",
      href: "#cms-search-popup",
      className: "cms-modal h-btn-search menu-color cms-transition",
      iconClass: "cmsi-search",
    },
  };
