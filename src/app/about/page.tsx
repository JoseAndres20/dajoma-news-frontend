"use client";

import { Brain, Laptop, Database, Shield, Github, Linkedin, Sparkles, Newspaper, User, Briefcase } from "lucide-react";
import { useState, useEffect } from "react";

export default function AboutPage() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-950 py-16 px-5">
            <div className="max-w-4xl mx-auto">
                {/* Header con efecto visual mejorado */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center justify-center p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-6">
                        <Newspaper className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Centralizando el{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Mundo Tech
                            </span>
                            <Sparkles className="absolute -top-3 -right-5 w-5 h-5 text-yellow-400" />
                        </span>
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        DAJOMA_NEWS es una plataforma creada para mantenerte al día con lo más
                        relevante en <span className="font-semibold text-blue-600 dark:text-blue-400">Inteligencia Artificial</span>,{" "}
                        <span className="font-semibold text-green-600 dark:text-green-400">Programación</span>,{" "}
                        <span className="font-semibold text-purple-600 dark:text-purple-400">Big Data</span> y{" "}
                        <span className="font-semibold text-red-600 dark:text-red-400">Ciberseguridad</span>.
                    </p>
                </div>

                {/* Temáticas con diseño de tarjetas mejorado */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                    {[
                        { icon: Brain, title: "IA & Machine Learning", description: "Descubre los últimos avances en inteligencia artificial y automatización.", color: "blue" },
                        { icon: Laptop, title: "Programación", description: "Frameworks modernos, buenas prácticas y tendencias en desarrollo.", color: "green" },
                        { icon: Database, title: "Big Data", description: "Gestión y análisis de grandes volúmenes de datos con tecnologías de vanguardia.", color: "purple" },
                        { icon: Shield, title: "Ciberseguridad", description: "Noticias clave para proteger sistemas y anticipar amenazas digitales.", color: "red" }
                    ].map((item, index) => (
                        <div
                            key={index}
                            className={`relative group p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700 overflow-hidden`}
                        >
                            <div className={`absolute top-0 left-0 w-1 h-full bg-${item.color}-500`}></div>
                            <div className={`inline-flex items-center justify-center p-3 rounded-xl bg-${item.color}-100 dark:bg-${item.color}-900/20 mb-4`}>
                                <item.icon className={`w-6 h-6 text-${item.color}-600 dark:text-${item.color}-400`} />
                            </div>
                            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{item.title}</h2>
                            <p className="text-gray-600 dark:text-gray-400 text-sm">{item.description}</p>
                        </div>
                    ))}
                </div>

                {/* Autor con diseño mejorado */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 shadow-lg relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 -mt-16 -mr-16 bg-blue-200 dark:bg-blue-800 rounded-full opacity-50"></div>
                    <div className="relative z-10">
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                            <div className="flex-shrink-0">
                                <div className="relative">
                                    <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center border-4 border-white dark:border-gray-800 shadow-md">
                                        <User className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1">
                                        <Sparkles className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                            </div>

                            <div className="text-center md:text-left">
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center justify-center md:justify-start gap-2">
                                    Elaborado por <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">José Andrés Acuña Rodríguez</span>
                                </h2>
                                <p className="text-gray-600 dark:text-gray-400 mb-5 max-w-md">
                                    Desarrollador apasionado por la tecnología y la innovación, creando soluciones que conectan e informan.
                                </p>

                                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                                    <a
                                        href="https://github.com/JoseAndres20"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
                                    >
                                        <Github className="w-4 h-4" /> GitHub
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/joseandres-acuna"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
                                    >
                                        <Linkedin className="w-4 h-4" /> LinkedIn
                                    </a>
                                    <a
                                        href="https://JoseAndres20.github.io"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md"
                                    >
                                        <Briefcase className="w-4 h-4" /> Portafolio
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer decorativo */}
                <div className="text-center mt-12">
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                        Hecho para la comunidad tech
                    </p>
                </div>
            </div>
        </main>
    );
}