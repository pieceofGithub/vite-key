"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle2 } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // This would normally call an API
      setEmail("");
    }
  };

  return (
    <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/5701645/pexels-photo-5701645.jpeg?auto=compress&cs=tinysrgb&w=1600')] opacity-10 bg-cover bg-center" />
      
      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <Mail className="h-12 w-12 mx-auto mb-6 opacity-90" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Stay Updated with KeySmart
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-lg mx-auto">
            Subscribe to our newsletter for exclusive offers, new product releases, and organization tips for your everyday carry.
          </p>

          {isSubmitted ? (
            <div className="flex items-center justify-center p-4 bg-primary-foreground/10 rounded-lg text-primary-foreground">
              <CheckCircle2 className="h-5 w-5 mr-2" />
              <span>Thanks for subscribing! Check your email soon.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60 focus-visible:ring-primary-foreground/30"
              />
              <Button 
                type="submit" 
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
              >
                Subscribe
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}