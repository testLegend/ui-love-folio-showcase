
import React from "react";
import { cn } from "@/lib/utils";
import { Home, Briefcase, User, Code, Mail, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
  className?: string;
}

const Navigation = ({ className }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { label: "Home", icon: <Home className="w-4 h-4" />, href: "#home" },
    { label: "About", icon: <User className="w-4 h-4" />, href: "#about" },
    { label: "Skills", icon: <Code className="w-4 h-4" />, href: "#skills" },
    { label: "Projects", icon: <Briefcase className="w-4 h-4" />, href: "#projects" },
    { label: "Contact", icon: <Mail className="w-4 h-4" />, href: "#contact" }
  ];

  return (
    <header className={cn("py-4 px-6 sticky top-0 z-50 bg-background/80 backdrop-blur-md", className)}>
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-xl font-bold bg-gradient-orange text-transparent bg-clip-text">Dev Portfolio</a>
        
        {/* Mobile menu button */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden" 
          onClick={toggleMenu}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-3 py-2 text-sm font-medium rounded-md hover:bg-card transition-colors duration-200 flex items-center gap-2"
            >
              {item.icon}
              {item.label}
            </a>
          ))}
        </nav>
      </div>
      
      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-t border-border animate-fade-in">
          <div className="container mx-auto py-4 px-6 flex flex-col space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-3 rounded-lg hover:bg-card transition-colors duration-200 flex items-center gap-3"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.icon}
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export { Navigation };
