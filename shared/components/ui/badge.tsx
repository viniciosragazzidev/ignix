import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/shared/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80",
        pending:
          "border-transparent bg-orange-400/10 text-orange-400 shadow hover:bg-orange-500/20",
        analyze:
          "border-transparent bg-blue-400/10 text-blue-400 shadow hover:bg-blue-500/20",
        await:
          "border-transparent bg-slate-400/10 text-slate-400 shadow hover:bg-slate-500/20",
        in_progress:
          "border-transparent bg-esmerald-400/10 text-esmerald-400 shadow hover:bg-esmerald-500/20",
        finalize:
          "border-transparent bg-accent text-primary shadow hover:bg-accent-medium",
        delivered: "border bg-transparent text-slate-300 shadow ",
        cancelled:
          "border-transparent bg-red-400/10 text-red-400 shadow hover:bg-red-400/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
