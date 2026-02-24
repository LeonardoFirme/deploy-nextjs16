// src/types/common.ts
/**
 * Interfaces comuns para o projeto ERP/SaaS.
 */
export type Theme = 'light' | 'dark';

export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}