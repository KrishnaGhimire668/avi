import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";

export default function Home() {
  return (
    <main className="bg-[#0B0B0F]">
      <Navbar />
      <Hero />
      <Services />
    </main>
  );
}