import { Search } from "lucide-react";
import { Input } from "./ui/input";

const SearchBar = () => {
  return (
    <div className="relative w-full max-w-xl">
      <Input
        type="text"
        placeholder="Search properties by location..."
        className="pl-10 pr-4 py-3 w-full bg-white/90 backdrop-blur-sm border-estate-200"
      />
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-estate-400 w-5 h-5" />
    </div>
  );
};

export default SearchBar;