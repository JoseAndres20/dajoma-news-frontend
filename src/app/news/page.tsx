"use client";

import { useNews } from "@/hooks/useNews";
import NewsList from "@/components/NewsList";

export default function NewsPage() {
    const { news, loading } = useNews(); 

    return (
        <main className="min-h-screen bg-gray-50 dark:bg-gray-950 py-10 px-5">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold text-center text-blue-600 dark:text-blue-400 mb-10">
                    📰 Noticias desde Supabase
                </h1>

                <NewsList news={news} loading={loading} />
            </div>
        </main>
    );
}
