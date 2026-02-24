// src/utils/cn.ts
/**
 * Utilitário de fusão de classes Tailwind v4 sem conflitos.
 */
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}