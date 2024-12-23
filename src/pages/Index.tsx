  import Hero from "@/components/Hero";
  import PropertyGrid from "@/components/PropertyGrid";
  import AboutUs from "@/components/AboutUs";
  import Testimonials from "@/components/Testimonials";
  import Footer from "@/components/Footer";
  import Navbar from "@/components/Navbar";
  import QuoteForm from "@/components/QuoteForm";
  import { useTranslation } from "react-i18next";

  const Index = () => {
      const { t } = useTranslation();
    
    return (
      <div className=" min-h-screen bg-white ">
        <Navbar />
        <Hero />

        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 max-w-6xl text-center">
            <h2 className="text-4xl md:text-5xl font-display text-estate-800 mb-16">
              {t("index.projects")}
            </h2>
            <PropertyGrid />
          </div>
        </section>

        <AboutUs />
        <Testimonials />
        <QuoteForm />
        <Footer />
      </div>
    );
  };

  export default Index;