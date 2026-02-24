// src/components/ui/FireworksBackground.tsx
/**
 * @file FireworksBackground.tsx
 * @description Background de alta performance com Canvas 2D.
 * Implementação limpa sem dependência de lib externa.
 * @author Leonardo Firme
 */
"use client";

import React, { useCallback, useEffect, useRef } from "react";

// Implementação interna do cn para evitar erro de módulo não encontrado em pastas separadas
const cn = (...classes: (string | undefined | boolean)[]) => classes.filter(Boolean).join(" ");

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    alpha: number;
    decay: number;
    color: string;
    size: number;
}

interface Firework {
    x: number;
    y: number;
    targetY: number;
    vx: number;
    vy: number;
    color: string;
    trail: { x: number; y: number; alpha: number }[];
}

export interface FireworksProps {
    className?: string;
    children?: React.ReactNode;
    autoLaunchInterval?: number;
    particleCount?: number;
}

export function FireworksBackground({
    className,
    children,
    autoLaunchInterval = 800,
    particleCount = 60,
}: FireworksProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const fireworksRef = useRef<Firework[]>([]);
    const animationRef = useRef<number>(0);
    const scaleRef = useRef(1);

    const colors = [
        "#ff595e",
        "#ffca3a",
        "#8ac926",
        "#1982c4",
        "#6a4c93",
        "#f72585",
        "#4cc9f0",
        "#80ed99",
        "#ffd166",
        "#ef476f",
    ];

    const rand = (min: number, max: number) => Math.random() * (max - min) + min;

    const createExplosion = useCallback((x: number, y: number, color: string) => {
        const scale = scaleRef.current;
        const count = Math.floor(particleCount * Math.max(1, scale * 0.8));
        for (let i = 0; i < count; i++) {
            const angle = rand(0, Math.PI * 2);
            const speed = rand(1, 6) * scale;
            particlesRef.current.push({
                x,
                y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                alpha: 1,
                decay: rand(0.01, 0.02),
                color,
                size: rand(1.5, 3.5),
            });
        }
    }, [particleCount]);

    const launchFirework = useCallback((targetX?: number, targetY?: number) => {
        if (!containerRef.current) return;
        const { offsetWidth: width, offsetHeight: height } = containerRef.current;
        const scale = scaleRef.current;
        const x = targetX ?? rand(width * 0.2, width * 0.8);
        const startY = height;
        const endY = targetY ?? rand(height * 0.2, height * 0.5);
        const color = colors[Math.floor(Math.random() * colors.length)];
        const speed = rand(10, 15) * scale;

        fireworksRef.current.push({
            x,
            y: startY,
            targetY: endY,
            vx: rand(-1, 1) * scale,
            vy: -speed,
            color,
            trail: [],
        });
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        const container = containerRef.current;
        if (!canvas || !container) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const updateSize = () => {
            const rect = container.getBoundingClientRect();
            canvas.width = rect.width;
            canvas.height = rect.height;
            scaleRef.current = Math.min(rect.width, rect.height) / 1000;
        };

        updateSize();
        const ro = new ResizeObserver(updateSize);
        ro.observe(container);

        const animate = () => {
            const isDark = document.documentElement.classList.contains("dark");
            ctx.fillStyle = isDark ? "rgba(3, 7, 18, 0.2)" : "rgba(255, 255, 255, 0.2)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            const scale = scaleRef.current;

            for (let i = fireworksRef.current.length - 1; i >= 0; i--) {
                const fw = fireworksRef.current[i];
                fw.trail.push({ x: fw.x, y: fw.y, alpha: 1 });
                if (fw.trail.length > 12) fw.trail.shift();
                fw.x += fw.vx;
                fw.y += fw.vy;
                fw.vy += 0.2 * scale;

                fw.trail.forEach((p, idx) => {
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, 2 * scale * (idx / fw.trail.length), 0, Math.PI * 2);
                    ctx.fillStyle = fw.color;
                    ctx.globalAlpha = (idx / fw.trail.length) * 0.5;
                    ctx.fill();
                });

                if (fw.vy >= 0 || fw.y <= fw.targetY) {
                    createExplosion(fw.x, fw.y, fw.color);
                    fireworksRef.current.splice(i, 1);
                }
            }

            for (let i = particlesRef.current.length - 1; i >= 0; i--) {
                const p = particlesRef.current[i];
                p.vy += 0.08 * scale;
                p.x += p.vx;
                p.y += p.vy;
                p.alpha -= p.decay;

                if (p.alpha <= 0) {
                    particlesRef.current.splice(i, 1);
                    continue;
                }

                ctx.save();
                ctx.globalAlpha = p.alpha;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size * scale, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                if (isDark) {
                    ctx.shadowBlur = 10 * scale;
                    ctx.shadowColor = p.color;
                }
                ctx.fill();
                ctx.restore();
            }

            animationRef.current = requestAnimationFrame(animate);
        };

        animationRef.current = requestAnimationFrame(animate);
        const launcher = setInterval(() => autoLaunchInterval > 0 && launchFirework(), autoLaunchInterval);

        return () => {
            cancelAnimationFrame(animationRef.current);
            clearInterval(launcher);
            ro.disconnect();
        };
    }, [createExplosion, launchFirework, autoLaunchInterval]);

    return (
        <div ref={containerRef} className={cn("fixed inset-0 overflow-hidden bg-white dark:bg-gray-950", className)}>
            <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
            <div className="relative z-10 h-full w-full">{children}</div>
        </div>
    );
}