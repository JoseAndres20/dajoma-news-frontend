"use client";
import { Github, Linkedin, Globe } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-gray-300 border-t border-slate-700 mt-10">
            <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-4">

                {/* Texto */}
                <div className="text-center md:text-left">
                    <p className="text-sm font-medium">
                        © {new Date().getFullYear()} DAJOMA_NEWS — Tech & Innovation
                    </p>
                    <p className="text-xs text-gray-400">
                        Creado por José Andrés Acuña Rodríguez
                    </p>
                </div>

                {/* Links sociales */}
                <div className="flex gap-4">
                    <a
                        href="https://github.com/JoseAndres20"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/joseandres-acuna"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a
                        href="https://JoseAndres20.github.io"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors"
                    >
                        <Globe size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
