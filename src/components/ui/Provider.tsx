// src/components/ui/Provider.tsx
"use client";
import { useEffect } from "react";
import { LEGAL } from "@/core/legal";

export const IntegrityProvider = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
        // Log estilizado que aparece no console do navegador do usuário
        console.log(
            `%c ${LEGAL.notice} `,
            "background: #111; color: #fff; border-left: 4px solid #v0-600; padding: 10px; font-weight: bold;"
        );
    }, []);

    return <>{children}</>;
};