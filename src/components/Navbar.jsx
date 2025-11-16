import { Menu, Search } from "lucide-react";

export default function Navbar({ onSearch }) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-lg hover:bg-black/5">
            <Menu className="w-5 h-5 text-gray-700" />
          </button>
          <a href="#" className="font-extrabold text-xl tracking-tight">
            Flames News
          </a>
        </div>

        <div className="hidden sm:flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1.5 w-full max-w-md">
          <Search className="w-4 h-4 text-gray-500" />
          <input
            onChange={(e) => onSearch?.(e.target.value)}
            type="text"
            placeholder="Search headlines..."
            className="bg-transparent outline-none w-full text-sm"
          />
        </div>

        <div className="flex items-center gap-3">
          <a href="#" className="text-sm font-medium hover:underline">
            World
          </a>
          <a href="#" className="text-sm font-medium hover:underline">
            Business
          </a>
          <a href="#" className="text-sm font-medium hover:underline">
            Tech
          </a>
        </div>
      </div>
    </header>
  );
}
