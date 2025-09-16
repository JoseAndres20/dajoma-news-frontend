"use client";

import { useEffect, useRef, useCallback } from "react";
import NewsCard from "@/components/NewsCard";
import { News } from "@/types/news";

interface NewsListProps {
  news: News[];
  loadMore: () => void;
  hasMore: boolean;
  loading: boolean;
}

export default function NewsList({ news, loadMore, hasMore, loading }: NewsListProps) {
  const observer = useRef<IntersectionObserver | null>(null);
  const lastElementRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMore();
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore, loadMore]
  );

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {news.map((item, index) => {
        if (index === news.length - 1) {
          return (
            <div key={item.id} ref={lastElementRef}>
              <NewsCard {...item} />
            </div>
          );
        }
        return (
          <div key={item.id}>
            <NewsCard {...item} />
          </div>
        );
      })}

      {loading && (
        <p className="col-span-full text-center text-gray-500 dark:text-gray-400">
          Cargando más noticias...
        </p>
      )}
    </div>
  );
}
