"use client";

import { useEffect, useState, useCallback } from "react";
import { supabase } from "@/lib/supabaseClient";
import { News } from "@/types/news";

const PAGE_SIZE = 20;

export function useNews() {
    const [news, setNews] = useState<News[]>([]);
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(0);

    const loadMore = useCallback(async () => {
        if (loading || !hasMore) return;
        setLoading(true);

        const startIndex = page * PAGE_SIZE;
        const endIndex = startIndex + PAGE_SIZE - 1;

        const { data, error } = await supabase
            .from("news")
            .select("id, title, summary, source, url, created_at, image_url")
            .order("created_at", { ascending: false })
            .range(startIndex, endIndex);

        if (error) {
            console.error("❌ Error cargando noticias:", error.message);
        } else {
            const mapped = (data || []).map((item) => ({
                id: item.id,
                title: item.title,
                summary: item.summary,
                source: item.source,
                url: item.url,
                createdAt: item.created_at,
                imageUrl: item.image_url,
            })) as News[];

            setNews((prev) => [...prev, ...mapped]);

            if (!data || data.length < PAGE_SIZE) {
                setHasMore(false);
            } else {
                setPage((prev) => prev + 1);
            }
        }

        setLoading(false);
    }, [loading, hasMore, page]);

    useEffect(() => {
        loadMore(); // primera carga
    }, []);

    return { news, loadMore, hasMore, loading };
}
