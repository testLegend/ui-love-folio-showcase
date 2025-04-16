
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  className?: string;
  actionLabel?: string;
  onAction?: () => void;
}

const ProjectCard = ({
  title,
  description,
  image,
  className,
  actionLabel = "View Project",
  onAction,
}: ProjectCardProps) => {
  return (
    <div
      className={cn(
        "rounded-2xl bg-card shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col animate-fade-in",
        className
      )}
    >
      {image && (
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground flex-grow mb-4">
          {description}
        </p>
        <Button 
          onClick={onAction} 
          variant="outline" 
          className="mt-auto w-full"
        >
          {actionLabel}
        </Button>
      </div>
    </div>
  );
};

export { ProjectCard };
