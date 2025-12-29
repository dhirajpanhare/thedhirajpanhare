import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, MapPin, Phone, Heart, Send, Sparkles } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Resume', href: '#resume' },
    { label: 'Skills', href: '#skills' },
    { label: 'Portfolio', href: '#portfolio' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/dhirajpanhare', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/dhirajpanhare/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:dhirajpanhare08@gmail.com', label: 'Email' },
  ];

  const contactInfo = [
    { icon: MapPin, text: 'Indore, India' },
    { icon: Phone, text: '+91 9303019119' },
    { icon: Mail, text: 'dhirajpanhare08@gmail.com' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="py-16 md:py-24 lg:py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 md:w-96 md:h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Contact Section Header */}
          <div className="text-center mb-12 md:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/25 dark:bg-primary/15 border-2 border-primary/50 dark:border-primary/30 mb-6 shadow-xl shadow-primary/30">
              <Send className="h-4 w-4 text-primary drop-shadow-[0_0_12px_rgba(59,130,246,0.9)] animate-pulse" />
              <span className="text-sm font-semibold text-primary drop-shadow-lg">Let's Connect</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Get In Touch
            </h2>
            <p className="text-muted-foreground text-base md:text-lg lg:text-xl max-w-2xl mx-auto">
              Let's discuss how we can work together on your next project
            </p>
          </div>

          {/* Contact Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20">
            {/* Contact Info */}
            <Card className="group relative bg-card/60 dark:bg-card/40 backdrop-blur-sm border-2 border-primary/50 dark:border-primary/20 hover:border-primary/80 dark:hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/50 dark:hover:shadow-primary/30 hover:-translate-y-2 hover:scale-[1.02] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 to-indigo-500/15 dark:from-blue-500/8 dark:to-indigo-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-6 relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-2xl shadow-blue-500/40">
                    <MapPin className="h-6 w-6 text-white drop-shadow-2xl" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary group-hover:drop-shadow-lg transition-all duration-300">Contact Info</h3>
                </div>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-background/80 dark:bg-background/60 border-2 border-primary/40 dark:border-primary/20 hover:border-primary/70 dark:hover:border-primary/60 hover:shadow-xl hover:shadow-primary/30 dark:hover:shadow-primary/20 hover:scale-105 transition-all duration-300">
                      <info.icon className="h-5 w-5 text-primary flex-shrink-0 mt-0.5 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
                      <span className="text-sm text-foreground/80 dark:text-muted-foreground break-words">{info.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card className="group relative bg-card/60 dark:bg-card/40 backdrop-blur-sm border-2 border-accent/50 dark:border-accent/20 hover:border-accent/80 dark:hover:border-accent/60 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/50 dark:hover:shadow-accent/30 hover:-translate-y-2 hover:scale-[1.02] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/15 to-pink-500/15 dark:from-purple-500/8 dark:to-pink-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-6 relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500 to-pink-600 shadow-2xl shadow-purple-500/40">
                    <Sparkles className="h-6 w-6 text-white drop-shadow-2xl" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-accent group-hover:drop-shadow-lg transition-all duration-300">Quick Links</h3>
                </div>
                <div className="space-y-2">
                  {quickLinks.map((link, index) => (
                    <button
                      key={index}
                      onClick={() => scrollToSection(link.href)}
                      className="block w-full text-left p-3 rounded-lg text-sm text-foreground/80 dark:text-muted-foreground hover:text-primary hover:bg-primary/15 dark:hover:bg-primary/10 border-2 border-transparent hover:border-primary/50 dark:hover:border-primary/40 hover:shadow-xl hover:shadow-primary/30 dark:hover:shadow-primary/20 hover:scale-105 transition-all duration-300 font-medium"
                    >
                      {link.label}
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="group relative bg-card/60 dark:bg-card/40 backdrop-blur-sm border-2 border-primary/50 dark:border-primary/20 hover:border-primary/80 dark:hover:border-primary/60 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/50 dark:hover:shadow-primary/30 hover:-translate-y-2 hover:scale-[1.02] overflow-hidden sm:col-span-2 lg:col-span-1">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/15 to-blue-500/15 dark:from-indigo-500/8 dark:to-blue-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <CardContent className="p-6 relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-2xl shadow-green-500/40">
                    <Send className="h-6 w-6 text-white drop-shadow-2xl" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-primary group-hover:drop-shadow-lg transition-all duration-300">Connect</h3>
                </div>
                <div className="space-y-3 mb-6">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <Button
                      key={label}
                      variant="ghost"
                      className="w-full justify-start p-3 h-auto hover:bg-primary/15 dark:hover:bg-primary/10 hover:text-primary border-2 border-transparent hover:border-primary/50 dark:hover:border-primary/40 hover:shadow-xl hover:shadow-primary/30 dark:hover:shadow-primary/20 hover:scale-105 transition-all duration-300 text-foreground font-medium"
                      asChild
                    >
                      <a href={href} target="_blank" rel="noopener noreferrer">
                        <Icon className="h-5 w-5 mr-3 drop-shadow-lg" />
                        <span className="text-sm">{label}</span>
                      </a>
                    </Button>
                  ))}
                </div>
                
                <div className="pt-4 border-t-2 border-primary/40 dark:border-primary/20">
                  <p className="text-xs md:text-sm text-foreground/70 dark:text-muted-foreground text-center mb-4 font-medium">
                    Available for freelance work
                  </p>
                  <Button 
                    className="w-full bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] hover:shadow-2xl hover:shadow-primary/50 dark:hover:shadow-primary/40 hover:scale-105 transition-all duration-500 group/btn text-white font-semibold"
                    asChild
                  >
                    <a href="mailto:dhirajpanhare08@gmail.com">
                      <Mail className="h-4 w-4 mr-2 group-hover/btn:rotate-12 transition-transform duration-300" />
                      Send Message
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Footer Bottom */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 dark:from-primary/5 dark:via-accent/5 dark:to-primary/5 rounded-2xl blur-xl"></div>
            <div className="relative bg-card/50 dark:bg-card/30 backdrop-blur-sm border border-primary/30 dark:border-border/50 rounded-2xl p-6 md:p-8 shadow-lg">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div className="text-center md:text-left">
                  <p className="text-sm md:text-base text-foreground/80 dark:text-muted-foreground">
                    © 2025 <span className="text-primary font-semibold drop-shadow-lg">Dhiraj Panhare</span>. All rights reserved.
                  </p>
                </div>
                
                <div className="flex items-center gap-2 text-xs md:text-sm text-foreground/70 dark:text-muted-foreground">
                  <span>Made with</span>
                  <Heart className="h-4 w-4 text-red-500 fill-current animate-pulse drop-shadow-lg" />
                  <span>using React & Tailwind CSS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;