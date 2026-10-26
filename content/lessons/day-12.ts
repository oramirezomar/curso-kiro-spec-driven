import type { Lesson } from "@/lib/types";

// Nivel AVANZADO (dayRange [12, 17]).
// Día 12 — La fase Tasks. Tercera y última fase de la metodología spec-driven:
// descomponer el diseño aprobado en pasos de implementación accionables,
// secuenciados por dependencias, con trazabilidad explícita de cada tarea a los
// requisitos que satisface. Cubre también los elementos que Kiro añade por tarea
// (tests unitarios e integración, estados de carga, responsive, accesibilidad)
// y la ejecución/auditoría (indicador de progreso, estado inline, diffs de
// código e historial del agente).
//
// Fuente de verdad: docs-referencia/kiro-spec-driven/02-fases-y-ears.md
// (sección "Fase 3 — Tasks") y 01-metodologia-y-producto.md.
// Trazabilidad: Req 3.8, 4.4, 5.4, 6.1-6.4, 9.1, 9.2.
export const day12: Lesson = {
  day: 12,
  slug: "fase-tasks",
  title: "La fase Tasks: descomposición y trazabilidad",
  section: "AVANZADO",
  estimatedMinutes: 22,
  icon: "concept-tasks",
  objectives: [
    "Explicar el propósito de la fase Tasks: convertir un design.md aprobado en pasos de implementación discretos, secuenciados por dependencias",
    "Escribir tareas que cumplan los cuatro criterios: acción de código concreta, orden por dependencias, objetivo con criterio de finalización y enlace a los requisitos que satisface (trazabilidad)",
    "Reconocer los elementos que Kiro añade por tarea (tests unitarios, tests de integración, estados de carga, responsive y accesibilidad)",
    "Describir la ejecución y auditoría de tareas en Kiro: indicador de progreso, estado de finalización inline, diffs de código e historial de ejecución del agente",
  ],
  blocks: [
    {
      type: "paragraph",
      text:
        "Tasks es la tercera fase de la metodología spec-driven, después de Requirements y Design. Su propósito es descomponer el diseño ya aprobado en pasos de implementación accionables y secuenciales. No introduce decisiones nuevas de arquitectura: toma los componentes, interfaces y modelos de datos que fijó design.md y los convierte en tareas de código concretas que un agente (o una persona) puede ejecutar una a una.",
    },
    {
      type: "callout",
      variant: "info",
      text:
        "Recuerda la puerta de aprobación: Requirements → (aprobado) → Design → (aprobado) → Tasks. Llegas a esta fase con requisitos y diseño ya validados. Si al descomponer en tareas descubres un hueco en el diseño, ese hallazgo se gestiona volviendo a la fase correspondiente, no improvisando en tasks.md.",
    },
    { type: "heading", level: 2, text: "Por qué descomponer" },
    {
      type: "paragraph",
      text:
        "Partir un feature grande en tareas discretas no es burocracia: resuelve problemas concretos del desarrollo asistido por IA y del trabajo en equipo.",
    },
    {
      type: "list",
      items: [
        "Hace manejables features grandes: cada paso cabe en la cabeza y en un diff revisable.",
        "Permite trabajo en paralelo y mejor seguimiento del avance real.",
        "Reduce la carga cognitiva: te concentras en una acción a la vez, no en todo el sistema.",
        "Facilita la revisión de código y el QA, porque cada tarea tiene un alcance acotado y un criterio de finalización.",
      ],
    },
    { type: "heading", level: 2, text: "Qué hace buena a una tarea" },
    {
      type: "paragraph",
      text:
        "Una tarea bien escrita cumple cuatro condiciones. Si falta alguna, la tarea es ambigua y el agente improvisará o se saldrá del alcance.",
    },
    {
      type: "list",
      items: [
        "Es una acción de código concreta: 'crear el componente CodeBlock', no 'mejorar el renderizado'.",
        "Está secuenciada por dependencias: no puedes registrar lecciones en index.ts antes de que existan los archivos de lección.",
        "Tiene objetivo y criterio de finalización: sabes cuándo está hecha (p. ej. 'tsc --noEmit sin errores').",
        "Enlaza con los requisitos que satisface: cada tarea cita los Req N.M que cumple, de modo que la trazabilidad va de requisito a diseño a tarea a código.",
      ],
    },
    {
      type: "code",
      lang: "markdown",
      title: "Fragmento de tasks.md: tareas con trazabilidad",
      code:
        "## Tasks\n" +
        "\n" +
        "- [ ] 2. Definir el modelo de datos tipado\n" +
        "  - [ ] 2.1 Clonar `lib/types.ts` y ajustar el bloque `code`\n" +
        "    - Clonar las interfaces `Lesson`, `CourseSection`, `IconEntry`\n" +
        "    - Cambiar el `lang` del bloque `code` (quitar `python`, añadir `markdown`)\n" +
        "    - Verificación: `npx tsc --noEmit`\n" +
        "    - _Requirements: 1.4, 5.1, 5.2_\n" +
        "\n" +
        "- [ ] 3. Construir el catálogo de iconos neutro\n" +
        "  - [ ] 3.1 Crear `lib/iconCatalog.ts` con `resolveIcon` y fallback\n" +
        "    - Toda `path` empieza por `/` y apunta a un asset local\n" +
        "    - _Requirements: 11.4, 11.5, 11.6_",
      // Resalta las dos líneas de trazabilidad `_Requirements:_` (líneas 8 y
      // 12 del fragmento de 13 líneas), que son justo el enlace requisito↔tarea
      // que explica el párrafo siguiente. [8, 15] era un índice fuera de rango
      // (el fragmento solo tiene 13 líneas): bug latente que la Property 11 de
      // highlightLines en rango detectó.
      highlightLines: [8, 12],
    },
    {
      type: "paragraph",
      text:
        "Fíjate en la línea `_Requirements: 1.4, 5.1, 5.2_`: ese es el enlace de trazabilidad. Cualquiera que revise esta tarea puede abrir requirements.md y comprobar exactamente qué criterios de aceptación justifica el código que produce. Las casillas `[ ]` / `[x]` representan el estado de finalización que la interfaz de Kiro mantiene vivo.",
    },
    { type: "heading", level: 2, text: "Lo que Kiro añade por tarea" },
    {
      type: "paragraph",
      text:
        "Al descomponer, Kiro no se limita a listar el camino feliz. Para cada tarea relevante incorpora de forma sistemática los elementos que suelen olvidarse cuando solo haces prompting:",
    },
    {
      type: "list",
      items: [
        "Tests unitarios: verifican ejemplos concretos y casos borde de la unidad implementada.",
        "Tests de integración: comprueban que las piezas encajan entre sí.",
        "Estados de carga: qué ve el usuario mientras una operación está en curso.",
        "Responsive: comportamiento en escritorio y móvil.",
        "Accesibilidad: texto alternativo, roles y navegación por teclado.",
      ],
    },
    {
      type: "serviceIcon",
      items: [
        { service: "Fase Tasks", icon: "concept-tasks" },
        { service: "Fase Design", icon: "concept-design" },
        { service: "Los tres archivos de la spec", icon: "concept-archivos-spec" },
      ],
    },
    { type: "heading", level: 2, text: "Ejecución y auditoría" },
    {
      type: "paragraph",
      text:
        "La interfaz de tareas de Kiro permite ejecutar las tareas una a una y seguir el trabajo en tiempo real. No es un plan estático: es el panel de control de la implementación.",
    },
    {
      type: "list",
      items: [
        "Indicador de progreso: cuántas tareas van completas sobre el total.",
        "Estado de finalización inline: cada tarea muestra su estado (pendiente, en curso, completada) junto a su texto.",
        "Diffs de código: puedes auditar exactamente qué cambió cada tarea antes de aceptarlo.",
        "Historial de ejecución del agente: queda registro de lo que el agente hizo, para revisión y QA.",
      ],
    },
    {
      type: "callout",
      variant: "success",
      text:
        "Esta auditabilidad es justo lo que falta cuando solo haces prompting: con tasks.md y los diffs por tarea puedes responder 'qué se hizo, por qué y qué requisito cumple' en cualquier punto, en vez de confiar en que el modelo acertó.",
    },
    {
      type: "checklist",
      title: "Antes de dar por buena tu fase Tasks",
      items: [
        "Cada tarea es una acción de código concreta, no un objetivo difuso.",
        "El orden respeta las dependencias: ninguna tarea depende de otra posterior.",
        "Cada tarea tiene un criterio de finalización verificable.",
        "Cada tarea enlaza con los Req N.M que satisface (trazabilidad completa).",
        "Las tareas relevantes incluyen tests, estados de carga, responsive y accesibilidad.",
      ],
    },
  ],
  selfCheck: [
    {
      question:
        "¿Cuál es el propósito correcto de la fase Tasks dentro de la metodología spec-driven?",
      options: [
        "Tomar la idea inicial y transformarla en user stories con criterios EARS",
        "Investigar enfoques técnicos y decidir la arquitectura, los componentes y los modelos de datos",
        "Descomponer el diseño aprobado en pasos de implementación accionables, secuenciados por dependencias y enlazados a los requisitos que satisfacen",
        "Desplegar la aplicación a producción y monitorizar los errores en tiempo real",
      ],
      correctIndex: 2,
      explanation:
        "La fase Requirements produce user stories y criterios EARS; la fase Design define la arquitectura. Tasks es la tercera fase: convierte el design.md ya aprobado en tareas de código concretas, secuenciadas por dependencias, cada una con objetivo, criterio de finalización y enlace de trazabilidad a los requisitos.",
    },
    {
      question:
        "Una tarea de tu tasks.md dice solo 'Mejorar el rendimiento'. ¿Qué condición de una buena tarea está incumpliendo?",
      options: [
        "No es una acción de código concreta con un criterio de finalización verificable",
        "No usa la sintaxis EARS con la palabra clave SHALL",
        "No incluye un diagrama Mermaid que ilustre el flujo",
        "No está escrita en inglés, como exige la metodología",
      ],
      correctIndex: 0,
      explanation:
        "'Mejorar el rendimiento' es un objetivo difuso, no una acción de código concreta, y no define cuándo está terminada. Una buena tarea es concreta, está secuenciada por dependencias, tiene criterio de finalización y enlaza con los requisitos. EARS pertenece a la fase Requirements, no a las tareas.",
    },
    {
      question:
        "¿Qué permite la interfaz de tareas de Kiro para auditar el trabajo durante la ejecución?",
      options: [
        "Únicamente un porcentaje final cuando todas las tareas están completas, sin detalle intermedio",
        "Indicador de progreso, estado de finalización inline por tarea, diffs de código e historial de ejecución del agente",
        "Un chat libre sin registro, idéntico a hacer prompting sin specs",
        "La ejecución obligatoria de todas las tareas en paralelo sin posibilidad de revisión",
      ],
      correctIndex: 1,
      explanation:
        "La interfaz ejecuta las tareas una a una y ofrece indicador de progreso, estado de finalización inline, diffs de código para revisar cada cambio e historial de ejecución del agente. Esa trazabilidad y auditabilidad es precisamente lo que falta cuando solo se hace prompting sin estructura.",
    },
  ],
};
