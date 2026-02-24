// src/components/ui/Badge.tsx
/**
 * @file Badge.tsx
 * @description Indicador visual compacto para status, tags ou versões.
 * Utiliza o padrão minimalista de bordas e tipografia do ecossistema.
 */
import React from 'react';
import { cn } from '@/utils/cn';

interface BadgeProps {
    children: React.ReactNode;
    className?: string;
}

export const Badge = ({ children, className }: BadgeProps): React.JSX.Element => {
    return (
        <span className={cn(
            "inline-flex items-center rounded-full border border-gray-200 bg-gray-50 px-2.5 py-0.5 text-xs font-bold text-gray-800 transition-colors",
            "dark:border-gray-800 dark:bg-gray-900 dark:text-gray-50 font-sans",
            className
        )}>
            {children}
        </span>
    );
};