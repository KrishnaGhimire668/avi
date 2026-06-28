const images = Array.from({ length: 6 });

export default function Gallery() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">
          Gallery
        </p>

        <h2 className="mt-3 text-4xl font-bold text-white">
          Our Work
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {images.map((_, index) => (
          <div
            key={index}
            className="aspect-square rounded-2xl bg-[#14141A] border border-white/10"
          />
        ))}
      </div>
    </section>
  );
}