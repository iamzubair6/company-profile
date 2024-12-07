import HeroSection from '@/components/home/hero-section';
import ServicesOverview from '@/components/home/services-overview';
import FeaturedProjects from '@/components/home/featured-projects';
import Testimonials from '@/components/home/testimonials';
import TechnologyStack from '@/components/home/technology-stack';
import CTASection from '@/components/home/cta-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <ServicesOverview />
      <FeaturedProjects />
      <TechnologyStack />
      <Testimonials />
      <CTASection />
    </div>
  );
}