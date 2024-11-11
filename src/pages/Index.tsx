import Hero from "@/components/Hero";
import PropertyGrid from "@/components/PropertyGrid";
import AboutUs from "@/components/AboutUs";
import OurVision from "@/components/OurVision";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  return (
    <div className="min-h-screen bg-estate-100">
      <Hero />
      
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display text-estate-800 mb-4">Discover</h2>
          <p className="text-estate-500 mb-12 max-w-2xl">
            Explore our collection of exceptional properties designed for modern living.
          </p>
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