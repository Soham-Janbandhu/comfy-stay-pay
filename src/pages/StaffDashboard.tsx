
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { useToast } from "@/components/ui/use-toast";
import { bookings, rooms } from "@/data/mockData";
import { Booking } from "@/data/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const StaffDashboard = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [allBookings, setAllBookings] = useState<Booking[]>(bookings);

  // Authentication check would normally go here
  // For demo purposes, we're allowing direct access
  
  const handleLogout = () => {
    navigate("/staff");
  };
  
  const getStatusColor = (status: string) => {
    switch(status) {
      case "confirmed": return "bg-green-100 text-green-800";
      case "pending": return "bg-yellow-100 text-yellow-800";
      case "cancelled": return "bg-red-100 text-red-800";
      case "completed": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };
  
  const getPaymentStatusColor = (status: string) => {
    switch(status) {
      case "paid": return "bg-green-100 text-green-800";
      case "pending": return "bg-yellow-100 text-yellow-800";
      case "refunded": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };
  
  const updateBookingStatus = (id: string, status: "pending" | "confirmed" | "cancelled" | "completed") => {
    const updatedBookings = allBookings.map((booking) =>
      booking.id === id ? { ...booking, status } : booking
    );
    
    setAllBookings(updatedBookings);
    toast({
      title: "Booking Updated",
      description: `Booking status updated to ${status}.`,
    });
  };
  
  const updatePaymentStatus = (id: string, paymentStatus: "pending" | "paid" | "refunded") => {
    const updatedBookings = allBookings.map((booking) =>
      booking.id === id ? { ...booking, paymentStatus } : booking
    );
    
    setAllBookings(updatedBookings);
    toast({
      title: "Payment Status Updated",
      description: `Payment status updated to ${paymentStatus}.`,
    });
  };
  
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1 className="text-2xl font-serif font-bold text-hotel-secondary">
                ComfyStay Staff Dashboard
              </h1>
            </div>
            
            <Button variant="outline" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Dashboard Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                Total Bookings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{allBookings.length}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                Confirmed Bookings
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {allBookings.filter((booking) => booking.status === "confirmed").length}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                Pending Payments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {allBookings.filter((booking) => booking.paymentStatus === "pending").length}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">
                Available Rooms
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">
                {rooms.filter((room) => room.available).length}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="bookings">
          <TabsList className="mb-6">
            <TabsTrigger value="bookings">Bookings</TabsTrigger>
            <TabsTrigger value="rooms">Rooms</TabsTrigger>
          </TabsList>
          
          <TabsContent value="bookings">
            <Card>
              <CardHeader>
                <CardTitle>All Bookings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Booking ID</TableHead>
                        <TableHead>Guest</TableHead>
                        <TableHead>Room</TableHead>
                        <TableHead>Check-in</TableHead>
                        <TableHead>Check-out</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Payment</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {allBookings.map((booking) => (
                        <TableRow key={booking.id}>
                          <TableCell className="font-medium">{booking.id}</TableCell>
                          <TableCell>
                            <div>{booking.guestName}</div>
                            <div className="text-xs text-gray-500">{booking.guestEmail}</div>
                          </TableCell>
                          <TableCell>{booking.roomName}</TableCell>
                          <TableCell>{new Date(booking.checkIn).toLocaleDateString()}</TableCell>
                          <TableCell>{new Date(booking.checkOut).toLocaleDateString()}</TableCell>
                          <TableCell>
                            <Badge variant="outline" className={getStatusColor(booking.status)}>
                              {booking.status}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <Badge variant="outline" className={getPaymentStatusColor(booking.paymentStatus)}>
                              {booking.paymentStatus}
                            </Badge>
                          </TableCell>
                          <TableCell>
                            <div className="flex space-x-2">
                              <select
                                className="text-xs border rounded p-1"
                                value={booking.status}
                                onChange={(e) => updateBookingStatus(booking.id, e.target.value as any)}
                              >
                                <option value="pending">Pending</option>
                                <option value="confirmed">Confirm</option>
                                <option value="cancelled">Cancel</option>
                                <option value="completed">Complete</option>
                              </select>
                              
                              <select
                                className="text-xs border rounded p-1"
                                value={booking.paymentStatus}
                                onChange={(e) => updatePaymentStatus(booking.id, e.target.value as any)}
                              >
                                <option value="pending">Pending</option>
                                <option value="paid">Paid</option>
                                <option value="refunded">Refunded</option>
                              </select>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="rooms">
            <Card>
              <CardHeader>
                <CardTitle>Room Inventory</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Room Name</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Capacity</TableHead>
                        <TableHead>Price</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {rooms.map((room) => (
                        <TableRow key={room.id}>
                          <TableCell className="font-medium">{room.name}</TableCell>
                          <TableCell>{room.bedType}</TableCell>
                          <TableCell>{room.capacity} guests</TableCell>
                          <TableCell>${room.price}/night</TableCell>
                          <TableCell>
                            <Badge variant={room.available ? "outline" : "secondary"} className={room.available ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}>
                              {room.available ? "Available" : "Unavailable"}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default StaffDashboard;
