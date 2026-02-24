// src/components/ui/Modal.tsx
/**
 * @file Modal.tsx
 * @description Janela sobreposta animada com Framer Motion.
 * Marcado como 'use client' para gerenciar estados de animação e eventos de clique.
 */
"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/utils/cn';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    children: React.ReactNode;
    className?: string;
}

export const Modal = ({ isOpen, onClose, title, children, className }: ModalProps): React.JSX.Element => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Overlay com desfoque minimalista */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm cursor-pointer"
                    />

                    {/* Conteúdo do Modal */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.95, opacity: 0 }}
                        className={cn(
                            "relative w-full max-w-lg rounded-xl border border-gray-200 bg-white p-6 shadow-xl",
                            "dark:border-gray-800 dark:bg-gray-950 font-sans",
                            className
                        )}
                    >
                        <div className="mb-4 flex items-center justify-between">
                            <h2 className="text-xl font-bold tracking-tight text-gray-800 dark:text-gray-50 font-sans">
                                {title}
                            </h2>
                            <button
                                onClick={onClose}
                                className="text-gray-400 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-50 cursor-pointer transition-colors"
                            >
                                ✕
                            </button>
                        </div>
                        <div className="text-gray-400 dark:text-gray-200 leading-relaxed">
                            {children}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};