
import { FC } from 'react';
import { ChevronRight, Code, PenTool, Smartphone } from 'lucide-react';
import { Button } from './button';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  onActionClick: () => void;
}

export const HeroSection: FC<HeroSectionProps> = ({ onActionClick }) => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-center justify-between gap-8 py-12 md:py-24 px-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl -top-64 -left-64 animate-pulse" />
      <div className="absolute w-[600px] h-[600px] rounded-full bg-secondary/5 blur-3xl -bottom-64 -right-64 animate-pulse" />
      
      {/* Left content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full lg:w-1/2 z-10 space-y-6 md:space-y-8 px-2 md:px-8"
      >
        <div className="inline-block">
          <div className="flex items-center px-3 py-1 text-sm rounded-full bg-primary/10 text-primary mb-4 w-fit">
            <span className="mr-1">✨</span> Portfolio Showcase
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground/90 leading-tight">
          <span className="text-gradient-primary">Full Stack Developer</span>{' '}
          <span className="block">& UX Designer</span>
        </h1>
        
        <p className="text-muted-foreground text-lg md:text-xl max-w-xl">
          Building beautiful, responsive and user-friendly digital experiences with modern technologies and creative design solutions.
        </p>
        
        <div className="flex flex-wrap gap-3 mt-4">
          <div className="flex items-center gap-2 px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm">
            <Code size={16} /> Frontend Development
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-secondary/10 text-secondary rounded-full text-sm">
            <Smartphone size={16} /> Responsive Design
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 bg-accent/10 text-accent rounded-full text-sm">
            <PenTool size={16} /> UI/UX Design
          </div>
        </div>
        
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <Button onClick={onActionClick} size="lg" className="rounded-full px-8 group">
            View My Work
            <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button variant="outline" size="lg" className="rounded-full px-8" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </motion.div>
      
      {/* Right content - Laptop mockup */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="w-full lg:w-1/2 z-10 p-4"
      >
        <div className="relative mx-auto" style={{ maxWidth: "600px" }}>
          {/* Laptop frame */}
          <div className="relative mx-auto" style={{ maxWidth: "600px" }}>
            <div className="relative mx-auto" style={{ maxWidth: "98%" }}>
              {/* Laptop screen */}
              <div className="relative rounded-t-xl overflow-hidden border-8 border-gray-800 bg-gray-800 aspect-[16/10]">
                <img 
                  src="/lovable-uploads/aca5acea-1ecc-427d-8b89-f4fcefca27f6.png" 
                  alt="Project showcase" 
                  className="absolute inset-0 h-full w-full object-cover object-top rounded-lg"
                />
                {/* Screen reflection overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-purple-500/5"></div>
              </div>
              
              {/* Laptop base */}
              <div className="relative h-[20px] mx-auto rounded-b-xl bg-gray-800"></div>
              <div className="relative h-[15px] mx-auto rounded-b-xl rounded-t-sm bg-gray-700" style={{ width: "98%" }}></div>
              
              {/* Surface reflection */}
              <div className="absolute h-1 w-full rounded-[50%] bottom-0 left-0 bg-gradient-to-r from-gray-900/20 via-gray-100/40 to-gray-900/20"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-6 -right-16 w-28 h-28 bg-primary/20 rounded-full blur-xl animate-pulse-slow"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary/20 rounded-full blur-xl animate-pulse-slow animation-delay-2000"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
