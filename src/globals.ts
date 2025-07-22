import { twMerge } from "tailwind-merge"

declare global {
  var classes: typeof twMerge
}

globalThis.classes = function (...classes) {
  return twMerge(...classes)
}
