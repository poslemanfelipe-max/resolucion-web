import type { ImageMetadata } from 'astro';
import { site } from '../data/site';

// Lee automáticamente todas las fotos de la carpeta /fotos.
const archivos = import.meta.glob<{ default: ImageMetadata }>(
  '/fotos/**/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}',
  { eager: true },
);

export interface Foto {
  ruta: string; // ej: "moda/01-campaña.jpg"
  src: ImageMetadata;
  alt: string;
}

const todas = Object.entries(archivos)
  .map(([path, mod]) => ({ ruta: path.replace(/^\/fotos\//, ''), src: mod.default }))
  .sort((a, b) => a.ruta.localeCompare(b.ruta, 'es', { numeric: true }));

// Nombres de archivo de cámara o celular que no describen nada.
const NOMBRE_GENERICO = /^(img|dsc|dscf|dji|gopr|pxl|mvimg|photo|foto|image|imagen|whatsapp|screenshot|captura|_mg|p\d)/i;

function altDesdeNombre(archivo: string): string | null {
  const base = archivo.replace(/\.[^.]+$/, '');
  if (NOMBRE_GENERICO.test(base)) return null;
  const texto = base
    .replace(/^[\d\s._-]+/, '') // saca los números del principio (01-, 02_...)
    .replace(/[-_]+/g, ' ')
    .trim();
  if (texto.length < 3 || !/[a-záéíóúñ]{3,}/i.test(texto)) return null;
  return texto.charAt(0).toUpperCase() + texto.slice(1);
}

function altPara(ruta: string, categoria: string, n: number): string {
  const manual = site.descripcionesFotos[ruta];
  if (manual) return manual;
  const archivo = ruta.split('/').pop() ?? '';
  const desdeNombre = altDesdeNombre(archivo);
  if (desdeNombre) return `${desdeNombre} — fotografía de ${categoria.toLowerCase()} por ${site.nombre}`;
  return `Fotografía de ${categoria.toLowerCase()} por ${site.nombre} (${n})`;
}

/** Fotos de una categoría, en orden alfabético por nombre de archivo. */
export function fotosDe(carpeta: string, categoria: string): Foto[] {
  return todas
    .filter((f) => f.ruta.startsWith(`${carpeta}/`) && !f.ruta.slice(carpeta.length + 1).includes('/'))
    .map((f, i) => ({ ...f, alt: altPara(f.ruta, categoria, i + 1) }));
}

/** Una foto puntual, ej: fotoSitio('sitio/juana.jpg'). Devuelve undefined si no existe. */
export function foto(ruta: string): ImageMetadata | undefined {
  if (!ruta) return undefined;
  return todas.find((f) => f.ruta === ruta)?.src;
}
