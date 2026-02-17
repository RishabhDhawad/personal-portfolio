import { ExternalLink, ArrowRight, Rocket, Code, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const projectCategories = [
  {
    title: 'Frontend Projects',
    description: 'Responsive and modern web interfaces built with React, Next.js, and TypeScript.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Backend Projects',
    description: 'Scalable APIs and server-side logic using Python, Django, FastAPI, and Node.js.',
    tags: ['Python', 'Django', 'FastAPI', 'Node.js'],
  },
  {
    title: 'Web Scraping',
    description: 'Data extraction and workflow automation using Selenium and custom scrapers.',
    tags: ['Python', 'Selenium', 'BeautifulSoup', 'Automation'],
  },
  {
    title: 'API Development',
    description: 'Secure and high-performance RESTful services with proper authentication.',
    tags: ['REST API', 'GraphQL', 'JWT', 'OAuth'],
  },
];

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

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { duration: 0.5, type: "spring" as const }
  },
};

const floatingVariants = {
  initial: { y: 0 },
  animate: {
    y: [-5, 5, -5],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut" as const
    }
  }
};

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="section-heading flex items-center gap-2"
            >
              <Rocket className="w-5 h-5 text-primary" />
              Projects
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-4xl font-bold"
            >
              My Latest Work
            </motion.h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <motion.div variants={floatingVariants} initial="initial" animate="animate">
              <Button variant="link" className="text-primary font-mono group" asChild>
                <a href="https://github.com/RishabhDhawad" target="_blank" rel="noopener noreferrer">
                  <motion.div className="flex items-center">
                    <Code className="mr-2 h-4 w-4" />
                    View all on GitHub
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </motion.div>
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-muted-foreground text-lg mb-8 max-w-3xl"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Welcome to my web development portfolio!
          </motion.span>
          <br />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Explore a collection of projects showcasing my skills in creating dynamic and responsive websites.
          </motion.span>
        </motion.p>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-6"
        >
          {projectCategories.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.02, 
                y: -8,
                transition: { duration: 0.2 }
              }}
              className="group rounded-xl border border-border bg-card/50 backdrop-blur-sm p-6"
            >
              {/* Project Header with enhanced animations */}
              <div className="flex items-start justify-between mb-4">
                <motion.h3 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-xl font-semibold group-hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                  {project.title}
                </motion.h3>
                <motion.a
                  href="https://github.com/RishabhDhawad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-secondary transition-colors"
                  whileHover={{ scale: 1.2, rotate: 15 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                </motion.a>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tags with staggered animation */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: tagIndex * 0.05, type: "spring" }}
                    whileHover={{ 
                      scale: 1.15, 
                      rotate: [0, 5, -5, 0],
                      transition: { duration: 0.3 }
                    }}
                    className="px-2 py-1 rounded-md bg-secondary/50 text-muted-foreground text-xs font-mono relative overflow-hidden"
                  >
                    <motion.div
                      initial={{ x: -100 }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent"
                    />
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Show More Button with enhanced animation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center mt-10"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <motion.div
              animate={{ rotate: [0, 1, 0, -1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-1 bg-gradient-to-r from-primary via-purple-500 to-primary opacity-20 blur-lg"
            />
            <Button 
              variant="outline" 
              size="lg"
              className="group border-border hover:border-primary hover:bg-primary/10 font-mono relative overflow-hidden"
              asChild
            >
              <motion.a 
                href="https://github.com/RishabhDhawad" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="flex items-center"
                >
                  Show more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </motion.div>
              </motion.a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
