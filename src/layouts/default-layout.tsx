// src/layouts/default-layout.tsx
/**
 * @file default-layout.tsx
 * @description Layout base que integra o ToggleDarkmode e o NodeResolver para proteção.
 * Posicionamento fixo do controle de tema para acessibilidade global.
 * @author Leonardo Firme
 */
import React from 'react';
import { NodeResolver } from '@/core/providers/node-resolver';
import { ToggleDarkmode } from '@/components/ui/ToggleDarkmode';

export const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <NodeResolver>
            <div className="min-h-screen bg-white transition-colors duration-300 dark:bg-gray-950 flex flex-col relative">

                {/* Container do Toggle - Posicionado no topo à direita */}
                <header className="fixed top-8 right-8 z-50">
                    <ToggleDarkmode />
                </header>

                <main className="flex-1 flex flex-col w-full h-full">
                    {children}
                </main>
            </div>
        </NodeResolver>
    );
};