// src/components/ui/Button.tsx
/**
 * @file Button.tsx
 * @description Componente de botão atômico com suporte a variantes e children.
 * Ajustado para aceitar conteúdo interno e manter o padrão de cores v0.
 */
import React from 'react';
import { cn } from '@/utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'ghost';
    children: React.ReactNode;
}

export const Button = ({ children, variant = 'primary', className, ...props }: ButtonProps): React.JSX.Element => {
    // Base minimalista seguindo as diretrizes de cores e bordas
    const base = "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-all focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50 border cursor-pointer active:scale-95";

    const variants = {
        primary: "bg-gray-800 text-gray-50 border-gray-200 hover:bg-gray-950 dark:bg-gray-50 dark:text-gray-950 dark:border-gray-800 dark:hover:bg-gray-200",
        outline: "bg-transparent text-gray-800 border-gray-200 hover:bg-gray-100 dark:text-gray-50 dark:border-gray-800 dark:hover:bg-gray-900",
        ghost: "bg-transparent text-gray-500 border-transparent hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-900"
    };

    return (
        <button
            {...props}
            className={cn(base, variants[variant], className)}
        >
            {children}
        </button>
    );
};