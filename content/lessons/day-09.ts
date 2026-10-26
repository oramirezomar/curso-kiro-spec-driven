import type { Lesson } from "@/lib/types";

// Contenido redactado (tarea 15.2). Fuente de verdad:
// docs-referencia/kiro-spec-driven/02-fases-y-ears.md (§Fase Requirements:
// user stories, validación normal/borde/error). Req 3.6.
export const day09: Lesson = {
  day: 9,
  slug: "user-stories-y-criterios",
  title: "User stories y criterios de aceptación",
  section: "MEDIO",
  estimatedMinutes: 24,
  icon: "concept-requirements",
  objectives: [
    "Escribir user stories con la plantilla 'Como [rol], quiero [feature], para [beneficio]' y anclar el valor de negocio",
    "Derivar criterios de aceptación EARS a partir de una user story, cubriendo caso normal, borde y error",
    "Validar que los criterios son específicos, testables e independientes antes de pasar a diseño",
  ],
  blocks: [
    {
      type: "paragraph",
      text:
        "La fase Requirements descansa sobre dos piezas que trabajan juntas: la user story, que expresa el valor, y los criterios de aceptación, que lo hacen verificable. Esta lección se centra en cómo pasar de una a otros sin dejar huecos, que es donde se gana o se pierde la calidad de una spec.",
    },
    {
      type: "serviceIcon",
      items: [
        { service: "Fase Requirements", icon: "concept-requirements" },
        { service: "EARS", icon: "concept-ears" },
      ],
    },
    { type: "heading", level: 2, text: "La user story: valor antes que detalle" },
    {
      type: "paragraph",
      text:
        "Una user story sigue una plantilla fija que obliga a decir tres cosas: quién necesita algo, qué quiere y para qué. Ese 'para qué' es el que ancla el valor de negocio y evita construir features que nadie pidió.",
    },
    {
      type: "code",
      lang: "text",
      title: "Plantilla de user story",
      code:
        "Como [rol], quiero [feature], para [beneficio]\n" +
        "\n" +
        "Como comprador, quiero filtrar reseñas por puntuacion,\n" +
        "para encontrar rapido las opiniones mas criticas.",
      highlightLines: [1],
    },
    { type: "heading", level: 2, text: "De la story a los criterios: normal, borde y error" },
    {
      type: "paragraph",
      text:
        "Cada user story genera criterios de aceptación en EARS. El error típico es quedarse en el camino feliz. Una buena fase Requirements cubre explícitamente los tres tipos de caso: el normal (todo va bien), el borde (límites y situaciones extremas) y el error (qué pasa cuando algo falla).",
    },
    {
      type: "code",
      lang: "markdown",
      title: "Criterios para una story, cubriendo los tres casos",
      code:
        "### Criterios de aceptación\n" +
        "\n" +
        "1. WHEN el usuario selecciona una puntuacion THEN el sistema\n" +
        "   SHALL mostrar solo las resenas con esa puntuacion   (normal)\n" +
        "2. WHEN ninguna resena tiene esa puntuacion THEN el sistema\n" +
        "   SHALL mostrar un mensaje de lista vacia               (borde)\n" +
        "3. IF la carga de resenas falla THEN el sistema SHALL\n" +
        "   mostrar un aviso de error y permitir reintentar        (error)",
      highlightLines: [3, 5, 7],
    },
    {
      type: "callout",
      variant: "warning",
      text:
        "Quedarse solo en el caso normal es el pitfall más común de la fase Requirements. Para cada story pregúntate: ¿qué pasa cuando no hay datos? ¿y cuando el usuario mete algo inválido? ¿y cuando el sistema de abajo falla?",
    },
    { type: "heading", level: 2, text: "Validar antes de avanzar" },
    {
      type: "paragraph",
      text:
        "Antes de cerrar la fase, cada criterio se somete a una validación rápida. Si un criterio no pasa estos filtros, se reescribe:",
    },
    {
      type: "list",
      items: [
        "Testable y medible: se puede comprobar objetivamente, sin términos subjetivos.",
        "Cobertura completa: hay criterios para el caso normal, el borde y el de error.",
        "Valor de negocio claro: la story dice para qué sirve, no solo qué hace.",
        "Específico y sin ambigüedad: una sola interpretación posible.",
        "Independiente y sin conflictos: no contradice a otro requisito.",
      ],
    },
    {
      type: "quote",
      text:
        "La pregunta que valida cualquier criterio: ¿cómo sabríamos que este requisito se cumplió? Si no tiene respuesta objetiva, hay que reescribirlo.",
      author: "Fase Requirements — guía de proceso de Kiro",
    },
    {
      type: "checklist",
      title: "De la story a criterios listos",
      items: [
        "La user story sigue 'Como [rol], quiero [feature], para [beneficio]'.",
        "Cada story tiene criterios para caso normal, borde y error.",
        "Cada criterio está en EARS, es específico y testable.",
        "Los criterios son independientes y no entran en conflicto entre sí.",
      ],
    },
  ],
  selfCheck: [
    {
      question: "¿Qué parte de la plantilla de user story ancla el valor de negocio?",
      options: [
        "El [rol], porque dice quién la usa",
        "El [feature], porque describe la funcionalidad",
        "El [beneficio] ('para ...'), porque explica para qué sirve y evita construir lo que nadie pidió",
        "Ninguna: la user story no expresa valor",
      ],
      correctIndex: 2,
      explanation:
        "El 'para [beneficio]' ancla el valor de negocio: explica para qué sirve la feature. Sin él, se corre el riesgo de construir funcionalidad que nadie necesitaba realmente.",
    },
    {
      question: "¿Qué tres tipos de caso debe cubrir el conjunto de criterios de una user story?",
      options: [
        "Frontend, backend y base de datos",
        "Caso normal, caso borde y caso de error",
        "Unitario, integración y end-to-end",
        "Pasado, presente y futuro",
      ],
      correctIndex: 1,
      explanation:
        "Los criterios deben cubrir el caso normal (todo va bien), el borde (límites y situaciones extremas) y el de error (qué pasa cuando algo falla). Quedarse solo en el caso normal es el pitfall más común de la fase.",
    },
    {
      question: "¿Cuál es la pregunta clave para validar si un criterio de aceptación está bien escrito?",
      options: [
        "¿Suena profesional y formal?",
        "¿Cómo sabríamos objetivamente que este requisito se cumplió?",
        "¿Usa suficientes términos técnicos?",
        "¿Cabe en una sola línea?",
      ],
      correctIndex: 1,
      explanation:
        "La pregunta que valida un criterio es '¿cómo sabríamos que se cumplió?'. Si no tiene una respuesta objetiva y medible, el criterio no es testable y hay que reescribirlo.",
    },
  ],
};
