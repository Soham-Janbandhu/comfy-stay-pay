
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GalleryHorizontal, GalleryVertical, Image } from "lucide-react";
import { cn } from "@/lib/utils";

// Sample gallery images (in a real application, these would come from your API/CMS)
const galleryImages = [
  {
    id: 1,
    category: "rooms",
    title: "Deluxe Room",
    image: "https://source.unsplash.com/random/800x600/?hotel-room",
    alt: "Deluxe hotel room with king size bed"
  },
  {
    id: 2,
    category: "rooms",
    title: "Suite",
    image: "https://source.unsplash.com/random/800x600/?hotel-suite",
    alt: "Luxury suite with separate living area"
  },
  {
    id: 3,
    category: "dining",
    title: "Restaurant",
    image: "https://source.unsplash.com/random/800x600/?hotel-restaurant",
    alt: "Elegant hotel restaurant"
  },
  {
    id: 4,
    category: "amenities",
    title: "Swimming Pool",
    image: "https://source.unsplash.com/random/800x600/?hotel-pool",
    alt: "Outdoor swimming pool"
  },
  {
    id: 5,
    category: "amenities",
    title: "Spa",
    image: "https://source.unsplash.com/random/800x600/?hotel-spa",
    alt: "Relaxing spa treatment room"
  },
  {
    id: 6,
    category: "dining",
    title: "Bar",
    image: "https://source.unsplash.com/random/800x600/?hotel-bar",
    alt: "Stylish hotel bar"
  },
  {
    id: 7,
    category: "rooms",
    title: "Standard Room",
    image: "https://source.unsplash.com/random/800x600/?hotel-bedroom",
    alt: "Comfortable standard room"
  },
  {
    id: 8,
    category: "amenities",
    title: "Fitness Center",
    image: "https://source.unsplash.com/random/800x600/?hotel-gym",
    alt: "Modern fitness center"
  }
];

const Gallery = () => {
  const [filter, setFilter] = React.useState<string>("all");
  const [viewMode, setViewMode] = React.useState<"grid" | "masonry">("grid");
  
  const filteredImages = filter === "all" 
    ? galleryImages
    : galleryImages.filter(img => img.category === filter);

  return (
    <MainLayout>
      <div className="hotel-container section-padding">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Our Gallery</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the beauty and luxury of ComfyStay through our carefully curated collection of images.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between mb-8 gap-4">
          <Tabs defaultValue="all" className="w-full md:w-auto">
            <TabsList>
              <TabsTrigger value="all" onClick={() => setFilter("all")}>All</TabsTrigger>
              <TabsTrigger value="rooms" onClick={() => setFilter("rooms")}>Rooms</TabsTrigger>
              <TabsTrigger value="dining" onClick={() => setFilter("dining")}>Dining</TabsTrigger>
              <TabsTrigger value="amenities" onClick={() => setFilter("amenities")}>Amenities</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="flex items-center space-x-2">
            <button
              onClick={() => setViewMode("grid")}
              className={cn(
                "p-2 rounded-md transition-colors",
                viewMode === "grid" ? "bg-accent text-accent-foreground" : "hover:bg-muted"
              )}
            >
              <GalleryHorizontal className="h-5 w-5" />
            </button>
            <button
              onClick={() => setViewMode("masonry")}
              className={cn(
                "p-2 rounded-md transition-colors",
                viewMode === "masonry" ? "bg-accent text-accent-foreground" : "hover:bg-muted"
              )}
            >
              <GalleryVertical className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className={cn(
          "grid gap-6",
          viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
          "animate-fade-in"
        )}>
          {filteredImages.map((image) => (
            <div 
              key={image.id} 
              className={cn(
                "group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300",
                viewMode === "masonry" && image.id % 3 === 0 ? "row-span-2" : ""
              )}
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={image.image}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity flex items-end justify-start p-4">
                  <div className="text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-serif text-xl font-medium">{image.title}</h3>
                    <p className="text-sm text-white/80 capitalize">{image.category}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Gallery;
