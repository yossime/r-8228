import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "he" : "en";
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === "he" ? "rtl" : "ltr";
  };

  const getFlag = () => {
    return i18n.language === "en" ? "🇺🇸" : "🇮🇱";
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center justify-center w-10 h-10 p-0 rounded-full hover:bg-gray-200/20"
    >
      <span>{getFlag()}</span>
    </Button>
  );
};

export default LanguageSwitcher;
