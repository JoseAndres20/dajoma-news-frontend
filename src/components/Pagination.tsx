"use client";

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function Pagination({
    currentPage,
    totalPages,
    onPageChange,
}: PaginationProps) {
    if (totalPages <= 1) return null;

    return (
        <div className="flex justify-center items-center gap-4 mt-10">
            {/* Botón Anterior */}
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-lg bg-red-500 text-white font-medium disabled:opacity-50"
            >
                ← Anterior
            </button>

            {/* Info de página */}
            <span className="text-gray-700 dark:text-gray-300 font-semibold">
                Página {currentPage} de {totalPages}
            </span>

            {/* Botón Siguiente */}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 rounded-lg bg-green-500 text-white font-medium disabled:opacity-50"
            >
                Siguiente →
            </button>
        </div>
    );
}
