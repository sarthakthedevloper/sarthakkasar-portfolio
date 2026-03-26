import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EnhancedSkillsSection from '@/components/EnhancedSkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import AchievementsSection from '@/components/AchievementsSection';
import TimelineSection from '@/components/TimelineSection';
import EnhancedContactSection from '@/components/EnhancedContactSection';
import Footer from '@/components/Footer';
import FloatingParticles from '@/components/FloatingParticles';
import AnimatedBackground from '@/components/AnimatedBackground';
import { ScrollToTop } from '@/components/ScrollToTop';

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-poppins">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Floating Background Particles */}
      <FloatingParticles />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <EnhancedSkillsSection />
        <ProjectsSection />
        <AchievementsSection />
        <TimelineSection />
        <EnhancedContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Scroll to Top */}
      <ScrollToTop />
    </div>
  );
};

export default Index;
