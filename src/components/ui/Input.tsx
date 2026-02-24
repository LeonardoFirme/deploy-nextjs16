// src/components/ui/Input.tsx
/**
 * @file Input.tsx
 * @description Campo de entrada de texto padronizado.
 * Sem uso de uppercase para preservar a integridade de dados sensíveis.
 */
import React from 'react';
import { cn } from '@/utils/cn';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export const Input = ({ label, className, ...props }: InputProps): React.JSX.Element => {
    return (
        <div className="w-full space-y-1.5">
            {label && (
                <label className="text-sm font-medium text-gray-500 dark:text-gray-100 font-sans">
                    {label}
                </label>
            )}
            <input
                {...props}
                className={cn(
                    "flex h-10 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800 transition-all font-sans",
                    "placeholder:text-gray-400 focus-visible:outline-hidden focus:border-v0-600",
                    "disabled:cursor-not-allowed disabled:opacity-50",
                    "dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 dark:placeholder:text-gray-400",
                    className
                )}
            />
        </div>
    );
};