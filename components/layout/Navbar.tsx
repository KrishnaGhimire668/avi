export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="text-xl font-bold text-white">AVI</h1>

        <div className="hidden gap-8 text-gray-300 md:flex">
          <a href="#">Gallery</a>
          <a href="#">Services</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>

        <button className="rounded-full bg-yellow-500 px-5 py-2 font-semibold text-black">
          Book Now
        </button>
      </nav>
    </header>
  );
}