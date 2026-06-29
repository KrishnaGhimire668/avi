import Image from "next/image";

const images = [
  "/images/gallery/01.jpg",
  "/images/gallery/04.jpg",
];

const videos = [
  "/videos/video-1.mp4",
  "/videos/video-2.mp4",
  "/videos/video-3.mp4",
  "/videos/video-4.mp4",
];

export default function Gallery() {
  return (
    <section id="gallery" className="mx-auto max-w-7xl px-6 py-24">
      <div className="mb-12 text-center">
        <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">
          Gallery
        </p>

        <h2 className="mt-3 text-4xl font-bold text-white">
          Our Work
        </h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Photos */}
        {images.map((image, index) => (
          <div
            key={`image-${index}`}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/10"
          >
            <Image
              src={image}
              alt={`Gallery ${index + 1}`}
              fill
              sizes="(max-width:768px) 100vw, 50vw"
              unoptimized
              className="object-cover"
            />
          </div>
        ))}

        {/* Videos */}
        {videos.map((video, index) => (
          <div
            key={`video-${index}`}
            className="aspect-[4/5] overflow-hidden rounded-2xl border border-white/10"
          >
            <video
              src={video}
              controls
              muted
              loop
              playsInline
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}