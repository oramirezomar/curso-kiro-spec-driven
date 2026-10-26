import type { Lesson } from "@/lib/types";

// Contenido redactado (tarea 14.2). Fuente de verdad:
// docs-referencia/kiro-spec-driven/01-metodologia-y-producto.md
// (§El problema que resuelve, §Qué es Kiro). Req 3.1.
export const day02: Lesson = {
  day: 2,
  slug: "por-que-specs",
  title: "Por qué specs: prompting sin estructura vs spec-driven",
  section: "BÁSICO",
  estimatedMinutes: 18,
  icon: "concept-que-es-kiro",
  objectives: [
    "Nombrar los cuatro costes ocultos del prompting sin estructura: suposiciones no documentadas, requisitos difusos, cumplimiento no verificable y diseño opaco",
    "Explicar cómo las specs convierten esos cuatro problemas en artefactos explícitos y verificables",
    "Reconocer cuándo el prompting rápido es suficiente y cuándo conviene dar el paso a spec-driven",
  ],
  blocks: [
    {
      type: "paragraph",
      text:
        "El flujo con un asistente de IA suele ser el mismo: prompt, prompt, prompt, hasta que algo funciona. Es rápido y satisfactorio, pero esconde una deuda que se cobra cuando intentas llevar ese prototipo a producción. Esta lección mira de frente esa deuda y explica por qué una especificación la salda.",
    },
    { type: "heading", level: 2, text: "Los cuatro costes ocultos del prompting" },
    {
      type: "paragraph",
      text:
        "Cuando guías a un agente solo con prompts, cuatro cosas quedan sin resolver, y las cuatro vuelven a morderte más tarde:",
    },
    {
      type: "list",
      items: [
        "Suposiciones no documentadas: el modelo tomó decisiones que tú no viste y que nadie anotó.",
        "Requisitos difusos: no hay una definición clara de qué debía hacer la aplicación.",
        "Cumplimiento no verificable: sin requisitos claros, no puedes comprobar si la app los cumple.",
        "Diseño opaco: no entiendes rápido cómo está construido el sistema ni cómo afecta a tu entorno.",
      ],
    },
    {
      type: "serviceIcon",
      items: [
        { service: "Qué es Kiro", icon: "concept-que-es-kiro" },
        { service: "Las tres fases", icon: "concept-tres-fases" },
        { service: "Los tres archivos de la spec", icon: "concept-archivos-spec" },
      ],
    },
    { type: "heading", level: 2, text: "Qué cambia con una spec" },
    {
      type: "paragraph",
      text:
        "Una especificación ataca esos cuatro puntos de raíz: hace explícitas las suposiciones del modelo, fija requisitos claros y testables, permite verificar si la implementación los cumple y documenta el diseño antes de que el código lo entierre. El mismo prompt — \"añade un sistema de reseñas\" — pasa de producir código opaco a producir primero requisitos, luego diseño y luego un plan de tareas que puedes revisar.",
    },
    {
      type: "comparison",
      lang: "text",
      before: {
        title: "Prompting sin estructura",
        code:
          "prompt -> prompt -> prompt\n" +
          "= algo que 'funciona'\n\n" +
          "- Suposiciones: no documentadas\n" +
          "- Requisitos: difusos\n" +
          "- Cumple?: no verificable\n" +
          "- Diseno: opaco",
      },
      after: {
        title: "Spec-driven development",
        code:
          "Requirements -> Design -> Tasks\n" +
          "= de prototipo a produccion\n\n" +
          "- Suposiciones: explicitas\n" +
          "- Requisitos: claros y testables\n" +
          "- Cumple?: verificable\n" +
          "- Diseno: documentado",
      },
    },
    {
      type: "callout",
      variant: "info",
      text:
        "El objetivo no es escribir documentación por escribirla, sino reducir incertidumbre. Las specs guían al agente a una mejor implementación igual que guiarían a un equipo humano: con un entendimiento compartido de qué se construye.",
    },
    { type: "heading", level: 2, text: "¿Siempre specs?" },
    {
      type: "paragraph",
      text:
        "No. El propio Kiro sigue siendo bueno para el vibe coding rápido. Para un experimento desechable o una prueba de concepto, el prompting directo es perfecto. El salto a spec-driven compensa cuando el trabajo necesita sobrevivir: features complejas, código que irá a producción, o cualquier cosa que otra persona (o tu yo futuro) tendrá que mantener.",
    },
    {
      type: "checklist",
      title: "Señales de que conviene una spec",
      items: [
        "La feature tiene varios componentes o integraciones.",
        "El código irá a producción, no es un experimento desechable.",
        "Más de una persona necesita entender qué se construye.",
        "Importa poder verificar después que la app cumple lo acordado.",
      ],
    },
  ],
  selfCheck: [
    {
      question: "¿Cuál NO es uno de los cuatro costes ocultos del prompting sin estructura?",
      options: [
        "Las suposiciones del modelo no quedan documentadas",
        "Los requisitos son difusos y el cumplimiento no es verificable",
        "El diseño del sistema queda opaco",
        "El código generado nunca compila",
      ],
      correctIndex: 3,
      explanation:
        "Los cuatro costes ocultos son: suposiciones no documentadas, requisitos difusos, cumplimiento no verificable y diseño opaco. Que el código no compile no es uno de ellos: el prompting suele producir código que 'funciona', y justo por eso la deuda queda escondida.",
    },
    {
      question: "Según la lección, ¿cuál es el verdadero propósito de escribir una spec?",
      options: [
        "Generar documentación por obligación de proceso",
        "Reducir la incertidumbre y dar un entendimiento compartido que guía a una mejor implementación",
        "Sustituir por completo la generación de código con IA",
        "Hacer el desarrollo más lento a propósito",
      ],
      correctIndex: 1,
      explanation:
        "La spec no es documentación por sí misma: hace explícitas las suposiciones y reduce la incertidumbre, guiando al agente a una mejor implementación igual que un entendimiento compartido guiaría a un equipo humano.",
    },
    {
      question: "¿En cuál de estos escenarios es MENOS necesario dar el paso a spec-driven?",
      options: [
        "Una feature con múltiples componentes que irá a producción",
        "Un prototipo experimental desechable para probar una idea rápida",
        "Código que varias personas del equipo deberán mantener",
        "Un sistema donde importa verificar después que cumple lo acordado",
      ],
      correctIndex: 1,
      explanation:
        "Para prototipos experimentales desechables el prompting rápido (vibe coding) es suficiente. Spec-driven compensa cuando el trabajo debe sobrevivir: features complejas, código de producción o software que alguien tendrá que mantener.",
    },
  ],
};
