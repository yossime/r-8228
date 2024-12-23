import { Card, CardContent } from "./ui/card";

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
}

const PropertyCard = ({ image, title, location }: PropertyCardProps) => {
  return (
    <Card className="overflow-hidden group cursor-pointer border-none">
      <CardContent className="p-0">
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        {/* <div className="pt-4">
          <h3 className="text-lg font-medium text-estate-800">{title}</h3>
        </div> */}
      </CardContent>
    </Card>
  );
};

export default PropertyCard;