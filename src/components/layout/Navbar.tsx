export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="text-xl font-bold tracking-widest text-white">
          AVI
        </h1>

        <ul className="hidden gap-8 text-sm text-gray-300 md:flex">
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <button className="rounded-full bg-yellow-500 px-5 py-2 text-sm font-semibold text-black hover:bg-yellow-400">
          Book Now
        </button>
      </nav>
    </header>
  );
}