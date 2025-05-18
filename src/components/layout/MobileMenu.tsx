
import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLocation } from "react-router-dom";

interface MobileMenuProps {
  navItems: Array<{ title: string; href: string }>;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ navItems }) => {
  const location = useLocation();

  return (
    <div className="md:hidden">
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="ghost" size="sm">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Menu</span>
          </Button>
        </DrawerTrigger>
        <DrawerContent className="px-4 py-6">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <DrawerClose key={item.href} asChild>
                <Link
                  to={item.href}
                  className={cn(
                    "text-lg font-medium py-2 px-4 rounded-md transition-colors",
                    location.pathname === item.href
                      ? "text-hotel-primary bg-hotel-primary/10"
                      : "text-hotel-dark hover:text-hotel-primary hover:bg-hotel-primary/5"
                  )}
                >
                  {item.title}
                </Link>
              </DrawerClose>
            ))}
            <DrawerClose asChild>
              <Button asChild variant="default" className="mt-4 w-full bg-hotel-primary hover:bg-hotel-primary/90">
                <Link to="/staff">Staff Login</Link>
              </Button>
            </DrawerClose>
          </nav>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default MobileMenu;
