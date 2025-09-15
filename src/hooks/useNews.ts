"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabaseClient";
import { News } from "@/types/news";

export function useNews(limit: number = 20) {
    const [news, setNews] = useState<News[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            const { data, error } = await supabase
                .from("news")
                .select("*")
                .order("created_at", { ascending: false })
                .limit(limit);

            if (error) {
                console.error("❌ Error cargando noticias:", error.message);
            } else {
                setNews(data as News[]);
            }
            setLoading(false);
        };

        fetchNews();
    }, [limit]);

    return { news, loading };
}
