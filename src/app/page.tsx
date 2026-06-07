import HeroSection from '@/components/HeroSection';
import MarqueeSection from '@/components/MarqueeSection';
import AboutPreview from '@/components/AboutPreview';
import ServicesSection from '@/components/ServicesSection';
import WorkSection from '@/components/WorkSection';
import GallerySection from '@/components/GallerySection';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <MarqueeSection />
      <AboutPreview />
      <ServicesSection />
      <WorkSection />
      <GallerySection />
      <TestimonialsSection />
    </>
  );
}
