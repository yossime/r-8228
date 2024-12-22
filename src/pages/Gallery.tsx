import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Gallery = () => {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1621886292650-520f76c747d6",
      title: "Modern Pergola Design",
      category: "Pergolas",
    },
    {
      image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea",
      title: "Luxury Backyard Pergola",
      category: "Pergolas",
    },
    {
      image: "https://images.unsplash.com/photo-1519643381401-22c77e60520e",
      title: "Winter Balcony Enclosure",
      category: "Winter Closures",
    },
    {
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
      title: "Glass Balcony System",
      category: "Winter Closures",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl sm:text-5xl font-display text-estate-800 mb-12 text-center">
            Our Project Gallery
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="aspect-[4/3] overflow-hidden rounded-lg mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-medium text-estate-800 mb-2">{project.title}</h3>
                <p className="text-estate-500">{project.category}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Gallery;