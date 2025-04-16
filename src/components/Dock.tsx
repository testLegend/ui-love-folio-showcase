
import React from "react";
import { cn } from "@/lib/utils";
import { Home, Briefcase, User, Code, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DockProps {
  className?: string;
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Dock = ({ className, activeSection, setActiveSection }: DockProps) => {
  const navItems = [
    { id: "home", label: "Home", icon: <Home className="w-5 h-5" /> },
    { id: "about", label: "About", icon: <User className="w-5 h-5" /> },
    { id: "skills", label: "Skills", icon: <Code className="w-5 h-5" /> },
    { id: "projects", label: "Projects", icon: <Briefcase className="w-5 h-5" /> },
    { id: "contact", label: "Contact", icon: <Mail className="w-5 h-5" /> }
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    setActiveSection(sectionId);
    window.history.pushState({}, "", `#${sectionId}`);
  };

  return (
    <div className={cn(
      "fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50",
      className
    )}>
      <div className="bg-background/80 backdrop-blur-lg border border-border rounded-full px-4 py-2 shadow-lg flex items-center gap-2">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="relative group"
            onClick={(e) => handleClick(e, item.id)}
          >
            <Button
              variant={activeSection === item.id ? "default" : "ghost"}
              size="icon"
              className={cn(
                "rounded-full transition-all duration-300",
                activeSection === item.id 
                  ? "bg-primary text-primary-foreground" 
                  : "hover:bg-primary/10"
              )}
              aria-label={item.label}
            >
              {item.icon}
              <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-background/90 backdrop-blur-sm border border-border rounded-md px-2 py-1 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg">
                {item.label}
              </span>
            </Button>
          </a>
        ))}
      </div>
    </div>
  );
};

export { Dock };
