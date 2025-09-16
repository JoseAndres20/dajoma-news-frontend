"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { News } from "@/types/news";

const PAGE_SIZE = 9;

export function useNewsPaginated() {
    const [news, setNews] = useState<News[]>([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true);

            const from = (page - 1) * PAGE_SIZE;
            const to = from + PAGE_SIZE - 1;

            const { data, error, count } = await supabase
                .from("news")
                .select("id, title, summary, source, url, created_at, image_url,text_content", { count: "exact" })
                .order("created_at", { ascending: false })
                .range(from, to);

            if (error) {
                console.error("❌ Error cargando noticias:", error.message);
                setNews([]);
            } else {
                setNews(
                    (data || []).map((item) => ({
                        id: item.id,
                        title: item.title,
                        summary: item.summary,
                        source: item.source,
                        url: item.url,
                        createdAt: item.created_at,
                        imageUrl: item.image_url,
                        textContent: item.text_content,
                    }))
                );
                setTotalPages(Math.ceil((count || 0) / PAGE_SIZE));
            }

            setLoading(false);
        };

        fetchNews();
    }, [page]);

    return { news, page, totalPages, setPage, loading };
}
