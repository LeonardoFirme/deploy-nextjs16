// src/components/ui/Progress.tsx
/**
 * @file Progress.tsx
 * @description Barra de progresso linear para feedbacks de carregamento ou métricas.
 * Design minimalista com transições suaves integradas.
 */
import React from 'react';
import { cn } from '@/utils/cn';

interface ProgressProps {
    value?: number;
    className?: string;
}

export const Progress = ({ value = 0, className }: ProgressProps): React.JSX.Element => {
    return (
        <div className={cn(
            "h-2 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-900",
            className
        )}>
            <div
                className="h-full bg-gray-800 transition-all duration-500 ease-in-out dark:bg-gray-50"
                style={{ width: `${value}%` }}
            />
        </div>
    );
};