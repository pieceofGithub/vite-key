"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/50 to-background/80" />
        <img
          src="https://images.pexels.com/photos/3951880/pexels-photo-3951880.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="KeySmart background"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center">
        <div 
          className={cn(
            "w-full md:w-1/2 space-y-6 text-center md:text-left transform transition-all duration-1000 ease-out",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Reimagine Your <span className="text-primary">Everyday Carry</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto md:mx-0">
            Organize your keys, eliminate pocket bulk, and carry smarter with our revolutionary key organizers and EDC tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" className="rounded-full px-8">
              Shop Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8">
              How It Works
            </Button>
          </div>
        </div>
        
        <div 
          className={cn(
            "w-full md:w-1/2 mt-12 md:mt-0 transform transition-all duration-1000 delay-300 ease-out",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}
        >
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-xl" />
            <img
              src="https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="KeySmart Pro"
              className="relative rounded-2xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-8 h-12 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full animate-bounce mt-2" />
        </div>
      </div>
    </section>
  );
}