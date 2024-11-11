import { MapPin } from "lucide-react";
import { Card, CardContent, CardFooter } from "./ui/card";

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
}

const PropertyCard = ({ image, title, location, price }: PropertyCardProps) => {
  return (
    <Card className="overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-lg">
      <CardContent className="p-0">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-estate-800">{title}</h3>
          <div className="flex items-center mt-2 text-estate-500">
            <MapPin className="w-4 h-4 mr-1" />
            <span className="text-sm">{location}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="px-4 py-3 bg-estate-100">
        <span className="text-lg font-semibold text-estate-800">{price}</span>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;