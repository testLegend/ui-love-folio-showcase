
import React from "react";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number;
  max: number;
  className?: string;
  color?: "primary" | "secondary" | "accent" | string;
  showValue?: boolean;
  size?: "sm" | "md" | "lg";
  label?: string;
}

const ProgressBar = ({
  value,
  max,
  className,
  color = "primary",
  showValue = false,
  size = "md",
  label,
}: ProgressBarProps) => {
  const percentage = Math.round((value / max) * 100);
  
  const getColorClass = () => {
    switch (color) {
      case "primary":
        return "bg-primary";
      case "secondary":
        return "bg-secondary";
      case "accent":
        return "bg-accent";
      default:
        return color.startsWith("bg-") ? color : "bg-primary";
    }
  };
  
  const getSizeClass = () => {
    switch (size) {
      case "sm":
        return "h-1";
      case "md":
        return "h-2";
      case "lg":
        return "h-3";
      default:
        return "h-2";
    }
  };

  return (
    <div className={cn("w-full", className)}>
      {label && (
        <div className="flex justify-between text-sm mb-1">
          <span>{label}</span>
          {showValue && <span>{value}/{max}</span>}
        </div>
      )}
      <div className="w-full bg-muted rounded-full overflow-hidden">
        <div
          className={cn(
            "rounded-full transition-all duration-500",
            getColorClass(),
            getSizeClass()
          )}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      {!label && showValue && (
        <div className="text-xs mt-1 text-right">{percentage}%</div>
      )}
    </div>
  );
};

export { ProgressBar };
