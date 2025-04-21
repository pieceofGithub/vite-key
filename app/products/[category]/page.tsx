"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  ChevronRight,
  Star,
  SlidersHorizontal,
  ArrowDownUp,
  ShoppingCart,
  Heart,
  Eye,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

// Mock product data based on category
const productData = {
  "key-organizers": [
    {
      id: 1,
      name: "KeySmart Classic",
      price: 22.99,
      image:
        "https://images.pexels.com/photos/821651/pexels-photo-821651.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.8,
      reviewCount: 1245,
      isNew: false,
      isBestSeller: true,
    },
    {
      id: 2,
      name: "KeySmart Pro",
      price: 39.99,
      image:
        "https://images.pexels.com/photos/5701645/pexels-photo-5701645.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.9,
      reviewCount: 2354,
      isNew: false,
      isBestSeller: false,
    },
    {
      id: 3,
      name: "KeySmart Max",
      price: 49.99,
      image:
        "https://images.pexels.com/photos/4464819/pexels-photo-4464819.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.7,
      reviewCount: 867,
      isNew: true,
      isBestSeller: false,
    },
    {
      id: 4,
      name: "KeySmart Nano",
      price: 19.99,
      image:
        "https://images.pexels.com/photos/1105584/pexels-photo-1105584.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.6,
      reviewCount: 532,
      isNew: false,
      isBestSeller: false,
    },
    {
      id: 5,
      name: "KeySmart Rugged",
      price: 29.99,
      image:
        "https://images.pexels.com/photos/5701645/pexels-photo-5701645.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.8,
      reviewCount: 976,
      isNew: false,
      isBestSeller: false,
    },
    {
      id: 6,
      name: "KeySmart Urban",
      price: 34.99,
      image:
        "https://images.pexels.com/photos/4464819/pexels-photo-4464819.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.7,
      reviewCount: 423,
      isNew: true,
      isBestSeller: false,
    },
  ],
  trackers: [
    {
      id: 7,
      name: "KeySmart Tracker Pro",
      price: 29.99,
      image:
        "https://images.pexels.com/photos/7055937/pexels-photo-7055937.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.7,
      reviewCount: 685,
      isNew: false,
      isBestSeller: true,
    },
    {
      id: 8,
      name: "KeySmart GPS Tracker",
      price: 49.99,
      image:
        "https://images.pexels.com/photos/5701645/pexels-photo-5701645.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.5,
      reviewCount: 312,
      isNew: true,
      isBestSeller: false,
    },
    {
      id: 9,
      name: "KeySmart Mini Tracker",
      price: 19.99,
      image:
        "https://images.pexels.com/photos/4464819/pexels-photo-4464819.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.3,
      reviewCount: 245,
      isNew: false,
      isBestSeller: false,
    },
  ],
  accessories: [
    {
      id: 10,
      name: "KeySmart Expansion Pack",
      price: 12.99,
      image:
        "https://images.pexels.com/photos/175039/pexels-photo-175039.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.8,
      reviewCount: 523,
      isNew: false,
      isBestSeller: true,
    },
    {
      id: 11,
      name: "KeySmart Multi-Tool",
      price: 14.99,
      image:
        "https://images.pexels.com/photos/1105584/pexels-photo-1105584.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.7,
      reviewCount: 421,
      isNew: false,
      isBestSeller: false,
    },
    {
      id: 12,
      name: "KeySmart Clip",
      price: 9.99,
      image:
        "https://images.pexels.com/photos/4464819/pexels-photo-4464819.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.6,
      reviewCount: 287,
      isNew: true,
      isBestSeller: false,
    },
    {
      id: 13,
      name: "KeySmart Leather Pouch",
      price: 19.99,
      image:
        "https://images.pexels.com/photos/5701645/pexels-photo-5701645.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.5,
      reviewCount: 168,
      isNew: false,
      isBestSeller: false,
    },
  ],
  bundles: [
    {
      id: 14,
      name: "KeySmart Ultimate Bundle",
      price: 79.99,
      image:
        "https://images.pexels.com/photos/4379903/pexels-photo-4379903.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.9,
      reviewCount: 312,
      isNew: false,
      isBestSeller: true,
    },
    {
      id: 15,
      name: "KeySmart Everyday Carry Bundle",
      price: 59.99,
      image:
        "https://images.pexels.com/photos/5701645/pexels-photo-5701645.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.8,
      reviewCount: 247,
      isNew: true,
      isBestSeller: false,
    },
    {
      id: 16,
      name: "KeySmart Travel Bundle",
      price: 89.99,
      image:
        "https://images.pexels.com/photos/4464819/pexels-photo-4464819.jpeg?auto=compress&cs=tinysrgb&w=1600",
      rating: 4.7,
      reviewCount: 183,
      isNew: false,
      isBestSeller: false,
    },
  ],
};

// Category to display name mapping
const categoryNames: Record<string, string> = {
  "key-organizers": "Key Organizers",
  trackers: "Key Trackers",
  accessories: "Accessories",
  bundles: "Bundles",
};

export default function ProductCategoryPage() {
  const params = useParams();
  const category = (params?.category as string) || "key-organizers";

  const [products, setProducts] = useState<any[]>([]);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [sortBy, setSortBy] = useState("popular");

  useEffect(() => {
    // Get products based on category
    setProducts(productData[category as keyof typeof productData] || []);
  }, [category]);

  // Sort products based on selected option
  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === "price-asc") return a.price - b.price;
    if (sortBy === "price-desc") return b.price - a.price;
    if (sortBy === "rating") return b.rating - a.rating;
    // Default sort by popularity (best sellers first, then by review count)
    if (a.isBestSeller && !b.isBestSeller) return -1;
    if (!a.isBestSeller && b.isBestSeller) return 1;
    return b.reviewCount - a.reviewCount;
  });

  // Filter products by price range
  const filteredProducts = sortedProducts.filter(
    (product) =>
      product.price >= priceRange[0] && product.price <= priceRange[1]
  );

  return (
    <div className="flex flex-col min-h-screen pt-24">
      {/* Breadcrumb */}
      <div className="bg-muted/50 py-4">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center text-sm">
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
            <Link
              href="/products"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Products
            </Link>
            <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
            <span className="font-medium">
              {categoryNames[category] || category}
            </span>
          </div>
        </div>
      </div>

      {/* Product Listing */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar Filters - Mobile */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  className="md:hidden flex items-center mb-4"
                >
                  <SlidersHorizontal className="mr-2 h-4 w-4" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                </SheetHeader>
                <div className="py-4">
                  <h3 className="text-sm font-medium mb-2">Price Range</h3>
                  <div className="px-2">
                    <Slider
                      defaultValue={[0, 100]}
                      max={100}
                      step={1}
                      value={priceRange}
                      onValueChange={setPriceRange}
                      className="my-6"
                    />
                    <div className="flex items-center justify-between text-sm">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            {/* Sidebar Filters - Desktop */}
            <div className="hidden md:block md:w-1/4 lg:w-1/5">
              <div className="bg-card rounded-lg p-6 shadow-sm sticky top-24">
                <h3 className="font-medium mb-4">Filters</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-medium mb-3">Price Range</h4>
                    <div className="px-2">
                      <Slider
                        defaultValue={[0, 100]}
                        max={100}
                        step={1}
                        value={priceRange}
                        onValueChange={setPriceRange}
                        className="my-6"
                      />
                      <div className="flex items-center justify-between text-sm">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="md:w-3/4 lg:w-4/5">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
                <h1 className="text-2xl md:text-3xl font-bold">
                  {categoryNames[category] || category}
                </h1>

                <div className="flex items-center mt-4 sm:mt-0">
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="popular">Most Popular</SelectItem>
                      <SelectItem value="price-asc">
                        Price: Low to High
                      </SelectItem>
                      <SelectItem value="price-desc">
                        Price: High to Low
                      </SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {filteredProducts.length === 0 ? (
                <div className="text-center py-12">
                  <h3 className="text-xl font-medium mb-2">
                    No products found
                  </h3>
                  <p className="text-muted-foreground">
                    Try adjusting your filters or check back later for new
                    products.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <Card key={product.id} className="group overflow-hidden">
                      <div className="relative">
                        <Link href={`/products/${category}/${product.id}`}>
                          <div className="aspect-square overflow-hidden">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                          </div>
                        </Link>

                        {/* Product badges */}
                        <div className="absolute top-2 left-2 flex flex-col gap-2">
                          {product.isNew && (
                            <Badge className="bg-primary">New</Badge>
                          )}
                          {product.isBestSeller && (
                            <Badge variant="secondary">Best Seller</Badge>
                          )}
                        </div>

                        {/* Quick action buttons */}
                        <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <Button
                            variant="secondary"
                            size="icon"
                            className="h-8 w-8 rounded-full"
                          >
                            <Heart className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="secondary"
                            size="icon"
                            className="h-8 w-8 rounded-full"
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      <CardContent className="p-4">
                        <div className="flex items-center mb-1">
                          <div className="flex text-yellow-400">
                            <Star className="h-4 w-4 fill-current" />
                          </div>
                          <span className="text-sm ml-1">
                            {product.rating}{" "}
                            <span className="text-muted-foreground">
                              ({product.reviewCount})
                            </span>
                          </span>
                        </div>
                        <h3 className="font-medium text-lg mb-1">
                          <Link href={`/products/${category}/${product.id}`}>
                            {product.name}
                          </Link>
                        </h3>
                        <p className="font-semibold">
                          ${product.price.toFixed(2)}
                        </p>
                      </CardContent>

                      <CardFooter className="p-4 pt-0">
                        <Button className="w-full" size="sm">
                          <ShoppingCart className="mr-2 h-4 w-4" />
                          Add to Cart
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
