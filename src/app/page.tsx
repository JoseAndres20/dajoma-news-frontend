"use client";

import { useState, useEffect } from "react";
import NewsList from "@/components/NewsList";
import Pagination from "@/components/Pagination";
import { useNewsPaginated } from "@/hooks/useNews";
import SearchNews from "@/components/SearchNews";
import { News } from "@/types/news";
import { filterNews } from "@/utils/search"; 

export default function NewsPage() {
  const { news, page, totalPages, setPage, loading } = useNewsPaginated();
  const [filteredNews, setFilteredNews] = useState<News[]>([]);

  // sincronizar cuando llega nueva data
  useEffect(() => {
    setFilteredNews(news);
  }, [news]);

  const handleSearch = (query: string) => {
    setFilteredNews(filterNews(news, query));
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 py-10 px-5">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-400 mb-10">
          📰 Noticias
        </h1>

        {/* Buscador */}
        <SearchNews onSearch={handleSearch} />

        {/* Lista de noticias */}
        <NewsList news={filteredNews} loading={loading} />

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
