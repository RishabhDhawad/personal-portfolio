import { motion } from 'framer-motion';

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
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="section-heading text-center"
        >
          Tech Stack
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
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
          <div className="flex animate-scroll gap-4 py-4">
            {[...tools, ...tools].map((tool, index) => (
              <motion.div
                key={`${tool.name}-${index}`}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  borderColor: 'hsl(var(--primary))',
                  backgroundColor: 'hsl(var(--primary) / 0.1)'
                }}
                className="flex-shrink-0 px-6 py-3 rounded-xl border border-border bg-card/50 backdrop-blur-sm transition-colors cursor-default"
              >
                <span className="font-mono text-foreground whitespace-nowrap">
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
          <div className="flex animate-scroll-reverse gap-4 py-4">
            {[...tools.slice().reverse(), ...tools.slice().reverse()].map((tool, index) => (
              <motion.div
                key={`${tool.name}-reverse-${index}`}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  borderColor: 'hsl(var(--primary))',
                  backgroundColor: 'hsl(var(--primary) / 0.1)'
                }}
                className="flex-shrink-0 px-6 py-3 rounded-xl border border-border bg-card/50 backdrop-blur-sm transition-colors cursor-default"
              >
                <span className="font-mono text-foreground whitespace-nowrap">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Static Grid for Mobile */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 flex flex-wrap justify-center gap-3 md:hidden"
        >
          {tools.slice(0, 12).map((tool, index) => (
            <motion.span
              key={tool.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.05 }}
              whileHover={{ scale: 1.1 }}
              className="px-4 py-2 rounded-lg border border-border bg-card/50 text-sm font-mono text-foreground"
            >
              {tool.name}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
