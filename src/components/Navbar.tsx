import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import LogoIntegra from '../assets/PNG INTEGRA_LOGO MULTI.png';

const linkClassName = ({ isActive }: { isActive: boolean }) =>
    `block py-2 transition-colors hover:text-gray-900 ${isActive ? "text-primary" : ""}`;

export default function Navbar() {
    const [isTop, setIsTop] = useState(true);
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

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
            className={`sticky top-0 z-50 border-b border-black/5 shadow-sm transition-opacity duration-300 
                ${isTop ? "bg-transparent" : "bg-fondo-oscuro/95 backdrop-blur"}`} >
            <div className="mx-auto flex max-w-[90%] items-center justify-between px-4 py-4 sm:px-2 lg:px-8">
                <NavLink to="/" className=" hover:text-gray-900">
                    <img
                        src={LogoIntegra}
                        alt="Logo de integra"
                        className=" -my-15 w-auto h-40 sm:h-60"
                    />
                </NavLink>

                <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 md:hidden"
                    aria-label="Abrir menú"
                    aria-expanded={mobileOpen}
                    onClick={() => setMobileOpen((current) => !current)}
                >
                    <span className="text-2xl leading-none">{mobileOpen ? "✕" : "☰"}</span>
                </button>

                <ul className="hidden items-center gap-8 text-base font-bold text-gray-600 md:flex lg:gap-12 lg:text-xl">
                    <li>
                        <NavLink to="/" end className={linkClassName}>
                            Inicio
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/catalogo" className={linkClassName}>
                            Catálogo
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/casosExito" className={linkClassName}>
                            Casos de Éxito
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/nosotros" className={linkClassName}>
                            Quiénes Somos
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacto" className={linkClassName}>
                            Contacto
                        </NavLink>
                    </li>
                </ul>
            </div>

            {mobileOpen && (
                <div className="border-t border-black/5 bg-fondo-oscuro/95 backdrop-blur md:hidden">
                    <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 text-base font-bold text-gray-600 sm:px-6">
                        <li>
                            <NavLink to="/" end className={linkClassName}>
                                Inicio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/catalogo" className={linkClassName}>
                                Catálogo
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/casosExito" className={linkClassName}>
                                Casos de Éxito
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/nosotros" className={linkClassName}>
                                Quiénes Somos
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contacto" className={linkClassName}>
                                Contacto
                            </NavLink>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
