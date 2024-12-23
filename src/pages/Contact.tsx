import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { toast } = useToast();
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t("contact.form.success"),
      description: t("contact.subtitle"),
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl sm:text-5xl font-display text-estate-800 mb-12 text-center">
            {t("contact.title")}
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-display text-estate-800 mb-6">
                {t("contact.subtitle")}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="w-5 h-5 mr-4 mt-1 text-estate-600" />
                  <div>
                    <h3 className="font-medium text-estate-800">
                      {t("contact.details.phone.label")}
                    </h3>
                    <p className="text-estate-600">
                      {t("contact.details.phone.value")}
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-5 h-5 mr-4 mt-1 text-estate-600" />
                  <div>
                    <h3 className="font-medium text-estate-800">
                      {t("contact.details.email.label")}
                    </h3>
                    <p className="text-estate-600">
                      {t("contact.details.email.value")}
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-estate-700 mb-2"
                  >
                    {t("contact.form.name")}
                  </label>
                  <Input
                    id="name"
                    required
                    placeholder={t("contact.form.name")}
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-estate-700 mb-2"
                  >
                    {t("contact.form.email")}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    placeholder={t("contact.form.email")}
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-estate-700 mb-2"
                  >
                    {t("contact.form.message")}
                  </label>
                  <Textarea
                    id="message"
                    required
                    placeholder={t("contact.form.message")}
                    className="min-h-[120px]"
                  />
                </div>
                <Button type="submit" className="w-full">
                  {t("contact.form.submit")}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
