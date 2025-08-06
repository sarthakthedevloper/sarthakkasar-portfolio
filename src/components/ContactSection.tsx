
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Send, MapPin, Mail, Phone, Github, Linkedin, ExternalLink } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "sarthakkasar1629@gmail.com",
      link: "mailto:sarthakkasar1629@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 89991 36729",
      link: "tel:+918999136729"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pune, Maharashtra, India",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/sarthakkasar",
      color: "hover:text-electric-purple"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://linkedin.com/in/sarthakkasar",
      color: "hover:text-neon-blue"
    },
    {
      icon: ExternalLink,
      label: "Portfolio",
      url: "https://sarthak.codes",
      color: "hover:text-lime-green"
    }
  ];

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-midnight via-slate-deep to-midnight">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="neon-text">Let's Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project or just have a chat about tech!
          </p>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-in-left">
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-6 text-electric-purple">Send Me a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="glass-input"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="glass-input"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="glass-input resize-none"
                    placeholder="Tell me about your project or just say hi!"
                  />
                </div>

                <Button 
                  type="submit"
                  className="btn-glass-primary w-full group"
                >
                  <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="animate-slide-in-right space-y-8">
            {/* Contact Details */}
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-6 text-neon-blue">Get in Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="p-3 glass-card rounded-full bg-gradient-primary/20">
                      <info.icon className="h-5 w-5 text-electric-purple" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-foreground hover:text-electric-purple transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-8">
              <h3 className="text-2xl font-semibold mb-6 text-lime-green">Follow Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 glass-card rounded-xl hover:scale-110 transition-all duration-300 group ${social.color}`}
                  >
                    <social.icon className="h-6 w-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Status */}
            <div className="glass-card p-6 bg-gradient-primary/10 border-2 border-electric-purple/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-lime-green rounded-full"></div>
                <span className="font-semibold text-lime-green">Currently Available</span>
              </div>
              <p className="text-sm text-foreground/80">
                Open to new opportunities and exciting projects. Let's build something amazing together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
