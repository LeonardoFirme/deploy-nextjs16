// src/app/layout.tsx
/**
 * @file layout.tsx
 * @description Root Layout Enterprise.
 * @author Leonardo Firme
 */
import type { Metadata, Viewport } from "next";
import { NodeResolver } from "@/core/providers/node-resolver";
import { LEGAL } from "@/core/legal";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "Enterprise Scaffold", template: `%s | ${LEGAL.owner}` },
  description: LEGAL.notice,
  other: { "creator": "Leonardo Firme" }
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className="scroll-smooth dark" suppressHydrationWarning>
      <body className="antialiased selection:bg-gray-800 selection:text-white dark:selection:bg-gray-50 dark:selection:text-gray-950" suppressHydrationWarning>
        <NodeResolver>
          {children}
        </NodeResolver>

        {/* Assinatura Técnica Oculta */}
        <div style={{ display: 'none' }} aria-hidden="true">
          System Auth: Leonardo Firme - ID: 2026-ENT
        </div>
      </body>
    </html>
  );
}