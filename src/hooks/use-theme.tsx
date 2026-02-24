// src/hooks/use-theme.ts
/**
 * @file use-theme.ts
 * @description Hook customizado para gestão de estado e persistência do tema (Light/Dark).
 * Sincronizado com a árvore DOM para aplicação de classes do Tailwind CSS v4.
 * @author Leonardo Firme
 */
"use client";

import { useState, useEffect } from 'react';

export const useTheme = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

  return { theme, setTheme, toggleTheme };
};