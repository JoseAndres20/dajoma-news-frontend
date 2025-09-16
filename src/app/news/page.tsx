"use client";

import NewsList from "@/components/NewsList";
import Pagination from "@/components/Pagination";
import { useNewsPaginated } from "@/hooks/useNewsPaginated";

export default function NewsPage() {
    const { news, page, totalPages, setPage, loading } = useNewsPaginated();

    return (
        <main className="min-h-screen bg-gray-50 dark:bg-gray-950 py-10 px-5">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-400 mb-10">
                    📰 Noticias con Paginación
                </h1>

                <NewsList news={news} loading={loading} loadMore={function (): void {
                    throw new Error("Function not implemented.");
                }} hasMore={false} />

                {/* Paginación */}
                <Pagination
                    currentPage={page}
                    totalPages={totalPages}
                    onPageChange={(p) => setPage(p)}
                />
            </div>
        </main>
    );
}
