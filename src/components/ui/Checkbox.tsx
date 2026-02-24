// src/components/ui/Checkbox.tsx
/**
 * @file Checkbox.tsx
 * @description Seletor binário customizado.
 * Mantém a precisão visual em formulários ERP com suporte nativo ao modo dark.
 */
import React from 'react';
import { cn } from '@/utils/cn';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}

export const Checkbox = ({ label, className, ...props }: CheckboxProps): React.JSX.Element => {
    return (
        <label className="inline-flex cursor-pointer items-center gap-2 group">
            <input
                type="checkbox"
                {...props}
                className={cn(
                    "h-4 w-4 rounded border border-gray-200 bg-white text-gray-800 transition-all",
                    "focus:ring-0 focus:ring-offset-0 cursor-pointer",
                    "dark:border-gray-800 dark:bg-gray-950 dark:checked:bg-gray-50",
                    className
                )}
            />
            {label && (
                <span className="text-sm font-medium text-gray-500 dark:text-gray-100 font-sans group-hover:text-gray-800 dark:group-hover:text-gray-50 transition-colors">
                    {label}
                </span>
            )}
        </label>
    );
};