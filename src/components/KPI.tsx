import React from 'react';
import { Link } from 'react-router-dom';
// Importamos FiArrowRight para el nuevo botón
import { FiAward, FiUsers, FiBox, FiClock, FiArrowRight } from 'react-icons/fi';
import type { IconType } from 'react-icons';

// 1. SUB-COMPONENTE: La Card individual
interface KPICardProps {
  label: string;
  dato: string;
  descripcion: string;
  Icono: IconType;
  color: string;
}

const KPICard: React.FC<KPICardProps> = ({ label, dato, descripcion, Icono, color }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
      {/* Icono con círculo de fondo suave */}
      <div className={`w-16 h-16 rounded-full ${color} bg-opacity-10 flex items-center justify-center mb-6`}>
        <Icono className={`w-8 h-8 ${color}`} />
      </div>
      
      {/* Dato principal (Número/KPI) */}
      <span className="text-4xl font-extrabold text-slate-800 mb-2 tracking-tight">
        {dato}
      </span>
      
      {/* Etiqueta */}
      <h3 className="text-lg font-bold text-slate-700 mb-3">
        {label}
      </h3>
      
      {/* Descripción corta */}
      <p className="text-sm text-gray-500 leading-relaxed">
        {descripcion}
      </p>
    </div>
  );
};

// 2. COMPONENTE PRINCIPAL
const SeccionKPIs = () => {
  
  // 3. DATOS EN FORMATO JSON (Se mantienen igual)
  const kpis = [
    {
      id: 1,
      label: "Experiencia",
      dato: "20+",
      descripcion: "Años innovando en soluciones tecnológicas para la industria.",
      icon: FiAward,
      color: "text-orange-500"
    },
    {
      id: 2,
      label: "Clientes",
      dato: "150+",
      descripcion: "Empresas han transformado su operación con nosotros.",
      icon: FiUsers,
      color: "text-blue-500"
    },
    {
      id: 3,
      label: "Proyectos",
      dato: "500+",
      descripcion: "Implementaciones exitosas de hardware y software.",
      icon: FiBox,
      color: "text-green-500"
    },
    {
      id: 4,
      label: "Disponibilidad",
      dato: "24/7",
      descripcion: "Soporte técnico humano siempre listo para atenderte.",
      icon: FiClock,
      color: "text-purple-500"
    }
  ];

  return (
    <section className="py-20 font-sans ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera de la sección ACTUALIZADA */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 uppercase tracking-tight mb-4">
            NUESTRA TRAYECTORIA, RESPALDADA POR RESULTADOS.
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            El compromiso, la innovación y la experiencia se reflejan en cada proyecto desarrollado.
          </p>
        </div>

        {/* GRID DE KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {kpis.map((kpi) => (
            <KPICard 
              key={kpi.id}
              label={kpi.label}
              dato={kpi.dato}
              descripcion={kpi.descripcion}
              Icono={kpi.icon}
              color={kpi.color}
            />
          ))}
        </div>

        {/* NUEVO BOTÓN A CASOS DE ÉXITO */}
        <div className="mt-16 flex justify-center">
          <Link 
            to="/casosExito"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 text-white rounded-xl font-bold text-lg hover:bg-orange-600 transition-all shadow-md hover:shadow-lg group hover:-translate-y-1"
          >
            <span>Ver Casos de Éxito</span>
            <FiArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default SeccionKPIs;