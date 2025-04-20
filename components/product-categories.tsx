"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Key, PenTool, Clock, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const categories = [
  {
    icon: Key,
    title: "Key Organizers",
    description: "Slim, compact key holders that eliminate bulk and noise.",
    image: "https://images.pexels.com/photos/1105584/pexels-photo-1105584.jpeg?auto=compress&cs=tinysrgb&w=1600",
    link: "/products/key-organizers",
  },
  {
    icon: Package,
    title: "Key Trackers",
    description: "Never lose your keys again with our smart tracking technology.",
    image: "https://images.pexels.com/photos/7055937/pexels-photo-7055937.jpeg?auto=compress&cs=tinysrgb&w=1600", 
    link: "/products/trackers",
  },
  {
    icon: PenTool,
    title: "Accessories",
    description: "Enhance your KeySmart with multi-tools and accessories.",
    image: "https://images.pexels.com/photos/175039/pexels-photo-175039.jpeg?auto=compress&cs=tinysrgb&w=1600",
    link: "/products/accessories",
  },
  {
    icon: Clock,
    title: "Bundles",
    description: "Save with our curated collections of KeySmart products.",
    image: "https://images.pexels.com/photos/4379903/pexels-photo-4379903.jpeg?auto=compress&cs=tinysrgb&w=1600",
    link: "/products/bundles",
  },
];

export default function ProductCategories() {
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

    const element = document.getElementById("categories-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="categories-section"
      className="py-24 bg-muted/50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Product Categories
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover smart solutions for everyday carry problems with our innovative products designed for modern life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Card
              key={category.title}
              className={cn(
                "group overflow-hidden border-2 hover:border-primary/50 transition-all duration-300",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              )}
              style={{
                transitionDelay: `${150 * index}ms`,
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <div className="absolute bottom-4 left-4 p-2 bg-primary rounded-full text-primary-foreground">
                  <category.icon className="h-5 w-5" />
                </div>
              </div>
              <CardHeader>
                <CardTitle>{category.title}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Button
                  variant="ghost"
                  className="group flex items-center p-0 text-primary"
                >
                  <span>Shop Now</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}