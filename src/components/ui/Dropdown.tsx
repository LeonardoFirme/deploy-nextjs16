// src/components/ui/Dropdown.tsx
/**
 * @file Dropdown.tsx
 * @description Componente de menu suspenso com detecção de clique externo.
 * Marcado como 'use client' para suportar Hooks de estado e efeitos no NextJS 16.
 */
"use client";

import React, { useState, useRef, useEffect } from 'react';
import { cn } from '@/utils/cn';

interface DropdownProps {
    label: React.ReactNode;
    children: React.ReactNode;
    className?: string;
}

export const Dropdown = ({ label, children, className }: DropdownProps): React.JSX.Element => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative inline-block text-left" ref={containerRef}>
            <div
                className="cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                {label}
            </div>

            {isOpen && (
                <div className={cn(
                    "absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-xl border border-gray-200 bg-white shadow-xl outline-none",
                    "dark:border-gray-800 dark:bg-gray-950",
                    className
                )}>
                    <div className="py-2 px-1">{children}</div>
                </div>
            )}
        </div>
    );
};

interface DropdownItemProps {
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
}

export const DropdownItem = ({ children, onClick, className }: DropdownItemProps): React.JSX.Element => (
    <button
        onClick={onClick}
        className={cn(
            "block w-full px-4 py-2 text-left text-sm transition-colors rounded-lg font-sans",
            "text-gray-500 hover:bg-gray-100 hover:text-gray-800",
            "dark:text-gray-200 dark:hover:bg-gray-900 dark:hover:text-gray-50",
            className
        )}
    >
        {children}
    </button>
);