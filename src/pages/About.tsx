
import React from "react";
import MainLayout from "@/components/layout/MainLayout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Info } from "lucide-react";

const About = () => {
  return (
    <MainLayout>
      <div className="hotel-container section-padding">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">About ComfyStay</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A luxurious retreat designed for comfort, relaxation, and unforgettable experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative">
            <img
              src="https://source.unsplash.com/random/800x600/?luxury-hotel"
              alt="ComfyStay Hotel Exterior"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-accent p-4 rounded-lg shadow-lg hidden md:block">
              <p className="font-serif text-accent-foreground text-xl italic">
                "Your home away from home"
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-serif font-bold mb-6">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in 2010, ComfyStay has established itself as a premier destination for travelers seeking luxury accommodations combined with exceptional service. What began as a modest establishment has evolved into a renowned hotel that embodies elegance, comfort, and hospitality.
            </p>
            <p className="text-gray-700 mb-4">
              Our philosophy is simple: create a warm, welcoming environment where guests can relax, rejuvenate, and create lasting memories. From our thoughtfully designed rooms to our attentive staff, every aspect of ComfyStay is focused on enhancing your experience.
            </p>
            <p className="text-gray-700">
              We take pride in offering a seamless blend of modern amenities and timeless sophistication, ensuring that your stay with us is nothing short of extraordinary.
            </p>
          </div>
        </div>

        <div className="my-20">
          <Tabs defaultValue="mission">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="mission">Our Mission</TabsTrigger>
                <TabsTrigger value="values">Our Values</TabsTrigger>
                <TabsTrigger value="commitment">Our Commitment</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="mission" className="animate-fade-in">
              <div className="bg-muted/50 p-8 rounded-lg max-w-3xl mx-auto">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Info className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold">Our Mission</h3>
                </div>
                <p className="text-gray-700">
                  To provide exceptional hospitality experiences that exceed expectations, create lasting memories, and inspire our guests to return. We aim to set the standard for luxury accommodations while maintaining a personal touch that makes every guest feel special and valued.
                </p>
              </div>
            </TabsContent>
            <TabsContent value="values" className="animate-fade-in">
              <div className="bg-muted/50 p-8 rounded-lg max-w-3xl mx-auto">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Info className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold">Our Values</h3>
                </div>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li><span className="font-medium">Excellence:</span> We strive for excellence in everything we do.</li>
                  <li><span className="font-medium">Integrity:</span> We operate with honesty and transparency in all interactions.</li>
                  <li><span className="font-medium">Innovation:</span> We continuously seek ways to improve and enhance the guest experience.</li>
                  <li><span className="font-medium">Respect:</span> We value diversity and treat all individuals with dignity and respect.</li>
                  <li><span className="font-medium">Sustainability:</span> We are committed to environmentally responsible practices.</li>
                </ul>
              </div>
            </TabsContent>
            <TabsContent value="commitment" className="animate-fade-in">
              <div className="bg-muted/50 p-8 rounded-lg max-w-3xl mx-auto">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Info className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold">Our Commitment</h3>
                </div>
                <p className="text-gray-700">
                  At ComfyStay, we are committed to creating a sustainable, responsible business that benefits our guests, employees, community, and the environment. We implement eco-friendly practices, support local initiatives, and invest in our team's development to ensure that our success contributes positively to the world around us.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="my-20">
          <h2 className="text-3xl font-serif font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Alexandra Reynolds",
                position: "Chief Executive Officer",
                image: "https://source.unsplash.com/random/300x300/?businesswoman",
                bio: "With over 20 years in luxury hospitality, Alexandra leads ComfyStay with innovation and dedication to exceptional service."
              },
              {
                name: "Michael Chen",
                position: "Chief Operations Officer",
                image: "https://source.unsplash.com/random/300x300/?businessman",
                bio: "Michael ensures flawless daily operations while continuously improving procedures to enhance guest experiences."
              },
              {
                name: "Sophia Patel",
                position: "Executive Chef",
                image: "https://source.unsplash.com/random/300x300/?female-chef",
                bio: "Award-winning Chef Sophia creates culinary masterpieces that blend international flavors with local ingredients."
              }
            ].map((person, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold">{person.name}</h3>
                  <p className="text-primary font-medium mb-3">{person.position}</p>
                  <p className="text-gray-600">{person.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
