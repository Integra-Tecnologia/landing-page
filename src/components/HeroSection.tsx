
import BannerVideo from '../assets/banner-video.mp4';

export default function Hero() {
  return (
    <section className="relative w-full h-screen ">
      
      {/* CAPA 1: Video de Fondo */}
      {/* autoPlay, loop y muted son obligatorios para que los navegadores permitan que el video arranque solo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={BannerVideo} type="video/mp4" />
        Tu navegador no soporta la etiqueta de video.
      </video>

      {/* CAPA 2: Overlay oscuro (Filtro) */}
      {/* bg-black/60 le da un fondo negro al 60% de opacidad. Puedes subirlo o bajarlo según qué tan claro sea tu video */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* CAPA 3: Contenido principal */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center text-white">
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg max-w-4xl">
          Soluciones Integrales en Automatización
        </h1>
        
        <p className="text-lg md:text-2xl mb-8 max-w-2xl drop-shadow-md text-gray-200">
          Tecnología y control para la industria actual.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-semibold transition-colors duration-300">
            Conoce más
          </button>
          <button className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded-md font-semibold transition-colors duration-300">
            Contáctanos
          </button>
        </div>
        
      </div>
    </section>
  );
}