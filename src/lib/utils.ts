import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Standard shadcn/ui class-merging helper — combines clsx with Tailwind-aware de-duplication. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
