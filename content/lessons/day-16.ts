import type { Lesson } from "@/lib/types";

// Nivel AVANZADO (dayRange [12, 17]).
// Día 16 — Comparación con otras metodologías. Sitúa el spec-driven development
// frente a Waterfall, Agile, TDD y Design-First: semejanzas y diferencias con
// cada una. El mensaje central es que spec-driven complementa, no reemplaza,
// los workflows existentes.
//
// Fuente de verdad: docs-referencia/kiro-spec-driven/01-metodologia-y-producto.md
// (sección "Comparación con otras metodologías" y "Cuándo usar spec-driven").
// Trazabilidad: Req 3.11, 4.4, 5.4, 6.1-6.4, 9.1, 9.2.
export const day16: Lesson = {
  day: 16,
  slug: "comparativa-metodologias",
  title: "Comparación con Waterfall, Agile, TDD y Design-First",
  section: "AVANZADO",
  estimatedMinutes: 20,
  icon: "concept-metodologias",
  objectives: [
    "Contrastar spec-driven development con Waterfall, Agile, TDD y Design-First, identificando qué comparte y en qué difiere de cada una",
    "Explicar por qué spec-driven complementa los workflows existentes (sprints, feature branches, code reviews) en lugar de reemplazarlos",
    "Reconocer el salto de valor frente al prompting sin estructura: suposiciones explícitas, trazabilidad y documentación viva",
  ],
  blocks: [
    {
      type: "paragraph",
      text:
        "Spec-driven development no es una metodología que llegue a desplazar a las que ya usas. Es una forma de dar estructura a la fase previa a escribir código —requisitos, diseño, tareas— que encaja dentro de tus sprints, tus feature branches y tus code reviews. Entenderlo frente a otras metodologías conocidas ayuda a situarlo sin falsos dilemas de 'esto o aquello'.",
    },
    { type: "heading", level: 2, text: "Frente a Waterfall" },
    {
      type: "paragraph",
      text:
        "Semejanza: ambos planifican por adelantado antes de implementar. Diferencia: Waterfall trata cada fase como un paso único e irreversible; spec-driven es iterativo dentro de cada fase y sus specs son documentos vivos que se sincronizan con el código a medida que evoluciona.",
    },
    { type: "heading", level: 2, text: "Frente a Agile" },
    {
      type: "paragraph",
      text:
        "Semejanza: ambos valoran el software funcionando y la iteración. Diferencia: spec-driven pone más énfasis en el diseño por adelantado. No compite con Agile: se aplica a features concretas dentro de un sprint, no reemplaza el marco ágil.",
    },
    { type: "heading", level: 2, text: "Frente a TDD" },
    {
      type: "paragraph",
      text:
        "Semejanza: ambos definen los criterios de éxito antes de implementar; el ciclo requirements-design-implementation es análogo al red-green-refactor de TDD. Diferencia: spec-driven opera a mayor nivel de abstracción —negocio y diseño—, no solo al nivel de los tests.",
    },
    {
      type: "comparison",
      lang: "markdown",
      before: {
        title: "TDD — criterio de éxito como test",
        code:
          "# Rojo → Verde → Refactor\n" +
          "\n" +
          "1. Escribe un test que falla:\n" +
          "   `expect(suma(2, 3)).toBe(5)`\n" +
          "2. Implementa lo mínimo para que pase.\n" +
          "3. Refactoriza con el test en verde.\n" +
          "\n" +
          "Nivel: una unidad de código.\n" +
          "El 'qué' se expresa como aserción de test.",
      },
      after: {
        title: "Spec-driven — criterio de éxito como requisito",
        code:
          "# Requirements → Design → Tasks\n" +
          "\n" +
          "1. Requisito EARS (negocio):\n" +
          "   WHEN el usuario pulsa Guardar\n" +
          "   THEN el sistema SHALL validar el formulario\n" +
          "2. Diseño: arquitectura y componentes.\n" +
          "3. Tareas: pasos con trazabilidad al Req.\n" +
          "\n" +
          "Nivel: negocio + diseño, no solo tests.",
      },
    },
    { type: "heading", level: 2, text: "Frente a Design-First" },
    {
      type: "paragraph",
      text:
        "Semejanza: ambos invierten en el diseño antes de codificar. Diferencia: spec-driven añade dos piezas que Design-First no formaliza: la recopilación explícita de requisitos (user stories y criterios EARS) y un desglose estructurado de tareas con trazabilidad.",
    },
    {
      type: "serviceIcon",
      items: [
        { service: "Comparación de metodologías", icon: "concept-metodologias" },
        { service: "EARS", icon: "concept-ears" },
        { service: "Cuándo usar spec-driven", icon: "concept-cuando-usar" },
      ],
    },
    { type: "heading", level: 2, text: "Complementa, no reemplaza" },
    {
      type: "paragraph",
      text:
        "El hilo común de las cuatro comparaciones es el mismo: spec-driven se integra con los workflows existentes. Convive con sprints ágiles, feature branches, code reviews y sistemas de documentación. Aporta estructura a la fase previa al código sin obligarte a abandonar tu proceso.",
    },
    {
      type: "callout",
      variant: "info",
      text:
        "El contraste más útil no es con otras metodologías formales, sino con el prompting sin estructura. Ahí spec-driven hace explícitas las suposiciones del modelo, da trazabilidad de requisito a código y mantiene documentación viva, en vez de dejar decisiones difusas enterradas en un historial de chat.",
    },
    {
      type: "checklist",
      title: "Ideas clave de la comparativa",
      items: [
        "Waterfall: planifican por adelantado, pero spec-driven itera dentro de cada fase y sus specs son documentos vivos.",
        "Agile: comparten software funcionando e iteración; spec-driven enfatiza más el diseño y se aplica dentro del sprint.",
        "TDD: ambos fijan el criterio de éxito antes; spec-driven opera a nivel de negocio y diseño, no solo de tests.",
        "Design-First: spec-driven añade requisitos explícitos y un desglose de tareas con trazabilidad.",
        "En todos los casos complementa, no reemplaza, los workflows existentes.",
      ],
    },
  ],
  selfCheck: [
    {
      question:
        "¿Cuál es la diferencia correcta entre spec-driven development y Waterfall?",
      options: [
        "Spec-driven no planifica nada por adelantado, mientras que Waterfall planifica todo",
        "Ambos planifican por adelantado, pero spec-driven es iterativo dentro de cada fase y sus specs son documentos vivos, no pasos irreversibles",
        "Son idénticos: spec-driven es solo otro nombre para Waterfall",
        "Spec-driven prohíbe documentar, mientras que Waterfall exige documentación",
      ],
      correctIndex: 1,
      explanation:
        "La semejanza es que ambos planifican antes de implementar. La diferencia clave es que Waterfall trata las fases como pasos únicos e irreversibles, mientras que en spec-driven cada fase es iterativa y las specs son documentos vivos que se sincronizan con el código.",
    },
    {
      question:
        "Respecto a TDD, ¿qué afirmación describe mejor la relación con spec-driven development?",
      options: [
        "Spec-driven reemplaza a TDD: con specs ya no se escriben tests",
        "No tienen nada en común; operan en universos distintos",
        "Ambos definen el criterio de éxito antes de implementar (ciclo análogo al red-green-refactor), pero spec-driven opera a mayor nivel de abstracción: negocio y diseño, no solo tests",
        "TDD opera a nivel de negocio y spec-driven solo a nivel de tests unitarios",
      ],
      correctIndex: 2,
      explanation:
        "Tanto TDD como spec-driven definen los criterios de éxito antes de implementar, y el ciclo requirements-design-implementation es análogo al red-green-refactor. La diferencia es el nivel de abstracción: spec-driven abarca negocio y diseño, no solo la aserción de un test.",
    },
    {
      question:
        "¿Qué añade spec-driven development frente a un enfoque Design-First?",
      options: [
        "Elimina la fase de diseño para ir directo al código",
        "La recopilación explícita de requisitos (user stories y criterios EARS) y un desglose estructurado de tareas con trazabilidad",
        "Solo cambia el lenguaje de programación recomendado",
        "Sustituye los diagramas por prompts libres sin estructura",
      ],
      correctIndex: 1,
      explanation:
        "Design-First ya invierte en el diseño antes de codificar. Spec-driven comparte esa idea pero suma dos piezas que Design-First no formaliza: la recopilación explícita de requisitos en formato EARS y un desglose de tareas estructurado con trazabilidad a los requisitos.",
    },
  ],
};
