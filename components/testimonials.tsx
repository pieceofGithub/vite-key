"use client";

import { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const testimonials = [
  {
    id: 1,
    name: "Michael Johnson",
    avatar: "MJ",
    role: "Business Executive",
    content: "KeySmart completely transformed how I carry my keys. No more bulky pockets and jingling sounds. The build quality is exceptional, and the ability to attach my car fob is a game-changer.",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Williams",
    avatar: "SW",
    role: "Architect",
    content: "I've been using KeySmart for over two years now, and it's still as functional as day one. The tracker feature has saved me countless times when I've misplaced my keys.",
    rating: 5,
  },
  {
    id: 3,
    name: "David Chen",
    avatar: "DC",
    role: "Software Engineer",
    content: "As someone who appreciates good design, KeySmart is a perfect blend of form and function. It's sleek, minimal, and solves a real problem. I've bought several as gifts.",
    rating: 4,
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    avatar: "ER",
    role: "Travel Blogger",
    content: "The KeySmart Pro keeps my bag organized during travel. The built-in flashlight has been surprisingly useful in finding my way back to hostels at night!",
    rating: 5,
  },
  {
    id: 5,
    name: "James Taylor",
    avatar: "JT",
    role: "Outdoor Enthusiast",
    content: "Durable and practical. I've taken my KeySmart through hiking trips, camping, and daily use for years. It's held up incredibly well and the design is still as elegant as when I first got it.",
    rating: 5,
  },
];

export default function Testimonials() {
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

    const element = document.getElementById("testimonials-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="testimonials-section" 
      className="py-24 bg-muted/50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div 
          className={cn(
            "text-center mb-16 transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Thousands of people have transformed their everyday carry experience with KeySmart. Here's what they have to say.
          </p>
        </div>

        <div
          className={cn(
            "transition-all duration-1000 delay-300",
            isVisible ? "opacity-100" : "opacity-0"
          )}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3 p-4">
                  <Card className="h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex items-center">
                          <Avatar className="h-10 w-10 mr-3">
                            <AvatarImage src="" alt={testimonial.name} />
                            <AvatarFallback className="bg-primary/10 text-primary">
                              {testimonial.avatar}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                          </div>
                        </div>
                        <Quote className="h-6 w-6 text-primary/40" />
                      </div>
                      
                      <p className="text-muted-foreground flex-1 mb-4">
                        "{testimonial.content}"
                      </p>
                      
                      <div className="flex items-center">
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={cn(
                                "w-4 h-4",
                                i < testimonial.rating ? "fill-current" : "text-muted"
                              )}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground ml-2">
                          {testimonial.rating}.0
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative mr-2 left-0 translate-y-0" />
              <CarouselNext className="relative ml-2 right-0 translate-y-0" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}