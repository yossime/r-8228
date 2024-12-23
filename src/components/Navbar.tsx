import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="absolute w-full z-50 bg-opacity-60 bg-black">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between h-20">
          <Link
            to="/"
            className="text-5xl font-sans-serif  text-white tracking-wide uppercase mr-6"
          >
            בנימין
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/pergolas"
              className="text-white hover:text-gray-300 transition-colors"
            >
              {t("nav.pergolas")}
            </Link>
            <Link
              to="/winter-closures"
              className="text-white hover:text-gray-300 transition-colors"
            >
              {t("nav.winterClosures")}
            </Link>
            <Link
              to="/gallery"
              className="text-white hover:text-gray-300 transition-colors"
            >
              {t("nav.gallery")}
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-gray-300 transition-colors"
            >
              {t("nav.contact")}
            </Link>
            <LanguageSwitcher />
            <Button
              variant="ghost"
              className="text-white border-white hover:bg-black/30 hover:text-gray-300
 "
              onClick={() =>
                document
                  .getElementById("quote")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {t("nav.consultation")}
            </Button>
          </div>

          <div className="md:hidden flex items-center space-x-4">
            <LanguageSwitcher />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  <Link
                    to="/pergolas"
                    className="text-lg text-black hover:text-gray-700"
                  >
                    {t("nav.pergolas")}
                  </Link>
                  <Link
                    to="/winter-closures"
                    className="text-lg text-black hover:text-gray-700"
                  >
                    {t("nav.winterClosures")}
                  </Link>
                  <Link
                    to="/gallery"
                    className="text-lg text-black hover:text-gray-700"
                  >
                    {t("nav.gallery")}
                  </Link>
                  <Link
                    to="/contact"
                    className="text-lg text-black hover:text-gray-700"
                  >
                    {t("nav.contact")}
                  </Link>
                  <Button
                    onClick={() =>
                      document
                        .getElementById("quote")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    className="w-full text-black bg-gray-200 hover:bg-gray-300"
                  >
                    {t("nav.consultation")}
                  </Button>
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
