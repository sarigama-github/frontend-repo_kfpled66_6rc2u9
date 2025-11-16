import { Globe } from "lucide-react";

export default function ArticleCard({ article }) {
  const { title, summary, link, image_url, source_name, published_at } = article;
  const date = published_at ? new Date(published_at) : null;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group grid grid-cols-5 gap-4 bg-white rounded-xl p-4 border border-black/5 hover:shadow-lg transition shadow-sm"
    >
      <div className="col-span-5 sm:col-span-2 overflow-hidden rounded-lg bg-gray-100 aspect-video">
        {image_url ? (
          <img src={image_url} alt="" className="w-full h-full object-cover group-hover:scale-105 transition" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <Globe className="w-6 h-6" />
          </div>
        )}
      </div>
      <div className="col-span-5 sm:col-span-3 flex flex-col gap-2">
        <div className="text-xs text-gray-500 font-medium">{source_name}{date ? ` • ${date.toLocaleString()}` : ""}</div>
        <h3 className="text-lg font-semibold leading-snug group-hover:underline">{title}</h3>
        {summary && (
          <p className="text-sm text-gray-600 line-clamp-3">{summary.replace(/<[^>]+>/g, "")}</p>
        )}
      </div>
    </a>
  );
}
