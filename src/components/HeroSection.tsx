import BannerVideo from '../assets/banner-video.mp4';

export default function Hero() {
  return (
    <section className="relative w-full h-screen ">
      
      {/* CAPA 1: Video de Fondo */}
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
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* CAPA 3: Contenido principal */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 text-center text-white">
        
        {/* Título actualizado (con uppercase para que sea todo mayúsculas) */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg max-w-4xl uppercase">
          Tecnología que conecta tu operación
        </h1>
        
        {/* Subtítulo actualizado según las instrucciones */}
        <p className="text-lg md:text-2xl mb-8 max-w-2xl drop-shadow-md text-gray-200">
          +20 años desarrollando soluciones que fortalecen el control, la seguridad y la eficiencia.
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