import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/productSection";
import ShopBysection from "@/components/ShopBySection";
import ContactSection from "@/components/ContactSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/FooterSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950">
      <HeroSection />
      <ProductsSection />
      <ShopBysection />
      <ContactSection />
      <AboutSection />
      <Footer />
    </main>
  );
}
