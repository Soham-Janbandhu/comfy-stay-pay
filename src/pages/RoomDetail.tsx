
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import MainLayout from "@/components/layout/MainLayout";
import { rooms } from "@/data/mockData";

const RoomDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(0);
  
  const room = rooms.find((r) => r.id === id);

  const [booking, setBooking] = useState({
    checkIn: "",
    checkOut: "",
    adults: 1,
    children: 0,
  });

  if (!room) {
    return (
      <MainLayout>
        <div className="hotel-container py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Room not found</h1>
          <p className="mb-6">Sorry, we couldn't find the room you're looking for.</p>
          <Button onClick={() => navigate("/rooms")}>View All Rooms</Button>
        </div>
      </MainLayout>
    );
  }

  const handleBookingChange = (field: string, value: any) => {
    setBooking({ ...booking, [field]: value });
  };

  const handleBookNow = () => {
    navigate(`/booking/${room.id}`, { 
      state: { 
        roomId: room.id,
        checkIn: booking.checkIn,
        checkOut: booking.checkOut,
        adults: booking.adults,
        children: booking.children
      } 
    });
  };

  return (
    <MainLayout>
      <div className="hotel-container py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Room Images and Details */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-serif font-bold mb-4">{room.name}</h1>
            
            {/* Image Gallery */}
            <div className="mb-8">
              <div className="overflow-hidden rounded-lg h-96 mb-4">
                <img
                  src={room.images[activeImage]}
                  alt={`${room.name} view ${activeImage + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex space-x-3 overflow-x-auto pb-2">
                {room.images.map((img, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`w-24 h-16 rounded overflow-hidden cursor-pointer flex-shrink-0 ${
                      index === activeImage
                        ? "ring-2 ring-hotel-primary"
                        : "opacity-70 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${room.name} thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Room Details */}
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-serif font-semibold mb-3">Description</h2>
                <p className="text-gray-700">{room.description}</p>
              </div>
              
              <Separator />
              
              <div>
                <h2 className="text-xl font-serif font-semibold mb-3">Room Features</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-3">
                  <div className="flex items-center text-gray-700">
                    <span className="mr-2">•</span>
                    <span>{room.size} m²</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="mr-2">•</span>
                    <span>{room.bedType}</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="mr-2">•</span>
                    <span>Up to {room.capacity} guests</span>
                  </div>
                </div>
              </div>

              <Separator />
              
              <div>
                <h2 className="text-xl font-serif font-semibold mb-3">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-3">
                  {room.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center text-gray-700">
                      <span className="mr-2">•</span>
                      <span>{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
              <h2 className="text-xl font-serif font-semibold mb-4">Book This Room</h2>
              
              <div className="text-2xl font-bold text-hotel-primary mb-6">
                ${room.price}<span className="text-sm text-gray-600 font-normal"> per night</span>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Check-in Date</label>
                  <Input
                    type="date"
                    value={booking.checkIn}
                    onChange={(e) => handleBookingChange("checkIn", e.target.value)}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Check-out Date</label>
                  <Input
                    type="date"
                    value={booking.checkOut}
                    onChange={(e) => handleBookingChange("checkOut", e.target.value)}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Adults</label>
                  <Select
                    value={booking.adults.toString()}
                    onValueChange={(value) => handleBookingChange("adults", parseInt(value))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select number of adults" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} Adult{num > 1 ? "s" : ""}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Children</label>
                  <Select
                    value={booking.children.toString()}
                    onValueChange={(value) => handleBookingChange("children", parseInt(value))}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select number of children" />
                    </SelectTrigger>
                    <SelectContent>
                      {[0, 1, 2, 3].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} {num === 1 ? "Child" : "Children"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <Button
                  onClick={handleBookNow}
                  className="w-full bg-hotel-primary hover:bg-hotel-primary/90"
                  disabled={!booking.checkIn || !booking.checkOut}
                >
                  Book Now
                </Button>
                
                <p className="text-xs text-gray-500 text-center">
                  You won't be charged yet. Payment will be collected during the booking process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default RoomDetail;
