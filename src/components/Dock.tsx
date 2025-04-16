
import React from "react";
import { cn } from "@/lib/utils";
import { Home, Briefcase, User, Code, Mail, BarChart2 } from "lucide-react";
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
    { id: "skills", label: "Skills", icon: <BarChart2 className="w-5 h-5" /> },
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
      "fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50",
      className
    )}>
      <div className="bg-background/70 backdrop-blur-xl border border-secondary/10 rounded-full p-1.5 shadow-[0_8px_32px_rgba(0,0,0,0.25)] flex items-center gap-1">
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
                "rounded-full transition-all duration-300 relative m-0.5",
                activeSection === item.id 
                  ? "bg-gradient-to-br from-primary to-primary/80 text-primary-foreground shadow-[0_0_15px_rgba(var(--primary)/0.5)]" 
                  : "hover:bg-primary/10"
              )}
              aria-label={item.label}
            >
              {item.icon}
              <span className="absolute -top-11 left-1/2 transform -translate-x-1/2 bg-card/90 backdrop-blur-lg border border-border/50 rounded-md px-3 py-1 text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-200 scale-95 group-hover:scale-100 whitespace-nowrap shadow-lg">
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
