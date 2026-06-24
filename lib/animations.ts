import type { Easing, Variants } from "framer-motion";

export const easeOutExpo: Easing = [0.16, 1, 0.3, 1];

export function fadeUp(delay = 0): Variants {
  return {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.7,
        ease: easeOutExpo,
      },
    },
  };
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};
