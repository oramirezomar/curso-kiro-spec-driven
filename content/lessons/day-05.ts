import type { Lesson } from "@/lib/types";

// Contenido redactado (tarea 14.2). Fuente de verdad:
// docs-referencia/kiro-spec-driven/01-metodologia-y-producto.md
// (§Archivos de una spec, §Las tres fases). Req 3.4.
export const day05: Lesson = {
  day: 5,
  slug: "los-tres-archivos",
  title: "Los tres archivos de una spec",
  section: "BÁSICO",
  estimatedMinutes: 18,
  icon: "concept-archivos-spec",
  objectives: [
    "Identificar los tres archivos que genera toda spec: requirements.md, design.md y tasks.md",
    "Describir qué contiene cada archivo y a qué fase del proceso corresponde",
    "Entender cómo los tres archivos se encadenan y mantienen trazabilidad entre sí",
  ],
  blocks: [
    {
      type: "paragraph",
      text:
        "Una spec en Kiro no es un documento monolítico: son tres archivos, uno por fase, que viven juntos en una carpeta. Cada archivo es la salida de una fase y la entrada de la siguiente. Conocer qué va en cada uno te permite leer una spec ajena de un vistazo y saber dónde tocar cuando algo cambia.",
    },
    {
      type: "code",
      lang: "text",
      title: "Estructura de una spec en disco",
      code:
        ".kiro/specs/mi-feature/\n" +
        "  requirements.md   <- Fase Requirements (el QUE)\n" +
        "  design.md         <- Fase Design (el COMO)\n" +
        "  tasks.md          <- Fase Tasks (el plan de implementacion)",
      highlightLines: [2, 3, 4],
    },
    {
      type: "serviceIcon",
      items: [
        { service: "Los tres archivos de la spec", icon: "concept-archivos-spec" },
        { service: "Las tres fases", icon: "concept-tres-fases" },
      ],
    },
    { type: "heading", level: 2, text: "requirements.md — el QUÉ" },
    {
      type: "paragraph",
      text:
        "Captura las user stories y los criterios de aceptación en notación estructurada EARS (en un bugfix, el archivo es bugfix.md y captura el análisis del bug). Es el contrato: define qué debe hacer el sistema, en términos verificables, sin entrar en cómo se implementa.",
    },
    {
      type: "code",
      lang: "markdown",
      title: "requirements.md (fragmento)",
      code:
        "## Requisito 1 — Reseñas de producto\n" +
        "\n" +
        "**User Story:** Como comprador, quiero dejar una reseña, para\n" +
        "ayudar a otros compradores a decidir.\n" +
        "\n" +
        "### Criterios de aceptación\n" +
        "1. WHEN el usuario envía una reseña THEN el sistema SHALL guardarla\n" +
        "2. IF la reseña está vacía THEN el sistema SHALL rechazarla",
    },
    { type: "heading", level: 2, text: "design.md — el CÓMO" },
    {
      type: "paragraph",
      text:
        "Documenta la arquitectura técnica: componentes, diagramas de secuencia (Mermaid), interfaces TypeScript, esquemas de base de datos, endpoints, manejo de errores y estrategia de pruebas. Responde al cómo, apoyándose en los requisitos ya aprobados.",
    },
    {
      type: "code",
      lang: "markdown",
      title: "design.md (fragmento)",
      code:
        "## Modelos de datos\n" +
        "\n" +
        "```ts\n" +
        "interface Review {\n" +
        "  id: string;\n" +
        "  rating: number; // 1..5\n" +
        "  body: string;\n" +
        "}\n" +
        "```",
    },
    { type: "heading", level: 2, text: "tasks.md — el plan" },
    {
      type: "paragraph",
      text:
        "Es el plan de implementación: tareas discretas y rastreables, secuenciadas por dependencias, cada una enlazada a los requisitos que satisface. Las casillas marcan el estado de finalización, y la interfaz de Kiro las ejecuta una a una.",
    },
    {
      type: "code",
      lang: "markdown",
      title: "tasks.md (fragmento)",
      code:
        "- [ ] 1. Crear el modelo Review\n" +
        "  - Definir la interfaz y la validación 1..5\n" +
        "  - _Requirements: 1_\n" +
        "- [ ] 2. Endpoint POST /reviews\n" +
        "  - _Requirements: 1_",
      highlightLines: [3, 5],
    },
    {
      type: "callout",
      variant: "info",
      text:
        "La trazabilidad une los tres archivos: una tarea de tasks.md cita el requisito de requirements.md que cumple, y el diseño de design.md existe para satisfacer esos mismos requisitos. Puedes recorrer requisito → diseño → tarea → código sin perder el hilo.",
    },
    {
      type: "checklist",
      title: "Resumen de los tres archivos",
      items: [
        "requirements.md: user stories + criterios de aceptación EARS (el QUÉ).",
        "design.md: arquitectura, diagramas, interfaces, modelos de datos (el CÓMO).",
        "tasks.md: tareas discretas secuenciadas con trazabilidad a requisitos (el PLAN).",
      ],
    },
  ],
  selfCheck: [
    {
      question: "¿Qué archivo de la spec captura las user stories y los criterios de aceptación en EARS?",
      options: ["design.md", "tasks.md", "requirements.md", "README.md"],
      correctIndex: 2,
      explanation:
        "requirements.md captura las user stories y los criterios de aceptación en notación EARS (el QUÉ). design.md documenta la arquitectura (el CÓMO) y tasks.md el plan de implementación.",
    },
    {
      question: "¿Qué contiene design.md?",
      options: [
        "El historial de ejecución del agente",
        "La arquitectura técnica: componentes, diagramas, interfaces, modelos de datos, manejo de errores y estrategia de pruebas",
        "Únicamente la lista de tareas pendientes",
        "Las credenciales y variables de entorno del proyecto",
      ],
      correctIndex: 1,
      explanation:
        "design.md documenta el cómo: arquitectura, diagramas de secuencia (Mermaid), interfaces TypeScript, esquemas de datos, endpoints, manejo de errores y estrategia de pruebas, apoyándose en los requisitos aprobados.",
    },
    {
      question: "¿Cómo se mantiene la trazabilidad entre los tres archivos?",
      options: [
        "No hay trazabilidad: cada archivo es independiente",
        "Cada tarea de tasks.md cita el requisito de requirements.md que satisface, y el diseño existe para cumplir esos requisitos",
        "Mediante un cuarto archivo índice obligatorio",
        "Solo a través de los mensajes de commit",
      ],
      correctIndex: 1,
      explanation:
        "La trazabilidad une los tres archivos: una tarea de tasks.md referencia el requisito que cumple, y design.md existe para satisfacer esos mismos requisitos. Así se puede recorrer requisito → diseño → tarea → código.",
    },
  ],
};
