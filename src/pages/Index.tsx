import Hero from "@/components/Hero";
import PropertyCard from "@/components/PropertyCard";

const Index = () => {
  const featuredProperties = [
    {
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
      title: "Modern Mountain Retreat",
      location: "Aspen, Colorado",
      price: "$2,450,000",
    },
    {
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
      title: "Luxury Glass House",
      location: "Beverly Hills, CA",
      price: "$5,900,000",
    },
    {
      image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2",
      title: "Urban Penthouse",
      location: "Manhattan, NY",
      price: "$3,750,000",
    },
  ];

  return (
    <div className="min-h-screen bg-estate-100">
      <Hero />
      
      <section className="py-20 container mx-auto px-4">
        <h2 className="text-4xl font-display text-estate-800 mb-12 text-center">
          Featured Properties
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Index;