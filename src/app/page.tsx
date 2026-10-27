import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import StorySection from "@/components/StorySection";
import WhyVisitSection from "@/components/WhyVisitSection";
import GallerySection from "@/components/GallerySection";
import VisitSection from "@/components/VisitSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <MenuSection />
        <StorySection />
        <WhyVisitSection />
        <GallerySection />
        <VisitSection />
      </main>
      <Footer />
    </>
  );
}
