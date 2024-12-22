import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const WinterClosures = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="relative h-[60vh] min-h-[400px] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1519643381401-22c77e60520e')",
          }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-display text-white mb-6">Winter Balcony Closures</h1>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Extend your living space year-round with our premium winter balcony closure solutions.
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
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-display text-estate-800 mb-6">Benefits of Winter Closures</h2>
              <ul className="space-y-4 text-estate-600">
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Protection from harsh winter weather</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Extended use of your balcony space</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Improved energy efficiency</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">•</span>
                  <span>Clear views with weather-resistant materials</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2 aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1519643381401-22c77e60520e"
                alt="Winter balcony closure"
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

export default WinterClosures;