"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
    Home, 
    Newspaper, 
    Bot, 
    Monitor, 
    Rocket, 
    Info, 
    Search, 
    Menu, 
    X 
} from "lucide-react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    // Detectar scroll para cambiar el estilo del navbar
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Cerrar menú móvil al cambiar de ruta
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [pathname]);

    const navLinks = [
        { href: "/", label: "Inicio", icon: Home },
        { href: "/about", label: "Sobre", icon: Info }
    ];

    const isActiveLink = (href: string) => {
        if (href === "/") return pathname === "/";
        return pathname.startsWith(href);
    };

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                isScrolled 
                    ? 'bg-slate-900/95 backdrop-blur-md border-b border-slate-700 shadow-lg' 
                    : 'bg-slate-900 border-b border-slate-700'
            }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo + Nombre */}
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="relative">
                                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110">
                                    <span className="text-white font-bold text-lg">DN</span>
                                </div>
                                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity blur-sm"></div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent tracking-wide">
                                    DAJOMA_NEWS
                                </span>
                                <span className="text-xs text-gray-400 -mt-1 hidden sm:block">
                                    Tech & Innovation
                                </span>
                            </div>
                        </Link>

                        {/* Navigation Links - Desktop */}
                        <div className="hidden md:flex items-center space-x-1">
                            {navLinks.map((link) => {
                                const IconComponent = link.icon;
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                                            isActiveLink(link.href)
                                                ? 'text-blue-400 bg-blue-500/10'
                                                : 'text-gray-300 hover:text-white hover:bg-slate-800'
                                        }`}
                                    >
                                        <IconComponent size={16} />
                                        {link.label}
                                        {isActiveLink(link.href) && (
                                            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-400 rounded-full"></div>
                                        )}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Search Button & Mobile Menu Button */}
                        <div className="flex items-center gap-3">
                            {/* Search Button */}
                            <button className="hidden sm:flex items-center gap-2 px-3 py-2 text-gray-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-all text-sm">
                                <Search size={16} />
                                <span className="hidden lg:inline">Buscar</span>
                            </button>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors"
                                aria-label="Toggle menu"
                            >
                                {isMobileMenuOpen ? (
                                    <X size={20} className="text-gray-300" />
                                ) : (
                                    <Menu size={20} className="text-gray-300" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <div className={`md:hidden transition-all duration-300 overflow-hidden ${
                        isMobileMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
                    }`}>
                        <div className="pt-4 space-y-2 border-t border-slate-700">
                            {navLinks.map((link) => {
                                const IconComponent = link.icon;
                                return (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                                            isActiveLink(link.href)
                                                ? 'text-blue-400 bg-blue-500/10'
                                                : 'text-gray-300 hover:text-white hover:bg-slate-800'
                                        }`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        <IconComponent size={18} />
                                        {link.label}
                                    </Link>
                                );
                            })}
                            <div className="pt-2 mt-4 border-t border-slate-700">
                                <button className="flex items-center gap-3 px-4 py-3 w-full text-left text-gray-300 hover:text-white hover:bg-slate-800 rounded-lg transition-all">
                                    <Search size={18} />
                                    <span>Buscar noticias</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Spacer para compensar el navbar fijo */}
            <div className="h-16"></div>

            {/* Overlay para cerrar menú móvil */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/20 z-40 md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                ></div>
            )}
        </>
    );
}