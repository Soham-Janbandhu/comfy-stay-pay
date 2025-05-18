import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";
import MobileMenu from "./MobileMenu";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const location = useLocation();

  const navItems = [
    { title: "Home", href: "/" },
    { title: "Rooms", href: "/rooms" },
    { title: "Gallery", href: "/gallery" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b">
        <div className="hotel-container py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center">
              <h1 className="text-2xl font-serif font-bold text-hotel-secondary">
                ComfyStay
              </h1>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-hotel-primary",
                    location.pathname === item.href
                      ? "text-hotel-primary"
                      : "text-hotel-dark"
                  )}
                >
                  {item.title}
                </Link>
              ))}
              <Button asChild variant="default" className="bg-hotel-primary hover:bg-hotel-primary/90">
                <Link to="/staff">Staff Login</Link>
              </Button>
            </nav>

            <MobileMenu navItems={navItems} />
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="bg-hotel-secondary text-white">
        <div className="hotel-container section-padding">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-serif mb-4">ComfyStay</h3>
              <p className="text-gray-300 mb-4">
                Luxury accommodations for your perfect getaway. Experience comfort
                like never before.
              </p>
              <div className="flex space-x-4">
                {/* Social media icons would go here */}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-serif mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link to={item.href} className="text-gray-300 hover:text-white transition-colors">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-serif mb-4">Contact</h3>
              <address className="not-italic text-gray-300">
                <p>123 Luxury Avenue</p>
                <p>Paradise City, PC 12345</p>
                <p className="mt-2">Email: info@comfystay.com</p>
                <p>Phone: (123) 456-7890</p>
              </address>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
            <p>© {new Date().getFullYear()} ComfyStay. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
