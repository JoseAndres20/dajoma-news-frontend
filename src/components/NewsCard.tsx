"use client";

import Image from "next/image";
import { News } from "@/types/news";
import { useState } from "react";
import { formatDate } from "@/utils/data";

export default function NewsCard({
    title,
    summary,
    source,
    url,
    createdAt,
    imageUrl,
}: News) {
    const [imageError, setImageError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className="bg-white dark:bg-gray-900 shadow-lg rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group relative">
            {/* Imagen */}
            <div className="relative w-full h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
                {imageUrl && !imageError ? (
                    <>
                        {isLoading && (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                            </div>
                        )}
                        <Image
                            src={imageUrl}
                            alt={title}
                            fill
                            className={`object-cover transition-opacity duration-300 group-hover:scale-105 ${isLoading ? "opacity-0" : "opacity-100"
                                }`}
                            onLoad={() => setIsLoading(false)}
                            onError={() => {
                                setImageError(true);
                                setIsLoading(false);
                            }}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </>
                ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-700">
                        <p className="text-sm text-gray-500 dark:text-gray-400">Sin imagen</p>
                    </div>
                )}
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
                    {summary || "No hay resumen disponible para esta noticia."}
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
