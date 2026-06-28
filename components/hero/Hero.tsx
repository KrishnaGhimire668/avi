export default function Hero() {
  return (
    <section id="home" className="relative h-screen">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 uppercase tracking-[0.35em] text-yellow-400">
          Unisex Salon
        </p>

        <h1 className="text-5xl font-bold text-white md:text-7xl">
          Where Style
          <br />
          Meets Confidence
        </h1>

        <p className="mt-6 max-w-xl text-lg text-gray-300">
          Premium hair, beauty, and grooming services designed to help you look
          and feel your best.
        </p>

        <button className="mt-8 rounded-full bg-yellow-500 px-8 py-3 font-semibold text-black transition hover:bg-yellow-400">
          Book Appointment
        </button>
      </div>
    </section>
  );
}