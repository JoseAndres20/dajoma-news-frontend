"use client";

export default function NewsSkeleton() {
    return (
        <div className="bg-white dark:bg-gray-900 shadow-lg rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 animate-pulse">
            {/* Imagen */}
            <div className="h-48 bg-gray-200 dark:bg-gray-700 w-full" />

            {/* Contenido */}
            <div className="p-5 space-y-3">
                <div className="h-4 w-24 bg-gray-300 dark:bg-gray-600 rounded" />
                <div className="h-6 w-3/4 bg-gray-300 dark:bg-gray-600 rounded" />
                <div className="h-4 w-full bg-gray-300 dark:bg-gray-600 rounded" />
                <div className="h-4 w-2/3 bg-gray-300 dark:bg-gray-600 rounded" />
                <div className="h-3 w-16 bg-gray-300 dark:bg-gray-600 rounded mt-4" />
            </div>
        </div>
    );
}
