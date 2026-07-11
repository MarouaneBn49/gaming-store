import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import WhyUs from "@/components/WhyUs";
import Reviews from "@/components/Reviews";
import InstagramSection from "@/components/InstagramSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="bg-dark min-h-screen">
      <Navbar />
      <Hero />
      <Products />
      <WhyUs />
      <Reviews />
      <InstagramSection />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
