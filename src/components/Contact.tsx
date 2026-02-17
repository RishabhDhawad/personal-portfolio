import { Mail, MessageSquare, Send, Loader2, User, Mailbox } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formDataState, setFormDataState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring" as const
      }
    }
  };

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
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="section-heading flex items-center gap-2"
        >
          <Mailbox className="w-5 h-5 text-primary" />
          Contact
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <MessageSquare className="w-8 h-8 text-primary" />
          </motion.div>
          Let's Connect
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

        {/* Contact Form with enhanced animations */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <motion.form 
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="terminal-window overflow-hidden"
          >
            {/* Form Header with animated icons */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
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
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="ml-4 text-muted-foreground font-mono text-sm flex items-center gap-2"
              >
                <Send className="w-3 h-3 text-primary" />
                contact-form.sh
              </motion.div>
            </div>

            <div className="p-6 space-y-6">
              {/* Name Field */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="space-y-2"
              >
                <motion.label 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-muted-foreground font-mono text-sm flex items-center gap-2"
                >
                  <User className="w-4 h-4 text-primary" />
                  <span className="text-terminal-green">$</span> echo "Your Name"
                </motion.label>
                <motion.input
                  type="text"
                  name="name"
                  value={formDataState.name}
                  onChange={(e) => setFormDataState(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Rishabh Dhawad"
                  required
                  className="w-full px-4 py-3 rounded-md bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors font-mono text-foreground"
                  whileFocus={{ 
                    scale: 1.02,
                    borderColor: 'hsl(var(--primary))',
                    boxShadow: '0 0 0 2px hsl(var(--primary) / 0.2)'
                  }}
                />
              </motion.div>

              {/* Email Field */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="space-y-2"
              >
                <motion.label 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="text-muted-foreground font-mono text-sm flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-terminal-green">$</span> echo "Your Email"
                </motion.label>
                <motion.input
                  type="email"
                  name="email"
                  value={formDataState.email}
                  onChange={(e) => setFormDataState(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="rishabhdhawad29@gmail.com"
                  required
                  className="w-full px-4 py-3 rounded-md bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors font-mono text-foreground"
                  whileFocus={{ 
                    scale: 1.02,
                    borderColor: 'hsl(var(--primary))',
                    boxShadow: '0 0 0 2px hsl(var(--primary) / 0.2)'
                  }}
                />
              </motion.div>

              {/* Message Field */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="space-y-2"
              >
                <motion.label 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-muted-foreground font-mono text-sm flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-primary" />
                  <span className="text-terminal-green">$</span> echo "Your Message"
                </motion.label>
                <motion.textarea
                  name="message"
                  value={formDataState.message}
                  onChange={(e) => setFormDataState(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Let's collaborate on something amazing..."
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-md bg-background border border-border focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors font-mono text-foreground resize-none"
                  whileFocus={{ 
                    scale: 1.02,
                    borderColor: 'hsl(var(--primary))',
                    boxShadow: '0 0 0 2px hsl(var(--primary) / 0.2)'
                  }}
                />
              </motion.div>

              {/* Submit Button with enhanced animation */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
                className="flex gap-2 mt-6 items-center"
              >
                <span className="text-terminal-green">$</span>
                <span className="text-muted-foreground">./send-message.sh</span>
                <motion.div
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-2 h-5 bg-primary ml-2"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="ml-4"
                >
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="font-mono bg-primary hover:bg-primary/90 text-primary-foreground relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      initial={{ x: -100 }}
                      animate={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center"
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="mr-2"
                        >
                          <Loader2 className="w-4 h-4" />
                        </motion.div>
                      ) : (
                        <Send className="w-4 h-4" />
                      )}
                      Send Message
                    </motion.div>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
