"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Star, ShoppingCart, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const productColors = [
  { id: "black", name: "Black", class: "bg-black" },
  { id: "silver", name: "Silver", class: "bg-gray-300" },
  { id: "red", name: "Red", class: "bg-red-600" },
  { id: "blue", name: "Blue", class: "bg-blue-600" },
];

const productImages = {
  black: "https://images.pexels.com/photos/5701645/pexels-photo-5701645.jpeg?auto=compress&cs=tinysrgb&w=1600",
  silver: "https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&w=1600",
  red: "https://images.pexels.com/photos/4464819/pexels-photo-4464819.jpeg?auto=compress&cs=tinysrgb&w=1600",
  blue: "https://images.pexels.com/photos/5701645/pexels-photo-5701645.jpeg?auto=compress&cs=tinysrgb&w=1600",
};

export default function ProductShowcase() {
  const [selectedColor, setSelectedColor] = useState("black");
  const [quantity, setQuantity] = useState(1);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("product-showcase");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="product-showcase" 
      className="py-24 bg-background"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          <div 
            className={cn(
              "lg:w-1/2 transform transition-all duration-1000",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            )}
          >
            <div className="sticky top-24 rounded-xl overflow-hidden bg-muted/30 p-6">
              <div className="relative aspect-square rounded-lg overflow-hidden">
                <img
                  src={productImages[selectedColor as keyof typeof productImages]}
                  alt="KeySmart Pro"
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-xs px-2 py-1 rounded-full">
                  Best Seller
                </div>
              </div>
              <div className="flex justify-center mt-4 space-x-3">
                {productColors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color.id)}
                    className={cn(
                      "w-8 h-8 rounded-full focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all",
                      color.class,
                      selectedColor === color.id && "ring-2 ring-primary"
                    )}
                    aria-label={`Select ${color.name} color`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div 
            className={cn(
              "lg:w-1/2 transform transition-all duration-1000",
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            )}
          >
            <div className="space-y-6">
              <div>
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground ml-2">
                    4.9 (2,354 reviews)
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold">KeySmart Pro</h1>
                <p className="text-2xl font-semibold mt-2">$39.99</p>
              </div>
              
              <p className="text-muted-foreground">
                The KeySmart Pro is our most advanced key organizer with built-in Tile™ tracking. Never lose your keys again with the world's smartest key holder.
              </p>
              
              <div className="space-y-4">
                <h3 className="font-semibold">Key Features:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Holds up to 14 keys in a slim profile</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Built-in Tile™ bluetooth tracker</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>LED flashlight for nighttime visibility</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Rechargeable battery with 3-month life</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                    <span>Locate your phone by pressing the KeySmart button</span>
                  </li>
                </ul>
              </div>
              
              <Tabs defaultValue="description" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="specs">Specifications</TabsTrigger>
                  <TabsTrigger value="shipping">Shipping</TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="text-sm text-muted-foreground mt-4">
                  <p>
                    The KeySmart Pro combines our classic key organizer with Tile™ smart tracking technology. It includes a built-in LED light, bottle opener, and a loop piece for larger car keys or fobs. The rechargeable battery lasts up to 3 months and can be easily charged with the included micro-USB cable.
                  </p>
                </TabsContent>
                <TabsContent value="specs" className="text-sm mt-4">
                  <ul className="space-y-2">
                    <li><span className="font-medium">Dimensions:</span> 3.1" x 0.6" x 0.5"</li>
                    <li><span className="font-medium">Weight:</span> 1.3 oz</li>
                    <li><span className="font-medium">Materials:</span> Aircraft-grade aluminum</li>
                    <li><span className="font-medium">Capacity:</span> Up to 14 keys</li>
                    <li><span className="font-medium">Battery Life:</span> Up to 3 months</li>
                    <li><span className="font-medium">Waterproof:</span> Splash resistant</li>
                  </ul>
                </TabsContent>
                <TabsContent value="shipping" className="text-sm text-muted-foreground mt-4">
                  <p>
                    We offer free shipping on all orders over $35. Standard shipping takes 3-5 business days. Express shipping options are available at checkout. International shipping is available to select countries.
                  </p>
                </TabsContent>
              </Tabs>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                <div className="flex items-center border rounded-md w-32">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Decrease quantity"
                  >
                    -
                  </button>
                  <span className="flex-1 text-center font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-muted-foreground hover:text-primary transition-colors"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
                <Button className="flex-1 sm:flex-none" size="lg">
                  <ShoppingCart className="mr-2 h-4 w-4" />
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}