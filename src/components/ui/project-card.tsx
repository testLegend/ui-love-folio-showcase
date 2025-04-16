
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  ExternalLink, 
  Github
} from "lucide-react";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

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
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={cn(
        "rounded-2xl bg-card shadow-lg overflow-hidden transition-all duration-500 flex flex-col animate-fade-in relative group",
        isHovered ? "md:scale-105 shadow-xl md:z-10" : "scale-100",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {image && (
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className={cn(
              "w-full h-full object-cover transition-transform duration-500",
              isHovered ? "scale-110" : "scale-100"
            )}
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className={cn(
          "text-sm text-muted-foreground mb-4 transition-all duration-300",
          isHovered ? "line-clamp-none" : "line-clamp-2"
        )}>
          {description}
        </p>
        
        {technologies.length > 0 && isHovered && (
          <div className="mt-2 mb-4 flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span 
                key={`${tech}-${index}`} 
                className="inline-block px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto flex items-center gap-2">
          <Button 
            onClick={onAction} 
            variant="default" 
            className={cn(
              "mt-auto w-full justify-between group transition-all duration-300",
              isHovered ? "bg-primary" : "bg-primary/90"
            )}
          >
            {actionLabel}
            <ArrowRight className={cn(
              "ml-2 h-4 w-4 transition-transform duration-300",
              isHovered ? "translate-x-1" : ""
            )} />
          </Button>
          
          {isHovered && (repoUrl || liveUrl) && (
            <div className="flex gap-2 animate-fade-in">
              {repoUrl && (
                <Button variant="outline" size="icon" onClick={() => window.open(repoUrl, '_blank')}>
                  <Github className="h-4 w-4" />
                </Button>
              )}
              {liveUrl && (
                <Button variant="outline" size="icon" onClick={() => window.open(liveUrl, '_blank')}>
                  <ExternalLink className="h-4 w-4" />
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export { ProjectCard };
