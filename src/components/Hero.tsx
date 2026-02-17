import { ArrowRight, Github, Linkedin, Mail, Download, Sparkles, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import profileImage from '@/assets/profile.png';

const Hero = () => {
  const floatingVariants = {
    initial: { y: 0 },
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };

  const glowVariants = {
    initial: { opacity: 0.5 },
    animate: {
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-20">
      {/* Avatar with floating animation */}
      <motion.div 
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        className="mb-8"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          className="relative"
        >
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-orange-400 p-1">
            <motion.div 
              variants={glowVariants}
              initial="initial"
              animate="animate"
              className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-orange-400 blur-xl opacity-50"
            />
            <img 
              src={profileImage} 
              alt="Rishabh Dhawad"
              className="w-full h-full rounded-full object-cover relative z-10"
            />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute -top-2 -right-2"
          >
            <Sparkles className="w-6 h-6 text-primary animate-pulse" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Greeting with typing effect */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="overflow-hidden"
      >
        <motion.p 
          className="text-foreground font-mono text-lg md:text-xl mb-2 flex items-center gap-2"
          initial={{ width: 0 }}
          animate={{ width: "auto" }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Hi! I'm Rishabh Dhawad
          </motion.span>
          <motion.span 
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1] }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-2xl inline-block"
          >
            👋
          </motion.span>
        </motion.p>
      </motion.div>

      {/* Title with gradient animation */}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-center mb-6"
      >
        <motion.span 
          className="gradient-text inline-block"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          Fullstack Developer
        </motion.span>
        <motion.br 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        />
        <motion.span 
          className="text-foreground inline-block"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, type: "spring" }}
        >
          based in India.
        </motion.span>
      </motion.h1>

      {/* Description with reveal animation */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="overflow-hidden"
      >
        <motion.p 
          className="text-muted-foreground text-center max-w-xl text-lg mb-8 text-balance"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {"I'm a software developer passionate about building efficient, scalable, and".split(' ').map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="inline-block mr-1"
            >
              {word}
            </motion.span>
          ))}
          <br />
          {"user-friendly web applications. I enjoy turning complex problems into clean,".split(' ').map((word, i) => (
            <motion.span
              key={i + 10}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + i * 0.1 }}
              className="inline-block mr-1"
            >
              {word}
            </motion.span>
          ))}
          <br />
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="inline-block"
          >
            functional solutions.
          </motion.span>
        </motion.p>
      </motion.div>

      {/* CTA Buttons with enhanced animations */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-wrap justify-center gap-4 mb-12"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            size="lg"
            className="group font-mono bg-primary hover:bg-primary/90 text-primary-foreground relative overflow-hidden"
            asChild
          >
            <motion.a 
              href="#contact"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.div
                initial={{ x: -50 }}
                animate={{ x: 0 }}
                transition={{ delay: 1.5, duration: 0.5, ease: "easeOut" }}
                className="flex items-center"
              >
                Contact me
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.div>
            </motion.a>
          </Button>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            variant="outline" 
            size="lg"
            className="group border-border hover:border-primary hover:bg-primary/10 font-mono relative overflow-hidden"
            asChild
          >
            <motion.a 
              href="https://drive.google.com/file/d/1EaXhrVHOeACsOYYF6bLbJJE2wGwAqEyn/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.div
                initial={{ x: -50 }}
                animate={{ x: 0 }}
                transition={{ delay: 1.6, duration: 0.5, ease: "easeOut" }}
                className="flex items-center"
              >
                <Code2 className="mr-2 h-4 w-4" />
                My Resume
                <Download className="ml-2 h-4 w-4" />
              </motion.div>
            </motion.a>
          </Button>
        </motion.div>
      </motion.div>

      {/* Social Links with orbit animation */}
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
          <motion.div
            key={social.label}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 + index * 0.1, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.1, y: -2, rotate: [0, 5, -5, 0] }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.a
              href={social.href}
              target={social.href.startsWith('http') ? "_blank" : undefined}
              rel={social.href.startsWith('http') ? "noopener noreferrer" : undefined}
              className="p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all relative group"
            >
              <social.icon className="h-5 w-5 text-foreground" />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 rounded-lg bg-primary/10 -z-10"
              />
            </motion.a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Hero;
