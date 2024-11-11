import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className="relative h-[90vh] min-h-[600px] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-display text-white mb-6 animate-fadeIn">
          Experience<br />Elevated Living
        </h1>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fadeIn">
          Discover exceptional properties and sustainable living spaces designed for modern lifestyles.
        </p>
        <div className="animate-fadeIn">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Hero;