import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "./Icons";

type Variant = "dark" | "outline" | "outline-light" | "light";
type Size = "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  /** Append the diagonal arrow icon used on most CTAs. */
  withArrow?: boolean;
  href?: string;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

const variants: Record<Variant, string> = {
  dark: "bg-ink text-paper hover:opacity-90",
  outline: "border border-ink text-ink-soft hover:bg-ink hover:text-paper",
  "outline-light": "border border-paper text-paper hover:bg-paper hover:text-ink",
  light: "bg-paper text-ink hover:bg-paper/90",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-3 text-base",
  lg: "px-6 py-4 text-lg",
};

export function Button({
  children,
  variant = "dark",
  size = "lg",
  withArrow = true,
  href,
  className,
  onClick,
  type = "button",
}: ButtonProps) {
  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-pill font-display font-semibold leading-none transition-all duration-200 ease-out",
    variants[variant],
    sizes[size],
    className,
  );

  const inner = (
    <>
      <span>{children}</span>
      {withArrow && (
        <ArrowUpRight className="h-[1.1em] w-[1.1em] shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {inner}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {inner}
    </button>
  );
}
