import { useTranslation } from 'react-i18next';
import { Button } from './ui/button';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'he' : 'en';
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'he' ? 'rtl' : 'ltr';
  };

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleLanguage}
      className="text-white border-white hover:bg-white/10"
    >
      {i18n.language === 'en' ? 'עברית' : 'English'}
    </Button>
  );
};

export default LanguageSwitcher;