"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingBag, Menu, X, Search, User, ChevronDown, Package, Key, PenTool as Tool, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm dark:bg-background/95"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Key className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">KeySmart</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-1">
                  <span>Products</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="w-56">
                <DropdownMenuItem className="cursor-pointer">
                  <Link href="/products/key-organizers" className="flex items-center">
                    <Key className="mr-2 h-4 w-4" />
                    <span>Key Organizers</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Link href="/products/trackers" className="flex items-center">
                    <Package className="mr-2 h-4 w-4" />
                    <span>Key Trackers</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Link href="/products/accessories" className="flex items-center">
                    <Tool className="mr-2 h-4 w-4" />
                    <span>Accessories</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="cursor-pointer">
                  <Link href="/products/bundles" className="flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    <span>Bundles</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link href="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="/reviews" className="text-foreground hover:text-primary transition-colors">
              Reviews
            </Link>
            <Link href="/support" className="text-foreground hover:text-primary transition-colors">
              Support
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="hidden md:flex"
              aria-label="Search"
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="hidden md:flex"
              aria-label="Account"
            >
              <User className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              aria-label="Cart"
            >
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] text-white">
                0
              </span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <div className="flex justify-between items-center py-2 border-b">
              <span className="font-medium">Products</span>
              <ChevronDown className="h-4 w-4" />
            </div>
            <Link href="/about" className="block py-2 border-b">
              About
            </Link>
            <Link href="/reviews" className="block py-2 border-b">
              Reviews
            </Link>
            <Link href="/support" className="block py-2 border-b">
              Support
            </Link>
            <div className="flex space-x-4 pt-2">
              <Button variant="outline" size="sm" className="flex-1">
                Sign In
              </Button>
              <Button size="sm" className="flex-1">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}