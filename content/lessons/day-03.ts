import type { Lesson } from "@/lib/types";

// Contenido redactado (tarea 14.2). Fuente de verdad:
// docs-referencia/kiro-spec-driven/01-metodologia-y-producto.md (§Filosofía).
// Req 3.2.
export const day03: Lesson = {
  day: 3,
  slug: "filosofia-spec-driven",
  title: "La filosofía spec-driven",
  section: "BÁSICO",
  estimatedMinutes: 16,
  icon: "concept-filosofia",
  objectives: [
    "Explicar el principio de claridad antes que código y por qué invertir en entender reduce retrabajo",
    "Entender el refinamiento iterativo: validar en cada paso para detectar problemas cuando son baratos de corregir",
    "Describir la documentación como comunicación: specs que alinean al equipo y preservan el porqué de las decisiones",
  ],
  blocks: [
    {
      type: "paragraph",
      text:
        "Antes de entrar en las fases y la sintaxis, conviene entender las tres ideas que sostienen todo el método. No son adornos: cada principio explica por qué una fase existe y por qué se trabaja como se trabaja. Si entiendes la filosofía, el resto del curso encaja solo.",
    },
    {
      type: "serviceIcon",
      items: [{ service: "Filosofía spec-driven", icon: "concept-filosofia" }],
    },
    { type: "heading", level: 2, text: "1. Claridad antes que código" },
    {
      type: "paragraph",
      text:
        "El principio fundamental: la claridad de pensamiento y de propósito precede a la implementación. Invertir tiempo en entender los requisitos, diseñar la solución y planificar el trabajo reduce la incertidumbre, minimiza el retrabajo y aumenta la probabilidad de construir lo correcto de forma correcta. No es ir más lento: es evitar el camino largo de construir lo que no era.",
    },
    {
      type: "quote",
      text:
        "La claridad de pensamiento y de propósito debe preceder a la implementación.",
      author: "Filosofía spec-driven de Kiro",
    },
    { type: "heading", level: 2, text: "2. Refinamiento iterativo" },
    {
      type: "paragraph",
      text:
        "Cada fase del proceso está pensada para iterar. En lugar de avanzar en línea recta de la idea a la implementación, el método anima a refinar y validar en cada paso. Así los problemas se detectan temprano, cuando corregirlos es barato, y no al final, cuando ya se construyó encima de ellos.",
    },
    {
      type: "callout",
      variant: "info",
      text:
        "Corregir un requisito mal planteado cuesta minutos. Corregir ese mismo error después de diseñar y programar encima cuesta días. El refinamiento iterativo empuja el coste del error hacia el momento en que es más barato.",
    },
    { type: "heading", level: 2, text: "3. Documentación como comunicación" },
    {
      type: "paragraph",
      text:
        "Las especificaciones son más que documentos de planificación: son herramientas de comunicación. Alinean a los stakeholders, preservan el porqué de las decisiones y dan contexto para el mantenimiento y la evolución futura. Una spec bien escrita se convierte en un activo que sobrevive a la implementación inicial y al propio equipo que la escribió.",
    },
    {
      type: "list",
      items: [
        "Alinean a los stakeholders en torno a un entendimiento común.",
        "Preservan el porqué de las decisiones, no solo el qué.",
        "Dan contexto a quien mantenga el sistema cuando el autor ya no esté.",
      ],
    },
    {
      type: "callout",
      variant: "success",
      text:
        "Esta filosofía es especialmente potente con IA: el enfoque estructurado de requisitos, diseño y tareas da justo el contexto claro que un agente necesita para ser más efectivo.",
    },
    {
      type: "checklist",
      title: "Los tres principios en una frase",
      items: [
        "Claridad antes que código: entender y diseñar antes de implementar.",
        "Refinamiento iterativo: validar en cada paso, detectar problemas temprano.",
        "Documentación como comunicación: specs que alinean y preservan el porqué.",
      ],
    },
  ],
  selfCheck: [
    {
      question: "¿Qué afirma el principio de 'claridad antes que código'?",
      options: [
        "Que hay que escribir todo el código primero y documentarlo después",
        "Que la claridad de pensamiento y propósito precede a la implementación, reduciendo incertidumbre y retrabajo",
        "Que el código debe ser tan claro que no necesite especificación",
        "Que solo los proyectos grandes necesitan claridad",
      ],
      correctIndex: 1,
      explanation:
        "El principio fundamental es que la claridad de pensamiento y de propósito precede a la implementación. Invertir en entender, diseñar y planificar reduce la incertidumbre y el retrabajo, y aumenta la probabilidad de construir lo correcto.",
    },
    {
      question: "¿Por qué el refinamiento iterativo detecta problemas 'cuando son baratos de corregir'?",
      options: [
        "Porque los problemas de las fases tempranas no importan",
        "Porque validar en cada paso encuentra los errores antes de construir encima de ellos, cuando corregirlos cuesta poco",
        "Porque la IA corrige automáticamente todos los errores",
        "Porque el coste de los errores es siempre constante",
      ],
      correctIndex: 1,
      explanation:
        "Cada fase valida en cada paso, de modo que un error se detecta temprano en vez de al final. Corregir un requisito es barato; corregirlo después de diseñar y programar encima es caro. Iterar empuja el error al momento en que cuesta menos.",
    },
    {
      question: "Según el principio de 'documentación como comunicación', ¿qué preservan las specs además del qué?",
      options: [
        "El historial de commits de Git",
        "El porqué de las decisiones, dando contexto para el mantenimiento futuro",
        "Únicamente la lista de archivos modificados",
        "Las credenciales del proyecto",
      ],
      correctIndex: 1,
      explanation:
        "Las specs preservan el porqué de las decisiones (el razonamiento), no solo el qué. Eso alinea a los stakeholders y da contexto a quien mantenga el sistema más adelante, convirtiéndolas en un activo que sobrevive a la implementación inicial.",
    },
  ],
};
