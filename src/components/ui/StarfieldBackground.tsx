// src/components/ui/StarfieldBackground.tsx
/**
 * @file StarfieldBackground.tsx
 * @description Background espacial com efeito de profundidade (warp speed).
 * Otimizado para alta performance via Canvas 2D sem dependências.
 * @author Leonardo Firme
 */
"use client";

import React, { useEffect, useRef } from "react";

// Implementação interna do cn para garantir portabilidade entre pastas
const cn = (...classes: (string | undefined | boolean)[]) => classes.filter(Boolean).join(" ");

export interface StarfieldBackgroundProps {
    className?: string;
    children?: React.ReactNode;
    count?: number;
    speed?: number;
    starColor?: string;
    twinkle?: boolean;
}

interface Star {
    x: number;
    y: number;
    z: number;
    twinkleSpeed: number;
    twinkleOffset: number;
}

export function StarfieldBackground({
    className,
    children,
    count = 400,
    speed = 0.5,
    starColor = "#ffffff",
    twinkle = true,
}: StarfieldBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let width = 0;
        let height = 0;
        const maxDepth = 1500;

        const updateSize = () => {
            const rect = container.getBoundingClientRect();
            width = rect.width;
            height = rect.height;
            canvas.width = width;
            canvas.height = height;
        };

        const createStar = (initialZ?: number): Star => ({
            x: (Math.random() - 0.5) * width * 2,
            y: (Math.random() - 0.5) * height * 2,
            z: initialZ ?? Math.random() * maxDepth,
            twinkleSpeed: Math.random() * 0.02 + 0.01,
            twinkleOffset: Math.random() * Math.PI * 2,
        });

        updateSize();
        let stars: Star[] = Array.from({ length: count }, () => createStar());
        let animationId: number;
        let tick = 0;

        const ro = new ResizeObserver(updateSize);
        ro.observe(container);

        const animate = () => {
            tick++;
            const isDark = document.documentElement.classList.contains("dark");

            // Cor de fundo dinâmica baseada no tema do sistema
            ctx.fillStyle = isDark ? "rgba(3, 7, 18, 0.2)" : "rgba(255, 255, 255, 0.2)";
            ctx.fillRect(0, 0, width, height);

            const cx = width / 2;
            const cy = height / 2;
            const currentStarColor = isDark ? starColor : "#1f2937"; // Gray-800 no light mode

            for (const star of stars) {
                star.z -= speed * 2;

                if (star.z <= 0) {
                    star.x = (Math.random() - 0.5) * width * 2;
                    star.y = (Math.random() - 0.5) * height * 2;
                    star.z = maxDepth;
                }

                const scale = 400 / star.z;
                const x = cx + star.x * scale;
                const y = cy + star.y * scale;

                if (x < -10 || x > width + 10 || y < -10 || y > height + 10) continue;

                const size = Math.max(0.5, (1 - star.z / maxDepth) * 3);
                let opacity = (1 - star.z / maxDepth) * 0.9 + 0.1;

                if (twinkle && star.twinkleSpeed > 0.015) {
                    opacity *= 0.7 + 0.3 * Math.sin(tick * star.twinkleSpeed + star.twinkleOffset);
                }

                ctx.beginPath();
                ctx.arc(x, y, size, 0, Math.PI * 2);
                ctx.fillStyle = currentStarColor;
                ctx.globalAlpha = opacity;
                ctx.fill();

                // Streak effect (rastro) para estrelas próximas
                if (star.z < maxDepth * 0.3 && speed > 0.3) {
                    const streakLength = (1 - star.z / maxDepth) * speed * 8;
                    const angle = Math.atan2(star.y, star.x);
                    ctx.beginPath();
                    ctx.moveTo(x, y);
                    ctx.lineTo(x - Math.cos(angle) * streakLength, y - Math.sin(angle) * streakLength);
                    ctx.strokeStyle = currentStarColor;
                    ctx.globalAlpha = opacity * 0.3;
                    ctx.lineWidth = size * 0.5;
                    ctx.stroke();
                }
            }

            ctx.globalAlpha = 1;
            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);

        return () => {
            cancelAnimationFrame(animationId);
            ro.disconnect();
        };
    }, [count, speed, starColor, twinkle]);

    return (
        <div ref={containerRef} className={cn("fixed inset-0 overflow-hidden bg-white dark:bg-gray-950", className)}>
            <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />

            {/* Nebula sutil usando as cores v0 */}
            <div
                className="pointer-events-none absolute inset-0 opacity-20 dark:opacity-30"
                style={{
                    background:
                        "radial-gradient(ellipse at 30% 40%, rgba(79, 70, 229, 0.1) 0%, transparent 50%), radial-gradient(ellipse at 70% 60%, rgba(99, 102, 241, 0.08) 0%, transparent 50%)",
                }}
            />

            {children && <div className="relative z-10 h-full w-full">{children}</div>}
        </div>
    );
}