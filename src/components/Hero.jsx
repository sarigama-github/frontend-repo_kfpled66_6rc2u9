export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-transparent pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col gap-4">
          <p className="uppercase tracking-widest text-xs text-gray-500">Top stories</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Today’s essential journalism, curated from the world’s most trusted sources
          </h1>
          <p className="text-gray-600 max-w-2xl">
            Real-time headlines from BBC, Reuters, AP and more — aggregated via public feeds and linked straight to the original reporting.
          </p>
        </div>
      </div>
    </section>
  );
}
