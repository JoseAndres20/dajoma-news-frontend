import { News } from "@/types/news";

/**
 * Filtra noticias en base a un query
 */
export function filterNews(news: News[], query: string): News[] {
    if (!query) return news;

    const lower = query.toLowerCase();

    return news.filter(
        (n) =>
            n.title.toLowerCase().includes(lower) ||
            n.textContent?.toLowerCase().includes(lower) ||
            n.source.toLowerCase().includes(lower)
    );
}
