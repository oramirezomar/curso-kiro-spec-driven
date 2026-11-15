import type { Lesson } from "@/lib/types";
// Complemento del curso oficial "Spec-Driven Development with Kiro" (AWS Skill Builder).
export const day19: Lesson = {
  day: 19,
  slug: "mejores-practicas-de-equipo",
  title: "Mejores prácticas: specs compartidas y múltiples specs",
  section: "AVANZADO",
  estimatedMinutes: 15,
  icon: "concept-sincronizacion",
  objectives: [
    "Compartir specs, steering y hooks dentro de un equipo",
    "Organizar varias specs por característica en un mismo repositorio",
    "Importar requisitos existentes (Jira, Confluence, Word) a una spec",
  ],
  blocks: [
    {
      type: "paragraph",
      text:
        "El curso oficial resume las prácticas que funcionan en proyectos y equipos de distinto tamaño. Su objetivo es mantener consistencia y calidad cuando varias personas trabajan con specs.",
    },
    {
      type: "serviceIcon",
      items: [
        { service: "Specs compartidas", icon: "concept-sincronizacion" },
        { service: "Tipos de spec", icon: "concept-tipos-spec" },
      ],
    },
    { type: "heading", level: 2, text: "Compartir specs dentro de un equipo" },
    {
      type: "paragraph",
      text:
        "Los artefactos (steering, hooks y specs) viven en el repositorio, así que se comparten con Git. Para reutilizarlos entre proyectos hay opciones:",
    },
    {
      type: "list",
      items: [
        "Crear un repositorio central de specs.",
        "Usar submódulos de Git o referencias de paquetes para traerlo a cada proyecto.",
        "Montar flujos de trabajo entre repositorios.",
      ],
    },
    { type: "heading", level: 2, text: "Una spec por característica" },
    {
      type: "paragraph",
      text:
        "No mantengas una única spec para toda la base de código. Crea specs separadas por característica. En un comercio electrónico, por ejemplo, una carpeta para carrito, otra para pagos y otra para búsqueda.",
    },
    {
      type: "code",
      lang: "text",
      title: "Varias specs en el mismo proyecto",
      code: ".kiro/specs/\n  carrito/\n    requirements.md\n    design.md\n    tasks.md\n  pagos/\n    requirements.md\n    design.md\n    tasks.md\n  busqueda/\n    requirements.md\n    design.md\n    tasks.md",
    },
    {
      type: "list",
      items: [
        "Se trabaja en cada característica sin conflictos con las demás.",
        "Cada documento queda enfocado y manejable.",
        "Se itera una funcionalidad sin tocar otras áreas.",
        "Varias personas colaboran a la vez en características distintas.",
      ],
    },
    { type: "heading", level: 2, text: "Importar requisitos existentes" },
    {
      type: "paragraph",
      text:
        "Si los requisitos o diseños viven en otro sistema (Jira, Confluence o documentos de Word), hay dos caminos: usar una integración MCP que los lea directamente, o importarlos manualmente copiando el contenido al chat.",
    },
    { type: "heading", level: 2, text: "Ejecución de tareas" },
    {
      type: "paragraph",
      text:
        "Ejecuta las tareas de una en una, revisando el resultado de cada una. En un equipo, el estado en tasks.md deja ver qué está hecho y qué está pendiente, y evita que dos personas implementen lo mismo.",
    },
    {
      type: "callout",
      variant: "info",
      text:
        "Aviso del propio curso: el contenido refleja las capacidades de Kiro de julio de 2025 en versión preliminar. Los flujos pueden cambiar; consulta la documentación oficial para lo más actual.",
    },
  ],
  selfCheck: [
    {
      question: "¿Cuál es la práctica recomendada para varias características en un repositorio?",
      options: [
        "Una única spec para todo el código",
        "Specs separadas por característica",
        "No usar specs",
        "Una spec por desarrollador",
      ],
      correctIndex: 1,
      explanation: "Specs separadas permiten trabajar sin conflictos, mantener documentos enfocados y colaborar en paralelo.",
    },
    {
      question: "¿Cómo se pueden compartir specs y steering entre proyectos?",
      options: [
        "Por correo electrónico",
        "Con un repositorio central, submódulos de Git o referencias de paquetes",
        "No se pueden compartir",
        "Solo copiando capturas de pantalla",
      ],
      correctIndex: 1,
      explanation: "Al ser archivos del repo, se comparten con repositorio central, submódulos de Git o paquetes.",
    },
    {
      question: "Tienes requisitos en Jira. ¿Qué opciones tienes para llevarlos a una spec?",
      options: [
        "Una integración MCP o importarlos manualmente",
        "Solo reescribirlos desde cero",
        "Kiro no admite importar",
        "Exportarlos a PDF obligatoriamente",
      ],
      correctIndex: 0,
      explanation: "Puedes usar una integración MCP o importar el contenido manualmente.",
    },
  ],
};
