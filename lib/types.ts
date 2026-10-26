// Modelo de contenido tipado. Cada lección es un array de "blocks",
// no un string de markdown, para tener control total del render.
//
// Clonado del Curso_Claude (curso-claude/lib/types.ts) y adaptado para el
// Curso_Kiro_Spec_Driven con iconografía neutra propia por concepto y
// lenguajes de código orientados al dominio spec-driven de Kiro.

// Identificador estable de icono resuelto por el Catálogo_Iconos.
export type IconId = string;

export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; level: 2 | 3; text: string }
  | { type: "quote"; text: string; author?: string }
  | { type: "list"; ordered?: boolean; items: string[] }
  | {
      type: "code";
      // (Req 5.1, 5.2) Lenguajes del dominio spec-driven de Kiro: text para
      // sintaxis EARS, árboles de archivos y diagramas; bash para la CLI de
      // Kiro; json para configuraciones; ts/js para interfaces; markdown para
      // fragmentos de requirements.md / design.md / tasks.md. Se quita python
      // del Curso_Claude (no se usa) y se añade markdown.
      lang: "js" | "ts" | "text" | "bash" | "json" | "markdown";
      title?: string;
      code: string;
      highlightLines?: number[];
    }
  | { type: "callout"; variant: "info" | "warning" | "success"; text: string }
  | {
      type: "comparison";
      before: { title: string; code: string };
      after: { title: string; code: string };
      // Lenguajes para comparativas del dominio spec-driven: ts/js para
      // interfaces, text para sintaxis/diagramas y markdown para fragmentos
      // de los tres archivos de la spec.
      lang?: "js" | "ts" | "text" | "markdown";
    }
  | { type: "checklist"; title?: string; items: string[] }
  // Bloque_Icono (Req 4.7, 11.3)
  | { type: "serviceIcon"; items: { service: string; icon: IconId }[] };

export interface Lesson {
  day: number;
  slug: string;
  title: string;
  section: string;
  estimatedMinutes: number;
  objectives: string[];
  blocks: ContentBlock[];
  icon?: IconId; // icono principal de la lección (Req 11.2)
  selfCheck?: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }[];
}

export interface CourseSection {
  title: string;
  dayRange: [number, number];
  icon?: IconId; // icono de la capa temática (Req 11.1)
}

// Catálogo_Iconos
export interface IconEntry {
  id: IconId; // id estable (p. ej. "concept-ears")
  path: string; // ruta local bajo /public (empieza por "/")
  defaultLabel: string; // nombre neutro del concepto/área
}

export type IconCatalog = Record<IconId, IconEntry>;
