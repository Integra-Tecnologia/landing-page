import  { useState } from 'react';
import { Link } from 'react-router-dom';
// 1. Importamos las flechas desde react-icons/fi (Feather Icons)
import { FiChevronDown, FiChevronUp, FiArrowRight } from 'react-icons/fi';

const datosTarjetas = [
  {
    id: 1,
    titulo: 'Gestión de Flotillas',
    imagen: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800&auto=format&fit=crop',
    detalles: [
      'GPS',
      'Telemetría',
      'Hábitos de conducción',
      'Combustible',
      'Reportes operativos',
      'Monitoreo de unidades'
    ],
    ruta: '/catalogo'
  },
  {
    id: 2,
    titulo: 'Seguridad Operativa',
    imagen: 'https://images.unsplash.com/photo-1549109926-58f039549485?q=80&w=800&auto=format&fit=crop',
    detalles: [
      'Cámaras con IA (ADAS)',
      'Sensores',
      'Evidencia de incidentes',
      'Seguridad de operador'
    ],
    ruta: '/catalogo'
  },
  {
    id: 3,
    titulo: 'Conectividad y control',
    imagen: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop',
    detalles: [
      'Control de acceso',
      'Monitoreo',
      'Plataformas',
      'Apps',
      'Integraciones'
    ],
    ruta: '/catalogo'
  },
  {
    id: 4,
    titulo: 'Movilidad y Recaudo',
    imagen: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop',
    detalles: [
      'Prepago',
      'Validadores',
      'Medios de pago',
      'Sistemas de transporte'
    ],
    ruta: '/catalogo'
  }
];

const CardsPrincipales = () => {
  const [tarjetaExpandida, setTarjetaExpandida] = useState<number | null>(null);

  const toggleDetalles = (id: number) => {
    if (tarjetaExpandida === id) {
      setTarjetaExpandida(null);
    } else {
      setTarjetaExpandida(id); 
    }
  };

  return (
    <section className="py-16  font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800">
            Soluciones Integrales
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Descubre cómo nuestra tecnología conecta cada aspecto de tu operación para llevarla al siguiente nivel.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
  {datosTarjetas.map((tarjeta) => (
    <div 
      key={tarjeta.id} 
      className="bg-white rounded-2xl shadow-md overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl"
    >
      <div className="h-48 overflow-hidden relative group">
        <img 
          src={tarjeta.imagen} 
          alt={tarjeta.titulo} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300"></div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-800 mb-2">
          {tarjeta.titulo}
        </h3>

        <div 
          className={`grid transition-all duration-300 ease-in-out ${
            tarjetaExpandida === tarjeta.id 
              ? 'grid-rows-[1fr] opacity-100 mt-2 mb-4' 
              : 'grid-rows-[0fr] opacity-0 m-0'
          }`}
        >
          {/* AQUÍ ESTÁ EL CAMBIO: Renderizamos la lista de detalles */}
          <div className="overflow-hidden">
            <ul className="text-gray-600 text-sm leading-relaxed list-disc pl-5 space-y-1.5 marker:text-orange-500">
              {tarjeta.detalles.map((punto, index) => (
                <li key={index}>{punto}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-auto flex flex-col gap-3 pt-4 border-t border-gray-100">
          
          <button 
            onClick={() => toggleDetalles(tarjeta.id)}
            className="flex items-center justify-between w-full text-sm font-semibold text-slate-500 hover:text-orange-500 transition-colors"
          >
            <span>{tarjetaExpandida === tarjeta.id ? 'Ocultar detalles' : 'Ver resumen'}</span>
            {tarjetaExpandida === tarjeta.id ? (
              <FiChevronUp className="w-5 h-5" />
            ) : (
              <FiChevronDown className="w-5 h-5" />
            )}
          </button>

          <Link 
            to={tarjeta.ruta}
            onClick={() => window.scrollTo(0, 0)}
            className="flex items-center justify-center w-full gap-2 py-2.5 bg-orange-500 text-white rounded-lg font-bold hover:bg-orange-600 transition-colors group"
          >
            <span>Conoce más</span>
            <FiArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

        </div>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default CardsPrincipales;