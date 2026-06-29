import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// Arreglo actualizado con los 5 sectores solicitados
const slides = [
  {
    id: 1,
    titulo: "Transporte y movilidad",
    // Placeholder temporal de transporte
    imagen: "https://images.unsplash.com/photo-1464219222984-216ebfb5ce43?q=80&w=1200&auto=format&fit=crop",
    url: "/catalogo"
  },
  {
    id: 2,
    titulo: "Industria",
    // Placeholder temporal de industria
    imagen: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1200&auto=format&fit=crop",
    url: "/catalogo"
  },
  {
    id: 3,
    titulo: "Empresas",
    // Placeholder temporal de empresas/corporativo
    imagen: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    url: "/catalogo"
  },
  {
    id: 4,
    titulo: "Instituciones",
    // Placeholder temporal de instituciones (hospitales, escuelas, gobierno)
    imagen: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop",
    url: "/catalogo"
  },
  {
    id: 5,
    titulo: "Logística",
    // Placeholder temporal de logística/almacenes
    imagen: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
    url: "/catalogo"
  }
];

const FotoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); 

    return () => clearInterval(interval);
  }, [currentIndex]); 

  return (
    <section className="py-16 font-sans ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título de la sección agregado según el documento */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 uppercase tracking-tight">
            SOLUCIONES PARA CADA SECTOR
          </h2>
        </div>

        <div className="relative w-full rounded-2xl shadow-2xl overflow-hidden bg-slate-900">
          
          {/* LA PISTA DE IMÁGENES */}
          <div 
            className="flex transition-transform ease-in-out duration-700 h-[400px] sm:h-[500px] md:h-[600px]"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {slides.map((slide) => (
              <Link 
                to={slide.url} 
                key={slide.id} 
                className="min-w-full h-full block relative cursor-pointer group"
                onClick={() => window.scrollTo(0, 0)}
              >
                {/* Imagen de fondo */}
                <img 
                  src={slide.imagen} 
                  alt={slide.titulo} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                
                {/* Overlay oscuro para que el texto resalte (Filtro negro) */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300"></div>

                {/* Texto centrado en la imagen */}
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <h3 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-wider drop-shadow-xl text-center">
                    {slide.titulo}
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          {/* FLECHA IZQUIERDA */}
          <button
            onClick={prevSlide}
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white/20 text-white shadow-lg backdrop-blur-md transition-all hover:bg-orange-500 hover:scale-110 active:scale-95 border border-white/30"
            aria-label="Imagen anterior"
          >
            <FiChevronLeft className="h-7 w-7 sm:h-8 sm:w-8 -ml-1" />
          </button>

          {/* FLECHA DERECHA */}
          <button
            onClick={nextSlide}
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-white/20 text-white shadow-lg backdrop-blur-md transition-all hover:bg-orange-500 hover:scale-110 active:scale-95 border border-white/30"
            aria-label="Siguiente imagen"
          >
            <FiChevronRight className="h-7 w-7 sm:h-8 sm:w-8 ml-1" />
          </button>

          {/* LOS BOTONCITOS INDICADORES (Dots) */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-20">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 shadow-md ${
                  currentIndex === index 
                    ? 'bg-orange-500 w-10' 
                    : 'bg-white/60 w-3 hover:bg-white' 
                }`}
                aria-label={`Ir a la imagen ${index + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FotoSlider;