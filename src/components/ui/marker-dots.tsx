
import React from "react";
import { cn } from "@/lib/utils";

interface MarkerDotsProps {
  optimal: number;
  inRange: number;
  outOfRange: number;
  className?: string;
  size?: "sm" | "md" | "lg";
  glow?: boolean;
}

const MarkerDots = ({
  optimal,
  inRange,
  outOfRange,
  className,
  size = "md",
  glow = true
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
    const colorClass = {
      "optimal": "bg-secondary",
      "in-range": "bg-yellow-400",
      "out-of-range": "bg-accent"
    };
    
    const animationDelays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s', '0.6s', '0.7s', '0.8s', '0.9s'];
    
    return Array.from({ length: count }).map((_, index) => (
      <div
        key={`${type}-${index}-${id}`}
        className={cn(
          "rounded-full",
          glow ? "animate-pulse-glow" : "",
          dotSizeClass[size],
          colorClass[type]
        )}
        style={{ 
          animationDelay: animationDelays[index % animationDelays.length],
          boxShadow: glow ? `0 0 8px 0 ${type === "optimal" ? "rgba(var(--secondary), 0.6)" : 
                                      type === "in-range" ? "rgba(250, 204, 21, 0.6)" : 
                                      "rgba(var(--accent), 0.6)"}` : 'none'
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
