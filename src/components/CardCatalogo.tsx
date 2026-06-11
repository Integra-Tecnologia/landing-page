import React from 'react';
import { FiTag, FiCheckCircle } from 'react-icons/fi';


// Definimos la estructura de lo que va a recibir la tarjeta basado en tu JSON
interface Producto {
  id: number;
  nombre: string;
  modelo: string;
  marca: string;
  categoria: string;
  estado: string;
  descripcion: string;
  imagenes: string[];
}

interface CardCatalogoProps {
  producto: Producto;
}

const CardCatalogo: React.FC<CardCatalogoProps> = ({ producto }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
      
      {/* Contenedor de la Imagen */}
      <div className="relative h-56 overflow-hidden flex items-center justify-center p-4">
        <img 
          src={producto.imagenes[0]} 
          alt={producto.nombre} 
          className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
        />
        {/* Badge de estdo (Disponible) */}
        <div className="absolute top-4 right-4 bg-green-500/10 text-green-600 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 border border-green-500/20">
          <FiCheckCircle className="w-3.5 h-3.5" />
          {producto.estado}
        </div>
      </div>

      {/* Contenido de la Tarjeta */}
      <div className="p-6 flex flex-col grow border-t border-gray-50">
        
        {/* Marca y Categoría */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
            {producto.marca}
          </span>
          <span className="text-xs font-medium text-orange-500 bg-orange-50 px-2 py-1 rounded-md flex items-center gap-1">
            <FiTag className="w-3 h-3" />
            {producto.categoria}
          </span>
        </div>

        {/* Título y Modelo */}
        <h3 className="text-lg font-extrabold text-slate-800 leading-tight mb-1">
          {producto.nombre}
        </h3>
        <p className="text-sm text-gray-500 font-mono mb-4">
          Mod: {producto.modelo}
        </p>

        {/* Descripción (Limitada a 3 líneas para que no rompa el diseño) */}
        <p className="text-sm text-gray-600 leading-relaxed line-clamp-3 mb-6">
          {producto.descripcion}
        </p>

        {/* Botón de Acción (Empujado siempre hacia abajo) */}
        <div className="mt-auto">
          <button 
            className="w-full py-2.5 bg-slate-50 text-slate-700 font-bold rounded-lg border border-gray-200 transition-colors hover:bg-orange-500 hover:text-white hover:border-orange-500"
          >
            Me interesa
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default CardCatalogo;