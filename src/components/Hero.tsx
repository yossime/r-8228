import { useTranslation } from "react-i18next";
import SearchBar from "./SearchBar";
import { Button } from "./ui/button";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="relative h-screen min-h-[600px] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1591825729269-caeb344f6df2')",
        }}
      >
        <div className="absolute inset-0 bg-black/30" />
      </div>
      <div className="relative z-10 container mx-auto px-4 md:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-display text-white mb-4 md:mb-8 leading-tight max-w-3xl mx-auto">
          {t("hero.title")}
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 md:mb-12 max-w-2xl mx-auto px-4">
          {t("hero.subtitle")}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto px-4">
          <Button 
            size="lg" 
            onClick={() => document.getElementById('quote')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full sm:w-auto"
          >
            {t("nav.consultation")}
          </Button>
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default Hero;