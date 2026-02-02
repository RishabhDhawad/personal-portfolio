import { motion } from 'framer-motion';

const skills = [
  'HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Python', 'Django', 'FastAPI',
  'TypeScript', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Tailwind CSS',
  'Git', 'Docker', 'GraphQL', 'REST API', 'Redux', 'Framer Motion'
];

const About = () => {
  return (
    <section id="about" className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-heading"
        >
          About Me
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold mb-8"
        >
          Crafting Digital Experiences
        </motion.h2>

        {/* Terminal Style Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="terminal-window overflow-hidden"
        >
          {/* Terminal Header */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
            <div className="terminal-dot terminal-dot-red" />
            <div className="terminal-dot terminal-dot-yellow" />
            <div className="terminal-dot terminal-dot-green" />
            <span className="ml-4 text-muted-foreground font-mono text-sm">rishabh.sh</span>
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
              <span className="text-terminal-green">$</span>
              <span className="text-foreground">cat introduction.txt</span>
            </motion.div>
            
            <motion.p 
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground leading-relaxed pl-4"
            >
              I am a Fullstack Developer passionate about building seamless web applications.
              I specialize in crafting responsive interfaces and reliable backend systems,
              turning complex problems into efficient solutions.
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
                  whileHover={{ scale: 1.1, backgroundColor: 'hsl(var(--primary) / 0.2)' }}
                  className="px-3 py-1 rounded-md bg-secondary text-foreground text-sm cursor-default"
                >
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
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
