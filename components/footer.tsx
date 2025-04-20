import Link from "next/link";
import { Key, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted py-12 border-t">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="md:w-1/4">
            <div className="flex items-center space-x-2 mb-4">
              <Key className="h-6 w-6 text-primary" />
              <span className="font-bold text-xl">KeySmart</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Reimagining everyday carry with innovative key organizers and smart accessories since 2013.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:w-2/3">
            <div>
              <h3 className="font-semibold text-lg mb-4">Shop</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/products/key-organizers" className="text-muted-foreground hover:text-primary transition-colors">
                    Key Organizers
                  </Link>
                </li>
                <li>
                  <Link href="/products/trackers" className="text-muted-foreground hover:text-primary transition-colors">
                    Key Trackers
                  </Link>
                </li>
                <li>
                  <Link href="/products/accessories" className="text-muted-foreground hover:text-primary transition-colors">
                    Accessories
                  </Link>
                </li>
                <li>
                  <Link href="/products/bundles" className="text-muted-foreground hover:text-primary transition-colors">
                    Bundles
                  </Link>
                </li>
                <li>
                  <Link href="/products/new-arrivals" className="text-muted-foreground hover:text-primary transition-colors">
                    New Arrivals
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Support</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/shipping" className="text-muted-foreground hover:text-primary transition-colors">
                    Shipping Policy
                  </Link>
                </li>
                <li>
                  <Link href="/returns" className="text-muted-foreground hover:text-primary transition-colors">
                    Returns & Exchanges
                  </Link>
                </li>
                <li>
                  <Link href="/warranty" className="text-muted-foreground hover:text-primary transition-colors">
                    Warranty
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="/reviews" className="text-muted-foreground hover:text-primary transition-colors">
                    Reviews
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-muted-foreground hover:text-primary transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/press" className="text-muted-foreground hover:text-primary transition-colors">
                    Press
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} KeySmart. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/sitemap" className="text-muted-foreground hover:text-primary text-sm transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}