// src/components/ui/ToggleDarkmode.tsx
/**
 * @file ToggleDarkmode.tsx
 * @description Componente de alternância de tema com ícones de Sol e Lua.
 * Utiliza Framate Motion para transições de escala e rotação.
 * @author Leonardo Firme
 */
"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks/use-theme';

export const ToggleDarkmode = (): React.JSX.Element => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="flex items-center gap-3">
            <button
                onClick={toggleTheme}
                className="group relative flex h-7 w-14 cursor-pointer items-center rounded-full p-1 transition-all duration-300 focus:outline-hidden bg-gray-800 dark:bg-gray-50 hover:bg-gray-950 dark:hover:bg-gray-200"
                aria-label="Alternar Tema"
            >
                {/* Indicador visual móvel com Ícone */}
                <motion.div
                    layout
                    initial={false}
                    animate={{
                        x: theme === 'dark' ? 28 : 0,
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 25
                    }}
                    className="flex h-5 w-5 items-center justify-center rounded-full shadow-lg bg-white dark:bg-gray-950"
                >
                    <AnimatePresence mode="wait" initial={false}>
                        {theme === 'dark' ? (
                            <motion.div
                                key="moon"
                                initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
                                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Moon className="h-3 w-3 text-gray-50" strokeWidth={2.5} />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="sun"
                                initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
                                animate={{ rotate: 0, opacity: 1, scale: 1 }}
                                exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <Sun className="h-3 w-3 text-gray-800" strokeWidth={2.5} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Efeito visual de brilho sutil ao passar o mouse */}
                <div className="absolute inset-0 rounded-full opacity-0 transition-opacity group-hover:opacity-10 dark:bg-v0-600" />
            </button>

            {/* Label refinada */}
            <span className="font-orbitron text-[9px] font-bold tracking-[0.2em] uppercase text-gray-500 dark:text-gray-100">
                {theme === 'dark' ? 'Night Mode' : 'Day Mode'}
            </span>
        </div>
    );
};