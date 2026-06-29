import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import LogoIntegra from '../assets/PNG INTEGRA_LOGO MULTI.png';
import LogoBlanco from '../assets/PNG INTEGRA_LOGO BLANCO.png';

export default function Navbar() {
    const [isTop, setIsTop] = useState(true);
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const [pendingScroll, setPendingScroll] = useState(false);
    
    // 1. Estado para rastrear en qué sección de la página estamos
    const [activeSection, setActiveSection] = useState("inicio");

    const isHomePage = location.pathname === "/";
    const isTransparent = isHomePage && isTop;

    // 2. Modificamos para recibir un booleano (isActive) directo
    const getLinkClass = (isActive: boolean): string => {
        // Agregamos text-left y w-full para que el botón de Nosotros se alinee igual que los NavLinks
        const baseClasses = "block py-2 text-left w-full transition-colors cursor-pointer";
        
        if (isActive) return `${baseClasses} text-orange-500 font-bold`;
        
        return `${baseClasses} ${
            isTransparent 
                ? "text-white/80 hover:text-white" 
                : "text-texto hover:text-orange-500" 
        }`;
    };

    const scrollToInicio = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (location.pathname === "/") {
            e.preventDefault(); // Evita que React Router intente navegar
            window.scrollTo({ top: 0, behavior: "smooth" }); // Sube la pantalla suavemente
        } else {
            window.scrollTo(0, 0); // Si vienes de otra página, asegúrate de aparecer hasta arriba
        }
        setMobileOpen(false); // Cierra el menú móvil si estaba abierto
    };

    useEffect(() => {
        const onScroll = () => {
            setIsTop(window.scrollY === 0);
            
            // Lógica para detectar si ya bajamos a la sección "nosotros"
            if (location.pathname === "/") {
                const nosotrosEl = document.getElementById("nosotros");
                if (nosotrosEl) {
                    const rect = nosotrosEl.getBoundingClientRect();
                    // Si el div de nosotros llega a la mitad de la pantalla, lo marcamos activo
                    if (rect.top <= window.innerHeight * 0.5 && rect.bottom >= 0) {
                        setActiveSection("nosotros");
                    } else {
                        setActiveSection("inicio");
                    }
                } else {
                    setActiveSection("inicio");
                }
            } else {
                setActiveSection("");
            }
        };
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [location.pathname]);

    useEffect(() => {
        setMobileOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        if (pendingScroll && location.pathname === "/") {
            setTimeout(() => {
                const el = document.getElementById("nosotros");
                if (el) el.scrollIntoView({ behavior: "smooth" });
            }, 50);
            setPendingScroll(false);
        }
    }, [pendingScroll, location.pathname]);

    // const scrollToNosotros = () => {
    //     if (location.pathname === "/") {
    //         const el = document.getElementById("nosotros");
    //         if (el) el.scrollIntoView({ behavior: "smooth" });
    //         setMobileOpen(false);
    //     } else {
    //         setPendingScroll(true);
    //         navigate("/");
    //         setMobileOpen(false);
    //     }
    // };

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 border-b border-white/10 transition-all duration-300 py-2
                ${isTransparent ? "bg-transparent" : "bg-fondo-claro backdrop-blur shadow-md "}`} 
        >
            <div className="mx-auto flex max-w-[90%] items-center justify-between px-4 sm:px-2 lg:px-8">
                <NavLink to="/" className="hover:opacity-80 transition-opacity">
                   <img
                        src={isTransparent ? LogoBlanco : LogoIntegra} 
                        alt="Logo de Integra"
                        className="-my-22  w-auto h-40 sm:h-60 transition-all duration-100"
                    />
                </NavLink>

                <button
                    type="button"
                    className={`inline-flex items-center justify-center rounded-md p-2 md:hidden transition-colors ${
                        isTransparent ? "text-white" : "text-texto"
                    }`}
                    aria-label="Abrir menú"
                    aria-expanded={mobileOpen}
                    onClick={() => setMobileOpen((current) => !current)}
                >
                    <span className="text-2xl leading-none">{mobileOpen ? "✕" : "☰"}</span>
                </button>

                <ul className="hidden items-center whitespace-nowrap font-medium md:flex md:gap-4 md:text-sm lg:gap-8 lg:text-base xl:gap-12 xl:text-lg">
                    <li>
                        <NavLink 
                            to="/" 
                            end 
                            onClick={scrollToInicio} 
                            className={({ isActive }) => getLinkClass(isActive && activeSection === "inicio")}
                        >
                            Inicio
                        </NavLink>
                    </li>
                    {/* <li>
                        <button onClick={scrollToNosotros} className={getLinkClass(location.pathname === "/" && activeSection === "nosotros")}>
                            Quiénes Somos
                        </button>
                    </li> */}
                    <li>
                        <NavLink to="/catalogo" className={({ isActive }) => getLinkClass(isActive)}>
                            Catálogo
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/casosExito" className={({ isActive }) => getLinkClass(isActive)}>
                            Casos de Éxito
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacto" className={({ isActive }) => getLinkClass(isActive)}>
                            Contacto
                        </NavLink>
                    </li>
                </ul>
            </div>

            {mobileOpen && (
                <div className="border-t border-white/10 bg-transparent backdrop-blur md:hidden">
                    <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 text-base sm:px-6">
                        <li>
                            <NavLink 
                                to="/" 
                                end 
                                onClick={scrollToInicio} 
                                className={({ isActive }) => getLinkClass(isActive && activeSection === "inicio")}
                            >
                                Inicio
                            </NavLink>
                        </li>
                         {/* <li>
                            <button onClick={scrollToNosotros} className={getLinkClass(location.pathname === "/" && activeSection === "nosotros")}>
                                Quiénes Somos
                            </button>
                        </li> */}
                        <li>
                            <NavLink to="/catalogo" onClick={() => setMobileOpen(false)} className={({ isActive }) => getLinkClass(isActive)}>
                                Catálogo
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/casosExito" onClick={() => setMobileOpen(false)} className={({ isActive }) => getLinkClass(isActive)}>
                                Casos de Éxito
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contacto" onClick={() => setMobileOpen(false)} className={({ isActive }) => getLinkClass(isActive)}>
                                Contacto
                            </NavLink>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}