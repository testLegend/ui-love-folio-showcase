
import React from "react";
import { cn } from "@/lib/utils";

interface MarkerDotsProps {
  optimal: number;
  inRange: number;
  outOfRange: number;
  className?: string;
  size?: "sm" | "md" | "lg";
  glow?: boolean;
  variant?: "default" | "cosmic" | "holographic";
  animated?: boolean;
}

const MarkerDots = ({
  optimal,
  inRange,
  outOfRange,
  className,
  size = "md",
  glow = true,
  variant = "default",
  animated = true
}: MarkerDotsProps) => {
  const totalMarkers = optimal + inRange + outOfRange;
  
  // Generate a random ID for uniqueness
  const id = React.useId();
  
  const dotSizeClass = {
    "sm": "w-1.5 h-1.5",
    "md": "w-2 h-2",
    "lg": "w-3 h-3"
  };
  
  const renderDots = (count: number, type: "optimal" | "in-range" | "out-of-range") => {
    const variantClasses = {
      "default": {
        "optimal": "bg-secondary",
        "in-range": "bg-yellow-400",
        "out-of-range": "bg-accent"
      },
      "cosmic": {
        "optimal": "bg-divine-gold",
        "in-range": "bg-neon-blue",
        "out-of-range": "bg-accent"
      },
      "holographic": {
        "optimal": "bg-divine-gold animate-hologram-flicker",
        "in-range": "bg-neon-blue animate-hologram-flicker",
        "out-of-range": "bg-accent animate-hologram-flicker"
      }
    };
    
    const glowStyles = {
      "default": {
        "optimal": "0 0 8px 0 rgba(var(--secondary), 0.6)",
        "in-range": "0 0 8px 0 rgba(250, 204, 21, 0.6)",
        "out-of-range": "0 0 8px 0 rgba(var(--accent), 0.6)"
      },
      "cosmic": {
        "optimal": "0 0 8px 2px rgba(255, 215, 0, 0.7)",
        "in-range": "0 0 8px 2px rgba(0, 191, 255, 0.7)",
        "out-of-range": "0 0 8px 2px rgba(191, 0, 255, 0.7)"
      },
      "holographic": {
        "optimal": "0 0 10px 3px rgba(255, 215, 0, 0.8), 0 0 20px 5px rgba(255, 215, 0, 0.3)",
        "in-range": "0 0 10px 3px rgba(0, 191, 255, 0.8), 0 0 20px 5px rgba(0, 191, 255, 0.3)",
        "out-of-range": "0 0 10px 3px rgba(191, 0, 255, 0.8), 0 0 20px 5px rgba(191, 0, 255, 0.3)"
      }
    };
    
    const animationDelays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s', '0.6s', '0.7s', '0.8s', '0.9s'];
    
    return Array.from({ length: count }).map((_, index) => (
      <div
        key={`${type}-${index}-${id}`}
        className={cn(
          "rounded-full transform transition-all",
          animated ? (variant === "holographic" ? "animate-levitate" : "animate-pulse-glow") : "",
          variant === "holographic" && "backdrop-blur-sm opacity-90",
          dotSizeClass[size],
          variantClasses[variant][type]
        )}
        style={{ 
          animationDelay: animated ? `${(index % animationDelays.length) * 0.2}s` : '0s',
          boxShadow: glow ? glowStyles[variant][type] : 'none',
          animationDuration: animated ? `${2 + (index % 3)}s` : '0s'
        }}
      />
    ));
  };

  return (
    <div className={cn("flex gap-1 flex-wrap", className)}>
      {renderDots(optimal, "optimal")}
      {renderDots(inRange, "in-range")}
      {renderDots(outOfRange, "out-of-range")}
    </div>
  );
};

export { MarkerDots };
