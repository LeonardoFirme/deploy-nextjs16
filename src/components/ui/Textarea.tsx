// src/components/ui/Textarea.tsx
/**
 * @file Textarea.tsx
 * @description Campo de entrada multilinhas com redimensionamento controlado.
 * Mantém a integridade visual dos formulários sem transformações automáticas de texto.
 */
import React from 'react';
import { cn } from '@/utils/cn';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
}

export const Textarea = ({ label, className, ...props }: TextareaProps): React.JSX.Element => {
    return (
        <div className="w-full space-y-1.5">
            {label && (
                <label className="text-sm font-medium text-gray-500 dark:text-gray-100 font-sans">
                    {label}
                </label>
            )}
            <textarea
                {...props}
                className={cn(
                    "flex min-h-24 w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-800 font-sans transition-all",
                    "placeholder:text-gray-400 focus-visible:outline-hidden focus:border-v0-600",
                    "disabled:cursor-not-allowed disabled:opacity-50",
                    "dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 dark:placeholder:text-gray-400",
                    className
                )}
            />
        </div>
    );
};