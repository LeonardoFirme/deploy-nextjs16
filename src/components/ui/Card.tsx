// src/components/ui/Card.tsx
/**
 * @file Card.tsx
 * @description Container estrutural para agrupamento de informações.
 * Implementa o padrão de sombras sutis e bordas do ecossistema v0 Digital.
 */
import React from 'react';
import { cn } from '@/utils/cn';

interface CardProps {
    title?: string;
    subtitle?: string;
    children: React.ReactNode;
    className?: string;
}

export const Card = ({ title, subtitle, children, className }: CardProps): React.JSX.Element => {
    return (
        <div className={cn(
            "rounded-xl border border-gray-200 bg-white p-6 shadow-xs",
            "dark:border-gray-800 dark:bg-gray-950",
            className
        )}>
            {(title || subtitle) && (
                <div className="mb-4 space-y-1">
                    {title && (
                        <h3 className="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-50 font-sans">
                            {title}
                        </h3>
                    )}
                    {subtitle && (
                        <p className="text-sm text-gray-500 dark:text-gray-100 font-sans">
                            {subtitle}
                        </p>
                    )}
                </div>
            )}
            <div className="text-gray-400 dark:text-gray-200 font-sans leading-relaxed">
                {children}
            </div>
        </div>
    );
};