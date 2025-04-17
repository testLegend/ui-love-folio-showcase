
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  ExternalLink, 
  Github,
  Code,
  Layers,
  Sparkles
} from "lucide-react";

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
}: ProjectCardProps) => {
  return (
    <div
      className={cn(
        "rounded-2xl bg-card/90 shadow-lg overflow-hidden transition-all duration-300 flex flex-col animate-fade-in group relative z-10 hover-card",
        className
      )}
    >
      <div className="absolute inset-0 bg-gradient-conic opacity-0 group-hover:opacity-10 transition-opacity duration-700 -z-10"></div>
      
      {image && (
        <div className="aspect-video w-full overflow-hidden relative">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {technologies.length > 0 && (
            <div className="absolute bottom-0 left-0 right-0 p-3 flex flex-wrap gap-1.5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
              {technologies.slice(0, 3).map((tech, index) => (
                <span 
                  key={`${tech}-${index}`} 
                  className="inline-block px-2 py-0.5 text-xs rounded-full bg-primary/10 backdrop-blur-sm text-primary border border-primary/20"
                >
                  {tech}
                </span>
              ))}
              {technologies.length > 3 && (
                <span className="inline-block px-2 py-0.5 text-xs rounded-full bg-primary/10 backdrop-blur-sm text-primary border border-primary/20">
                  +{technologies.length - 3}
                </span>
              )}
            </div>
          )}
        </div>
      )}
      
      <div className="p-6 flex flex-col flex-grow bg-gradient-to-b from-card/50 to-card">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">{title}</h3>
          <div className="flex items-center space-x-1">
            {technologies.length > 0 && <Layers className="h-4 w-4 text-muted-foreground" />}
            <Code className="h-4 w-4 text-muted-foreground" />
            <Sparkles className="h-4 w-4 text-secondary animate-pulse-glow" />
          </div>
        </div>
        
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>

        <div className="mt-auto flex items-center gap-2">
          <Button 
            onClick={onAction} 
            variant="default" 
            className="mt-auto w-full justify-between group relative overflow-hidden"
          >
            <span className="relative z-10">{actionLabel}</span>
            <ArrowRight className="ml-2 h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"></div>
          </Button>
          
          <div className="flex gap-2">
            {repoUrl && (
              <Button variant="outline" size="icon" onClick={(e) => { e.stopPropagation(); window.open(repoUrl, '_blank'); }}>
                <Github className="h-4 w-4" />
              </Button>
            )}
            {liveUrl && (
              <Button variant="outline" size="icon" onClick={(e) => { e.stopPropagation(); window.open(liveUrl, '_blank'); }}>
                <ExternalLink className="h-4 w-4" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { ProjectCard };
