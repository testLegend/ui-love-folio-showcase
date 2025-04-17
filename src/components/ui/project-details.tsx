
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
import { 
  ExternalLink, 
  Github, 
  X, 
  Calendar, 
  User,
  Code,
  Lightbulb,
  PuzzleIcon,
  CheckCircle
} from "lucide-react";
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
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 gap-0">
        {image && (
          <div className="w-full h-[300px] relative overflow-hidden">
            <img src={image} alt={title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent flex flex-col justify-end p-6">
              <DialogTitle className="text-3xl font-bold text-white mb-2">{title}</DialogTitle>
              <DialogDescription className="text-base text-white/90 max-w-2xl">
                {description}
              </DialogDescription>
            </div>
            <DialogClose className="absolute right-4 top-4 rounded-full bg-background/30 backdrop-blur-sm p-2 opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none hover:bg-background/50">
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </DialogClose>
          </div>
        )}

        <div className="px-6 py-5 bg-gradient-to-b from-card/80 to-card">
          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.map((tech, index) => (
              <span 
                key={`${tech}-${index}`} 
                className="inline-block px-3 py-1 text-sm rounded-full bg-card border border-border/50 text-foreground flex items-center gap-1.5"
              >
                <Code className="h-3.5 w-3.5 text-primary" />
                {tech}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {role && (
              <div className="flex items-start gap-3">
                <div className="bg-card p-2 rounded-full border border-border/50">
                  <User className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Role</h3>
                  <p className="text-base font-medium">{role}</p>
                </div>
              </div>
            )}
            
            {timeline && (
              <div className="flex items-start gap-3">
                <div className="bg-card p-2 rounded-full border border-border/50">
                  <Calendar className="h-5 w-5 text-secondary" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground mb-1">Timeline</h3>
                  <p className="text-base font-medium">{timeline}</p>
                </div>
              </div>
            )}
          </div>

          {features.length > 0 && (
            <div className="mb-8">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="h-5 w-5 text-secondary" />
                <h3 className="text-lg font-semibold">Key Features</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6">
                {features.map((feature, index) => (
                  <div key={`feature-${index}`} className="flex items-start gap-2">
                    <div className="mt-1">
                      <MarkerDots optimal={1} inRange={0} outOfRange={0} size="sm" />
                    </div>
                    <p className="text-sm">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {challenges.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <PuzzleIcon className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-semibold">Challenges & Solutions</h3>
              </div>
              <div className="space-y-4 bg-card/50 border border-border/50 rounded-xl p-4">
                {challenges.map((challenge, index) => (
                  <div key={`challenge-${index}`} className="flex gap-3">
                    <div className="mt-1">
                      <Lightbulb className="h-4 w-4 text-yellow-400" />
                    </div>
                    <div>
                      <p className="text-sm">{challenge}</p>
                      {index < challenges.length - 1 && <Separator className="my-3" />}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <DialogFooter className="flex justify-end gap-3 mt-6 pb-2">
            {repoUrl && (
              <Button variant="outline" onClick={() => window.open(repoUrl, '_blank')} className="bg-card/50 border-border/50 hover:bg-card">
                <Github className="mr-2 h-4 w-4" />
                Source Code
              </Button>
            )}
            {liveUrl && (
              <Button onClick={() => window.open(liveUrl, '_blank')} className="relative overflow-hidden group">
                <span className="relative z-10 flex items-center">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-0"></div>
              </Button>
            )}
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};
