import PropertyCard from "./PropertyCard";

const PropertyGrid = () => {
  const properties = [
    {
      image:
        "https://dniygebqzdscndbqwvpb.supabase.co/storage/v1/object/sign/Marketing/111.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJNYXJrZXRpbmcvMTExLndlYnAiLCJpYXQiOjE3MzQ5NTg4NjQsImV4cCI6MTc2NjQ5NDg2NH0.NDQegPJtBYTrcQFY6Myooyo7t5efZh1j9R3Lx9Gh0zA&t=2024-12-23T13%3A01%3A04.596Z",
      title: "Forest Retreat",
      location: "Aspen, Colorado",
      price: "$2,450,000",
    },
    {
      image:
        "https://dniygebqzdscndbqwvpb.supabase.co/storage/v1/object/sign/Marketing/222.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJNYXJrZXRpbmcvMjIyLndlYnAiLCJpYXQiOjE3MzQ5NTg4ODAsImV4cCI6MTc2NjQ5NDg4MH0.BYc6E-GwUudF1sFCsAV_XEXshR5e5TCF7fRmYMGVdQs&t=2024-12-23T13%3A01%3A20.844Z",
      title: "Modern Villa",
      location: "Beverly Hills, CA",
      price: "$5,900,000",
    },
    {
      image:
        "https://dniygebqzdscndbqwvpb.supabase.co/storage/v1/object/sign/Marketing/333.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJNYXJrZXRpbmcvMzMzLndlYnAiLCJpYXQiOjE3MzQ5NTg4OTMsImV4cCI6MTc2NjQ5NDg5M30.lbhKVQIki9is2iOagzVLRMXWme4GMLUNsOlybovjIWs&t=2024-12-23T13%3A01%3A33.790Z",
      title: "Urban Penthouse",
      location: "Manhattan, NY",
      price: "$3,750,000",
    },
    {
      image:
        "https://dniygebqzdscndbqwvpb.supabase.co/storage/v1/object/sign/Marketing/444.webp?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJNYXJrZXRpbmcvNDQ0LndlYnAiLCJpYXQiOjE3MzQ5NTg5MDQsImV4cCI6MTc2NjQ5NDkwNH0.vSw7FTd93VlaE6hmu8LaW0pTfy5Pcm9x6LsINbQg-bs&t=2024-12-23T13%3A01%3A44.815Z",
      title: "Lake House",
      location: "Lake Tahoe, NV",
      price: "$4,200,000",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
      {properties.map((property, index) => (
        <PropertyCard key={index} {...property} />
      ))}
    </div>
  );
};

export default PropertyGrid;