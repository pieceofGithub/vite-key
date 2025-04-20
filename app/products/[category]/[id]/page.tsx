"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { 
  ChevronRight, Star, ShoppingCart, 
  Share2, Heart, Check, Truck, RotateCcw, ShieldCheck 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

// Example single product data for demo
const exampleProduct = {
  id: 2,
  name: "KeySmart Pro",
  price: 39.99,
  description: "The KeySmart Pro is our most advanced key organizer with built-in Tile™ tracking. Never lose your keys again with the world's smartest key holder.",
  features: [
    "Holds up to 14 keys in a slim profile",
    "Built-in Tile™ bluetooth tracker",
    "LED flashlight for nighttime visibility",
    "Rechargeable battery with 3-month life",
    "Locate your phone by pressing the KeySmart button",
  ],
  specs: [
    { name: "Dimensions", value: "3.1\" x 0.6\" x 0.5\"" },
    { name: "Weight", value: "1.3 oz" },
    { name: "Materials", value: "Aircraft-grade aluminum" },
    { name: "Capacity", value: "Up to 14 keys" },
    { name: "Battery Life", value: "Up to 3 months" },
    { name: "Waterproof", value: "Splash resistant" },
  ],
  colors: [
    { id: "black", name: "Black", class: "bg-black" },
    { id: "silver", name: "Silver", class: "bg-gray-300" },
    { id: "red", name: "Red", class: "bg-red-600" },
    { id: "blue", name: "Blue", class: "bg-blue-600" },
  ],
  images: {
    black: "https://images.pexels.com/photos/5701645/pexels-photo-5701645.jpeg?auto=compress&cs=tinysrgb&w=1600",
    silver: "https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&w=1600",
    red: "https://images.pexels.com/photos/4464819/pexels-photo-4464819.jpeg?auto=compress&cs=tinysrgb&w=1600",
    blue: "https://images.pexels.com/photos/5701645/pexels-photo-5701645.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  rating: 4.9,
  reviewCount: 2354,
  isNew: false,
  isBestSeller: true,
  relatedProducts: [
    {
      id: 1,
      name: "KeySmart Classic",
      price: 22.99,
      image: "https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 3,
      name: "KeySmart Max",
      price: 49.99,
      image: "https://images.pexels.com/photos/4464819/pexels-photo-4464819.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
    {
      id: 5,
      name: "KeySmart Rugged",
      price: 29.99,
      image: "https://images.pexels.com/photos/5701645/pexels-photo-5701645.jpeg?auto=compress&cs=tinysrgb&w=1600",
    },
  ],
};

// Category to display name mapping
const categoryNames: Record<string, string> = {
  "key-organizers": "Key Organizers",
  "trackers": "Key Trackers",
  "accessories": "Accessories",
  "bundles": "Bundles",
};

export default function ProductDetailPage() {
  const params = useParams();
  const category = params?.category as string || "key-organizers";
  
  const [product, setProduct] = useState(exampleProduct);
  const [selectedColor, setSelectedColor] = useState("black");
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // In a real app, you'd fetch the product based on the ID
    // For this demo, we're using the example product
    setActiveImage(product.images[selectedColor as keyof typeof product.images]);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("product-detail");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [selectedColor, product.images]);

  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Breadcrumb */}
      <div className="bg-muted/50 py-4">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center text-sm">
            <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
            <Link href="/products" className="text-muted-foreground hover:text-foreground transition-colors">
              Products
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
            <Link 
              href={`/products/${category}`} 
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {categoryNames[category] || category}
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
            <span className="font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product Detail */}
      <section id="product-detail" className="py-12 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Product Images */}
            <div 
              className={cn(
                "lg:w-1/2 transform transition-all duration-1000",
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              )}
            >
              <div className="sticky top-24">
                <div className="relative aspect-square rounded-lg overflow-hidden bg-muted/30 mb-4">
                  <img
                    src={activeImage}
                    alt={product.name}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  {product.isNew && (
                    <div className="absolute top-4 left-4 bg-primary text-white text-xs px-2 py-1 rounded-full">
                      New
                    </div>
                  )}
                  {product.isBestSeller && (
                    <div className="absolute top-4 left-4 bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full">
                      Best Seller
                    </div>
                  )}
                </div>
                
                <ScrollArea className="whitespace-nowrap">
                  <div className="flex space-x-2">
                    {Object.entries(product.images).map(([color, image]) => (
                      <button
                        key={color}
                        onClick={() => {
                          setSelectedColor(color);
                          setActiveImage(image);
                        }}
                        className={cn(
                          "w-20 h-20 rounded-md overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all",
                          selectedColor === color && "ring-2 ring-primary"
                        )}
                      >
                        <img
                          src={image}
                          alt={`${product.name} in ${color}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </div>
            
            {/* Product Info */}
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
                      {product.rating} ({product.reviewCount} reviews)
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold">{product.name}</h1>
                  <p className="text-2xl font-semibold mt-2">${product.price}</p>
                </div>
                
                <p className="text-muted-foreground">
                  {product.description}
                </p>
                
                {/* Color Selection */}
                <div>
                  <h3 className="font-medium mb-3">Color: <span className="capitalize">{selectedColor}</span></h3>
                  <div className="flex space-x-3">
                    {product.colors.map((color) => (
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
                
                {/* Quantity */}
                <div>
                  <h3 className="font-medium mb-3">Quantity</h3>
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
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Button size="lg" className="flex-1">
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="lg" className="flex-1">
                    <Heart className="mr-2 h-5 w-5" />
                    Add to Wishlist
                  </Button>
                  <Button variant="ghost" size="icon" className="hidden sm:flex">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
                
                {/* Shipping Info */}
                <div className="flex items-start pt-4 border-t">
                  <Truck className="h-5 w-5 mr-3 mt-0.5 text-muted-foreground" />
                  <div>
                    <p className="font-medium">Free shipping</p>
                    <p className="text-sm text-muted-foreground">Estimated delivery: 3-5 business days</p>
                  </div>
                </div>
                
                {/* Features */}
                <div className="space-y-3 pt-4 border-t">
                  <h3 className="font-semibold">Key Features:</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Product Details Tabs */}
                <Tabs defaultValue="description" className="w-full pt-6">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="description">Description</TabsTrigger>
                    <TabsTrigger value="specs">Specifications</TabsTrigger>
                    <TabsTrigger value="shipping">Shipping</TabsTrigger>
                  </TabsList>
                  <TabsContent value="description" className="text-muted-foreground mt-4">
                    <p className="mb-4">
                      The KeySmart Pro combines our classic key organizer with Tile™ smart tracking technology. It includes a built-in LED light, bottle opener, and a loop piece for larger car keys or fobs. The rechargeable battery lasts up to 3 months and can be easily charged with the included micro-USB cable.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                      <div className="flex flex-col items-center p-4 bg-muted/30 rounded-lg">
                        <ShieldCheck className="h-8 w-8 text-primary mb-2" />
                        <h4 className="font-medium">Premium Materials</h4>
                        <p className="text-sm text-center">Aircraft-grade aluminum</p>
                      </div>
                      <div className="flex flex-col items-center p-4 bg-muted/30 rounded-lg">
                        <Truck className="h-8 w-8 text-primary mb-2" />
                        <h4 className="font-medium">Free Shipping</h4>
                        <p className="text-sm text-center">On orders over $35</p>
                      </div>
                      <div className="flex flex-col items-center p-4 bg-muted/30 rounded-lg">
                        <RotateCcw className="h-8 w-8 text-primary mb-2" />
                        <h4 className="font-medium">30-Day Returns</h4>
                        <p className="text-sm text-center">Hassle-free returns</p>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="specs" className="mt-4">
                    <ul className="space-y-3">
                      {product.specs.map((spec, index) => (
                        <li key={index} className="flex justify-between border-b pb-2">
                          <span className="font-medium">{spec.name}</span>
                          <span>{spec.value}</span>
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                  <TabsContent value="shipping" className="text-muted-foreground mt-4">
                    <p className="mb-4">
                      We offer free shipping on all orders over $35. Standard shipping takes 3-5 business days. Express shipping options are available at checkout. International shipping is available to select countries.
                    </p>
                    <p className="mb-4">
                      All orders are processed within 1-2 business days. Once your order ships, you will receive a shipping confirmation email with a tracking number.
                    </p>
                    <p>
                      For any questions regarding shipping or delivery, please contact our customer support team.
                    </p>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
          
          {/* Related Products */}
          <div className="mt-20">
            <h2 className="text-2xl font-bold mb-8">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {product.relatedProducts.map((relatedProduct) => (
                <div 
                  key={relatedProduct.id} 
                  className="bg-card rounded-lg overflow-hidden shadow-sm group"
                >
                  <Link href={`/products/${category}/${relatedProduct.id}`}>
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium">{relatedProduct.name}</h3>
                      <p className="font-semibold mt-1">${relatedProduct.price}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}