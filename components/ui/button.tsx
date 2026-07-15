import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:-translate-y-0.5 hover:scale-[1.03] active:translate-y-0 active:scale-[0.99] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:transition-transform [&_svg]:duration-300 hover:[&_svg:last-child]:translate-x-0.5",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-[0_14px_38px_hsl(var(--primary)/0.2)] hover:bg-primary/92 hover:shadow-[0_20px_54px_hsl(var(--primary)/0.28)]",
        spark:
          "bg-[linear-gradient(135deg,hsl(var(--primary))_0%,hsl(var(--accent))_100%)] text-primary-foreground shadow-[0_16px_48px_hsl(var(--primary)/0.24)] hover:shadow-[0_24px_64px_hsl(var(--primary)/0.3)]",
        cyan: "bg-accent text-accent-foreground shadow-[0_14px_42px_hsl(var(--accent)/0.2)] hover:bg-accent/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-sky-100 bg-white/72 text-foreground shadow-sm backdrop-blur-xl hover:border-sky-200 hover:bg-white hover:text-primary hover:shadow-[0_18px_48px_hsl(var(--primary)/0.12)]",
        secondary:
          "bg-white text-primary shadow-[0_12px_34px_hsl(var(--primary)/0.12)] hover:bg-blue-50 hover:shadow-[0_18px_48px_hsl(var(--primary)/0.16)]",
        ghost: "hover:bg-sky-50 hover:text-primary",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-12 rounded-md px-8",
        icon: "h-10 w-10 px-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
