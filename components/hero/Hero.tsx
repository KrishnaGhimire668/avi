export default function Hero() {
  return (
    <section className="relative h-screen">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <p className="mb-3 text-yellow-400 uppercase tracking-[0.3em]">
          Premium Barber
        </p>

        <h1 className="text-5xl md:text-7xl font-bold text-white">
          Mastering the Art
          <br />
          of Grooming
        </h1>

        <p className="mt-6 text-gray-300">
          Precision. Style. Confidence.
        </p>

        <button className="mt-8 rounded-full bg-yellow-500 px-6 py-3 font-semibold text-black">
          Book Appointment
        </button>
      </div>
    </section>
  );
}