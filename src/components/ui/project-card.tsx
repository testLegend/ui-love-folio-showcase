
import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  ExternalLink, 
  Github,
  Code,
  Layers,
  Sparkles,
  Orbit
} from "lucide-react";
import { MarkerDots } from "@/components/ui/marker-dots";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  className?: string;
  actionLabel?: string;
  onAction?: () => void;
  technologies?: string[];
  repoUrl?: string;
  liveUrl?: string;
  variant?: "default" | "cosmic" | "holographic";
}

const ProjectCard = ({
  title,
  description,
  image,
  className,
  actionLabel = "View Details",
  onAction,
  technologies = [],
  repoUrl,
  liveUrl,
  variant = "cosmic"
}: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // 3D tilt effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    
    // Calculate mouse position relative to card center
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    // Calculate rotation (max 10 degrees)
    const rotateX = -(y / (rect.height / 2)) * 5;
    const rotateY = (x / (rect.width / 2)) * 5;
    
    setRotation({ x: rotateX, y: rotateY });
    
    // Calculate position for spotlight
    const posX = (e.clientX - rect.left) / rect.width * 100;
    const posY = (e.clientY - rect.top) / rect.height * 100;
    
    setPosition({ x: posX, y: posY });
  };
  
  const resetCardEffect = () => {
    setRotation({ x: 0, y: 0 });
  };

  // Initialize 3D effect
  useEffect(() => {
    const cards = document.querySelectorAll('.hover-card');
    
    const handleMouseMoveGlobal = (e: MouseEvent) => {
      for (const card of Array.from(cards)) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      }
    };
    
    document.addEventListener('mousemove', handleMouseMoveGlobal);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMoveGlobal);
    };
  }, []);

  const cardVariants = {
    default: "bg-card/90 shadow-lg",
    cosmic: "cosmic-card",
    holographic: "bg-card/40 backdrop-blur-lg hologram-border border-transparent"
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        "rounded-2xl overflow-hidden transition-all duration-300 flex flex-col animate-fade-in group relative z-10 hover-card transform perspective-1000",
        cardVariants[variant],
        isHovered && "scale-[1.02] z-20",
        className
      )}
      style={{
        transform: isHovered ? `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)` : 'perspective(1000px)',
        transition: 'transform 0.3s ease'
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        resetCardEffect();
      }}
    >
      <div 
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 mix-blend-overlay"
        style={{ 
          backgroundImage: 'linear-gradient(135deg, rgba(255, 215, 0, 0.1) 0%, rgba(0, 191, 255, 0.1) 100%)',
          backgroundPosition: `${position.x}% ${position.y}%` 
        }}
      />
      
      {image && (
        <div className="aspect-video w-full overflow-hidden relative group-hover:translate-y-[-5px] transition-transform duration-700">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-cosmic-black/80 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
          
          {variant === "holographic" && (
            <div className="absolute inset-0 bg-holographic opacity-30 animate-gradient-shift" />
          )}
          
          {technologies.length > 0 && (
            <div className="absolute bottom-3 right-3 flex gap-1.5">
              <MarkerDots 
                optimal={Math.min(technologies.length, 5)} 
                inRange={0} 
                outOfRange={0} 
                size="sm" 
                variant={variant === "holographic" ? "holographic" : "cosmic"}
              />
            </div>
          )}
        </div>
      )}
      
      <div className="p-6 flex flex-col flex-grow bg-gradient-to-b from-transparent to-cosmic-dark/50 z-10">
        <div className="flex items-start justify-between mb-2">
          <h3 className={cn(
            "text-xl font-semibold transition-colors duration-300",
            variant === "holographic" ? "holographic-text" : "group-hover:text-divine-gold"
          )}>
            {title}
          </h3>
          <div className="flex items-center space-x-1">
            {technologies.length > 0 && 
              <Layers className={cn(
                "h-4 w-4", 
                variant === "holographic" ? "text-neon-blue" : "text-muted-foreground"
              )} />
            }
            <Code className={cn(
              "h-4 w-4", 
              variant === "holographic" ? "text-neon-blue" : "text-muted-foreground"
            )} />
            <Sparkles className={cn(
              "h-4 w-4 animate-pulse-glow", 
              variant === "holographic" ? "text-divine-gold" : "text-divine-gold"
            )} />
            {variant === "holographic" && (
              <Orbit className="h-4 w-4 text-neon-blue animate-spin-slow" />
            )}
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>

        <div className="mt-auto flex items-center gap-2">
          <Button 
            onClick={onAction} 
            variant={variant === "holographic" ? "outline" : "default"} 
            className={cn(
              "mt-auto w-full justify-between group relative overflow-hidden",
              variant === "holographic" && "border-neon-blue/50 hover:border-neon-blue bg-cosmic-black/30"
            )}
          >
            <span className="relative z-10">{actionLabel}</span>
            <ArrowRight className="ml-2 h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            <div className={cn(
              "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0",
              variant === "holographic" 
                ? "bg-neon-gradient" 
                : "bg-gradient-to-r from-divine-gold to-divine-amber"
            )} />
          </Button>
          
          <div className="flex gap-2">
            {repoUrl && (
              <Button 
                variant="outline" 
                size="icon" 
                onClick={(e) => { e.stopPropagation(); window.open(repoUrl, '_blank'); }}
                className={cn(
                  variant === "holographic" && "border-neon-blue/50 hover:border-neon-blue bg-cosmic-black/30"
                )}
              >
                <Github className={cn(
                  "h-4 w-4",
                  variant === "holographic" && "text-neon-blue"
                )} />
              </Button>
            )}
            {liveUrl && (
              <Button 
                variant="outline" 
                size="icon" 
                onClick={(e) => { e.stopPropagation(); window.open(liveUrl, '_blank'); }}
                className={cn(
                  variant === "holographic" && "border-neon-blue/50 hover:border-neon-blue bg-cosmic-black/30"
                )}
              >
                <ExternalLink className={cn(
                  "h-4 w-4",
                  variant === "holographic" && "text-neon-blue"
                )} />
              </Button>
            )}
          </div>
        </div>
      </div>
      
      {/* 3D Effect Highlight */}
      {isHovered && (
        <div 
          className="absolute inset-0 pointer-events-none z-5"
          style={{
            backgroundImage: `radial-gradient(circle at ${position.x}% ${position.y}%, ${variant === "holographic" ? 'rgba(0, 191, 255, 0.15)' : 'rgba(255, 215, 0, 0.15)'}, transparent 30%)`,
            backgroundBlendMode: 'overlay'
          }}
        />
      )}
      
      {/* Tech Badge */}
      {technologies.length > 0 && (
        <div className="absolute top-3 left-3 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {technologies.slice(0, 1).map((tech, index) => (
            <span 
              key={`${tech}-${index}`}
              className={cn(
                "px-2 py-0.5 text-xs rounded-full backdrop-blur-sm border",
                variant === "holographic" 
                  ? "bg-cosmic-black/30 text-neon-blue border-neon-blue/50 animate-hologram-flicker" 
                  : "bg-primary/10 text-primary border-primary/20"
              )}
            >
              {tech}
            </span>
          ))}
          {technologies.length > 1 && (
            <span 
              className={cn(
                "px-2 py-0.5 text-xs rounded-full backdrop-blur-sm border",
                variant === "holographic" 
                  ? "bg-cosmic-black/30 text-neon-blue border-neon-blue/50 animate-hologram-flicker" 
                  : "bg-primary/10 text-primary border-primary/20"
              )}
            >
              +{technologies.length - 1}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export { ProjectCard };
