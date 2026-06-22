import React, { useState, useEffect } from 'react';
import { FiTag, FiCheckCircle, FiX, FiZoomIn, FiArrowRight } from 'react-icons/fi';

interface Producto {
  id: number;
  nombre: string;
  modelo: string;
  marca: string;
  categoria: string;
  estado: string;
  descripcion: string;
  descripcion_corta: string;
  imagenes: string[];
}

interface CardCatalogoProps {
  producto: Producto;
}

const CardCatalogo: React.FC<CardCatalogoProps> = ({ producto }) => {
  // Estado 1: Para el modal con la descripción y detalles
  const [modalAbierto, setModalAbierto] = useState(false);
  // Estado 2: Para abrir SOLO la imagen en pantalla completa
  const [imagenFullScreen, setImagenFullScreen] = useState(false);

  useEffect(() => {
    if (modalAbierto || imagenFullScreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [modalAbierto, imagenFullScreen]);

  return (
    <>
      {/* ---------------- LA TARJETA NORMAL EN EL CATÁLOGO ---------------- */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
        
        {/* Contenedor de la Imagen -> AHORA ABRE LA IMAGEN EN GRANDE DIRECTAMENTE */}
        <div 
          className="relative h-56 overflow-hidden flex items-center justify-center p-4 cursor-zoom-in bg-white"
          onClick={() => setImagenFullScreen(true)}
          title="Ver imagen ampliada"
        >
          <img 
            src={producto.imagenes[0]} 
            alt={producto.nombre} 
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
          />
          
          {/* Overlay oscuro con lupa indicando que se va a hacer grande */}
          <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full text-slate-700 shadow-sm">
              <FiZoomIn className="w-5 h-5" />
            </div>
          </div>

          {/* Badge de estado */}
          <div className="absolute top-4 right-4 bg-green-500/10 text-green-600 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5 border border-green-500/20">
            <FiCheckCircle className="w-3.5 h-3.5" />
            {producto.estado}
          </div>
        </div>

        {/* Contenido de la Tarjeta */}
        <div className="p-6 flex flex-col grow border-t border-gray-50">
          
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
              {producto.marca}
            </span>
            <span className="text-xs font-medium text-primary bg-orange-50 px-2 py-1 rounded-md flex items-center gap-1">
              <FiTag className="w-3 h-3" />
              {producto.categoria}
            </span>
          </div>

          <h3 className="text-lg font-extrabold text-slate-800 leading-tight my-2.5 line-clamp-2 min-h-[2.8rem]">
            {producto.nombre}
          </h3>
          <p className="text-sm text-gray-500 font-mono mb-4">
            Mod: {producto.modelo}
          </p>

          <p className="text-sm text-gray-600 leading-relaxed line-clamp-4 mb-4">
            {producto.descripcion_corta}
          </p>
          
          <div className="mt-auto flex flex-col gap-4">
            <button 
              onClick={() => setModalAbierto(true)}
              className="flex flex-col text-primary text-lg font-bold self-start hover:underline"
            >
             Ver más detalles
            </button>

            {/* <button className="w-full py-2.5 bg-slate-50 text-slate-700 font-bold rounded-lg border border-gray-200 transition-colors hover:bg-primary hover:text-white hover:border-primary">
              Me interesa
            </button>*/}
          </div> 
          
        </div>
      </div>

      {/* ---------------- EL MODAL DE DETALLES (PANTALLA DIVIDIDA) ---------------- */}
      {modalAbierto && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
          
          <div 
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setModalAbierto(false)}
          ></div>

          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-full flex flex-col md:flex-row overflow-hidden animate-in fade-in zoom-in duration-200">
            
            <button 
              onClick={() => setModalAbierto(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-white/80 hover:bg-slate-100 text-slate-800 rounded-full transition-colors shadow-sm"
            >
              <FiX className="w-6 h-6" />
            </button>

            {/* Mitad Izquierda: Si le dan clic aquí, también abre el FullScreen sobre el modal */}
            <div 
              className="relative w-full md:w-1/2 bg-slate-50 flex items-center justify-center p-8 min-h-[300px] md:min-h-[500px] cursor-zoom-in group"
              onClick={() => setImagenFullScreen(true)}
            >
              <img 
                src={producto.imagenes[0]} 
                alt={producto.nombre} 
                className="max-w-full max-h-[40vh] md:max-h-[60vh] object-contain drop-shadow-md transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/90 p-3 rounded-full text-slate-700 shadow-md backdrop-blur-sm">
                  <FiZoomIn className="w-6 h-6" />
                </div>
              </div>
            </div>

            <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-10 flex flex-col overflow-y-auto max-h-[60vh] md:max-h-none">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{producto.marca}</span>
                <span className="text-xs font-medium text-primary bg-orange-50 px-2 py-1 rounded-md flex items-center gap-1">
                  <FiTag className="w-3 h-3" />
                  {producto.categoria}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight mb-2">{producto.nombre}</h2>
              <p className="text-base text-gray-500 font-mono mb-6 pb-6 border-b border-gray-100">
                Modelo: <span className="font-bold text-slate-700">{producto.modelo}</span>
              </p>
              <h4 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-3">Descripción del producto</h4>
              <p className="text-gray-600 leading-relaxed whitespace-pre-line mb-8">{producto.descripcion}</p>
              {/* <div className="mt-auto pt-6">
                <button className="w-full py-3.5 bg-primary text-white font-bold rounded-xl shadow-lg shadow-primary/30 transition-all hover:bg-orange-600 hover:-translate-y-0.5 active:translate-y-0">
                  Me interesa este equipo
                </button>
              </div> */}
            </div>
          </div>
        </div>
      )}

      {/* ---------------- LA IMAGEN FULLSCREEN (LIGHTBOX NEGRO) ---------------- */}
      {imagenFullScreen && (
        <div className="fixed inset-0 z-200 flex items-center justify-center bg-black/65 backdrop-blur-md p-4 sm:p-8 animate-in fade-in duration-200">
          
          <button 
            onClick={() => setImagenFullScreen(false)}
            className="absolute top-6 right-6 z-10 p-3  bg-white/10 hover:bg-white/20 text-white  rounded-full transition-colors "
          >
            <FiX className="w-8 h-8" />
          </button>

          <div 
            className="w-full h-full flex items-center justify-center cursor-zoom-out"
            onClick={() => setImagenFullScreen(false)}
          >
            <img 
              src={producto.imagenes[0]} 
              alt={producto.nombre} 
              className="max-w-full max-h-full object-contain select-none"
              onClick={(e) => e.stopPropagation()} 
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CardCatalogo;