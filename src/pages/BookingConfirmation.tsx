
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import MainLayout from "@/components/layout/MainLayout";

interface LocationState {
  bookingId: string;
  roomName: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  totalPrice: number;
}

const BookingConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const state = location.state as LocationState;
  
  if (!state || !state.bookingId) {
    return (
      <MainLayout>
        <div className="hotel-container py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Booking Information Not Found</h1>
          <p className="mb-6">We couldn't find your booking information.</p>
          <Button onClick={() => navigate("/")}>Return to Home</Button>
        </div>
      </MainLayout>
    );
  }
  
  return (
    <MainLayout>
      <div className="hotel-container py-10">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md border border-green-100">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-8 h-8 text-green-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
            </div>
            
            <h1 className="text-3xl font-serif font-bold text-center mb-6">Booking Confirmed!</h1>
            <p className="text-center text-gray-600 mb-8">
              Thank you for your booking. We've sent a confirmation email with all the details.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-md mb-6">
              <h2 className="font-serif font-semibold text-xl mb-4">Booking Details</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
                <div>
                  <p className="text-sm text-gray-500">Booking Reference</p>
                  <p className="font-medium">{state.bookingId}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Room</p>
                  <p className="font-medium">{state.roomName}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Check-in Date</p>
                  <p className="font-medium">
                    {new Date(state.checkIn).toLocaleDateString()}
                  </p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Check-out Date</p>
                  <p className="font-medium">
                    {new Date(state.checkOut).toLocaleDateString()}
                  </p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Guests</p>
                  <p className="font-medium">{state.guests}</p>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500">Total Amount Paid</p>
                  <p className="font-medium">${state.totalPrice}</p>
                </div>
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <p className="text-sm text-gray-600">
                If you have any questions or need to make changes to your booking, please contact us.
              </p>
              <Button onClick={() => navigate("/")} className="bg-hotel-primary hover:bg-hotel-primary/90">
                Return to Home
              </Button>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default BookingConfirmation;
