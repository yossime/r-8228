import { Check } from "lucide-react";

const OurVision = () => {
  const values = [
    {
      title: "Elevated Living Spaces",
      description: "Creating exceptional living environments that blend luxury with functionality.",
    },
    {
      title: "Sustainable Communities",
      description: "Building eco-conscious developments that respect and enhance their surroundings.",
    },
    {
      title: "Expert Guidance",
      description: "Providing professional expertise and personalized service at every step.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-display text-estate-800 mb-4">Our Vision</h2>
        <p className="text-estate-500 mb-12 max-w-2xl">
          Our mission is to create innovative, sustainable communities that set new standards.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="mt-1">
                <Check className="w-5 h-5 text-estate-800" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-estate-800 mb-2">{value.title}</h3>
                <p className="text-estate-500">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurVision;