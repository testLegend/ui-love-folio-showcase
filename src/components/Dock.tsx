
import React from "react";
import { cn } from "@/lib/utils";
import { Home, Briefcase, User, Code, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DockProps {
  className?: string;
}

const Dock = ({ className }: DockProps) => {
  const navItems = [
    { label: "Home", icon: <Home className="w-5 h-5" />, href: "#home" },
    { label: "About", icon: <User className="w-5 h-5" />, href: "#about" },
    { label: "Skills", icon: <Code className="w-5 h-5" />, href: "#skills" },
    { label: "Projects", icon: <Briefcase className="w-5 h-5" />, href: "#projects" },
    { label: "Contact", icon: <Mail className="w-5 h-5" />, href: "#contact" }
  ];

  return (
    <div className={cn(
      "fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50",
      className
    )}>
      <div className="bg-background/80 backdrop-blur-lg border border-border rounded-full px-4 py-2 shadow-lg flex items-center gap-2">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="relative group"
          >
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full transition-all duration-300 hover:bg-primary/10"
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
