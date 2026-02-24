// src/core/constants.ts
/**
 * @file constants.ts
 * @description Definições de animação e física de mola para o Ecossistema v0.
 */
import { Variants } from 'framer-motion';

export const PAGE_ANIMATIONS: { container: Variants; item: Variants } = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  },
  item: {
    hidden: {
      opacity: 0,
      y: 40,
      filter: "blur(10px)",
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
        duration: 1.2,
      },
    },
  },
};