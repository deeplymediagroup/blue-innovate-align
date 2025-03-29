
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type { PanInfo } from "framer-motion"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden group",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

// Define proper types for the AnimatedButton component
interface AnimatedButtonProps extends ButtonProps {
  children: React.ReactNode
}

// Create a list of event handler props that conflict between React and Framer Motion
const conflictingEventProps = [
  'onDrag', 'onDragEnd', 'onDragStart', 
  'onAnimationStart', 'onAnimationComplete',
  'onHoverStart', 'onHoverEnd', 'onPointerDown',
  'onViewportEnter', 'onViewportLeave'
];

const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    if (asChild) {
      // When using asChild, we fall back to the regular Button
      return (
        <Button 
          ref={ref}
          className={className}
          variant={variant}
          size={size}
          asChild={asChild}
          {...props}
        >
          {children}
        </Button>
      )
    }
    
    // Define motion props separately
    const motionProps = {
      whileHover: { scale: 1.03 },
      whileTap: { scale: 0.97 }
    };
    
    // Filter out all potentially conflicting event handlers
    const buttonProps = { ...props };
    conflictingEventProps.forEach(prop => {
      if (prop in buttonProps) {
        delete buttonProps[prop as keyof typeof buttonProps];
      }
    });
    
    return (
      <motion.button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...motionProps}
        {...buttonProps}
      >
        {children}
        <span className="absolute inset-0 bg-gradient-to-r from-blue-700/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.button>
    )
  }
)
AnimatedButton.displayName = "AnimatedButton"

export { Button, AnimatedButton, buttonVariants }
