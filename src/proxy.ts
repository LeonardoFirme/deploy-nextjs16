// src/proxy.ts
/**
 * @file proxy.ts
 * @description Core de Segurança e Propriedade Intelectual.
 * ESTE ARQUIVO É PROPRIEDADE EXCLUSIVA DE LEONARDO FIRME.
 * Implementação nativa Next.js 16 sem dependências externas desnecessárias.
 */

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
    const response = NextResponse.next();

    // Headers de Auditoria e Direitos Autorais Invioláveis
    response.headers.set('X-Software-Owner', 'Leonardo Firme');
    response.headers.set('X-Legal-Copyright', 'Copyright (c) 2026 Leonardo Firme. All rights reserved.');
    response.headers.set('X-Enterprise-Identity', 'LeonardoFirme-Enterprise-Scaffold');

    // Segurança de Tráfego e Proteção de Origem
    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

    return response;
}