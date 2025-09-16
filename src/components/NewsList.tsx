"use client";

import NewsCard from "@/components/NewsCard";
import NewsSkeleton from "@/components/skeletons/NewsSkeleton";
import { News } from "@/types/news";

interface NewsListProps {
  news: News[];
  loadMore?: () => void;
  loading: boolean;
}

export default function NewsList({ news, loading }: NewsListProps) {
  if (loading) {
    return (
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <NewsSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (!loading && news.length === 0) {
    return (
      <p className="text-center text-gray-500 dark:text-gray-400">
        No se encontraron noticias 😢
      </p>
    );
  }

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {news.map((item) => (
        <NewsCard key={item.id} {...item} />
      ))}
    </div>
  );
}
