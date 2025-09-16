"use client";

import { useNews } from "@/hooks/useNews";
import NewsList from "@/components/NewsList";

export default function Home() {
  const { news, loading } = useNews(); // ejemplo: 20 noticias

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-950 py-10 px-5">
      <div className="max-w-6xl mx-auto">
        {/* Título principal */}
        <h1 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-10">
          📰News
        </h1>

        {/* Lista de noticias */}
        <NewsList news={news} loading={loading} />
      </div>
    </main>
  );
}
