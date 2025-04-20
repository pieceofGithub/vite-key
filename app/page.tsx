import Hero from '@/components/hero';
import ProductCategories from '@/components/product-categories';
import FeaturesSection from '@/components/features-section';
import Testimonials from '@/components/testimonials';
import Newsletter from '@/components/newsletter';
import ProductShowcase from '@/components/product-showcase';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <ProductCategories />
      <FeaturesSection />
      <ProductShowcase />
      <Testimonials />
      <Newsletter />
    </div>
  );
}