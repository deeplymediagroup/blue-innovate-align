
import React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const cardVariants = cva(
  "glass-card flex flex-col justify-between overflow-hidden",
  {
    variants: {
      variant: {
        default: "glass border-white/20",
        bordered: "glass border-blue-300/20",
        highlight: "glass border-blue-500/30 shadow-md",
      },
      size: {
        sm: "p-4",
        default: "p-6",
        lg: "p-8",
      },
      animation: {
        none: "",
        subtle: "card-hover-effect",
        float: "animate-float",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      animation: "subtle",
    },
  }
);

export interface GlassmorphicCardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  children: React.ReactNode;
}

export const GlassmorphicCard: React.FC<GlassmorphicCardProps> = ({
  children,
  className,
  variant,
  size,
  animation,
  ...props
}) => {
  return (
    <div
      className={cn(cardVariants({ variant, size, animation, className }))}
      {...props}
    >
      {children}
    </div>
  );
};
