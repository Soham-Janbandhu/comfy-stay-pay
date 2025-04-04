
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import MainLayout from "@/components/layout/MainLayout";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const StaffLogin = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  
  const [isLoading, setIsLoading] = useState(false);
  
  const handleChange = (field: string, value: string) => {
    setCredentials({ ...credentials, [field]: value });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // For demo purposes, use these credentials:
    if (credentials.email === "staff@comfystay.com" && credentials.password === "password") {
      setTimeout(() => {
        setIsLoading(false);
        navigate("/staff/dashboard");
      }, 1000);
    } else {
      setTimeout(() => {
        setIsLoading(false);
        toast({
          title: "Login Failed",
          description: "Invalid email or password. Please try again.",
          variant: "destructive",
        });
      }, 1000);
    }
  };
  
  return (
    <MainLayout>
      <div className="min-h-[70vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-serif">Staff Login</CardTitle>
              <CardDescription>
                Access the staff dashboard to manage bookings and rooms
              </CardDescription>
            </CardHeader>
            
            <form onSubmit={handleSubmit}>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={credentials.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                    />
                  </div>
                  
                  <div>
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Password
                    </label>
                    <Input
                      id="password"
                      type="password"
                      value={credentials.password}
                      onChange={(e) => handleChange("password", e.target.value)}
                      required
                    />
                  </div>
                </div>
              </CardContent>
              
              <CardFooter>
                <Button
                  type="submit"
                  className="w-full bg-hotel-primary hover:bg-hotel-primary/90"
                  disabled={isLoading}
                >
                  {isLoading ? "Signing In..." : "Sign In"}
                </Button>
              </CardFooter>
            </form>
          </Card>
          
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">
              Demo credentials: staff@comfystay.com / password
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default StaffLogin;
