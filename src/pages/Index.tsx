import Hero from "@/components/Hero";
import PropertyGrid from "@/components/PropertyGrid";
import AboutUs from "@/components/AboutUs";
import OurVision from "@/components/OurVision";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      
      <section className="py-32">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h2 className="text-5xl font-display text-estate-800 mb-16">Discover</h2>
          <PropertyGrid />
        </div>
      </section>

      <AboutUs />
      <OurVision />
      <Testimonials />
    </div>
  );
};

export default Index;