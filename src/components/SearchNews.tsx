"use client";

import { useState } from "react";
import { Search } from "lucide-react";

interface SearchNewsProps {
    onSearch: (query: string) => void;
}

export default function SearchNews({ onSearch }: SearchNewsProps) {
    const [query, setQuery] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex items-center justify-center mb-8"
        >
            <div className="flex items-center w-full max-w-lg bg-gray-100 dark:bg-gray-800 border border-gray-400 dark:border-gray-600 rounded-xl shadow-md px-4 py-2">
                <Search className="text-gray-500 dark:text-gray-300 mr-2" size={20} />
                <input
                    type="text"
                    placeholder="🔎 Buscar noticias..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="w-full bg-transparent outline-none text-gray-900 dark:text-gray-200 placeholder-gray-500"
                />
                <button
                    type="submit"
                    className="ml-3 px-4 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition"
                >
                    Buscar
                </button>
            </div>
        </form>
    );
}
