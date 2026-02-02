import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  return (
    <footer className="relative py-12 px-4 border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-foreground mb-3 font-mono">
              Rishabh Dhawad
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Fullstack Developer passionate about creating amazing web experiences.
            </p>
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                size="sm"
                asChild
                className="border-border hover:border-primary hover:bg-primary/10"
              >
                <a 
                  href="https://github.com/RishabhDhawad" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                asChild
                className="border-border hover:border-primary hover:bg-primary/10"
              >
                <a 
                  href="https://linkedin.com/in/rishabhdhawad" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>

          {/* Get In Touch */}
          <div>
            <h4 className="text-foreground font-semibold mb-4 font-mono flex items-center gap-2">
              Get In Touch
            </h4>
            <div className="space-y-3">
              <a 
                href="mailto:rishabhdhawad29@gmail.com" 
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                <Mail className="h-4 w-4" />
                rishabhdhawad29@gmail.com
              </a>
              <p className="text-muted-foreground text-sm">
                Available for freelance projects
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-foreground font-semibold mb-4 font-mono">
              Quick Links
            </h4>
            <nav className="space-y-2">
              <a 
                href="#about" 
                className="block text-muted-foreground hover:text-primary text-sm transition-colors"
              >
                About
              </a>
              <a 
                href="#services" 
                className="block text-muted-foreground hover:text-primary text-sm transition-colors"
              >
                Services
              </a>
              <a 
                href="#projects" 
                className="block text-muted-foreground hover:text-primary text-sm transition-colors"
              >
                Portfolio
              </a>
              <a 
                href="#contact" 
                className="block text-muted-foreground hover:text-primary text-sm transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-6 text-center">
          <p className="text-muted-foreground text-sm font-mono">
            © {new Date().getFullYear()} Rishabh Dhawad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
