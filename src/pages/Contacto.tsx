import { useState } from 'react';
import Boton from '../components/Boton';
import logo from '../assets/PNG INTEGRA_LOGO MULTI.png';

const inputClassName = "bg-gray-100/50 p-4 w-full rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300";

const Contacto = () => {
  // Estados para manejar la experiencia del usuario
  const [estadoEnvio, setEstadoEnvio] = useState<'inactivo' | 'cargando' | 'exito' | 'error'>('inactivo');

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    setEstadoEnvio('cargando'); // Cambiamos el estado a cargando
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // OJO: REEMPLAZA ESTE LINK CON EL QUE TE DÉ FORMSPREE
      const response = await fetch('https://formspree.io/f/xgojzdwo', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setEstadoEnvio('exito');
        form.reset(); // Limpiamos los campos del formulario
        
        // Regresamos el botón a la normalidad después de 3 segundos
        setTimeout(() => setEstadoEnvio('inactivo'), 3000);
      } else {
        setEstadoEnvio('error');
        setTimeout(() => setEstadoEnvio('inactivo'), 3000);
      }
    } catch (error) {
      console.error(error);
      setEstadoEnvio('error');
      setTimeout(() => setEstadoEnvio('inactivo'), 3000);
    }
  }

  return (
    <section className=" mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 pt-22 pb-10 sm:px-6 sm:pt-52 sm:pb-16 lg:grid-cols-2 lg:gap-12 lg:px-8 font-sans">      
      <div className="space-y-5 sm:space-y-6 text-center lg:text-left">
        
        <img 
          src={logo} 
          alt="Logo de integra" 
          className="object-contain h-auto w-full max-w-sm mx-auto lg:mx-0 -my-20" 
        />
        
        <p className="text-gray-600 font-bold uppercase tracking-widest text-xs sm:text-sm">Contacto</p>
        <h2 className="text-3xl font-bold leading-tight text-secondary sm:text-4xl lg:text-5xl">
          Estamos listos para <br className="hidden sm:block" /> atenderle.
        </h2>
        <p className="mx-auto max-w-sm text-base text-gray-800 sm:text-lg lg:mx-0">
          Si está interesado en nuestros productos y servicios no dude en ponerse en contacto con nosotros.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="bg-white space-y-4 rounded-2xl p-4 shadow-xl sm:p-6 lg:p-8 ">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* El atributo "required" obliga al usuario a llenar los campos antes de enviar */}
          <input type="text" name="nombre" placeholder="Nombre completo" required className={inputClassName} />
          <input type="text" name="empresa" placeholder="Empresa" required className={inputClassName} />
        </div>

        <input type="email" name="email" placeholder="Dirección de correo electrónico" required className={inputClassName} />

        <input type="tel" name="telefono" placeholder="Teléfono (con LADA)" required className={inputClassName} />

        <textarea
          name="mensaje"
          placeholder="Mensaje"
          required
          rows={6}
          className={`${inputClassName} resize-none`}
        ></textarea>

        {/* Mensajes de feedback para el usuario */}
        {estadoEnvio === 'exito' && (
          <p className="text-green-600 text-sm font-bold text-center">¡Mensaje enviado correctamente! Nos pondremos en contacto pronto.</p>
        )}
        {estadoEnvio === 'error' && (
          <p className="text-red-600 text-sm font-bold text-center">Hubo un error al enviar el mensaje. Por favor intenta de nuevo.</p>
        )}

        <div className="flex justify-stretch pt-2 sm:justify-end sm:pt-4">
          {/* Si tu componente <Boton> acepta disabled y texto dinámico, pásaselos. 
              Si no, puedes usar un button normal de HTML por ahora para manejar los estados */}
          <button 
            type="submit" 
            disabled={estadoEnvio === 'cargando'}
            className={`w-full sm:w-auto px-8 py-3 rounded-md font-bold text-white transition-colors duration-300 ${
              estadoEnvio === 'cargando' ? 'bg-gray-400 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600'
            }`}
          >
            {estadoEnvio === 'cargando' ? 'ENVIANDO...' : 'ENVIAR'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contacto;