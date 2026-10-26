import type { Lesson } from "@/lib/types";

// Capa_Temática: Nivel MEDIO (dayRange [6, 11]).
// Tema: la fase Requirements de principio a fin — user stories, criterios de
// aceptación EARS, validación (normal/borde/error), refinamiento iterativo con
// aprobación explícita por cambio, y los pitfalls.
// Fuente de verdad: docs-referencia/kiro-spec-driven/02-fases-y-ears.md.
// Trazabilidad: Req 3.6, 4.4, 5.4, 6.1-6.4, 9.1-9.4.
export const day08: Lesson = {
  day: 8,
  slug: "fase-requirements",
  title: "La fase Requirements de principio a fin",
  section: "MEDIO",
  estimatedMinutes: 30,
  icon: "concept-requirements",
  objectives: [
    "Transformar ideas difusas en requisitos concretos y medibles con user stories y criterios de aceptación EARS",
    "Escribir user stories con la plantilla \"Como [rol], quiero [feature], para [beneficio]\"",
    "Validar que cada requisito cubre caso normal, borde y error, y que es testable e independiente",
    "Aplicar el refinamiento iterativo —un cambio enfocado a la vez con aprobación explícita— y evitar los pitfalls",
  ],
  blocks: [
    {
      type: "paragraph",
      text:
        "La fase Requirements es la primera de las tres fases del flujo spec-driven de Kiro. Su propósito es transformar ideas difusas en requisitos concretos y medibles, establecer criterios de aceptación claros y crear un entendimiento compartido entre quienes piden el feature y quienes lo construyen. El resultado es un documento vivo —requirements.md— que sirve de contrato para las fases Design y Tasks.",
    },
    {
      type: "serviceIcon",
      items: [{ service: "Fase Requirements", icon: "concept-requirements" }],
    },
    { type: "heading", level: 2, text: "Paso 1 — Generación inicial" },
    {
      type: "paragraph",
      text:
        "Se parte de la idea, se identifican los roles de usuario y se definen user stories. Cada story sigue una plantilla fija que ancla el valor de negocio: quién la necesita, qué quiere y para qué. A partir de cada story se generan los criterios de aceptación en sintaxis EARS.",
    },
    {
      type: "code",
      lang: "text",
      title: "Plantilla de user story",
      code: "Como [rol], quiero [feature], para [beneficio]",
    },
    { type: "heading", level: 2, text: "Paso 2 — Estructura y formato del documento" },
    {
      type: "paragraph",
      text:
        "El requirements.md arranca con una introducción que resume el feature. Después lista los requisitos, cada uno con su User Story y sus Acceptance Criteria numerados en EARS. Este es el aspecto de un fragmento real del documento:",
    },
    {
      type: "code",
      lang: "markdown",
      title: "Fragmento de requirements.md",
      code:
        "# Requirements\n" +
        "\n" +
        "## Introducción\n" +
        "\n" +
        "Esta funcionalidad permite a los usuarios autenticarse y guardar sus datos\n" +
        "de perfil de forma segura.\n" +
        "\n" +
        "## Requisito 1 — Guardado de perfil\n" +
        "\n" +
        "**User Story:** Como usuario registrado, quiero guardar los cambios de mi\n" +
        "perfil, para que mis datos persistan entre sesiones.\n" +
        "\n" +
        "### Criterios de aceptación\n" +
        "\n" +
        "1. WHEN el usuario pulsa \"Guardar\" THEN el sistema SHALL validar el formulario\n" +
        "2. IF algún campo requerido está vacío THEN el sistema SHALL mostrar un error de validación\n" +
        "3. WHEN la validación es correcta THEN el sistema SHALL persistir el perfil y confirmar al usuario",
      highlightLines: [15, 16, 17],
    },
    {
      type: "callout",
      variant: "info",
      text:
        "Los criterios de aceptación son EARS puro: un patrón por línea, un único SHALL por sentencia. Así cada criterio se puede verificar más tarde contra el código y contra las tareas de la fase Tasks.",
    },
    { type: "heading", level: 2, text: "Paso 3 — Validación" },
    {
      type: "paragraph",
      text:
        "Antes de dar por buena la fase, cada requisito se somete a validación. No basta con el camino feliz: hay que cubrir explícitamente el caso normal, el caso borde y el caso de error.",
    },
    {
      type: "list",
      items: [
        "Cada requisito es testable y medible (nada de términos subjetivos).",
        "Cubre caso normal, caso borde y caso de error.",
        "Las user stories tienen un valor de negocio claro.",
        "Los criterios son específicos y sin ambigüedad.",
        "Los requisitos son independientes entre sí y no entran en conflicto.",
      ],
    },
    { type: "heading", level: 2, text: "Paso 4 — Refinamiento iterativo" },
    {
      type: "paragraph",
      text:
        "Los requisitos no se escriben perfectos a la primera. Se revisan con los stakeholders, se identifican huecos, se aclaran ambigüedades, se añaden casos borde y se valida el valor de negocio. La disciplina clave es iterar en pasos pequeños.",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Revisar con los stakeholders e identificar huecos.",
        "Aclarar ambigüedades y añadir los casos borde que falten.",
        "Validar que el valor de negocio sigue siendo claro.",
        "Aplicar un cambio enfocado a la vez y pedir aprobación explícita tras cada cambio.",
      ],
    },
    {
      type: "callout",
      variant: "success",
      text:
        "Un cambio enfocado a la vez, con aprobación explícita tras cada cambio. Avanzar de la fase Requirements a Design sin ese visto bueno explícito rompe el entendimiento compartido que la fase busca construir.",
    },
    { type: "heading", level: 2, text: "Pitfalls habituales" },
    {
      type: "paragraph",
      text:
        "Los tres errores más comunes son los requisitos vagos, los detalles de implementación colados en el requisito y los casos de error ausentes. La corrección casi siempre pasa por reescribir en EARS y mover el CÓMO a la fase Design.",
    },
    {
      type: "comparison",
      lang: "text",
      before: {
        title: "Pitfall: requisito vago",
        code: "El sistema debe ser rápido.",
      },
      after: {
        title: "Corrección en EARS",
        code:
          "WHEN el usuario pide datos THEN el sistema SHALL responder en menos de 2 segundos",
      },
    },
    {
      type: "comparison",
      lang: "text",
      before: {
        title: "Pitfall: detalle de implementación",
        code: "Usar Redis para cachear las respuestas.",
      },
      after: {
        title: "Corrección (el QUÉ, no el CÓMO)",
        code: "El sistema SHALL devolver resultados cacheados",
      },
    },
    {
      type: "list",
      items: [
        "Requisitos vagos: \"debe ser rápido\" → reescribir con un umbral medible en EARS.",
        "Detalles de implementación: \"usar Redis\" → expresar el resultado observable, no la tecnología.",
        "Faltan casos de error: cada feature necesita su rama de fallo descrita.",
        "Conflictos entre requisitos: dos criterios no pueden exigir comportamientos contradictorios.",
        "Requisitos no testables: todo criterio debe poder comprobarse.",
      ],
    },
    {
      type: "checklist",
      title: "Checklist de salida de la fase Requirements",
      items: [
        "Cada requisito tiene User Story + Acceptance Criteria numerados en EARS",
        "Caso normal, borde y error cubiertos en todos los requisitos",
        "Sin detalles de implementación: el documento describe el QUÉ",
        "Requisitos independientes y sin conflictos entre sí",
        "Cambios aprobados explícitamente antes de pasar a la fase Design",
      ],
    },
  ],
  selfCheck: [
    {
      question:
        "¿Cuál es la plantilla oficial de una user story en la fase Requirements?",
      options: [
        "Dado [contexto], cuando [acción], entonces [resultado]",
        "Como [rol], quiero [feature], para [beneficio]",
        "El sistema SHALL [comportamiento] WHEN [evento]",
        "Context / Options / Decision / Rationale",
      ],
      correctIndex: 1,
      explanation:
        "La user story sigue \"Como [rol], quiero [feature], para [beneficio]\", que ancla quién la necesita, qué quiere y el valor de negocio. El patrón con SHALL pertenece a los criterios de aceptación EARS, y Context/Options/Decision es el Decision Record de la fase Design.",
    },
    {
      question:
        "Durante la validación, ¿qué tres tipos de caso debe cubrir cada requisito?",
      options: [
        "Caso de desarrollo, caso de pruebas y caso de producción",
        "Caso normal, caso borde y caso de error",
        "Caso frontend, caso backend y caso de base de datos",
        "Caso funcional, caso no funcional y caso de rendimiento",
      ],
      correctIndex: 1,
      explanation:
        "La validación exige cubrir explícitamente el caso normal, el caso borde y el caso de error. Quedarse solo en el camino feliz es uno de los pitfalls (faltan casos de error).",
    },
    {
      question:
        "El requisito \"el sistema debe usar Redis para cachear\" es un pitfall. ¿Por qué y cómo se corrige?",
      options: [
        "Es un requisito compuesto; se corrige dividiéndolo en dos SHALL",
        "Es un detalle de implementación; se corrige expresando el resultado observable, p. ej. \"el sistema SHALL devolver resultados cacheados\"",
        "Es un requisito vago; se corrige añadiendo un umbral de tiempo",
        "No es un pitfall; está perfectamente redactado",
      ],
      correctIndex: 1,
      explanation:
        "Nombrar Redis mete el CÓMO (la tecnología) en un requisito, que debe describir el QUÉ. La corrección expresa el resultado observable —\"devolver resultados cacheados\"— y deja la elección de tecnología para la fase Design.",
    },
  ],
};
