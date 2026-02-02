import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import profileImage from '@/assets/profile.png';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20">
      {/* Avatar */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        className="mb-8"
      >
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-orange-400 p-1 glow-effect">
          <img 
            src={profileImage} 
            alt="Rishabh Dhawad"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
      </motion.div>

      {/* Greeting */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-foreground font-mono text-lg md:text-xl mb-2 flex items-center gap-2"
      >
        Hi! I'm Rishabh Dhawad <span className="text-2xl">👋</span>
      </motion.p>

      {/* Title */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-center mb-6"
      >
        <span className="gradient-text">Fullstack Developer</span>
        <br />
        <span className="text-foreground">based in India.</span>
      </motion.h1>

      {/* Description */}
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-muted-foreground text-center max-w-xl text-lg mb-8 text-balance"
      >
        I'm a software developer passionate about building efficient, scalable, and
        user-friendly web applications. I enjoy turning complex problems into clean,
        functional solutions.
      </motion.p>

      {/* CTA Buttons */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-wrap justify-center gap-4 mb-12"
      >
        <Button 
          size="lg"
          className="group font-mono bg-primary hover:bg-primary/90 text-primary-foreground"
          asChild
        >
          <a href="#contact">
            Contact me
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </Button>
        <Button 
          variant="outline" 
          size="lg"
          className="group border-border hover:border-primary hover:bg-primary/10 font-mono"
          asChild
        >
          <a href="https://drive.google.com/file/d/1EaXhrVHOeACsOYYF6bLbJJE2wGwAqEyn/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            My Resume
            <Download className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </motion.div>

      {/* Social Links */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="flex gap-4"
      >
        {[
          { href: "https://github.com/RishabhDhawad", icon: Github, label: "GitHub" },
          { href: "https://linkedin.com/in/rishabhdhawad", icon: Linkedin, label: "LinkedIn" },
          { href: "#contact", icon: Mail, label: "Email" }
        ].map((social, index) => (
          <motion.a
            key={social.label}
            href={social.href}
            target={social.href.startsWith('http') ? "_blank" : undefined}
            rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
            className="p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all"
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <social.icon className="h-5 w-5 text-foreground" />
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
