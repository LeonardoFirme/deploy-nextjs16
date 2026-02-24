// src/types/index.ts
/**
 * Definições de tipos globais do projeto.
 * Centraliza interfaces para usuários, respostas de API e configurações do ERP.
 */
export interface User {
  id: string;
  name: string;
  email: string;
}

// src/utils/cn.ts
/**
 * Utilitário para merge de classes Tailwind CSS v4.
 * Essencial para manter as className limpas e responsivas.
 */
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}