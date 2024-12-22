import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Pergolas = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1621886292650-520f76c747d6')",
          }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-display text-white mb-6">Custom Pergolas</h1>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Transform your outdoor space with our beautifully crafted pergolas. Custom designed and built to your specifications.
          </p>
          <Button 
            size="lg"
            onClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get a Quote
          </Button>
        </div>
      </div>

      <div className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-display text-estate-800 mb-6">Why Choose Our Pergolas?</h2>
              <ul className="space-y-4 text-estate-600">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Custom designed to match your home's architecture</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Premium materials for lasting durability</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Professional installation by expert craftsmen</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Various style options to suit your preferences</span>
                </li>
              </ul>
            </div>
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1600566752355-35792bedcfea"
                alt="Custom pergola installation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Pergolas;