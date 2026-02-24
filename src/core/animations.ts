// src/core/animations.ts
/**
 * @file animations.ts
 * @description Definições de Variants para o Framer Motion.
 * Mantém a física de mola (spring) ultra-suave e o efeito de blur na entrada.
 */
import { Variants } from 'framer-motion';

export const ITEM_VARIANTS: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(10px)"
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      damping: 25,
      stiffness: 40,
      mass: 1,
      duration: 1.2
    }
  }
};

export const CONTAINER_VARIANTS: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.4
    }
  }
};