import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ArticlesGrid from "./components/ArticlesGrid";

function App() {
  const [query, setQuery] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white text-gray-900">
      <Navbar onSearch={setQuery} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        <Hero />
        <ArticlesGrid query={query} />
      </main>
      <footer className="border-t border-black/5 py-8 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-500">
          Headlines are aggregated via public RSS feeds and link to the original publishers. All trademarks and copyrights belong to their respective owners.
        </div>
      </footer>
    </div>
  );
}

export default App;
