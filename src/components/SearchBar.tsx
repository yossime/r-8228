import { Search } from "lucide-react";
import { Input } from "./ui/input";

const SearchBar = () => {
  return (
    <div className="relative w-full max-w-md bg-white/95 rounded-full overflow-hidden">
      <Input
        type="text"
        placeholder="Search our services..."
        className="pl-12 pr-6 py-6 w-full border-none text-base md:text-lg"
      />
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-estate-400 w-5 h-5" />
    </div>
  );
};

export default SearchBar;