import Boton from '../components/Boton';

const inputClassName = "bg-gray-100 p-4 w-full rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300";

const Contacto = () => {
  return (
    <section className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-10 sm:px-6 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:px-8 font-sans">
      <div className="space-y-5 sm:space-y-6 text-center lg:text-left">
        <img src="src\assets\bea-logo.png" alt="Logo de Bea" className="mx-auto h-24 w-auto sm:h-36 lg:mx-0" />
        <p className="text-gray-400 font-bold uppercase tracking-widest text-xs sm:text-sm">Contacto</p>
        <h2 className="text-3xl font-bold leading-tight text-[#0055a5] sm:text-4xl lg:text-5xl">
          Estamos listos para <br className="hidden sm:block" /> atenderle.
        </h2>
        <p className="mx-auto max-w-sm text-base text-gray-800 sm:text-lg lg:mx-0">
          Si está interesado en nuestros productos y servicios no dude en ponerse en contacto con nosotros.
        </p>
      </div>

      <form className="space-y-4 rounded-2xl bg-white p-4 shadow-sm sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <input type="text" placeholder="Nombre" className={inputClassName} />
          <input type="text" placeholder="Apellido" className={inputClassName} />
        </div>

        <input type="email" placeholder="Dirección de correo electrónico" className={inputClassName} />

        <input type="tel" placeholder="Teléfono (con LADA)" className={inputClassName} />

        <textarea
          placeholder="Mensaje"
          rows={6}
          className={`${inputClassName} resize-none`}
        ></textarea>

        <div className="flex justify-stretch pt-2 sm:justify-end sm:pt-4">
          <Boton texto="ENVIAR" type="submit" className="w-full sm:w-auto" />
        </div>
      </form>
    </section>
  );
};

export default Contacto;