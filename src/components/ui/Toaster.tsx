// src/components/ui/Toaster.tsx
/**
 * @file Toaster.tsx
 * @description Provider de notificações baseado no Sonner.
 * Customizado para alinhar com o design system minimalista e escala de cinzas.
 */
import React from 'react';
import { Toaster as SonnerToaster } from 'sonner';

export const Toaster = (): React.JSX.Element => {
    return (
        <SonnerToaster
            className="toaster group"
            toastOptions={{
                classNames: {
                    toast: "group toast bg-white text-gray-800 border-gray-200 shadow-xl rounded-xl dark:bg-gray-950 dark:text-gray-50 dark:border-gray-800 font-sans",
                    description: "text-gray-400 dark:text-gray-200 text-xs",
                    actionButton: "bg-gray-800 text-gray-50 dark:bg-gray-50 dark:text-gray-950 font-bold",
                    cancelButton: "bg-gray-100 text-gray-500 dark:bg-gray-900 dark:text-gray-400",
                },
            }}
        />
    );
};