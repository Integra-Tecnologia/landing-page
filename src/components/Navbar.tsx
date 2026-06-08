import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import LogoIntegra from '../assets/PNG INTEGRA_LOGO MULTI.png';
import LogoBlanco from '../assets/PNG INTEGRA_LOGO BLANCO.png';

export default function Navbar() {
    const [isTop, setIsTop] = useState(true);
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    // 1. NUEVA LÓGICA: Evaluamos si estamos en el inicio y hasta arriba
    const isHomePage = location.pathname === "/";
    const isTransparent = isHomePage && isTop;

    const getLinkClassName = ({ isActive }: { isActive: boolean }): string => {
        const baseClasses = "block py-2 transition-colors";
        
        if (isActive) return `${baseClasses} text-orange-500 font-bold`;
        
        // 2. Usamos isTransparent en lugar de isTop
        return `${baseClasses} ${
            isTransparent 
                ? "text-white/80 hover:text-white" 
                : "text-texto hover:text-orange-500" 
        }`;
    };

    useEffect(() => {
        const onScroll = () => setIsTop(window.scrollY === 0);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
    }, [location.pathname]);

    return (
        <nav
            // 3. Aplicamos isTransparent para decidir el fondo
            className={`fixed top-0 left-0 w-full z-50 border-b border-white/10 transition-all duration-100 
                ${isTransparent ? "bg-transparent py-4" : "bg-fondo-claro backdrop-blur shadow-md py-2"}`} 
        >
            <div className="mx-auto flex max-w-[90%] items-center justify-between px-4 sm:px-2 lg:px-8">
                <NavLink to="/" className="hover:opacity-80 transition-opacity">
                   <img
                        // 4. Aplicamos isTransparent para decidir el logo
                        src={isTransparent ? LogoBlanco : LogoIntegra} 
                        alt="Logo de Integra"
                        className="-my-15 w-auto h-40 sm:h-60 transition-all duration-100"
                    />
                </NavLink>

                <button
                    type="button"
                    // 5. Aplicamos isTransparent para el botón de menú móvil
                    className={`inline-flex items-center justify-center rounded-md p-2 md:hidden transition-colors ${
                        isTransparent ? "text-white" : "text-texto"
                    }`}
                    aria-label="Abrir menú"
                    aria-expanded={mobileOpen}
                    onClick={() => setMobileOpen((current) => !current)}
                >
                    <span className="text-2xl leading-none">{mobileOpen ? "✕" : "☰"}</span>
                </button>

                <ul className="hidden items-center gap-8 text-base font-medium md:flex lg:gap-12 lg:text-xl">
                    <li>
                        <NavLink to="/" end className={getLinkClassName}>
                            Inicio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/catalogo" className={getLinkClassName}>
                            Catálogo
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/casosExito" className={getLinkClassName}>
                            Casos de Éxito
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/nosotros" className={getLinkClassName}>
                            Quiénes Somos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacto" className={getLinkClassName}>
                            Contacto
                        </NavLink>
                    </li>
                </ul>
            </div>

            {mobileOpen && (
                <div className="border-t border-white/10 bg-transparent backdrop-blur md:hidden">
                    <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 text-base sm:px-6">
                        <li>
                            <NavLink to="/" end className={getLinkClassName}>
                                Inicio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/catalogo" className={getLinkClassName}>
                                Catálogo
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/casosExito" className={getLinkClassName}>
                                Casos de Éxito
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/nosotros" className={getLinkClassName}>
                                Quiénes Somos
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contacto" className={getLinkClassName}>
                                Contacto
                            </NavLink>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}