
import React from "react";
import { cn } from "@/lib/utils";

interface MarkerDotsProps {
  optimal: number;
  inRange: number;
  outOfRange: number;
  className?: string;
}

const MarkerDots = ({
  optimal,
  inRange,
  outOfRange,
  className,
}: MarkerDotsProps) => {
  const totalMarkers = optimal + inRange + outOfRange;
  
  // Generate a random ID for uniqueness
  const id = React.useId();
  
  const renderDots = (count: number, type: "optimal" | "in-range" | "out-of-range") => {
    const colorClass = {
      "optimal": "text-secondary",
      "in-range": "text-yellow-400",
      "out-of-range": "text-accent"
    };
    
    return Array.from({ length: count }).map((_, index) => (
      <div
        key={`${type}-${index}-${id}`}
        className={cn(
          "w-2 h-2 rounded-full animate-pulse-glow",
          colorClass[type]
        )}
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
