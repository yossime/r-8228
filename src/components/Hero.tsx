import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className="relative h-screen min-h-[600px] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625')",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="relative z-10 container mx-auto px-8">
        <h1 className="text-6xl md:text-8xl font-display text-white mb-8 leading-tight max-w-3xl">
          Experience Elevated Living
        </h1>
        <p className="text-xl text-white/90 mb-12 max-w-2xl">
          Discover exceptional properties and sustainable living spaces designed for modern lifestyles.
        </p>
        <SearchBar />
      </div>
    </div>
  );
};

export default Hero;