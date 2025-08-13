import { useState, useEffect } from 'react';
import { Menu, X, Home, User, Code, Briefcase, MapPin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from './ThemeToggle';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, href: '#' },
    { id: 'about', label: 'About', icon: User, href: '#about' },
    { id: 'skills', label: 'Skills', icon: Code, href: '#skills' },
    { id: 'projects', label: 'Projects', icon: Briefcase, href: '#projects' },
    { id: 'journey', label: 'Journey', icon: MapPin, href: '#journey' },
    { id: 'contact', label: 'Contact', icon: Mail, href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.id);
      const currentSection = sections.find(section => {
        const element = section === 'home' ? 
          document.body : 
          document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-card border-b border-slate-light/20' : 'bg-transparent'
      }`}>
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <button
                onClick={() => scrollToSection('#')}
                className="text-2xl font-bold neon-text hover:scale-105 transition-transform"
              >
                Sarthak.codes
              </button>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <motion.button
                  key={item.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.href)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'btn-glass-primary'
                      : 'text-foreground hover:text-electric-purple'
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </motion.button>
              ))}
              <ThemeToggle />
            </div>

            {/* Mobile Menu & Theme Toggle */}
            <div className="md:hidden flex items-center gap-3">
              <ThemeToggle />
              <motion.div whileTap={{ scale: 0.95 }}>
                <Button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="btn-glass"
                  size="sm"
                >
                  {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-midnight/80 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)} />
          <div className="absolute top-0 right-0 h-full w-80 glass-card border-l border-slate-light/20 p-6">
            <div className="flex flex-col gap-4 mt-16">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.href)}
                  className={`flex items-center gap-4 p-4 rounded-lg font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'btn-glass-primary'
                      : 'glass-card hover:scale-105'
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile Menu Footer */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="glass-card p-4 text-center">
                <p className="text-sm text-muted-foreground mb-2">Let's connect!</p>
                <Button
                  onClick={() => scrollToSection('#contact')}
                  className="btn-glass-accent w-full"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Navigation Dots (Desktop Only) */}
      <div className="hidden lg:block fixed right-8 top-1/2 transform -translate-y-1/2 z-40">
        <div className="flex flex-col gap-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.href)}
              className={`group relative w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === item.id
                  ? 'bg-gradient-primary scale-125'
                  : 'bg-slate-light hover:bg-electric-purple hover:scale-110'
              }`}
              title={item.label}
            >
              <div className={`absolute right-6 top-1/2 transform -translate-y-1/2 px-3 py-1 rounded-lg glass-card opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap ${
                activeSection === item.id ? 'opacity-100' : ''
              }`}>
                <span className="text-sm font-medium text-foreground">{item.label}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;