import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer
      className={"bg-estate-800 text-white py-16 "}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div
          className={`grid grid-cols-1 md:grid-cols-4 gap-8`}
        >
          <div>
            <h3 className="font-display text-xl mb-4">
              {t("footer.companyName")}
            </h3>
            <p className="text-estate-300">{t("footer.description")}</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t("footer.services")}</h4>
            <ul className="space-y-2 text-estate-300">
              <li>
                <a
                  href="#pergolas"
                  className="hover:text-white transition-colors"
                >
                  {t("footer.serviceLinks.pergolas")}
                </a>
              </li>
              <li>
                <a
                  href="#winter-closures"
                  className="hover:text-white transition-colors"
                >
                  {t("footer.serviceLinks.winterClosures")}
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="hover:text-white transition-colors"
                >
                  {t("footer.serviceLinks.gallery")}
                </a>
              </li>
              <li>
                <a
                  href="#consultation"
                  className="hover:text-white transition-colors"
                >
                  {t("footer.serviceLinks.consultation")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer.contact")}</h4>
            <ul className="space-y-2 text-estate-300">
              <li>{t("footer.phone")}</li>
              <li>{t("footer.email")}</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-12 pt-8 border-t border-estate-700 text-center text-estate-300">
          <p>
            &copy; {new Date().getFullYear()} {t("footer.companyName")}.{" "}
            {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
