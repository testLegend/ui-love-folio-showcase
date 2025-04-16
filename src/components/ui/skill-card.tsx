
import React from "react";
import { cn } from "@/lib/utils";

interface SkillCardProps {
  title: string;
  value: string;
  subtitle?: string;
  status?: "optimal" | "in-range" | "out-of-range";
  icon?: React.ReactNode;
  className?: string;
  color?: "orange" | "green" | "pink" | string;
  children?: React.ReactNode;
}

const SkillCard = ({
  title,
  value,
  subtitle,
  status,
  icon,
  className,
  color = "orange",
  children,
}: SkillCardProps) => {
  const getBackgroundClass = () => {
    switch (color) {
      case "orange":
        return "bg-gradient-orange";
      case "green":
        return "bg-gradient-green";
      case "pink":
        return "bg-gradient-pink";
      default:
        return color;
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case "optimal":
        return "text-secondary";
      case "in-range":
        return "text-yellow-400";
      case "out-of-range":
        return "text-accent";
      default:
        return "";
    }
  };

  return (
    <div
      className={cn(
        "rounded-2xl p-6 h-full flex flex-col",
        status ? "bg-card" : getBackgroundClass(),
        "shadow-lg animate-scale-in",
        className
      )}
    >
      <div className="mb-1 text-sm font-medium opacity-80">{title}</div>
      <div className="flex items-end gap-2 mt-auto">
        <h3 className="text-4xl font-bold">{value}</h3>
        {status && (
          <span className={cn("text-sm font-medium", getStatusColor())}>
            {status.replace(/-/g, " ")}
          </span>
        )}
      </div>
      {subtitle && <div className="text-sm opacity-70 mt-1">{subtitle}</div>}
      {children}
    </div>
  );
};

export { SkillCard };
