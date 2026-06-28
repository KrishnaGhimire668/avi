import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import Gallery from "@/components/gallery/Gallery";
import About from "@/components/about/About";
import Contact from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <main className="bg-[#0B0B0F]">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <About />
      <Contact />
      <Footer />



    </main>
  );
}