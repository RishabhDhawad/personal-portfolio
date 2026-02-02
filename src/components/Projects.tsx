import { ExternalLink, ArrowRight } from 'lucide-react';
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
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  },
};

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="section-heading"
            >
              Projects
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold"
            >
              My Latest Work
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Button variant="link" className="text-primary font-mono group" asChild>
              <a href="https://github.com/RishabhDhawad" target="_blank" rel="noopener noreferrer">
                View all on GitHub
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>
        </div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-lg mb-8 max-w-3xl"
        >
          Welcome to my web development portfolio! Explore a collection of projects showcasing 
          my skills in creating dynamic and responsive websites.
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
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
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

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <motion.span
                    key={tag}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: tagIndex * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-2 py-1 rounded-md bg-secondary/50 text-muted-foreground text-xs font-mono"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Show More Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center mt-10"
        >
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button 
              variant="outline" 
              size="lg"
              className="group border-border hover:border-primary hover:bg-primary/10 font-mono"
              asChild
            >
              <a href="https://github.com/RishabhDhawad" target="_blank" rel="noopener noreferrer">
                Show more
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
