// Catálogo_Iconos del Curso_Kiro_Spec_Driven (Spec-Driven Development con Kiro).
//
// Mapa que asocia un identificador estable (IconId, en kebab-case con prefijo
// de categoría, p. ej. "concept-ears") con su archivo SVG local bajo
// /public/concept-icons/** y el nombre neutro del concepto o Nivel.
//
// Reglas conforme al design.md y a los Requisitos 11.1–11.6:
//  - Toda `path` empieza por "/" (asset local) y NUNCA es una URL externa
//    (http/https) — sin hotlinking ni marca (Req 11.4).
//  - Cada icono se referencia por un `id` estable resuelto por este catálogo
//    (Req 11.5).
//  - `resolveIcon` degrada de forma controlada al PLACEHOLDER_ICON si el id es
//    undefined o no existe; nunca lanza (Req 11.6).
//
// Los SVG neutros propios ya fueron generados en public/concept-icons/**.

import type { IconCatalog, IconEntry, IconId } from "./types";

// Icono neutro usado como degradación controlada (Req 11.6).
export const PLACEHOLDER_ICON: IconEntry = {
  id: "__placeholder__",
  path: "/concept-icons/_placeholder.svg",
  defaultLabel: "Concepto de Spec-Driven Development",
};

export const iconCatalog: IconCatalog = {
  // ─── Niveles (3) ─────────────────────────────────────────────────────────
  "concept-nivel-basico": {
    id: "concept-nivel-basico",
    path: "/concept-icons/levels/basico.svg",
    defaultLabel: "Nivel BÁSICO",
  },
  "concept-nivel-medio": {
    id: "concept-nivel-medio",
    path: "/concept-icons/levels/medio.svg",
    defaultLabel: "Nivel MEDIO",
  },
  "concept-nivel-avanzado": {
    id: "concept-nivel-avanzado",
    path: "/concept-icons/levels/avanzado.svg",
    defaultLabel: "Nivel AVANZADO",
  },

  // ─── Conceptos / Áreas (neutros, sin marca) ──────────────────────────────
  "concept-que-es-kiro": {
    id: "concept-que-es-kiro",
    path: "/concept-icons/concepts/que-es-kiro.svg",
    defaultLabel: "Qué es Kiro",
  },
  "concept-filosofia": {
    id: "concept-filosofia",
    path: "/concept-icons/concepts/filosofia.svg",
    defaultLabel: "Filosofía spec-driven",
  },
  "concept-tres-fases": {
    id: "concept-tres-fases",
    path: "/concept-icons/concepts/tres-fases.svg",
    defaultLabel: "Las tres fases",
  },
  "concept-ears": {
    id: "concept-ears",
    path: "/concept-icons/concepts/ears.svg",
    defaultLabel: "EARS",
  },
  "concept-requirements": {
    id: "concept-requirements",
    path: "/concept-icons/concepts/requirements.svg",
    defaultLabel: "Fase Requirements",
  },
  "concept-design": {
    id: "concept-design",
    path: "/concept-icons/concepts/design.svg",
    defaultLabel: "Fase Design",
  },
  "concept-tasks": {
    id: "concept-tasks",
    path: "/concept-icons/concepts/tasks.svg",
    defaultLabel: "Fase Tasks",
  },
  "concept-archivos-spec": {
    id: "concept-archivos-spec",
    path: "/concept-icons/concepts/archivos-spec.svg",
    defaultLabel: "Los tres archivos de la spec",
  },
  "concept-tipos-spec": {
    id: "concept-tipos-spec",
    path: "/concept-icons/concepts/tipos-spec.svg",
    defaultLabel: "Tipos de spec",
  },
  "concept-sincronizacion": {
    id: "concept-sincronizacion",
    path: "/concept-icons/concepts/sincronizacion.svg",
    defaultLabel: "Sincronización spec-código",
  },
  "concept-metodologias": {
    id: "concept-metodologias",
    path: "/concept-icons/concepts/metodologias.svg",
    defaultLabel: "Comparación de metodologías",
  },
  "concept-cuando-usar": {
    id: "concept-cuando-usar",
    path: "/concept-icons/concepts/cuando-usar.svg",
    defaultLabel: "Cuándo usar spec-driven",
  },
};

/**
 * Resuelve un IconId contra el Catálogo_Iconos.
 *
 * Degradación controlada (Req 11.6): devuelve PLACEHOLDER_ICON cuando el `id`
 * es `undefined` o no existe en el catálogo. Nunca lanza.
 */
export function resolveIcon(id: IconId | undefined): IconEntry {
  if (!id) return PLACEHOLDER_ICON;
  return iconCatalog[id] ?? PLACEHOLDER_ICON;
}
