// src/app/page.tsx
/**
 * @file page.tsx
 * @description Landing Page principal com animações e o novo efeito StarfieldBackground.
 * @author Leonardo Firme
 */
"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { DefaultLayout } from '@/layouts/default-layout';
import { Button, Badge } from '@/components/ui/Index';
import { ITEM_VARIANTS, CONTAINER_VARIANTS } from '@/core/animations';
import { StarfieldBackground } from '@/components/ui/StarfieldBackground';

export default function HomePage() {
  /**
   * Redireciona para o pacote NPM em uma nova aba
   */
  const handleRedirect = () => {
    window.open("https://www.npmjs.com/package/@leonardofirme/deploy-nextjs16", "_blank");
  };

  return (
    <DefaultLayout>
      <StarfieldBackground>
        <main className="max-w-7xl mx-auto relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-transparent p-6 transition-colors duration-300">

          <motion.div
            variants={CONTAINER_VARIANTS}
            initial="hidden"
            animate="visible"
            className="z-10 flex w-full max-w-4xl flex-col items-center text-center space-y-12"
          >
            {/* Badge de Versão */}
            <motion.div variants={ITEM_VARIANTS}>
              <Badge className="bg-white px-5 py-1.5 font-orbitron tracking-[0.2em] text-gray-800 border-gray-200 dark:bg-gray-950/30 dark:border-gray-800 dark:text-gray-50">
                ESTRUTURA V1.1.7 VALIDADA
              </Badge>
            </motion.div>

            {/* Headline Principal */}
            <motion.div variants={ITEM_VARIANTS} className="space-y-6">
              <h1 className="font-orbitron text-6xl font-bold uppercase leading-[0.9] tracking-tight text-gray-800 md:text-8xl dark:text-gray-50">
                FALA <span className="text-v0-500">DEV!</span>
              </h1>
              <p className="mx-auto max-w-2xl font-sans text-lg leading-relaxed text-gray-500 md:text-xl dark:text-gray-100">
                Sua infraestrutura está pronta para escala. Desenvolva com a precisão e a suavidade do
                <span className="font-bold text-gray-800 dark:text-gray-50"> Ecossistema Leonardo Firme</span>.
              </p>
            </motion.div>

            {/* Botão com lógica de redirecionamento */}
            <motion.div variants={ITEM_VARIANTS} className="flex flex-col items-center gap-6 pt-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button
                  onClick={handleRedirect}
                  className="rounded-full px-14 py-5 font-orbitron text-xs tracking-[0.3em] shadow-2xl transition-all bg-gray-800 text-white hover:bg-gray-950 dark:bg-gray-50 dark:text-v0-500 dark:hover:bg-gray-200"
                >
                  Começar Desenvolvimento
                </Button>
              </motion.div>

              <motion.span
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="font-orbitron text-[10px] uppercase tracking-[0.5em] text-v0-500 dark:text-gray-400"
              >
                System Online
              </motion.span>
            </motion.div>

            {/* Footer Signature */}
            <motion.div
              variants={ITEM_VARIANTS}
              className="flex items-center space-x-8 pt-20"
            >
              <div className="h-px w-16 bg-gray-200 dark:bg-gray-800" />
              <div className="flex flex-col space-y-1">
                <span className="font-orbitron text-[10px] uppercase tracking-[0.6em] text-gray-400">
                  Leonardo Firme
                </span>
                <span className="text-center font-sans text-[9px] font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-100 opacity-80">
                  FRAMEWORK V1 • 2026
                </span>
              </div>
              <div className="h-px w-16 bg-gray-200 dark:bg-gray-800" />
            </motion.div>
          </motion.div>

          {/* Efeito Visual de Background */}
          <div className="pointer-events-none absolute inset-0 z-0">
            <div className="absolute top-1/2 left-1/2 h-200 w-200 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gray-200/20 blur-[120px] dark:bg-gray-800/20" />
          </div>

        </main>
      </StarfieldBackground>
    </DefaultLayout>
  );
}