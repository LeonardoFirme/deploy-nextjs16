// src/components/ui/Alert.tsx
/**
 * @file Alert.tsx
 * @description Componente de feedback visual para mensagens de status.
 * Segue o padrão minimalista com suporte a variantes de informação e perigo.
 */
import React from 'react';
import { cn } from '@/utils/cn';

interface AlertProps {
    title?: string;
    children: React.ReactNode;
    variant?: 'info' | 'danger';
    className?: string;
}

export const Alert = ({ title, children, variant = 'info', className }: AlertProps): React.JSX.Element => {
    const variants = {
        info: "border-gray-200 bg-white text-gray-400 dark:border-gray-800 dark:bg-gray-950 dark:text-gray-200",
        danger: "border-red-200 bg-red-50 text-red-900 dark:border-red-900/50 dark:bg-red-950/50 dark:text-red-200"
    };

    return (
        <div className={cn("relative w-full rounded-xl border p-4 font-sans", variants[variant], className)}>
            {title && (
                <h5 className="mb-1 font-bold leading-none tracking-tight text-gray-800 dark:text-gray-50 font-sans">
                    {title}
                </h5>
            )}
            <div className="text-sm opacity-90 leading-relaxed">
                {children}
            </div>
        </div>
    );
};