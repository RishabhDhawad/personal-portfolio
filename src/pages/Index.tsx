import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import TechStack from '@/components/TechStack';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Starfield from '@/components/Starfield';

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <Starfield />
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Services />
        <TechStack />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
