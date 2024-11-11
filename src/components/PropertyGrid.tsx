import PropertyCard from "./PropertyCard";

const PropertyGrid = () => {
  const properties = [
    {
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742",
      title: "Modern Forest Retreat",
      location: "Aspen, Colorado",
      price: "$2,450,000",
    },
    {
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833",
      title: "Glass House",
      location: "Beverly Hills, CA",
      price: "$5,900,000",
    },
    {
      image: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2",
      title: "Urban Penthouse",
      location: "Manhattan, NY",
      price: "$3,750,000",
    },
    {
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
      title: "Lakefront Villa",
      location: "Lake Tahoe, NV",
      price: "$4,200,000",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {properties.map((property, index) => (
        <PropertyCard key={index} {...property} />
      ))}
    </div>
  );
};

export default PropertyGrid;