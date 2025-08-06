import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Journey', href: '#journey' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/sarthakkasar', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/sarthakkasar', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:sarthak@email.com', label: 'Email' },
  ];

  return (
    <footer className="relative py-16 px-6 bg-slate-deep/50 border-t border-slate-light/20">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="neon-text">Sarthak Kasar</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Passionate web developer and AI enthusiast crafting innovative digital solutions. 
              Always learning, always building, always exploring new possibilities.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 glass-card rounded-full hover:scale-110 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 text-foreground group-hover:text-electric-purple" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-electric-purple transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Current Status */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-foreground">Current Status</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-lime-green animate-pulse"></div>
                <span className="text-sm text-muted-foreground">Available for work</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-neon-blue animate-pulse"></div>
                <span className="text-sm text-muted-foreground">Learning AI/ML</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-sunset-orange animate-pulse"></div>
                <span className="text-sm text-muted-foreground">Building cool stuff</span>
              </div>
            </div>

            {/* Tech Stack Preview */}
            <div className="mt-6">
              <p className="text-sm text-muted-foreground mb-2">Built with:</p>
              <div className="flex flex-wrap gap-1">
                {['React', 'TypeScript', 'Tailwind'].map((tech) => (
                  <span key={tech} className="text-xs skill-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <div className="flex justify-center mb-8">
          <Button
            onClick={scrollToTop}
            className="btn-glass-primary group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-4 w-4 mr-2 group-hover:-translate-y-1 transition-transform" />
            Back to Top
          </Button>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-light/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 animate-pulse" />
              <span>by Sarthak Kasar</span>
            </div>
            
            <div className="text-muted-foreground text-sm">
              © {currentYear} All rights reserved
            </div>
          </div>
        </div>

        {/* Inspirational Quote */}
        <div className="text-center mt-8 p-6 glass-card bg-gradient-primary/10 border border-electric-purple/30">
          <p className="text-lg font-medium italic text-foreground/90">
            "The best way to predict the future is to invent it."
          </p>
          <p className="text-sm text-muted-foreground mt-2">- Alan Kay</p>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-primary rounded-full opacity-10 animate-float"></div>
        <div className="absolute -bottom-5 -right-5 w-24 h-24 bg-gradient-secondary rounded-full opacity-10 animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
    </footer>
  );
};

export default Footer;