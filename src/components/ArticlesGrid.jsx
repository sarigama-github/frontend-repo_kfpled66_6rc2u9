import { useEffect, useMemo, useState } from "react";
import ArticleCard from "./ArticleCard";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || "";

export default function ArticlesGrid({ query }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const filtered = useMemo(() => {
    if (!query) return articles;
    const q = query.toLowerCase();
    return articles.filter(
      (a) => a.title.toLowerCase().includes(q) || (a.summary || "").toLowerCase().includes(q)
    );
  }, [articles, query]);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const res = await fetch(`${BACKEND_URL}/api/articles?limit=60&refresh=true`);
        const data = await res.json();
        setArticles(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="h-64 bg-gray-100 animate-pulse rounded-xl" />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filtered.map((a) => (
        <ArticleCard key={a.id || a.link} article={a} />
      ))}
    </div>
  );
}
