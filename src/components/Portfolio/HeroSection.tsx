import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  onNavigate: (section: string) => void;
}

const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-16 relative z-10">
      <div className="text-center space-y-8 max-w-3xl">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tight leading-tight">
            Hi, I'm{' '}
            <span className="gradient-text">Anil Timilsena</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground font-light">
            Software Engineer • ML Enthusiast • Full-Stack Developer
          </p>
        </div>
        
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto text-balance">
          Passionate Information Science Engineer with expertise in Machine Learning, AI, and full-stack web development. 
          Specialized in building intelligent solutions using deep learning and modern frameworks.
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 pt-4">
          <a 
            href="https://github.com/aniltimilsena-1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="icon-hover text-muted-foreground"
          >
            <Github size={24} />
          </a>
          <a 
            href="#" 
            className="icon-hover text-muted-foreground"
          >
            <Linkedin size={24} />
          </a>
          <a 
            href="mailto:your.email@example.com" 
            className="icon-hover text-muted-foreground"
          >
            <Mail size={24} />
          </a>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 pt-8">
          <Button
            onClick={() => onNavigate('projects')}
            size="lg"
            className="px-8 py-6 text-base font-medium bg-primary text-primary-foreground hover:bg-primary/90 subtle-glow"
          >
            View My Work
          </Button>
          <Button
            onClick={() => onNavigate('contact')}
            variant="outline"
            size="lg"
            className="px-8 py-6 text-base font-medium border-primary/50 text-primary hover:bg-primary/10"
          >
            Get In Touch
          </Button>
        </div>

        <div className="pt-16">
          <ChevronDown 
            className="mx-auto text-muted-foreground gentle-pulse cursor-pointer" 
            size={28}
            onClick={() => onNavigate('about')}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
