import type { Lesson } from "@/lib/types";

// Capa_Temática: Nivel MEDIO (dayRange [6, 11]).
// Tema: EARS en profundidad — las palabras clave WHEN (event-driven),
// IF (state-driven), WHILE (continuous), WHERE (optional/context) y SHALL,
// con el formato y ejemplos de cada una.
// Fuente de verdad: docs-referencia/kiro-spec-driven/02-fases-y-ears.md.
// Trazabilidad: Req 3.5, 4.4, 5.4, 6.1-6.4, 9.1-9.4.
export const day06: Lesson = {
  day: 6,
  slug: "ears-fundamentos",
  title: "EARS: fundamentos (WHEN, IF, WHILE, WHERE, SHALL)",
  section: "MEDIO",
  estimatedMinutes: 28,
  icon: "concept-ears",
  objectives: [
    "Entender qué resuelve EARS (Easy Approach to Requirements Syntax): requisitos claros, testables y sin ambigüedad",
    "Dominar las cuatro palabras clave de disparo —WHEN, IF, WHILE, WHERE— y su formato exacto",
    "Reconocer el rol de SHALL como verbo de obligación y por qué hay un solo SHALL por sentencia",
    "Combinar condiciones con AND/OR y evitar los anti-patrones (requisitos compuestos, condiciones vagas, no testables)",
  ],
  blocks: [
    {
      type: "paragraph",
      text:
        "EARS (Easy Approach to Requirements Syntax) es un enfoque estructurado para escribir requisitos claros, testables y sin ambigüedad. En lugar de redactar frases libres —propensas a interpretaciones distintas— EARS impone una plantilla con palabras clave específicas que marcan cuándo aplica el requisito y qué debe hacer el sistema. En el flujo spec-driven de Kiro, los criterios de aceptación de la fase Requirements se escriben en EARS, de modo que cada uno se pueda verificar después contra el código.",
    },
    {
      type: "serviceIcon",
      items: [{ service: "EARS", icon: "concept-ears" }],
    },
    {
      type: "paragraph",
      text:
        "Toda sentencia EARS gira en torno a una palabra clave de disparo (WHEN, IF, WHILE o WHERE) que describe la condición, y al verbo SHALL, que expresa la obligación del sistema. La elección de la palabra clave no es estética: codifica la naturaleza del requisito (un evento, un estado, una operación en curso o un contexto).",
    },
    { type: "heading", level: 2, text: "WHEN — requisitos dirigidos por eventos" },
    {
      type: "paragraph",
      text:
        "WHEN se usa cuando el requisito se dispara por un evento o acción concreta: el usuario pulsa un botón, llega un mensaje, vence un temporizador. Describe algo que ocurre en un instante y provoca una respuesta.",
    },
    {
      type: "code",
      lang: "text",
      title: "Formato y ejemplo de WHEN (event-driven)",
      code:
        "WHEN [evento/trigger] THEN [sistema] SHALL [respuesta]\n" +
        "WHEN el usuario pulsa \"Guardar\" THEN el sistema SHALL validar el formulario",
      highlightLines: [2],
    },
    { type: "heading", level: 2, text: "IF — requisitos dirigidos por estado" },
    {
      type: "paragraph",
      text:
        "IF se usa cuando el requisito depende de un estado o condición previa que ya es cierta, no de un evento puntual. Modela precondiciones: el usuario está (o no) autenticado, el carrito está vacío, la cuenta tiene saldo insuficiente.",
    },
    {
      type: "code",
      lang: "text",
      title: "Formato y ejemplo de IF (state-driven)",
      code:
        "IF [condición] THEN [sistema] SHALL [respuesta]\n" +
        "IF el usuario no está autenticado THEN el sistema SHALL denegar el acceso",
      highlightLines: [2],
    },
    { type: "heading", level: 2, text: "WHILE — requisitos continuos" },
    {
      type: "paragraph",
      text:
        "WHILE describe un comportamiento que debe mantenerse mientras dura una operación en curso. No es un disparo instantáneo sino una condición sostenida: durante una subida, durante una sesión activa, mientras se procesa un lote. Fíjate en que WHILE no lleva THEN: la condición y el comportamiento continuo van seguidos.",
    },
    {
      type: "code",
      lang: "text",
      title: "Formato y ejemplo de WHILE (continuous)",
      code:
        "WHILE [condición] [sistema] SHALL [comportamiento continuo]\n" +
        "WHILE un archivo se sube el sistema SHALL mostrar un indicador de progreso",
      highlightLines: [2],
    },
    { type: "heading", level: 2, text: "WHERE — requisitos opcionales / contextuales" },
    {
      type: "paragraph",
      text:
        "WHERE acota un requisito a un contexto concreto en el que aplica: una plataforma, un tipo de dispositivo, una región, un rol. Al igual que WHILE, no usa THEN. Sirve para expresar comportamiento específico de contexto sin convertirlo en una regla global.",
    },
    {
      type: "code",
      lang: "text",
      title: "Formato y ejemplo de WHERE (optional/context)",
      code:
        "WHERE [contexto] [sistema] SHALL [comportamiento]\n" +
        "WHERE el usuario está en móvil el sistema SHALL usar un layout responsive",
      highlightLines: [2],
    },
    { type: "heading", level: 2, text: "SHALL — el verbo de obligación" },
    {
      type: "paragraph",
      text:
        "SHALL es la columna vertebral de toda sentencia EARS: expresa una obligación del sistema, no una posibilidad ni una sugerencia. La regla de oro es un único SHALL por sentencia —un requisito por línea— para que cada uno sea atómico, testable y rastreable. Si necesitas expresar dos comportamientos, escribe dos requisitos.",
    },
    {
      type: "callout",
      variant: "info",
      text:
        "Regla mnemotécnica: WHEN = evento (pasa algo), IF = estado (algo es cierto), WHILE = mientras dura algo, WHERE = en tal contexto. En las cuatro, el sistema SHALL hace algo verificable.",
    },
    { type: "heading", level: 2, text: "Combinar condiciones con AND / OR" },
    {
      type: "paragraph",
      text:
        "Las palabras clave se pueden combinar con AND y OR para expresar condiciones compuestas en el disparo, sin romper la regla del SHALL único: la condición puede ser rica, pero la respuesta sigue siendo una sola obligación.",
    },
    {
      type: "code",
      lang: "text",
      title: "Condición compuesta con AND",
      code:
        "WHEN [usuario envía formulario] AND [todos los campos requeridos están completos] THEN [sistema] SHALL [procesar el envío]",
    },
    { type: "heading", level: 2, text: "Buenas prácticas y anti-patrones" },
    {
      type: "list",
      items: [
        "Voz activa y lenguaje específico: evita términos subjetivos como \"rápido\" o \"amigable\".",
        "Un requisito por sentencia: un solo SHALL, siempre.",
        "Resultados testables y verificables: cada criterio debe poder comprobarse.",
        "Terminología consistente a lo largo de todo el documento.",
      ],
    },
    {
      type: "callout",
      variant: "warning",
      text:
        "Anti-patrones EARS: requisitos compuestos (varios SHALL en uno), condiciones vagas (\"cuando sea apropiado\"), detalles de implementación (enfócate en el QUÉ, no en el CÓMO) y requisitos no testables (términos subjetivos no medibles).",
    },
    {
      type: "comparison",
      lang: "text",
      before: {
        title: "Vago / no testable",
        code: "El sistema debe responder rápido a las peticiones de datos.",
      },
      after: {
        title: "EARS testable",
        code:
          "WHEN el usuario pide datos THEN el sistema SHALL responder en menos de 2 segundos",
      },
    },
    {
      type: "checklist",
      title: "Checklist al escribir un criterio EARS",
      items: [
        "Elegí la palabra clave correcta (WHEN/IF/WHILE/WHERE) según evento, estado, continuidad o contexto",
        "Hay un único SHALL en la sentencia",
        "La respuesta es específica y verificable (sin términos subjetivos)",
        "Si combino condiciones, uso AND/OR sin añadir un segundo SHALL",
        "El requisito describe el QUÉ, no el CÓMO (sin detalles de implementación)",
      ],
    },
  ],
  selfCheck: [
    {
      question:
        "¿Qué palabra clave EARS corresponde a un requisito que depende de un estado o condición previa ya cierta (no de un evento puntual)?",
      options: ["WHEN", "IF", "WHILE", "WHERE"],
      correctIndex: 1,
      explanation:
        "IF modela requisitos dirigidos por estado: dependen de una precondición que ya es cierta (p. ej. \"IF el usuario no está autenticado THEN el sistema SHALL denegar el acceso\"). WHEN es para eventos, WHILE para comportamiento continuo y WHERE para contexto.",
    },
    {
      question:
        "¿Cuál es el formato correcto de un requisito continuo en EARS?",
      options: [
        "WHILE [condición] THEN [sistema] SHALL [respuesta]",
        "WHILE [condición] [sistema] SHALL [comportamiento continuo]",
        "WHEN [condición] [sistema] SHALL [comportamiento continuo]",
        "IF [condición] THEN [sistema] SHALL [comportamiento continuo]",
      ],
      correctIndex: 1,
      explanation:
        "WHILE describe comportamiento sostenido durante una operación en curso y NO usa THEN: \"WHILE un archivo se sube el sistema SHALL mostrar un indicador de progreso\". El THEN es propio de WHEN e IF.",
    },
    {
      question:
        "¿Por qué EARS exige un único SHALL por sentencia?",
      options: [
        "Porque SHALL solo puede usarse una vez en todo el documento de requisitos",
        "Para que cada requisito sea atómico, testable y rastreable de forma independiente",
        "Porque dos SHALL provocan un error de validación en Kiro",
        "Porque SHALL siempre debe ir acompañado de AND",
      ],
      correctIndex: 1,
      explanation:
        "Un SHALL por sentencia mantiene cada requisito atómico: así se puede verificar y trazar por separado. Meter varios SHALL en una línea produce un requisito compuesto, uno de los anti-patrones EARS.",
    },
  ],
};
