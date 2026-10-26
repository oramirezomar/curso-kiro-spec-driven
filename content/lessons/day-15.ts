import type { Lesson } from "@/lib/types";

// Contenido redactado (tarea 16.2). Fuente de verdad:
// docs-referencia/kiro-spec-driven/01-metodologia-y-producto.md
// (§Tipos de spec y capacidades, §Otras features). Req 3.10, 3.13.
export const day15: Lesson = {
  day: 15,
  slug: "tipos-de-spec",
  title: "Tipos de spec y matriz de capacidades por plataforma",
  section: "AVANZADO",
  estimatedMinutes: 22,
  icon: "concept-tipos-spec",
  objectives: [
    "Distinguir los tres tipos de spec: Feature (Requirements-First y Design-First), Bugfix y Quick Spec",
    "Leer la matriz de capacidades por plataforma (IDE, CLI, Web) y saber qué está disponible dónde",
    "Situar los Powers de Kiro (hooks, steering, MCP, agentic chat) como temas de los otros cursos de la serie",
  ],
  blocks: [
    {
      type: "paragraph",
      text:
        "No todas las specs son iguales. Según lo que vayas a construir o arreglar, Kiro ofrece distintos tipos de spec, y según dónde trabajes (IDE, CLI, Web) algunas capacidades están disponibles y otras no. Esta lección te da el mapa completo.",
    },
    {
      type: "serviceIcon",
      items: [{ service: "Tipos de spec", icon: "concept-tipos-spec" }],
    },
    { type: "heading", level: 2, text: "Los tres tipos de spec" },
    {
      type: "list",
      items: [
        "Feature Specs: para funcionalidad nueva. Tienen dos flujos — Requirements-First (el qué antes que el cómo, el que hemos seguido en este curso) y Design-First (empezar por el diseño).",
        "Bugfix Specs: para corregir algo roto. En vez de requirements.md, su primer archivo es bugfix.md, que captura el análisis del bug.",
        "Quick Spec: autogenera requisitos y diseño sin revisión paso a paso, para cuando quieres velocidad sobre control.",
      ],
    },
    {
      type: "callout",
      variant: "info",
      text:
        "Feature Requirements-First es el flujo de este curso: defines el qué (requisitos) antes que el cómo (diseño). Design-First invierte el orden cuando la exploración técnica manda. Bugfix y Quick Spec son variantes para otros contextos.",
    },
    { type: "heading", level: 2, text: "La matriz de capacidades por plataforma" },
    {
      type: "paragraph",
      text:
        "Las specs se pueden usar desde el IDE, la CLI y la Web (no en móvil). Pero no todas las capacidades están en todas las plataformas. Esta es la matriz:",
    },
    {
      type: "code",
      lang: "text",
      title: "Capacidades de specs por plataforma",
      code:
        "Capacidad                              IDE  CLI  Web  Movil\n" +
        "-------------------------------------  ---  ---  ---  -----\n" +
        "Feature Specs                           si   si   si    -\n" +
        "Bugfix Specs                            si   si   si    -\n" +
        "Quick Spec                              si   si   si    -\n" +
        "Ejecucion de tareas en paralelo         si   si   si    -\n" +
        "Analyze Requirements                    si   si    -    -\n" +
        "Correctness (property-based testing)    si    -    -    -",
      highlightLines: [7, 8],
    },
    {
      type: "callout",
      variant: "warning",
      text:
        "Dos capacidades tienen disponibilidad limitada: Analyze Requirements está en IDE y CLI (no en Web), y Correctness (property-based testing) está SOLO en el IDE. Si tu flujo depende de ellas, ten en cuenta dónde trabajas.",
    },
    { type: "heading", level: 2, text: "Más allá de las specs: los Powers de Kiro" },
    {
      type: "paragraph",
      text:
        "Las specs son el corazón de Kiro, pero no son todo. Kiro incluye además un conjunto de capacidades —los Powers— que amplían lo que el IDE puede hacer: hooks (automatizaciones por evento), steering rules (guiar el comportamiento de la IA en todo el proyecto), MCP (conectar herramientas externas) y agentic chat (tareas ad-hoc con proveedores de contexto).",
    },
    {
      type: "callout",
      variant: "info",
      text:
        "Los Powers (hooks, steering, MCP, agentic chat) quedan fuera del alcance de este curso: son el tema de los otros dos cursos de la serie (Getting Started y Kiro Powers). Aquí solo los mencionamos para que sepas que existen y dónde encajan.",
    },
    {
      type: "checklist",
      title: "Mapa de tipos y plataformas",
      items: [
        "Feature (Requirements-First / Design-First) para funcionalidad nueva.",
        "Bugfix para corregir, con bugfix.md en vez de requirements.md.",
        "Quick Spec para autogenerar sin revisión paso a paso.",
        "Analyze Requirements: IDE y CLI. Correctness/PBT: solo IDE.",
        "Los Powers (hooks, steering, MCP, agentic chat) son otro curso.",
      ],
    },
  ],
  selfCheck: [
    {
      question: "¿Cuáles son los tres tipos de spec en Kiro?",
      options: [
        "Básica, Media y Avanzada",
        "Feature (Requirements-First/Design-First), Bugfix y Quick Spec",
        "IDE, CLI y Web",
        "Requirements, Design y Tasks",
      ],
      correctIndex: 1,
      explanation:
        "Los tres tipos son Feature Specs (con flujos Requirements-First y Design-First), Bugfix Specs (con bugfix.md para el análisis del bug) y Quick Spec (autogenera sin revisión paso a paso). Requirements/Design/Tasks son las fases, no tipos de spec.",
    },
    {
      question: "Según la matriz de capacidades, ¿dónde está disponible Correctness (property-based testing)?",
      options: [
        "En IDE, CLI y Web",
        "Solo en la CLI",
        "Solo en el IDE",
        "En móvil",
      ],
      correctIndex: 2,
      explanation:
        "Correctness (property-based testing) está disponible solo en el IDE. Analyze Requirements está en IDE y CLI (no Web), y el resto de capacidades de specs están en IDE, CLI y Web (nunca en móvil).",
    },
    {
      question: "¿Qué relación tienen los Powers (hooks, steering, MCP, agentic chat) con este curso?",
      options: [
        "Son el tema central de este curso",
        "Se mencionan como contexto, pero son el tema de los otros dos cursos de la serie (Getting Started y Kiro Powers)",
        "No existen en Kiro",
        "Sustituyen a las specs por completo",
      ],
      correctIndex: 1,
      explanation:
        "Los Powers amplían lo que Kiro puede hacer (automatizaciones, guía de la IA, herramientas externas, chat ad-hoc), pero quedan fuera del alcance de este curso sobre spec-driven development: son el tema de los otros dos cursos de la serie. Aquí solo se mencionan para situarlos.",
    },
  ],
};
