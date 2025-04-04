
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MainLayout from "@/components/layout/MainLayout";
import { rooms } from "@/data/mockData";

const Index = () => {
  const featuredRooms = rooms.filter(room => room.featured);

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-cover bg-center" style={{ backgroundImage: 'url("/placeholder.svg")' }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative h-full hotel-container flex flex-col justify-center text-white">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Experience Luxury & Comfort</h1>
            <p className="text-lg md:text-xl mb-6 text-white/90">
              Discover the perfect balance of luxury, comfort, and value at ComfyStay Hotel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-hotel-primary hover:bg-hotel-primary/90">
                <Link to="/rooms">Explore Rooms</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                <Link to="/about">About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Booking Form - Placeholder */}
      <section className="bg-white py-8 shadow-lg -mt-16 relative z-10 rounded-t-lg mx-4 lg:mx-auto max-w-5xl">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center">
            <h2 className="w-full text-center text-2xl font-serif font-semibold mb-6">Book Your Stay</h2>
            <p className="w-full text-center mb-6">Find your perfect room and book your stay with us.</p>
            <Button asChild size="lg" className="w-full sm:w-auto bg-hotel-primary hover:bg-hotel-primary/90">
              <Link to="/rooms">Browse All Rooms</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Rooms */}
      <section className="section-padding bg-hotel-light">
        <div className="hotel-container">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">Featured Rooms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredRooms.map((room) => (
              <div key={room.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                <div className="h-64 overflow-hidden">
                  <img src={room.images[0]} alt={room.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-serif font-bold mb-2">{room.name}</h3>
                    <div className="text-hotel-primary font-semibold">${room.price}<span className="text-sm text-gray-600 font-normal">/night</span></div>
                  </div>
                  <p className="text-gray-600 mb-4">{room.shortDescription}</p>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-500">Up to {room.capacity} guests</div>
                    <Button asChild variant="outline">
                      <Link to={`/rooms/${room.id}`}>View Details</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild size="lg">
              <Link to="/rooms">View All Rooms</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Hotel Amenities */}
      <section className="section-padding">
        <div className="hotel-container">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">Hotel Amenities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Swimming Pool", description: "Enjoy our stunning outdoor swimming pool with sun loungers and poolside service." },
              { title: "Gourmet Restaurant", description: "Savor delicious meals prepared by our award-winning chefs in an elegant setting." },
              { title: "Spa & Wellness", description: "Relax and rejuvenate with our range of spa treatments and wellness offerings." },
              { title: "Fitness Center", description: "Stay in shape with our modern gym equipment and fitness classes." },
              { title: "Business Center", description: "Access our fully-equipped business center for all your professional needs." },
              { title: "24/7 Room Service", description: "Enjoy delicious meals and snacks in the comfort of your own room at any time." }
            ].map((amenity, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-serif font-semibold mb-3">{amenity.title}</h3>
                <p className="text-gray-600">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-hotel-secondary text-white">
        <div className="hotel-container">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12">Guest Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah J.", location: "New York", comment: "The room was beautiful and the service was impeccable. I'll definitely be coming back!" },
              { name: "Robert M.", location: "London", comment: "The attention to detail and the friendly staff made our anniversary stay truly special." },
              { name: "Jennifer T.", location: "Sydney", comment: "Luxurious accommodations with all the amenities you could want. Perfect location too!" }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/10 p-6 rounded-lg">
                <p className="italic mb-4">&ldquo;{testimonial.comment}&rdquo;</p>
                <div>
                  <span className="font-semibold">{testimonial.name}</span>
                  <span className="text-hotel-accent"> • {testimonial.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-hotel-accent">
        <div className="hotel-container text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Ready to Book Your Dream Stay?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Experience the perfect blend of luxury, comfort, and exceptional service at ComfyStay Hotel.
          </p>
          <Button asChild size="lg" className="bg-hotel-primary hover:bg-hotel-primary/90">
            <Link to="/rooms">Book Your Stay Now</Link>
          </Button>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
