
import React from "react";
import { 
  Dialog, 
  DialogContent, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogFooter,
  DialogClose
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, X } from "lucide-react";
import { MarkerDots } from "@/components/ui/marker-dots";
import { Separator } from "@/components/ui/separator";

export interface ProjectDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    image?: string;
    technologies?: string[];
    features?: string[];
    challenges?: string[];
    repoUrl?: string;
    liveUrl?: string;
    timeline?: string;
    role?: string;
  };
}

export const ProjectDetails = ({
  isOpen,
  onClose,
  project
}: ProjectDetailsProps) => {
  const { 
    title, 
    description, 
    image, 
    technologies = [], 
    features = [], 
    challenges = [],
    repoUrl,
    liveUrl,
    timeline,
    role
  } = project;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{title}</DialogTitle>
          <DialogDescription className="text-base py-2">{description}</DialogDescription>
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </DialogHeader>

        {image && (
          <div className="rounded-lg overflow-hidden mb-6">
            <img src={image} alt={title} className="w-full h-auto object-cover" />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {role && (
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-1">Role</h3>
              <p className="text-base">{role}</p>
            </div>
          )}
          
          {timeline && (
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-1">Timeline</h3>
              <p className="text-base">{timeline}</p>
            </div>
          )}
        </div>

        {technologies.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, index) => (
                <span 
                  key={`${tech}-${index}`} 
                  className="inline-block px-3 py-1 text-sm rounded-full bg-primary/10 text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {features.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Key Features</h3>
            <div className="space-y-2">
              {features.map((feature, index) => (
                <div key={`feature-${index}`} className="flex items-start gap-2">
                  <div className="mt-1">
                    <MarkerDots optimal={1} inRange={0} outOfRange={0} />
                  </div>
                  <p>{feature}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {challenges.length > 0 && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Challenges & Solutions</h3>
            <div className="space-y-4">
              {challenges.map((challenge, index) => (
                <div key={`challenge-${index}`}>
                  <p>{challenge}</p>
                  {index < challenges.length - 1 && <Separator className="my-2" />}
                </div>
              ))}
            </div>
          </div>
        )}

        <DialogFooter className="flex justify-end gap-3 mt-6">
          {repoUrl && (
            <Button variant="outline" onClick={() => window.open(repoUrl, '_blank')}>
              <Github className="mr-2 h-4 w-4" />
              Source Code
            </Button>
          )}
          {liveUrl && (
            <Button onClick={() => window.open(liveUrl, '_blank')}>
              <ExternalLink className="mr-2 h-4 w-4" />
              Live Demo
            </Button>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
