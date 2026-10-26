import type { Lesson } from "@/lib/types";

// Contenido redactado (tarea 16.2). Fuente de verdad:
// docs-referencia/kiro-spec-driven/01-metodologia-y-producto.md
// (§Specs sincronizadas con el código) y 02-fases-y-ears.md (§Gestión del cambio).
// Req 3.9.
export const day14: Lesson = {
  day: 14,
  slug: "gestion-del-cambio",
  title: "Gestión del cambio: specs como documentos vivos",
  section: "AVANZADO",
  estimatedMinutes: 20,
  icon: "concept-sincronizacion",
  objectives: [
    "Entender las specs como documentos vivos que se sincronizan con el código a medida que evoluciona",
    "Gestionar los requisitos descubiertos durante la implementación actualizando el documento correspondiente",
    "Evitar el desfase entre documentación e implementación que degrada el mantenimiento",
  ],
  blocks: [
    {
      type: "paragraph",
      text:
        "Una spec no es un documento que se escribe una vez y se abandona. El problema clásico del desarrollo es que los artefactos de planificación se quedan desfasados: el código evoluciona, pero los documentos no, y acaban mintiendo. Spec-driven development trata las specs como documentos vivos para que eso no ocurra.",
    },
    {
      type: "serviceIcon",
      items: [
        { service: "Sincronización spec-código", icon: "concept-sincronizacion" },
        { service: "Los tres archivos de la spec", icon: "concept-archivos-spec" },
      ],
    },
    { type: "heading", level: 2, text: "Specs sincronizadas con el código" },
    {
      type: "paragraph",
      text:
        "Las specs de Kiro se mantienen sincronizadas con el código que evoluciona. Hay dos direcciones: puedes escribir o modificar código y pedir a Kiro que actualice las specs para reflejarlo, o puedes actualizar las specs a mano y regenerar las tareas. En ambos casos, el objetivo es que requirements.md, design.md y tasks.md sigan describiendo el sistema real.",
    },
    {
      type: "callout",
      variant: "info",
      text:
        "Esto resuelve el problema donde los desarrolladores dejan de actualizar los artefactos originales durante la implementación, provocando desajustes de documentación que complican el mantenimiento futuro. La spec viva evita ese divorcio entre lo documentado y lo construido.",
    },
    { type: "heading", level: 2, text: "Requisitos descubiertos durante la implementación" },
    {
      type: "paragraph",
      text:
        "A veces, al implementar, descubres un requisito nuevo o el diseño revela un hueco que no se había previsto. La gestión del cambio dice qué hacer: no improvisar en el código y seguir, sino volver al documento correspondiente, actualizarlo y dejar que el cambio se propague. Así la trazabilidad se mantiene intacta.",
    },
    {
      type: "list",
      items: [
        "Si aparece un requisito nuevo: se añade a requirements.md (en EARS) y se revisa su impacto en diseño y tareas.",
        "Si el diseño revela un hueco: se actualiza design.md y se ajustan las tareas afectadas.",
        "Si cambia el alcance: se refleja en los tres archivos para que ninguno quede mintiendo.",
      ],
    },
    {
      type: "quote",
      text:
        "Las specs son documentos vivos: cuando la implementación descubre algo nuevo, se actualiza el documento correspondiente para mantener la trazabilidad y evitar el desfase entre documentación y código.",
      author: "Gestión del cambio — guía de proceso de Kiro",
    },
    { type: "heading", level: 2, text: "Por qué importa en el mantenimiento" },
    {
      type: "paragraph",
      text:
        "El valor de una spec viva se cobra meses después, cuando alguien (quizá tu yo futuro) tiene que modificar el sistema. Si la spec refleja el código real, esa persona entiende el porqué de cada decisión y puede cambiar con seguridad. Si la spec quedó desfasada, vuelve al punto de partida: suposiciones no documentadas y diseño opaco, justo lo que spec-driven vino a resolver.",
    },
    {
      type: "checklist",
      title: "Mantener la spec viva",
      items: [
        "Cuando el código cambia, actualizo las specs (o pido a Kiro que lo haga).",
        "Un requisito descubierto se añade a requirements.md, no se improvisa en el código.",
        "Reviso el impacto de cada cambio en los tres archivos para que ninguno mienta.",
        "La trazabilidad requisito → diseño → tarea → código se mantiene tras cada cambio.",
      ],
    },
  ],
  selfCheck: [
    {
      question: "¿Qué significa que las specs de Kiro sean 'documentos vivos'?",
      options: [
        "Que se escriben una vez y no se vuelven a tocar",
        "Que se mantienen sincronizadas con el código que evoluciona, actualizándose en ambas direcciones",
        "Que solo existen durante la fase de planificación y luego se borran",
        "Que se generan automáticamente sin intervención humana",
      ],
      correctIndex: 1,
      explanation:
        "Las specs vivas se mantienen sincronizadas con el código: puedes modificar código y pedir a Kiro que actualice las specs, o actualizar las specs a mano y regenerar tareas. El objetivo es que los tres archivos sigan describiendo el sistema real.",
    },
    {
      question: "Durante la implementación descubres un requisito nuevo. ¿Qué dice la gestión del cambio?",
      options: [
        "Improvisar en el código y seguir, sin tocar la spec",
        "Añadirlo a requirements.md en EARS y revisar su impacto en diseño y tareas, para mantener la trazabilidad",
        "Ignorarlo hasta la siguiente versión del producto",
        "Crear una spec completamente nueva desde cero",
      ],
      correctIndex: 1,
      explanation:
        "La gestión del cambio indica volver al documento correspondiente: el requisito nuevo se añade a requirements.md y se revisa su impacto en diseño y tareas. Así la trazabilidad se mantiene y no se produce desfase entre documentación y código.",
    },
    {
      question: "¿Qué problema clásico resuelve mantener la spec sincronizada con el código?",
      options: [
        "La lentitud de la compilación",
        "El desfase entre documentación e implementación, que complica el mantenimiento futuro",
        "La falta de pruebas unitarias",
        "El tamaño del repositorio",
      ],
      correctIndex: 1,
      explanation:
        "Resuelve el problema donde los artefactos de planificación se quedan desfasados respecto al código, provocando documentación que miente y complica el mantenimiento. Una spec viva mantiene alineado lo documentado con lo construido.",
    },
  ],
};
