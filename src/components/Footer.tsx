
import { Heart, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/sarthakkasar',
      label: 'GitHub',
      color: 'hover:text-electric-purple'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/sarthakkasar',
      label: 'LinkedIn',
      color: 'hover:text-neon-blue'
    },
    {
      icon: Mail,
      href: 'mailto:sarthakkasar1629@gmail.com',
      label: 'Email',
      color: 'hover:text-lime-green'
    },
    {
      icon: ExternalLink,
      href: 'https://sarthak.codes',
      label: 'Portfolio',
      color: 'hover:text-sunset-orange'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-midnight border-t border-slate-medium/30">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <button 
              onClick={scrollToTop}
              className="text-2xl font-bold mb-4 hover:scale-105 transition-transform"
            >
              <span className="neon-text">Sarthak Kasar</span>
            </button>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Passionate web developer and AI enthusiast building next-generation digital experiences. 
              Always learning, always growing.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 bg-lime-green rounded-full"></div>
              <span>Available for new opportunities</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-electric-purple">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-foreground transition-colors hover:translate-x-1 transform duration-200 block"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-neon-blue">Connect</h4>
            <div className="space-y-3">
              <a 
                href="mailto:sarthakkasar1629@gmail.com"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                sarthakkasar1629@gmail.com
              </a>
              <a 
                href="tel:+918999136729"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                +91 89991 36729
              </a>
              <p className="text-muted-foreground">
                Pune, Maharashtra, India
              </p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-slate-medium/30">
          <div className="flex items-center gap-2 text-muted-foreground mb-4 sm:mb-0">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>by Sarthak Kasar</span>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-2 glass-card rounded-lg hover:scale-110 transition-all duration-300 ${social.color}`}
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-6 border-t border-slate-medium/30 mt-6">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Sarthak Kasar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
