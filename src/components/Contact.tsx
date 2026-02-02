import { ArrowRight, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';

const Contact = () => {
  const { toast } = useToast();
  const [formDataState, setFormDataState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const formData = new FormData();
      formData.append("access_key", "1d3e0377-7411-4b0b-be5f-ebb506fd71b0");
      formData.append("name", formDataState.name);
      formData.append("email", formDataState.email);
      formData.append("message", formDataState.message);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message sent successfully!",
          description: "Thanks for reaching out. I'll get back to you soon!",
        });
        setFormDataState({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.message || "Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive"
      });
    }
  };

  return (
    <section id="contact" className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-heading text-center"
        >
          Contact
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold mb-6 text-center"
        >
          Get In Touch
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground text-lg mb-12 max-w-xl mx-auto text-center"
        >
          I'd love to hear from you! If you have any questions, comments, or feedback,
          please use the form below.
        </motion.p>

        {/* Contact Form */}
        <motion.div 
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="terminal-window overflow-hidden max-w-xl mx-auto"
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
            <div className="terminal-dot terminal-dot-red" />
            <div className="terminal-dot terminal-dot-yellow" />
            <div className="terminal-dot terminal-dot-green" />
            <span className="ml-4 text-muted-foreground font-mono text-sm">contact.sh</span>
          </div>

          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <label className="text-sm font-mono text-muted-foreground mb-2 block">
                <span className="text-terminal-green">$</span> enter name:
              </label>
              <Input
                type="text"
                value={formDataState.name}
                onChange={(e) => setFormDataState({ ...formDataState, name: e.target.value })}
                placeholder="Your name"
                required
                className="bg-secondary/50 border-border focus:border-primary font-mono"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <label className="text-sm font-mono text-muted-foreground mb-2 block">
                <span className="text-terminal-green">$</span> enter email:
              </label>
              <Input
                type="email"
                value={formDataState.email}
                onChange={(e) => setFormDataState({ ...formDataState, email: e.target.value })}
                placeholder="your@email.com"
                required
                className="bg-secondary/50 border-border focus:border-primary font-mono"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <label className="text-sm font-mono text-muted-foreground mb-2 block">
                <span className="text-terminal-green">$</span> enter message:
              </label>
              <Textarea
                value={formDataState.message}
                onChange={(e) => setFormDataState({ ...formDataState, message: e.target.value })}
                placeholder="Your message..."
                required
                rows={4}
                className="bg-secondary/50 border-border focus:border-primary font-mono resize-none"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button 
                  type="submit"
                  size="lg" 
                  className="w-full group font-mono bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
