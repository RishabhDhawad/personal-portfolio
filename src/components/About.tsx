import { motion } from 'framer-motion';
import { Terminal, Cpu, Zap, Star } from 'lucide-react';

const skills = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Python', 'Django', 'FastAPI',
  'TypeScript', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Tailwind CSS',
  'Git', 'Docker', 'GraphQL', 'REST API', 'Redux', 'Framer Motion'
];

const About = () => {
  const terminalVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 50 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  const lineVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };
  return (
    <section id="about" className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-heading flex items-center gap-2"
        >
          <Terminal className="w-5 h-5 text-primary" />
          About Me
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <Cpu className="w-8 h-8 text-primary" />
          </motion.div>
          Crafting Digital Experiences
        </motion.h2>

        {/* Terminal Style Card with enhanced animations */}
        <motion.div 
          variants={terminalVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="terminal-window overflow-hidden relative"
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.2 }
          }}
        >
          {/* Glitch effect overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.1, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute inset-0 bg-primary/5 pointer-events-none"
          />
          {/* Terminal Header with animated dots */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
            <div className="flex gap-2">
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="terminal-dot terminal-dot-red"
              />
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, delay: 0.5, repeat: Infinity }}
                className="terminal-dot terminal-dot-yellow"
              />
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, delay: 1, repeat: Infinity }}
                className="terminal-dot terminal-dot-green"
              />
            </div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="ml-4 text-muted-foreground font-mono text-sm flex items-center gap-2"
            >
              <Zap className="w-3 h-3 text-primary" />
              rishabh.sh
            </motion.div>
          </div>

          {/* Terminal Content */}
          <div className="p-6 font-mono text-sm md:text-base space-y-4">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex gap-2"
            >
              <motion.span 
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-terminal-green"
              >
                $
              </motion.span>
              <motion.span 
                className="text-foreground"
                initial={{ width: 0 }}
                animate={{ width: "auto" }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                cat introduction.txt
              </motion.span>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground leading-relaxed pl-4"
            >
              I'm a software developer passionate about building efficient, scalable, and
              user-friendly web applications. I enjoy turning complex problems into clean,
              functional solutions.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex gap-2 mt-6"
            >
              <span className="text-terminal-green">$</span>
              <span className="text-foreground">cat education.txt</span>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="text-muted-foreground leading-relaxed pl-4"
            >
              🎓 Bachelor of Technology in Computer Science
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="flex gap-2 mt-6"
            >
              <span className="text-terminal-green">$</span>
              <span className="text-foreground">cat passion.txt</span>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 }}
              className="text-muted-foreground leading-relaxed pl-4"
            >
              Constantly learning and experimenting with new technologies,
              I aim to deliver clean, high-quality code and user-friendly experiences.
              Built more than 10 production-ready projects.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.0 }}
              className="flex gap-2 mt-6"
            >
              <span className="text-terminal-green">$</span>
              <span className="text-foreground">ls skills/</span>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.1 }}
              className="flex flex-wrap gap-2 pl-4 mt-2"
            >
              {skills.map((skill, index) => (
                <motion.span 
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.1 + index * 0.05 }}
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: 'hsl(var(--primary) / 0.2)',
                    rotate: [0, 5, -5, 0],
                    transition: { duration: 0.3 }
                  }}
                  className="px-3 py-1 rounded-md bg-secondary text-foreground text-sm cursor-default relative overflow-hidden"
                >
                  <motion.div
                    initial={{ x: -100 }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
                  />
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.5 }}
              className="flex gap-2 mt-6 items-center"
            >
              <span className="text-terminal-green">$</span>
              <span className="text-foreground">_</span>
              <motion.span 
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                className="w-2 h-5 bg-primary"
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="ml-2"
              >
                <Star className="w-4 h-4 text-primary animate-pulse" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
