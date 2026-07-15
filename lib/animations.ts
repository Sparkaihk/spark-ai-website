import type { Easing, Variants } from "framer-motion";

export const easeOutExpo: Easing = [0.16, 1, 0.3, 1];

export function fadeUp(delay = 0): Variants {
  return {
    hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay,
        duration: 0.82,
        ease: easeOutExpo,
      },
    },
  };
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.075,
      delayChildren: 0.08,
    },
  },
};
