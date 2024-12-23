import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-estate-50">
      <div className="container mx-auto px-4 max-w-6xl text-center">
        <h2 className="text-4xl font-display text-estate-800 mb-4">
          {t("about.title")}
        </h2>
        <p className="text-estate-500 mb-12 mx-auto max-w-2xl">
          {t("about.description")}
        </p>
        <div className="aspect-[16/9] overflow-hidden rounded-lg max-w-4xl mx-auto">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://dniygebqzdscndbqwvpb.supabase.co/storage/v1/object/sign/Marketing/WhatsApp%20Video%202024-12-22%20at%2017.04.27.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJNYXJrZXRpbmcvV2hhdHNBcHAgVmlkZW8gMjAyNC0xMi0yMiBhdCAxNy4wNC4yNy5tcDQiLCJpYXQiOjE3MzQ5NTgyNzksImV4cCI6MTc2NjQ5NDI3OX0.0RaIBh3Ukm-0dbBM43rh1u-xvqhzXf_Vt3D37lVYdSk&t=2024-12-23T12%3A51%3A19.467Z"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
