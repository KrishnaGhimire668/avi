const services = [
  {
    title: "Hair Design",
    description: "Precision cuts and styling tailored to your personality.",
  },
  {
    title: "Beauty Studio",
    description: "Professional beauty and grooming services for everyone.",
  },
  {
    title: "Color & Treatment",
    description: "Expert coloring and nourishing treatments for healthy, beautiful hair.",
  },
];

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">
          Services
        </p>
        <h2 className="mt-3 text-4xl font-bold text-white">
          Crafted For Every Style
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl border border-white/10 bg-[#14141A] p-8 transition hover:-translate-y-2 hover:border-yellow-400"
          >
            <h3 className="mb-3 text-2xl font-semibold text-white">
              {service.title}
            </h3>
            <p className="text-gray-400">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
