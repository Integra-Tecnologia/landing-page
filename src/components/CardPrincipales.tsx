import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronDown, FiChevronUp, FiArrowRight, FiX, FiZoomIn } from 'react-icons/fi';

const datosNuevasTarjetas = [
  {
    id: 1,
    titulo: 'HARDWARE',
    imagen: '/img-cards/MOVILIDAD_Y_RECAUDO.webp', 
    descripcion: 'Infraestructura tecnológica que hace posible cada solución.',
    detalles: [
      'GPS',
      'Cámaras móviles',
      'DVR / MDVR',
      'Sensores',
      'Validadores',
      'Control de acceso',
      'Lectores',
      'IoT',
      'Terminales de pago',
      'Antenas',
      'Routers'
    ],
    textoBoton: 'Ver tecnologías',
    ruta: '/catalogo'
  },
  {
    id: 2,
    titulo: 'SOFTWARE',
    imagen: '/img-cards/CONECTIVIDAD_Y_CONTROL.webp',
    descripcion: 'Inteligencia que conecta la información y optimiza los procesos.',
    detalles: [
      'Plataforma de monitoreo',
      'Sistema administrativo',
      'Desarrollo de software',
      'Aplicaciones móviles',
      'Dashboards',
      'Reportes',
      'Integraciones API',
      'Plataformas web',
      'Analítica',
      'Automatización'
    ],
    textoBoton: 'Ver soluciones',
    ruta: '/catalogo'
  },
  {
    id: 3,
    titulo: 'HUMANWARE',
    imagen: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=800&auto=format&fit=crop',
    descripcion: 'Conocimiento que convierte la tecnología en resultados.',
    detalles: [
      'Diagnóstico',
      'Consultoría',
      'Diseño de soluciones',
      'Instalación',
      'Configuración',
      'Capacitación',
      'Soporte técnico',
      'Mantenimiento',
      'Acompañamiento',
      'Mesa de control'
    ],
    textoBoton: 'Ver servicios',
    ruta: '/nosotros'
  }
];

const CardsPrincipales = () => {
  const [tarjetaExpandida, setTarjetaExpandida] = useState<number | null>(null);
  const [imagenFullScreen, setImagenFullScreen] = useState<string | null>(null);

  useEffect(() => {
    if (imagenFullScreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [imagenFullScreen]);

  const toggleDetalles = (id: number) => {
    if (tarjetaExpandida === id) {
      setTarjetaExpandida(null);
    } else {
      setTarjetaExpandida(id); 
    }
  };

  return (
    <section className="py-16 font-sans relative ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 uppercase tracking-tight">
            LA INTEGRACIÓN ES NUESTRA ESPECIALIDAD
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            En INTEGRA, cada solución combina Hardware, Software y Humanware para responder a las necesidades específicas de cada empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {datosNuevasTarjetas.map((tarjeta) => (
            <div 
              key={tarjeta.id} 
              className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div 
                className="h-56 overflow-hidden relative group cursor-zoom-in"
                onClick={() => setImagenFullScreen(tarjeta.imagen)}
                title="Ver imagen ampliada"
              >
                <img 
                  src={tarjeta.imagen} 
                  alt={tarjeta.titulo} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/50 backdrop-blur-sm p-3 rounded-full text-slate-700 shadow-sm">
                    <FiZoomIn className="w-5 h-5" />
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8 flex flex-col grow">
                <h3 className="text-2xl font-bold text-orange-500 mb-3 tracking-wide">
                  {tarjeta.titulo}
                </h3>
                
                <p className="text-slate-600 font-medium mb-6 leading-snug">
                  {tarjeta.descripcion}
                </p>

                {/* Lista Desplegable con Enlace Interno */}
                <div 
                  className={`grid transition-all duration-500 ease-in-out ${
                    tarjetaExpandida === tarjeta.id 
                      ? 'grid-rows-[1fr] opacity-100 mb-6' 
                      : 'grid-rows-[0fr] opacity-0 m-0'
                  }`}
                >
                  <div className="overflow-hidden flex flex-col">
                    <ul className="text-slate-500 text-sm leading-relaxed list-disc pl-5 space-y-2 marker:text-orange-300 bg-slate-50 p-4 rounded-xl border border-slate-100">
                      {tarjeta.detalles.map((punto, index) => (
                        <li key={index}>{punto}</li>
                      ))}
                    </ul>
                    
                    {/* Enlace sutil para navegar una vez que leyeron la lista */}
                    <Link 
                      to={tarjeta.ruta}
                      onClick={() => window.scrollTo(0, 0)}
                      className="mt-4 flex items-center justify-end gap-1 text-sm font-bold text-orange-500 hover:text-orange-600 hover:underline transition-colors group"
                    >
                      Ir a la sección completa
                      <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

                {/* BOTÓN NARANJA QUE AHORA ES EL INTERRUPTOR */}
                <div className="mt-auto pt-4 border-t border-gray-100">
                  <button 
                    onClick={() => toggleDetalles(tarjeta.id)}
                    className="flex items-center justify-center w-full gap-2 py-3 bg-orange-500 text-white rounded-xl font-bold hover:bg-orange-600 transition-all shadow-md hover:shadow-lg group"
                  >
                    <span>{tarjetaExpandida === tarjeta.id ? 'Ocultar lista' : tarjeta.textoBoton}</span>
                    {tarjetaExpandida === tarjeta.id ? (
                      <FiChevronUp className="w-5 h-5" />
                    ) : (
                      <FiChevronDown className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-1" />
                    )}
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Negro */}
      {imagenFullScreen && (
        <div className="fixed inset-0 z-200 flex items-center justify-center bg-black/60 backdrop-blur-md p-4 sm:p-8 animate-in fade-in duration-200">
          <button 
            onClick={() => setImagenFullScreen(null)}
            className="absolute top-6 right-6 z-10 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors cursor-pointer"
            aria-label="Cerrar pantalla completa"
          >
            <FiX className="w-8 h-8" />
          </button>
          <div 
            className="w-full h-full flex items-center justify-center cursor-zoom-out"
            onClick={() => setImagenFullScreen(null)}
          >
            <img 
              src={imagenFullScreen} 
              alt="Vista ampliada" 
              className="max-w-full max-h-full object-contain select-none shadow-2xl"
              onClick={(e) => e.stopPropagation()} 
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default CardsPrincipales;