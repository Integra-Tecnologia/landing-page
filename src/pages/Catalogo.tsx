import  { useState, useMemo } from 'react';
import ProductoCard from '../components/CardCatalogo';
import { FiGrid } from 'react-icons/fi';
import datosCatalogoRaw from '../data/catalogo.json';


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


const datosCatalogo = datosCatalogoRaw as Producto[];

const Catalogo = () => {
  const [categoriaActiva, setCategoriaActiva] = useState<string>('Todas');


  // 1. Extraemos las categorías únicas del JSON automáticamente
  const categoriasUnicas = useMemo(() => {
    const categorias = datosCatalogo.map(producto => producto.categoria);
    // Usamos Set para quitar duplicados y le agregamos 'Todas' al principio
    return ['Todas', ...Array.from(new Set(categorias))];
  }, []);

  // 2. Filtramos los productos según el botón que el usuario presione
  const productosFiltrados = useMemo(() => {
    if (categoriaActiva === 'Todas') {
      return datosCatalogo;
    }
    return datosCatalogo.filter(producto => producto.categoria === categoriaActiva);
  }, [categoriaActiva]);

  return (
    <div className="min-h-screen  pt-28 pb-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ENCABEZADO DEL CATÁLOGO */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Nuestro Catálogo de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-400">Soluciones</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Explora nuestra selección de hardware y tecnología diseñada para optimizar y asegurar tu operación al máximo nivel.
          </p>
        </div>

        {/* BARRA DE FILTROS (Botones de categorías) */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categoriasUnicas.map((categoria) => (
            <button
              key={categoria}
              onClick={() => setCategoriaActiva(categoria)}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                categoriaActiva === categoria
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white text-slate-600 border border-gray-200 hover:border-orange-300 hover:text-orange-500'
              }`}
            >
              {categoria}
            </button>
          ))}
        </div>

        {/* GRID DE PRODUCTOS */}
        <div className="mb-8 flex items-center justify-between border-b border-gray-200 pb-4">
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            <FiGrid className="text-orange-500" />
            Mostrando: {categoriaActiva}
          </h2>
          <span className="text-sm font-bold text-gray-500 bg-gray-200 px-3 py-1 rounded-full">
            {productosFiltrados.length} resultados
          </span>
        </div>

        {/* Mapeamos las tarjetas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {productosFiltrados.map((producto) => (
            <ProductoCard key={producto.id} producto={producto as any} />
          ))}
        </div>

        {/* Mensaje por si una categoría se queda vacía por alguna razón */}
        {productosFiltrados.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg font-medium">No se encontraron productos en esta categoría.</p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Catalogo;