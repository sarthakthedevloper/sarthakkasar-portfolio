
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, ExternalLink, MessageCircle, Github, Linkedin, Mail } from 'lucide-react';
import heroBackground from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "I build next-gen websites using code, AI, and curiosity.";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBackground})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-midnight/80 via-midnight/60 to-slate-deep/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center pt-24 md:pt-28">
        {/* Profile Image - Clean and Simple */}
        <div className="mb-12 md:mb-16 animate-fade-in">
          <img
            src="/lovable-uploads/13c2ab4a-c01b-4ce6-b270-dfa2598ab38e.png"
            alt="Sarthak Kasar"
            className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full border-2 border-slate-medium/30 object-cover object-top scale-110"
          />
        </div>

        {/* Main Heading */}
        <div className="mb-6 animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hi, I'm{' '}
            <span className="neon-text">Sarthak Kasar</span>
          </h1>
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 text-lg md:text-xl font-medium text-muted-foreground mb-6">
            <span className="skill-badge">Web Developer</span>
            <span className="skill-badge">AI Explorer</span>
            <span className="skill-badge">Tech Enthusiast</span>
          </div>
        </div>

        {/* Typing Animation */}
        <div className="mb-8 animate-slide-in-left">
          <p className="text-xl md:text-2xl text-foreground/90 font-light min-h-[3rem] flex items-center justify-center">
            {displayText}
            <span className="ml-1 typing-cursor">|</span>
          </p>
        </div>

        {/* Subtext */}
        <div className="mb-12 animate-slide-in-right">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I build beautiful and powerful websites using cutting-edge technologies & AI. 
            Passionate about learning, cricket, and crafting digital solutions that matter.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-scale-in">
          <Button 
            onClick={() => scrollToSection('projects')}
            className="btn-glass-primary text-lg px-8 py-6 group"
          >
            <ExternalLink className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            View Projects
          </Button>
          <Button 
            onClick={() => window.open('https://drive.google.com/file/d/11a9D0AsFUE7vcrJRgWDHFCJGym0cBsMd/view?usp=sharing', '_blank')}
            className="btn-glass-secondary text-lg px-8 py-6 group"
          >
            <Download className="mr-2 h-5 w-5 group-hover:bounce transition-transform" />
            Download Resume
          </Button>
          <Button 
            onClick={() => scrollToSection('contact')}
            className="btn-glass-accent text-lg px-8 py-6 group"
          >
            <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Let's Talk
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 animate-fade-in">
          <a 
            href="https://github.com/sarthakkasar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 glass-card rounded-full hover:scale-110 transition-all duration-300 group"
          >
            <Github className="h-6 w-6 text-foreground group-hover:text-electric-purple" />
          </a>
          <a 
            href="https://linkedin.com/in/sarthakkasar" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 glass-card rounded-full hover:scale-110 transition-all duration-300 group"
          >
            <Linkedin className="h-8 w-8 text-foreground group-hover:text-neon-blue" />
          </a>
          <a 
            href="mailto:sarthakkasar1629@gmail.com"
            className="p-3 glass-card rounded-full hover:scale-110 transition-all duration-300 group"
          >
            <Mail className="h-6 w-6 text-foreground group-hover:text-lime-green" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-electric-purple rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-primary rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
