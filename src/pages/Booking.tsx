
import React, { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import MainLayout from "@/components/layout/MainLayout";
import { rooms } from "@/data/mockData";

interface LocationState {
  roomId?: string;
  checkIn?: string;
  checkOut?: string;
  adults?: number;
  children?: number;
}

const Booking = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const state = location.state as LocationState || {};
  const room = rooms.find((r) => r.id === id);
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    checkIn: state.checkIn || "",
    checkOut: state.checkOut || "",
    adults: state.adults || 1,
    children: state.children || 0,
    specialRequests: "",
    paymentMethod: "credit-card", // or "paypal"
  });
  
  const [totalPrice, setTotalPrice] = useState(0);
  const [nights, setNights] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    if (!room) return;
    
    if (formData.checkIn && formData.checkOut) {
      const checkInDate = new Date(formData.checkIn);
      const checkOutDate = new Date(formData.checkOut);
      
      const timeDiff = checkOutDate.getTime() - checkInDate.getTime();
      const nightsCount = Math.ceil(timeDiff / (1000 * 3600 * 24));
      
      if (nightsCount > 0) {
        setNights(nightsCount);
        setTotalPrice(nightsCount * room.price);
      }
    }
  }, [formData.checkIn, formData.checkOut, room]);
  
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
  
  const handleChange = (field: string, value: any) => {
    setFormData({ ...formData, [field]: value });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone) {
      toast({
        title: "Incomplete form",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      toast({
        title: "Booking Confirmed!",
        description: "Your booking has been successfully processed.",
      });
      
      // Navigate to confirmation page
      navigate("/booking-confirmation", {
        state: {
          bookingId: Math.random().toString(36).substring(2, 10).toUpperCase(),
          roomName: room.name,
          checkIn: formData.checkIn,
          checkOut: formData.checkOut,
          guests: formData.adults + formData.children,
          totalPrice: totalPrice,
        },
      });
      
      setIsLoading(false);
    }, 2000);
  };
  
  return (
    <MainLayout>
      <div className="hotel-container py-10">
        <h1 className="text-3xl font-serif font-bold mb-8 text-center">Complete Your Booking</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit}>
              <Card>
                <CardHeader>
                  <CardTitle>Guest Information</CardTitle>
                  <CardDescription>Please enter your details below to proceed with the booking.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-1">First Name *</label>
                      <Input
                        value={formData.firstName}
                        onChange={(e) => handleChange("firstName", e.target.value)}
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Last Name *</label>
                      <Input
                        value={formData.lastName}
                        onChange={(e) => handleChange("lastName", e.target.value)}
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Email *</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Phone Number *</label>
                      <Input
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Booking Details</CardTitle>
                  <CardDescription>Please confirm your booking details.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-1">Check-in Date *</label>
                      <Input
                        type="date"
                        value={formData.checkIn}
                        onChange={(e) => handleChange("checkIn", e.target.value)}
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Check-out Date *</label>
                      <Input
                        type="date"
                        value={formData.checkOut}
                        onChange={(e) => handleChange("checkOut", e.target.value)}
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-1">Adults</label>
                      <Select
                        value={formData.adults.toString()}
                        onValueChange={(value) => handleChange("adults", parseInt(value))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Number of adults" />
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
                        value={formData.children.toString()}
                        onValueChange={(value) => handleChange("children", parseInt(value))}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Number of children" />
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
                    
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium mb-1">Special Requests</label>
                      <Textarea
                        value={formData.specialRequests}
                        onChange={(e) => handleChange("specialRequests", e.target.value)}
                        placeholder="Any special requests or requirements?"
                        className="resize-none"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Payment Method</CardTitle>
                  <CardDescription>Choose your preferred payment method.</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="credit-card"
                        name="paymentMethod"
                        value="credit-card"
                        checked={formData.paymentMethod === "credit-card"}
                        onChange={() => handleChange("paymentMethod", "credit-card")}
                        className="h-4 w-4 text-hotel-primary"
                      />
                      <label htmlFor="credit-card">Credit Card</label>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <input
                        type="radio"
                        id="paypal"
                        name="paymentMethod"
                        value="paypal"
                        checked={formData.paymentMethod === "paypal"}
                        onChange={() => handleChange("paymentMethod", "paypal")}
                        className="h-4 w-4 text-hotel-primary"
                      />
                      <label htmlFor="paypal">PayPal</label>
                    </div>
                  </div>

                  {/* Payment details would go here */}
                  <div className="mt-6">
                    <p className="text-sm text-gray-500">
                      Your payment details will be securely processed. No charges will be made until confirmed.
                    </p>
                  </div>
                </CardContent>
              </Card>
              
              <div className="mt-8">
                <Button
                  type="submit"
                  className="w-full bg-hotel-primary hover:bg-hotel-primary/90"
                  disabled={isLoading}
                >
                  {isLoading ? "Processing..." : "Complete Booking"}
                </Button>
              </div>
            </form>
          </div>
          
          {/* Booking Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-24">
              <h2 className="text-xl font-serif font-semibold mb-4">Booking Summary</h2>
              
              <div className="flex items-start mb-4">
                <div className="w-20 h-20 rounded overflow-hidden flex-shrink-0">
                  <img
                    src={room.images[0]}
                    alt={room.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="ml-3">
                  <h3 className="font-serif font-medium">{room.name}</h3>
                  <p className="text-sm text-gray-600">{room.bedType} • Up to {room.capacity} guests</p>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Check-in</span>
                  <span className="font-medium">
                    {formData.checkIn ? new Date(formData.checkIn).toLocaleDateString() : "Not set"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Check-out</span>
                  <span className="font-medium">
                    {formData.checkOut ? new Date(formData.checkOut).toLocaleDateString() : "Not set"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Guests</span>
                  <span className="font-medium">
                    {formData.adults} Adults, {formData.children} Children
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Duration</span>
                  <span className="font-medium">{nights} {nights === 1 ? "night" : "nights"}</span>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Room Rate</span>
                  <span className="font-medium">${room.price} / night</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span>Total Price</span>
                  <span className="text-hotel-primary">${totalPrice}</span>
                </div>
              </div>
              
              <div className="mt-4 text-xs text-gray-500">
                <p>Taxes and fees included. Cancellation policy applies.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Booking;
