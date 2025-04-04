
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import MainLayout from "@/components/layout/MainLayout";
import { rooms } from "@/data/mockData";
import { RoomFilter } from "@/data/types";

const Rooms = () => {
  const [filter, setFilter] = useState<RoomFilter>({
    checkIn: null,
    checkOut: null,
    guests: 2,
    minPrice: 0,
    maxPrice: 500,
  });

  const [filteredRooms, setFilteredRooms] = useState(rooms);

  const handleFilterChange = (field: keyof RoomFilter, value: any) => {
    setFilter({ ...filter, [field]: value });
  };

  const applyFilters = () => {
    const filtered = rooms.filter((room) => {
      // Filter by price
      if (room.price < filter.minPrice || room.price > filter.maxPrice) {
        return false;
      }

      // Filter by capacity
      if (room.capacity < filter.guests) {
        return false;
      }

      // Add more filters as needed

      return true;
    });

    setFilteredRooms(filtered);
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-cover bg-center" style={{ backgroundImage: 'url("/placeholder.svg")' }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative h-full hotel-container flex flex-col justify-center text-white">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Rooms</h1>
            <p className="text-lg md:text-xl mb-6 text-white/90">
              Discover our wide range of accommodations designed for your comfort.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="hotel-container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Filters */}
            <div className="p-6 bg-white rounded-lg shadow-md h-fit">
              <h2 className="text-xl font-serif font-bold mb-6">Filter Rooms</h2>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Check-in Date</label>
                  <Input
                    type="date"
                    onChange={(e) => handleFilterChange("checkIn", new Date(e.target.value))}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Check-out Date</label>
                  <Input
                    type="date"
                    onChange={(e) => handleFilterChange("checkOut", new Date(e.target.value))}
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Guests</label>
                  <Select
                    onValueChange={(value) => handleFilterChange("guests", parseInt(value))}
                    defaultValue="2"
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select number of guests" />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5, 6].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num} {num === 1 ? "Guest" : "Guests"}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Price Range (${filter.minPrice} - ${filter.maxPrice})
                  </label>
                  <Slider
                    defaultValue={[filter.minPrice, filter.maxPrice]}
                    max={500}
                    step={10}
                    onValueChange={(value) => {
                      handleFilterChange("minPrice", value[0]);
                      handleFilterChange("maxPrice", value[1]);
                    }}
                    className="my-6"
                  />
                </div>
                
                <Button onClick={applyFilters} className="w-full bg-hotel-primary hover:bg-hotel-primary/90">
                  Apply Filters
                </Button>
              </div>
            </div>

            {/* Room List */}
            <div className="col-span-1 md:col-span-3">
              <h2 className="text-3xl font-serif font-bold mb-8">Available Rooms</h2>
              <div className="space-y-8">
                {filteredRooms.map((room) => (
                  <div key={room.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow flex flex-col md:flex-row">
                    <div className="md:w-1/3 h-64 md:h-auto">
                      <img
                        src={room.images[0]}
                        alt={room.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-serif font-bold mb-2">{room.name}</h3>
                        <div className="text-hotel-primary font-semibold">
                          ${room.price}
                          <span className="text-sm text-gray-600 font-normal">/night</span>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-4">{room.shortDescription}</p>
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {room.amenities.slice(0, 4).map((amenity, index) => (
                            <span
                              key={index}
                              className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs"
                            >
                              {amenity}
                            </span>
                          ))}
                          {room.amenities.length > 4 && (
                            <span className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs">
                              +{room.amenities.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex justify-between items-center flex-wrap gap-2">
                        <div className="flex items-center space-x-4">
                          <div className="text-sm text-gray-500">
                            <span>{room.size}m² • </span>
                            <span>{room.bedType} • </span>
                            <span>Up to {room.capacity} guests</span>
                          </div>
                        </div>
                        <div className="flex space-x-3">
                          <Button asChild variant="outline">
                            <Link to={`/rooms/${room.id}`}>View Details</Link>
                          </Button>
                          <Button asChild className="bg-hotel-primary hover:bg-hotel-primary/90">
                            <Link to={`/booking/${room.id}`}>Book Now</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Rooms;
