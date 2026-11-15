import type { Lesson } from "@/lib/types";
// Complemento del curso oficial "Spec-Driven Development with Kiro" (AWS Skill Builder).
export const day18: Lesson = {
  day: 18,
  slug: "demo-busqueda-de-equipos",
  title: "Demo guiada: añadir una búsqueda con una spec",
  section: "AVANZADO",
  estimatedMinutes: 18,
  icon: "concept-tasks",
  objectives: [
    "Seguir de punta a punta una spec real: de una idea vaga a una función implementada",
    "Ver cómo Kiro lee el steering (product, tech, structure) antes de proponer nada",
    "Entender cómo refinar una spec actualiza requirements, design y tasks a la vez",
  ],
  blocks: [
    {
      type: "paragraph",
      text:
        "El curso oficial de AWS Skill Builder cierra con una demo sobre una app Next.js de votación de clubes de fútbol de las cinco grandes ligas europeas. Con más de 50 equipos hay que desplazarse sin fin para encontrar uno, así que hace falta una búsqueda. Antes de escribir código surgen decisiones: ¿filtrar en cliente o en servidor?, ¿dónde va la interfaz?, ¿cómo mantener el rendimiento con cientos de equipos? La spec sirve para pensarlas de forma sistemática.",
    },
    {
      type: "serviceIcon",
      items: [
        { service: "Requirements", icon: "concept-requirements" },
        { service: "Design", icon: "concept-design" },
        { service: "Tasks", icon: "concept-tasks" },
      ],
    },
    { type: "heading", level: 2, text: "Paso 1: una frase para crear la spec" },
    {
      type: "code",
      lang: "text",
      title: "Petición inicial en el chat (modo Spec)",
      code: "Crea una spec para añadir una función de búsqueda\nque filtre los equipos por nombre mientras el usuario escribe.",
    },
    {
      type: "paragraph",
      text:
        "El agente empieza leyendo los archivos de steering del proyecto (producto, tecnología y estructura). Por eso la propuesta no es genérica: se adapta a la estructura Next.js y a los componentes existentes. Crea la carpeta de la spec bajo .kiro/specs/ con un nombre como team-search-filter.",
    },
    {
      type: "code",
      lang: "text",
      title: "Resultado en disco",
      code: ".kiro/specs/team-search-filter/\n  requirements.md\n  design.md\n  tasks.md",
    },
    { type: "heading", level: 2, text: "Paso 2: requisitos revisables" },
    {
      type: "paragraph",
      text:
        "Kiro analiza componentes y rutas de API y redacta requirements.md con historias de usuario y criterios de aceptación comprobables. Al terminar espera tu decisión: ¿se ven bien los requisitos? Si sí, pasa a diseño. Cada fase tiene esa puerta de aprobación.",
    },
    {
      type: "code",
      lang: "markdown",
      title: "Fragmento del requirements.md generado (parafraseado)",
      code: "### Requirement 1\n\n**User Story:** Como votante, quiero buscar equipos por nombre\nmientras escribo, para encontrar rápido a mi equipo.\n\n#### Acceptance Criteria\n1. WHEN el usuario escribe en el campo de búsqueda\n   THEN el sistema SHALL filtrar la lista de equipos por nombre.\n2. WHEN ningún equipo coincide\n   THEN el sistema SHALL mostrar un estado de sin resultados.",
    },
    { type: "heading", level: 2, text: "Paso 3: diseño y tareas" },
    {
      type: "paragraph",
      text:
        "El design.md describe la arquitectura: filtrado del lado del cliente, un diseño por componentes alineado con cómo ya está estructurada la app, la gestión de estado y la estrategia de pruebas. Luego se genera tasks.md con tareas y subtareas: crear el componente de entrada de búsqueda, implementar la lógica de filtrado con un hook propio, manejar el estado sin resultados e integrarlo en la vista de votación. Cada tarea enlaza con los requisitos que cubre.",
    },
    { type: "heading", level: 2, text: "Paso 4: ejecutar tarea por tarea" },
    {
      type: "list",
      items: [
        "Al pulsar la primera tarea, Kiro la marca como en progreso y aparece un botón para ver cambios.",
        "El componente nuevo respeta el estilo existente: mismo directorio de componentes, mismas clases de Tailwind, atributos de accesibilidad y estados de foco.",
        "Al terminar, la tarea pasa a completada y se puede revisar el diff.",
        "Si se lanza otra tarea mientras una corre, queda en cola y arranca cuando la anterior termina.",
      ],
    },
    { type: "heading", level: 2, text: "Paso 5: refinar la spec cambia todo" },
    {
      type: "paragraph",
      text:
        "Con la búsqueda funcionando, se pide refinar la spec para filtrar también por liga. Kiro no edita un solo archivo: añade el requisito nuevo (filtrar equipos por liga), actualiza el diseño con un componente de filtro de liga y un hook que combina nombre y liga, y agrega tareas nuevas. Ejecutarlas deja el filtro integrado en page.tsx sin más indicaciones.",
    },
    {
      type: "callout",
      variant: "success",
      text:
        "Resultado de la demo: en minutos se pasa de una idea vaga a una función con spec documentada, diseño técnico y código que sigue las convenciones del proyecto. La spec se puede compartir con el equipo para recibir comentarios antes de escribir una sola línea.",
    },
  ],
  selfCheck: [
    {
      question: "¿Por qué la spec propuesta por Kiro encaja con el proyecto y no es genérica?",
      options: [
        "Porque Kiro copia plantillas de internet",
        "Porque primero lee el steering y analiza el código del proyecto",
        "Porque el usuario escribe el diseño a mano",
        "Porque usa siempre React",
      ],
      correctIndex: 1,
      explanation: "El agente lee los archivos de steering (producto, tecnología, estructura) y analiza componentes y rutas antes de redactar la spec.",
    },
    {
      question: "Al pedir que el filtro también sea por liga, ¿qué pasa con los archivos de la spec?",
      options: [
        "Solo cambia requirements.md",
        "Se actualizan requirements, design y tasks de forma coherente",
        "Se borra la spec anterior",
        "No cambia nada hasta reiniciar Kiro",
      ],
      correctIndex: 1,
      explanation: "Refinar un requisito arrastra los cambios al diseño y a las tareas para mantener los tres documentos sincronizados.",
    },
    {
      question: "¿Qué ocurre si lanzas una segunda tarea mientras otra se ejecuta?",
      options: [
        "Se cancela la primera",
        "La segunda queda en cola y arranca al terminar la primera",
        "Se ejecutan ambas mezcladas",
        "Kiro pide reiniciar",
      ],
      correctIndex: 1,
      explanation: "Las tareas se encolan: al completarse la actual, la siguiente de la cola empieza a implementarse.",
    },
  ],
};
