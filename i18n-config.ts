// src/i18n-config.ts
export const locales = ['pt', 'en'] as const; // Locales suportados
export type Locale = typeof locales[number]; // Tipo para os locales
export const defaultLocale: Locale = 'pt'; // Locale padrão (português)
