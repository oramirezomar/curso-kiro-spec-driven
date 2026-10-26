import type { Lesson } from "@/lib/types";

// Contenido redactado (tarea 15.2). Fuente de verdad:
// docs-referencia/kiro-spec-driven/02-fases-y-ears.md (§Fase Design: Decision
// Record, diagramas Mermaid). Req 3.7.
export const day11: Lesson = {
  day: 11,
  slug: "decision-records-y-diagramas",
  title: "Decision Records y diagramas Mermaid",
  section: "MEDIO",
  estimatedMinutes: 24,
  icon: "concept-design",
  objectives: [
    "Escribir un Decision Record con la estructura Context, Options Considered, Decision, Rationale e Implications",
    "Entender por qué documentar el porqué de una decisión es tan valioso como la decisión misma",
    "Usar diagramas Mermaid para comunicar arquitectura y flujos de datos dentro del design.md",
  ],
  blocks: [
    {
      type: "paragraph",
      text:
        "Dos herramientas elevan un design.md de 'descripción' a 'documento que comunica': los Decision Records, que capturan el porqué de las decisiones, y los diagramas Mermaid, que muestran la estructura de un vistazo. Ambos encajan en la filosofía de documentación como comunicación que vimos al principio del curso.",
    },
    {
      type: "serviceIcon",
      items: [
        { service: "Fase Design", icon: "concept-design" },
        { service: "Filosofía spec-driven", icon: "concept-filosofia" },
      ],
    },
    { type: "heading", level: 2, text: "El Decision Record" },
    {
      type: "paragraph",
      text:
        "Cuando el diseño toma una decisión relevante (qué base de datos, qué estrategia de autenticación, qué patrón de arquitectura), no basta con anotar la decisión: hay que registrar por qué se tomó y qué alternativas se descartaron. El Decision Record es la plantilla para eso, con cinco partes.",
    },
    {
      type: "code",
      lang: "markdown",
      title: "Plantilla de Decision Record",
      code:
        "### Decisión: [título breve]\n" +
        "\n" +
        "**Context:** [la situación que exige decidir]\n" +
        "**Options Considered:**\n" +
        "1. [Opción A] — Pros: ... / Cons: ...\n" +
        "2. [Opción B] — Pros: ... / Cons: ...\n" +
        "**Decision:** [la opción elegida]\n" +
        "**Rationale:** [por qué se eligió]\n" +
        "**Implications:** [qué significa para la implementación]",
      highlightLines: [3, 7, 8, 9],
    },
    {
      type: "paragraph",
      text:
        "Las cinco partes cuentan una historia completa: el Context explica la situación, las Options muestran que se consideraron alternativas, la Decision es la elección, el Rationale justifica el porqué y las Implications anticipan las consecuencias. Quien lea la spec dentro de un año entenderá no solo qué se hizo, sino por qué.",
    },
    {
      type: "callout",
      variant: "info",
      text:
        "El Rationale es la parte que más se omite y la más valiosa. Sin él, un futuro mantenedor no sabe si puede cambiar la decisión sin romper algo, y acaba repitiendo el mismo análisis desde cero.",
    },
    { type: "heading", level: 2, text: "Diagramas Mermaid" },
    {
      type: "paragraph",
      text:
        "Mermaid permite escribir diagramas como texto dentro del Markdown del design.md. Es ideal para la sección de arquitectura: un diagrama de componentes o de flujo de datos comunica relaciones que un párrafo oscurecería. Al ser texto, versiona bien en Git y se edita sin herramientas externas.",
    },
    {
      type: "code",
      lang: "text",
      title: "Diagrama de flujo de datos en Mermaid",
      code:
        "flowchart TD\n" +
        "    U[Usuario] --> R[Ruta /reviews]\n" +
        "    R --> S[Servicio de reseñas]\n" +
        "    S --> DB[(Base de datos)]\n" +
        "    S --> V[Validación 1..5]",
    },
    {
      type: "callout",
      variant: "success",
      text:
        "Combina ambas herramientas: un diagrama Mermaid muestra la forma del sistema, y un Decision Record al lado explica por qué tiene esa forma y no otra. Juntos, el diseño se vuelve autoexplicativo.",
    },
    {
      type: "checklist",
      title: "Buen uso de Decision Records y diagramas",
      items: [
        "Cada decisión relevante tiene un Decision Record con las cinco partes.",
        "El Rationale explica el porqué, no solo repite la decisión.",
        "Las Options Considered muestran alternativas reales con pros y cons.",
        "Los diagramas Mermaid ilustran arquitectura y flujos de datos clave.",
      ],
    },
  ],
  selfCheck: [
    {
      question: "¿Cuáles son las cinco partes de un Decision Record?",
      options: [
        "Who, What, When, Where, Why",
        "Context, Options Considered, Decision, Rationale, Implications",
        "Requirements, Design, Tasks, Tests, Deploy",
        "Rojo, Verde, Refactor, Revisión, Release",
      ],
      correctIndex: 1,
      explanation:
        "El Decision Record tiene cinco partes: Context (la situación), Options Considered (alternativas con pros/cons), Decision (la elección), Rationale (el porqué) e Implications (las consecuencias para la implementación).",
    },
    {
      question: "¿Por qué el Rationale es la parte más valiosa de un Decision Record?",
      options: [
        "Porque es la más larga",
        "Porque sin él un futuro mantenedor no sabe si puede cambiar la decisión sin romper algo, y repite el análisis desde cero",
        "Porque sustituye a la documentación de usuario",
        "Porque contiene el código de la solución",
      ],
      correctIndex: 1,
      explanation:
        "El Rationale captura el porqué de la decisión. Es lo que permite a alguien en el futuro entender si puede cambiarla con seguridad, evitando que tenga que repetir todo el análisis. Es la parte que más se omite y la más útil.",
    },
    {
      question: "¿Qué ventaja tiene usar Mermaid para los diagramas del design.md?",
      options: [
        "Genera el código de la aplicación automáticamente",
        "Se escribe como texto dentro del Markdown, versiona bien en Git y se edita sin herramientas externas",
        "Obliga a usar una herramienta de diseño propietaria",
        "Reemplaza la necesidad de escribir requisitos",
      ],
      correctIndex: 1,
      explanation:
        "Mermaid permite escribir diagramas como texto dentro del Markdown. Al ser texto, versiona limpio en Git y se edita sin herramientas externas, y comunica relaciones (componentes, flujos de datos) que un párrafo oscurecería.",
    },
  ],
};
