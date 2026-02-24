// src/core/config.ts
/**
 * Configurações core do ecossistema Leonardo Firme.
 * Define constantes do sistema e versões.
 */
export const CORE_CONFIG = {
  version: '1.1.3',
  brand: 'Leonardo Firme',
  colors: {
    primary: '#ff2d20', // v0-600
  }
};

// src/lib/api.ts
/**
 * Instância base para chamadas de API.
 * Preparado para integração com o backend Laravel.
 */
export const api = async (endpoint: string, options?: RequestInit) => {
  return fetch(`${process.env.NEXT_PUBLIC_API_URL}${endpoint}`, options);
};