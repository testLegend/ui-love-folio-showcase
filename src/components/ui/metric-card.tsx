
import React from "react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string | number;
  grade?: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
  variant?: "dark" | "light";
}

const MetricCard = ({
  title,
  value,
  grade,
  description,
  icon,
  className,
  variant = "dark",
}: MetricCardProps) => {
  const getGradeColor = () => {
    if (!grade) return "";
    
    const gradeValue = grade.startsWith("A") ? "text-secondary" :
                      grade.startsWith("B") ? "text-green-400" :
                      grade.startsWith("C") ? "text-yellow-400" :
                      grade.startsWith("D") ? "text-orange-400" :
                      "text-red-500";
    
    return gradeValue;
  };

  return (
    <div
      className={cn(
        "rounded-xl p-4 h-full",
        variant === "dark" ? "bg-card" : "bg-card/50 backdrop-blur-sm",
        "animate-fade-in",
        className
      )}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="text-sm font-medium opacity-80">{title}</div>
        {grade && (
          <div className={cn("font-bold text-sm", getGradeColor())}>
            {grade}
          </div>
        )}
      </div>
      <div className="flex items-baseline gap-2">
        <h3 className="text-xl font-bold">{value}</h3>
      </div>
      {description && (
        <div className="text-xs opacity-70 mt-1">{description}</div>
      )}
    </div>
  );
};

export { MetricCard };
