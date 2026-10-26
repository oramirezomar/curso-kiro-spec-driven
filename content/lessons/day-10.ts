import type { Lesson } from "@/lib/types";

// Contenido redactado (tarea 15.2). Fuente de verdad:
// docs-referencia/kiro-spec-driven/02-fases-y-ears.md (§Fase Design).
// Req 3.7.
export const day10: Lesson = {
  day: 10,
  slug: "fase-design",
  title: "La fase Design: arquitectura, componentes y pruebas",
  section: "MEDIO",
  estimatedMinutes: 28,
  icon: "concept-design",
  objectives: [
    "Describir el propósito de la fase Design: traducir requisitos aprobados en una arquitectura técnica que sirva de plano",
    "Enumerar las secciones estándar de un design.md: overview, arquitectura, componentes e interfaces, modelos de datos, manejo de errores y estrategia de pruebas",
    "Reconocer los pitfalls de diseño: sobre-ingeniería, interfaces poco especificadas, ignorar requisitos no funcionales y diseño technology-first",
  ],
  blocks: [
    {
      type: "paragraph",
      text:
        "La fase Design toma los requisitos aprobados y los convierte en un plano técnico para implementar. Es el puente entre el qué (requisitos) y el cómo se construye (tareas). Implica investigación, decisiones arquitectónicas y planificación detallada; no empieza hasta que los requisitos están cerrados.",
    },
    {
      type: "serviceIcon",
      items: [
        { service: "Fase Design", icon: "concept-design" },
        { service: "Fase Requirements", icon: "concept-requirements" },
        { service: "Fase Tasks", icon: "concept-tasks" },
      ],
    },
    { type: "heading", level: 2, text: "De requisitos a arquitectura, paso a paso" },
    {
      type: "paragraph",
      text:
        "El proceso de diseño sigue una secuencia: analizar requisitos e identificar incógnitas técnicas, investigar y acotar el alcance, crear la arquitectura del sistema, definir componentes e interfaces, diseñar los modelos de datos, planificar el manejo de errores y, por último, definir la estrategia de pruebas.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Análisis y planificación de la investigación: ¿qué no sabemos todavía?",
        "Investigar y construir contexto: evaluar opciones y documentar hallazgos.",
        "Arquitectura del sistema: overview, componentes, flujo de datos, integraciones, stack.",
        "Componentes e interfaces: responsabilidades, interfaces, dependencias.",
        "Modelos de datos: entidades, relaciones, validación, persistencia.",
        "Manejo de errores y casos borde.",
        "Estrategia de pruebas: unitarias, integración, e2e, cobertura y quality gates.",
      ],
    },
    { type: "heading", level: 2, text: "Las secciones de un design.md" },
    {
      type: "paragraph",
      text:
        "Un documento de diseño tiene una estructura estándar. Seguirla hace que cualquiera pueda leerlo y encontrar lo que busca:",
    },
    {
      type: "code",
      lang: "markdown",
      title: "Estructura estándar de design.md",
      code:
        "# Design Document\n" +
        "\n" +
        "## Overview            (resumen y enfoque, enlaza a requisitos)\n" +
        "## Architecture        (arquitectura y componentes, diagramas Mermaid)\n" +
        "## Components and Interfaces\n" +
        "## Data Models\n" +
        "## Error Handling\n" +
        "## Testing Strategy",
      highlightLines: [3, 4],
    },
    {
      type: "callout",
      variant: "info",
      text:
        "Los diagramas Mermaid se recomiendan en la sección de arquitectura: un diagrama de componentes o de flujo de datos comunica en segundos lo que un párrafo tarda en explicar. Los verás en detalle en la próxima lección, junto con los Decision Records.",
    },
    { type: "heading", level: 2, text: "Los pitfalls de diseño" },
    {
      type: "paragraph",
      text:
        "El diseño tiene sus propias trampas, distintas de las de requisitos. Las cuatro más habituales:",
    },
    {
      type: "list",
      items: [
        "Sobre-ingeniería: diseñar para requisitos que no existen. Diseña para extensibilidad, pero no implementes features no pedidas.",
        "Interfaces poco especificadas: fronteras de componente difusas. Define qué hace cada componente y cómo se comunican.",
        "Ignorar requisitos no funcionales: centrarse solo en el comportamiento funcional y olvidar rendimiento, seguridad, escalabilidad y mantenibilidad.",
        "Diseño technology-first: elegir la tecnología antes de entender los requisitos. Deja que los requisitos guíen la tecnología, no al revés.",
      ],
    },
    {
      type: "callout",
      variant: "warning",
      text:
        "El pitfall technology-first es el más seductor: es tentador decidir 'esto lo hago con X' antes de leer bien los requisitos. La regla es la inversa: los requisitos mandan sobre la elección tecnológica.",
    },
    {
      type: "checklist",
      title: "Antes de cerrar la fase Design",
      items: [
        "Todos los requisitos están cubiertos por algún elemento del diseño (trazabilidad).",
        "Cada componente tiene responsabilidades e interfaces claras.",
        "Los modelos de datos cubren todas las entidades necesarias.",
        "El manejo de errores contempla los modos de fallo esperados.",
        "La estrategia de pruebas cubre todas las capas del sistema.",
      ],
    },
  ],
  selfCheck: [
    {
      question: "¿Cuál es el propósito de la fase Design?",
      options: [
        "Transformar la idea inicial en user stories con criterios EARS",
        "Traducir los requisitos aprobados en una arquitectura técnica que sirva de plano para implementar",
        "Ejecutar las tareas y auditar los diffs de código",
        "Desplegar la aplicación a producción",
      ],
      correctIndex: 1,
      explanation:
        "La fase Design traduce los requisitos aprobados en un plano técnico: arquitectura, componentes, modelos de datos, manejo de errores y estrategia de pruebas. Es el puente entre el qué (Requirements) y el plan de implementación (Tasks).",
    },
    {
      question: "¿Cuál de estas NO es una sección estándar de un design.md?",
      options: [
        "Architecture",
        "Data Models",
        "Testing Strategy",
        "Historial de commits",
      ],
      correctIndex: 3,
      explanation:
        "Las secciones estándar son Overview, Architecture, Components and Interfaces, Data Models, Error Handling y Testing Strategy. El historial de commits no forma parte del documento de diseño.",
    },
    {
      question: "El pitfall 'technology-first' consiste en:",
      options: [
        "Diseñar para requisitos que todavía no existen",
        "Elegir la tecnología antes de entender los requisitos, cuando debería ser al revés",
        "No definir las interfaces entre componentes",
        "Olvidar los requisitos no funcionales",
      ],
      correctIndex: 1,
      explanation:
        "Technology-first es elegir la tecnología antes de comprender los requisitos. La regla correcta es la inversa: los requisitos guían la elección tecnológica, no al contrario. Los otros son pitfalls distintos (sobre-ingeniería, interfaces poco especificadas, ignorar no funcionales).",
    },
  ],
};
