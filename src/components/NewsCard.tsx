"use client";

import { News } from "@/types/news";
import { formatDate } from "@/utils/data";

export default function NewsCard({
    title,
    source,
    url,
    createdAt,
    imageUrl,
    textContent,
}: News) {
    if (!imageUrl || !imageUrl.startsWith("http")) {
        return null;
    }

    return (
        <div className="bg-white dark:bg-gray-900 shadow-lg rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group relative">
            {/* Imagen */}
            <div className="relative w-full h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            {/* Contenido */}
            <div className="p-5 flex flex-col">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full mb-2">
                    {source}
                </span>

                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {title}
                </h2>

                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 flex-grow line-clamp-3">
                    {textContent || "No hay resumen disponible para esta noticia."}
                </p>

                <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 mt-auto pt-3 border-t border-gray-100 dark:border-gray-800">
                    <span>{formatDate(createdAt)}</span>
                    <span className="flex items-center gap-1 group-hover:translate-x-1 transition">
                        Leer más →
                    </span>
                </div>

                <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-10"
                >
                    <span className="sr-only">Leer noticia completa</span>
                </a>
            </div>
        </div>
    );
}
