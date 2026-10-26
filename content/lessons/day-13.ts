import type { Lesson } from "@/lib/types";

// Contenido redactado (tarea 16.2). Fuente de verdad:
// docs-referencia/kiro-spec-driven/01-metodologia-y-producto.md y 02-fases-y-ears.md
// (§Fase Tasks: ejecución y auditoría). Req 3.8.
export const day13: Lesson = {
  day: 13,
  slug: "ejecucion-y-auditoria",
  title: "Ejecución y auditoría de tareas",
  section: "AVANZADO",
  estimatedMinutes: 22,
  icon: "concept-tasks",
  objectives: [
    "Ejecutar las tareas de un tasks.md una a una desde la interfaz de Kiro, con indicador de progreso",
    "Auditar el trabajo de cada tarea mediante el estado inline, los diffs de código y el historial de ejecución del agente",
    "Entender por qué esta auditabilidad es la ventaja que el prompting sin estructura no ofrece",
  ],
  blocks: [
    {
      type: "paragraph",
      text:
        "Tener un buen tasks.md es la mitad del valor; la otra mitad es cómo se ejecuta y se audita. La interfaz de tareas de Kiro no es una lista estática: es el panel de control de la implementación, donde disparas tareas, ves el progreso y revisas exactamente qué cambió cada una.",
    },
    {
      type: "serviceIcon",
      items: [
        { service: "Fase Tasks", icon: "concept-tasks" },
        { service: "Sincronización spec-código", icon: "concept-sincronizacion" },
      ],
    },
    { type: "heading", level: 2, text: "Ejecución una a una" },
    {
      type: "paragraph",
      text:
        "La interfaz permite lanzar cada tarea individualmente, con un indicador de progreso que muestra cuántas van completas sobre el total. No tienes que ejecutar todo de golpe: avanzas tarea a tarea, revisando el resultado de cada una antes de pasar a la siguiente. Esto convierte un gran cambio en una secuencia de pasos pequeños y verificables.",
    },
    {
      type: "code",
      lang: "text",
      title: "Estados de una tarea en la interfaz",
      code:
        "[ ]  pendiente    la tarea aun no se ha ejecutado\n" +
        "[~]  en curso     el agente la esta ejecutando ahora\n" +
        "[x]  completada   terminada y lista para auditar",
      highlightLines: [3],
    },
    { type: "heading", level: 2, text: "Las cuatro palancas de auditoría" },
    {
      type: "paragraph",
      text:
        "Una vez ejecutada una tarea, Kiro ofrece cuatro formas de auditar qué hizo el agente, sin tener que confiar a ciegas:",
    },
    {
      type: "list",
      items: [
        "Indicador de progreso: cuántas tareas completas sobre el total, para medir el avance real.",
        "Estado de finalización inline: cada tarea muestra su estado junto a su texto.",
        "Diffs de código: puedes ver exactamente qué líneas cambió cada tarea antes de aceptarlo.",
        "Historial de ejecución del agente: queda registro de lo que el agente hizo, para revisión y QA.",
      ],
    },
    {
      type: "callout",
      variant: "success",
      text:
        "Esta es la ventaja que el prompting sin estructura no te da: con tasks.md, los diffs por tarea y el historial del agente puedes responder 'qué se hizo, por qué y qué requisito cumple' en cualquier punto, en lugar de confiar en que el modelo acertó y rezar.",
    },
    { type: "heading", level: 2, text: "Ejecución en paralelo" },
    {
      type: "paragraph",
      text:
        "Cuando las tareas son independientes entre sí (no comparten dependencias ni tocan los mismos archivos), Kiro puede ejecutarlas en paralelo, acelerando la implementación. El grafo de dependencias del tasks.md es lo que determina qué puede ir a la vez y qué debe esperar.",
    },
    {
      type: "callout",
      variant: "info",
      text:
        "La ejecución de tareas en paralelo está disponible en el IDE, la CLI y la Web. La capacidad de Correctness (property-based testing) que acompaña a las tareas está disponible en el IDE.",
    },
    {
      type: "checklist",
      title: "Flujo de ejecución y auditoría",
      items: [
        "Lanzo las tareas una a una (o en paralelo si son independientes).",
        "Sigo el indicador de progreso y el estado inline de cada tarea.",
        "Reviso el diff de código de cada tarea antes de aceptarlo.",
        "Uso el historial del agente para QA y para responder qué se hizo y por qué.",
      ],
    },
  ],
  selfCheck: [
    {
      question: "¿Qué permite la interfaz de tareas de Kiro durante la ejecución?",
      options: [
        "Solo mostrar un porcentaje final cuando todo está completo",
        "Ejecutar tareas una a una con indicador de progreso, estado inline, diffs de código e historial del agente",
        "Editar el modelo de IA subyacente",
        "Desplegar automáticamente a producción sin revisión",
      ],
      correctIndex: 1,
      explanation:
        "La interfaz ejecuta las tareas una a una (o en paralelo si son independientes), con indicador de progreso, estado de finalización inline, diffs de código para auditar cada cambio e historial de ejecución del agente.",
    },
    {
      question: "¿Por qué la auditabilidad de la fase Tasks es superior al prompting sin estructura?",
      options: [
        "Porque es más rápida de escribir",
        "Porque con tasks.md, los diffs por tarea y el historial del agente puedes responder qué se hizo, por qué y qué requisito cumple en cualquier punto",
        "Porque elimina la necesidad de revisar el código",
        "Porque no genera ningún registro, igual que el prompting",
      ],
      correctIndex: 1,
      explanation:
        "La auditabilidad es la ventaja clave: tasks.md más los diffs por tarea y el historial del agente permiten responder 'qué se hizo, por qué y qué requisito cumple', en lugar de confiar a ciegas en que el modelo acertó.",
    },
    {
      question: "¿Qué determina qué tareas pueden ejecutarse en paralelo?",
      options: [
        "El orden alfabético de los títulos",
        "El grafo de dependencias del tasks.md: las tareas independientes (sin dependencias comunes ni archivos compartidos) pueden ir a la vez",
        "La longitud de cada tarea",
        "El número de líneas de código que modifican",
      ],
      correctIndex: 1,
      explanation:
        "El grafo de dependencias del tasks.md determina la ejecución en paralelo: las tareas independientes, que no comparten dependencias ni tocan los mismos archivos, pueden ejecutarse simultáneamente; las demás esperan su turno.",
    },
  ],
};
