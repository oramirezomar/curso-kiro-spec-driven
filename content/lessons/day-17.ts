import type { Lesson } from "@/lib/types";

// Contenido redactado (tarea 16.2). Cierre del curso. Fuente de verdad:
// docs-referencia/kiro-spec-driven/01-metodologia-y-producto.md
// (§Cuándo usar spec-driven development). Req 3.12, 3.13.
export const day17: Lesson = {
  day: 17,
  slug: "cuando-usar-spec-driven",
  title: "Cuándo usar spec-driven (y cuándo no)",
  section: "AVANZADO",
  estimatedMinutes: 18,
  icon: "concept-cuando-usar",
  objectives: [
    "Identificar los escenarios ideales para spec-driven development y los menos adecuados",
    "Explicar cómo spec-driven complementa los workflows existentes (sprints, feature branches, code reviews) sin reemplazarlos",
    "Cerrar el curso con una visión del criterio de decisión y de los siguientes pasos en la serie",
  ],
  blocks: [
    {
      type: "paragraph",
      text:
        "Llegamos al final del curso. Sabes qué es Kiro, la filosofía, las tres fases, EARS, y el detalle de Requirements, Design y Tasks. La última pieza es el criterio: cuándo vale la pena todo este rigor y cuándo es mejor ir ligero. Un buen ingeniero no aplica spec-driven a todo; lo aplica donde paga.",
    },
    {
      type: "serviceIcon",
      items: [
        { service: "Cuándo usar spec-driven", icon: "concept-cuando-usar" },
        { service: "Filosofía spec-driven", icon: "concept-filosofia" },
      ],
    },
    { type: "heading", level: 2, text: "Escenarios ideales" },
    {
      type: "list",
      items: [
        "Features complejas: con múltiples componentes, integraciones o interacciones de usuario.",
        "Proyectos de alto riesgo: donde el coste de fallar o rehacer es significativo.",
        "Colaboración en equipo: cuando varias personas o stakeholders deben coordinarse.",
        "Transferencia de conocimiento: cuando documentar y preservar el saber importa.",
        "Desarrollo asistido por IA: la estructura da al agente el contexto claro que necesita para ser efectivo.",
      ],
    },
    { type: "heading", level: 2, text: "Escenarios menos adecuados" },
    {
      type: "list",
      items: [
        "Bugfixes simples: cuando el cambio es directo y bien entendido.",
        "Prototipos experimentales: cuando la meta es experimentar rápido, no producir código de producción.",
        "Hotfixes urgentes: cuando hace falta actuar de inmediato y no hay tiempo de planificar.",
        "Patrones bien establecidos: implementar funcionalidad estándar y repetitiva.",
      ],
    },
    {
      type: "callout",
      variant: "warning",
      text:
        "Aplicar spec-driven a un hotfix urgente o a un prototipo desechable es sobre-proceso: gastas en planificación un esfuerzo que el contexto no va a devolver. El rigor es una inversión, y como toda inversión, tiene contextos donde no rinde.",
    },
    { type: "heading", level: 2, text: "Complementa, no reemplaza" },
    {
      type: "paragraph",
      text:
        "Spec-driven development no sustituye tu metodología: se integra con ella. Encaja en sprints ágiles (usa specs para historias grandes o épicas), en feature branches (crea la spec antes de empezar la rama), en code reviews (usa la spec como contexto de la revisión) y en tus sistemas de documentación. Es una capa de estructura sobre la fase previa al código, no un marco que lo reemplace todo.",
    },
    {
      type: "quote",
      text:
        "Spec-driven development complementa, no reemplaza, los workflows existentes: aporta estructura a la fase previa al código sin obligarte a abandonar tu proceso.",
      author: "Guía de metodología de Kiro",
    },
    { type: "heading", level: 2, text: "Cierre y siguientes pasos" },
    {
      type: "paragraph",
      text:
        "Con esto cierras el recorrido por spec-driven development: de la idea difusa a un plan de implementación auditable, pasando por requisitos testables, un diseño documentado y tareas trazables. El método te da claridad antes del código y un rastro que sobrevive al proyecto.",
    },
    {
      type: "callout",
      variant: "success",
      text:
        "Siguientes pasos en la serie: este curso cubrió las specs. Los Powers de Kiro —hooks, steering, MCP y agentic chat— y la puesta en marcha del IDE son el tema de los otros dos cursos (Getting Started y Kiro Powers). Las specs son la base; los Powers amplían lo que puedes construir sobre ella.",
    },
    {
      type: "checklist",
      title: "Criterio de decisión en una página",
      items: [
        "¿Es compleja, de alto riesgo, en equipo o para producción? → spec-driven.",
        "¿Es un bugfix simple, un prototipo desechable o un hotfix urgente? → ve ligero.",
        "Úsalo dentro de tus sprints y feature branches, no en lugar de ellos.",
        "La estructura es una inversión: aplícala donde rinde.",
      ],
    },
  ],
  selfCheck: [
    {
      question: "¿Cuál de estos es un escenario IDEAL para spec-driven development?",
      options: [
        "Un hotfix urgente que hay que desplegar en minutos",
        "Una feature compleja con múltiples componentes que irá a producción y la mantendrá un equipo",
        "Un prototipo desechable para probar una idea en cinco minutos",
        "Cambiar el color de un botón",
      ],
      correctIndex: 1,
      explanation:
        "Los escenarios ideales son features complejas, proyectos de alto riesgo, colaboración en equipo, transferencia de conocimiento y desarrollo asistido por IA. Los hotfixes urgentes, prototipos desechables y cambios triviales son escenarios menos adecuados.",
    },
    {
      question: "¿Cómo se relaciona spec-driven development con metodologías como Agile?",
      options: [
        "Las reemplaza por completo",
        "Es incompatible con ellas",
        "Las complementa: se integra en sprints, feature branches y code reviews, aportando estructura a la fase previa al código",
        "Solo funciona si abandonas Agile",
      ],
      correctIndex: 2,
      explanation:
        "Spec-driven complementa los workflows existentes sin reemplazarlos: se usa dentro de sprints (para historias o épicas grandes), feature branches (spec antes de la rama) y code reviews (spec como contexto). Es una capa de estructura, no un marco que lo sustituya todo.",
    },
    {
      question: "Según el cierre del curso, ¿qué cubren los otros dos cursos de la serie?",
      options: [
        "Más detalle sobre EARS y las tres fases",
        "Los Powers de Kiro (hooks, steering, MCP, agentic chat) y la puesta en marcha del IDE (Getting Started)",
        "Lenguajes de programación específicos",
        "Nada: este es el único curso de la serie",
      ],
      correctIndex: 1,
      explanation:
        "Este curso cubrió las specs (spec-driven development). Los otros dos cursos de la serie cubren la puesta en marcha del IDE (Getting Started) y los Powers de Kiro —hooks, steering, MCP y agentic chat—, que amplían lo que puedes construir sobre la base de las specs.",
    },
  ],
};
