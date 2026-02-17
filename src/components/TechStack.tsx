import { motion } from 'framer-motion';
import { Zap, Code, Rocket, Sparkles } from 'lucide-react';

const tools = [
  { name: 'Python', category: 'backend' },
  { name: 'Django', category: 'backend' },
  { name: 'FastAPI', category: 'backend' },
  { name: 'Flask', category: 'backend' },
  { name: 'Node.js', category: 'backend' },
  { name: 'Express', category: 'backend' },
  { name: 'React', category: 'frontend' },
  { name: 'Next.js', category: 'frontend' },
  { name: 'TypeScript', category: 'frontend' },
  { name: 'JavaScript', category: 'frontend' },
  { name: 'Tailwind CSS', category: 'frontend' },
  { name: 'Redux', category: 'frontend' },
  { name: 'MongoDB', category: 'database' },
  { name: 'PostgreSQL', category: 'database' },
  { name: 'SQLite', category: 'database' },
  { name: 'Docker', category: 'devops' },
  { name: 'Git', category: 'devops' },
  { name: 'Linux', category: 'devops' },
  { name: 'Selenium', category: 'tools' },
  { name: 'GraphQL', category: 'tools' },
  { name: 'Firebase', category: 'tools' },
  { name: 'Appwrite', category: 'tools' },
  { name: 'Figma', category: 'tools' },
  { name: 'Postman', category: 'tools' },
];

const TechStack = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const floatingVariants = {
    initial: { y: 0, rotate: 0 },
    animate: {
      y: [-3, 3, -3],
      rotate: [-2, 2, -2],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" as const
      }
    }
  };
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="section-heading flex items-center gap-2"
        >
          <Zap className="w-5 h-5 text-primary" />
          Tech Stack
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center flex items-center justify-center gap-3"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <Rocket className="w-8 h-8 text-primary" />
          </motion.div>
          Tools I Know
        </motion.h2>

        {/* Scrolling Tech Stack - First Line */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative overflow-hidden mb-1"
        >
          <motion.div 
            variants={floatingVariants}
            initial="initial"
            animate="animate"
            className="absolute inset-0 flex items-center justify-center opacity-10"
          >
            <Sparkles className="w-6 h-6 text-primary/30" />
          </motion.div>
          <div className="flex animate-scroll gap-4 py-4">
            {[...tools, ...tools].map((tool, index) => (
              <motion.div
                key={`${tool.name}-${index}`}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  borderColor: 'hsl(var(--primary))',
                  backgroundColor: 'hsl(var(--primary) / 0.1)',
                  rotate: [0, 5, -5, 0],
                  transition: { duration: 0.3 }
                }}
                className="flex-shrink-0 px-6 py-3 rounded-xl border border-border bg-card/50 backdrop-blur-sm transition-colors cursor-default relative overflow-hidden"
              >
                <motion.div
                  initial={{ x: -100 }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
                />
                <span className="font-mono text-foreground whitespace-nowrap relative z-10">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Scrolling Tech Stack - Second Line (Opposite Direction) */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative overflow-hidden"
        >
          <motion.div 
            variants={floatingVariants}
            initial="initial"
            animate="animate"
            className="absolute inset-0 flex items-center justify-center opacity-10"
          >
            <Code className="w-6 h-6 text-primary/30" />
          </motion.div>
          <div className="flex animate-scroll-reverse gap-4 py-4">
            {[...tools.slice().reverse(), ...tools.slice().reverse()].map((tool, index) => (
              <motion.div
                key={`${tool.name}-reverse-${index}`}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  borderColor: 'hsl(var(--primary))',
                  backgroundColor: 'hsl(var(--primary) / 0.1)',
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 }
                }}
                className="flex-shrink-0 px-6 py-3 rounded-xl border border-border bg-card/50 backdrop-blur-sm transition-colors cursor-default relative overflow-hidden"
              >
                <motion.div
                  initial={{ x: 100 }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0 bg-gradient-to-l from-transparent via-primary/20 to-transparent"
                />
                <span className="font-mono text-foreground whitespace-nowrap relative z-10">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Static Grid for Mobile with enhanced animations */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex flex-wrap justify-center gap-3 md:hidden"
        >
          {tools.slice(0, 12).map((tool, index) => (
            <motion.div
              key={tool.name}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.15,
                rotate: [0, 10, -10, 0],
                transition: { duration: 0.4 }
              }}
              className="px-4 py-2 rounded-lg border border-border bg-card/50 text-sm font-mono relative overflow-hidden"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/20"
              />
              <span className="relative z-10">{tool.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
