"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, ShieldCheck, KeyRound, Clock, RotateCcw, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: KeyRound,
    title: "Compact Organization",
    description: "Eliminate key bulge with our patented design that organizes up to 14 keys in a sleek profile.",
  },
  {
    icon: RotateCcw,
    title: "Swivel Design",
    description: "360° swivel design makes accessing your keys smooth and effortless whenever you need them.",
  },
  {
    icon: ShieldCheck,
    title: "Premium Materials",
    description: "Built with aircraft-grade aluminum for incredible durability that withstands everyday use.",
  },
  {
    icon: Clock,
    title: "Time-Saving",
    description: "Quickly identify and access the key you need, saving precious time in your busy day.",
  },
  {
    icon: Sparkles,
    title: "No Scratches",
    description: "Protect your phone, wallet, and other pocket items from scratches caused by loose keys.",
  },
  {
    icon: CheckCircle2,
    title: "Lifetime Warranty",
    description: "We stand behind our products with a lifetime guarantee against manufacturing defects.",
  },
];

export default function FeaturesSection() {
  const [visibleFeatures, setVisibleFeatures] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute("data-index") || "0");
          if (entry.isIntersecting && !visibleFeatures.includes(index)) {
            setVisibleFeatures((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".feature-item");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [visibleFeatures]);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Key Features
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover why thousands of people have switched to KeySmart for a better everyday carry experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="feature-item"
              data-index={index}
            >
              <div
                className={cn(
                  "flex flex-col items-center text-center transform transition-all duration-700 ease-out",
                  visibleFeatures.includes(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                )}
                style={{
                  transitionDelay: `${100 * index}ms`,
                }}
              >
                <div className="mb-5 p-3 rounded-full bg-primary/10 text-primary">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}