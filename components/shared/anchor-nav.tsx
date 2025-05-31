"use client"
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps } from "react";

type AnchorProps = ComponentProps<typeof Link> & {
  absolute?: boolean;
  activeClassName?: string;
  disabled?: boolean;
};

export default function AnchorNav({
  absolute,
  className = "",
  disabled,
  children,
  ...props
}: AnchorProps) {
  const path = usePathname();
  const isMatch = absolute
    ? props.href.toString().split("/")[1] == path.split("/")[1]
    : path === props.href;

  if (disabled)
    return (
      <div className={cn(className, "cursor-not-allowed")}>{children}</div>
    );
  return (
    <Link className={cn(className, "text-muted-foreground hover:text-accent-foreground block duration-150", isMatch && "text-black dark:text-white font-semibold")} {...props}>
      {children}
    </Link>
  );
}