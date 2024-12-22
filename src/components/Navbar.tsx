import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "./ui/sheet";

const Navbar = () => {
  return (
    <nav className="absolute w-full z-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between h-20">
          <a href="/" className="text-2xl font-display text-white">Elite Pergolas</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#pergolas" className="text-white hover:text-white/80 transition-colors">Pergolas</a>
            <a href="#winter-closures" className="text-white hover:text-white/80 transition-colors">Winter Closures</a>
            <a href="#gallery" className="text-white hover:text-white/80 transition-colors">Gallery</a>
            <a href="#contact" className="text-white hover:text-white/80 transition-colors">Contact</a>
            <Button variant="outline" className="text-black border-white bg-white hover:bg-white/90">
              Free Consultation
            </Button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  <a href="#pergolas" className="text-lg">Pergolas</a>
                  <a href="#winter-closures" className="text-lg">Winter Closures</a>
                  <a href="#gallery" className="text-lg">Gallery</a>
                  <a href="#contact" className="text-lg">Contact</a>
                  <Button className="w-full text-black bg-white hover:bg-white/90">Free Consultation</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;