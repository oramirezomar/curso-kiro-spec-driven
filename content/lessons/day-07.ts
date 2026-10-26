import type { Lesson } from "@/lib/types";

// Contenido redactado (tarea 15.2). Fuente de verdad:
// docs-referencia/kiro-spec-driven/02-fases-y-ears.md (§EARS: conectores,
// buenas prácticas, anti-patrones). Req 3.5.
export const day07: Lesson = {
  day: 7,
  slug: "ears-patrones-avanzados",
  title: "EARS: conectores AND/OR, buenas prácticas y anti-patrones",
  section: "MEDIO",
  estimatedMinutes: 24,
  icon: "concept-ears",
  objectives: [
    "Combinar condiciones con AND y OR sin romper la regla del SHALL único",
    "Aplicar las buenas prácticas EARS: voz activa, especificidad, un requisito por sentencia y terminología consistente",
    "Detectar y corregir los cuatro anti-patrones: requisitos compuestos, condiciones vagas, detalles de implementación y requisitos no testables",
  ],
  blocks: [
    {
      type: "paragraph",
      text:
        "Ya conoces las cuatro palabras clave de disparo y el SHALL. Esta lección te lleva al siguiente nivel: condiciones compuestas con AND/OR, las buenas prácticas que hacen un requisito profesional y los anti-patrones que delatan a un principiante. Dominar esto es la diferencia entre requisitos que se pueden testear y requisitos que generan discusiones.",
    },
    {
      type: "serviceIcon",
      items: [{ service: "EARS", icon: "concept-ears" }],
    },
    { type: "heading", level: 2, text: "Condiciones compuestas con AND / OR" },
    {
      type: "paragraph",
      text:
        "Las palabras clave se combinan con AND y OR para expresar condiciones ricas en el disparo. La clave es que la complejidad vive en la condición, no en la respuesta: por muchas condiciones que encadenes, sigue habiendo un único SHALL.",
    },
    {
      type: "code",
      lang: "text",
      title: "Condición compuesta con AND",
      code:
        "WHEN [usuario envía formulario] AND [todos los campos requeridos están completos] THEN [sistema] SHALL [procesar el envío]",
    },
    {
      type: "callout",
      variant: "info",
      text:
        "Regla: AND/OR enriquecen la condición (el WHEN/IF), nunca multiplican la respuesta. Si te descubres escribiendo 'SHALL ... AND SHALL ...', has cruzado al anti-patrón de requisito compuesto.",
    },
    { type: "heading", level: 2, text: "Buenas prácticas" },
    {
      type: "list",
      items: [
        "Voz activa: 'el sistema SHALL validar', no 'el formulario será validado'.",
        "Sé específico: evita términos subjetivos como 'rápido', 'amigable' o 'robusto'.",
        "Un requisito por sentencia: exactamente un SHALL por línea.",
        "Resultados testables: cada criterio debe poder verificarse objetivamente.",
        "Terminología consistente: usa siempre el mismo término para la misma cosa en todo el documento.",
      ],
    },
    { type: "heading", level: 2, text: "Los cuatro anti-patrones" },
    {
      type: "paragraph",
      text:
        "Cuatro errores aparecen una y otra vez. Reconocerlos de inmediato te ahorra rondas de revisión:",
    },
    {
      type: "list",
      ordered: true,
      items: [
        "Requisitos compuestos: varios SHALL en una sola sentencia. Divídelos en requisitos separados.",
        "Condiciones vagas: disparadores imprecisos como 'cuando sea apropiado'. Define la condición exacta.",
        "Detalles de implementación: colar el CÓMO (una tecnología concreta) en un requisito que debe describir el QUÉ.",
        "Requisitos no testables: términos subjetivos que no se pueden medir ('debe ser intuitivo').",
      ],
    },
    {
      type: "comparison",
      lang: "text",
      before: {
        title: "Anti-patrón: compuesto + vago",
        code:
          "El sistema debe validar el formulario y,\n" +
          "cuando sea apropiado, guardar los datos\n" +
          "de forma rapida.",
      },
      after: {
        title: "Corregido: atómico, específico, testable",
        code:
          "1. WHEN el usuario envia el formulario THEN el\n" +
          "   sistema SHALL validar todos los campos\n" +
          "2. WHEN la validacion es correcta THEN el\n" +
          "   sistema SHALL guardar los datos en < 2 s",
      },
    },
    {
      type: "callout",
      variant: "warning",
      text:
        "El anti-patrón de 'detalles de implementación' es el más sutil: 'el sistema SHALL usar Redis para cachear' parece un requisito válido, pero mete el CÓMO. Lo correcto es 'el sistema SHALL devolver resultados cacheados' y dejar Redis para la fase Design.",
    },
    {
      type: "checklist",
      title: "Revisión rápida de un criterio EARS",
      items: [
        "¿Hay exactamente un SHALL? (si hay dos, divídelo)",
        "¿La condición es precisa? (nada de 'cuando sea apropiado')",
        "¿Describe el QUÉ y no el CÓMO? (sin nombres de tecnología)",
        "¿Se puede testear objetivamente? (sin términos subjetivos)",
        "¿Usa voz activa y la terminología del resto del documento?",
      ],
    },
  ],
  selfCheck: [
    {
      question: "¿Cuál es la regla al usar AND/OR en una sentencia EARS?",
      options: [
        "Permiten añadir varios SHALL encadenados en la misma línea",
        "Enriquecen la condición (el WHEN/IF), pero la sentencia sigue teniendo un único SHALL",
        "Solo se pueden usar con WHERE, nunca con WHEN",
        "Obligan a dividir el requisito en dos archivos",
      ],
      correctIndex: 1,
      explanation:
        "AND/OR sirven para componer la condición del disparo, manteniendo un único SHALL. Encadenar varios SHALL ('SHALL ... AND SHALL ...') es el anti-patrón de requisito compuesto.",
    },
    {
      question: "El requisito 'el sistema SHALL usar Redis para cachear' incurre en un anti-patrón. ¿Cuál?",
      options: [
        "Requisito compuesto (varios SHALL)",
        "Condición vaga",
        "Detalle de implementación: mete el CÓMO (la tecnología) en lugar del QUÉ",
        "Requisito no testable",
      ],
      correctIndex: 2,
      explanation:
        "Nombrar Redis introduce un detalle de implementación (el CÓMO). El requisito debe describir el resultado observable —'SHALL devolver resultados cacheados'— y dejar la elección de tecnología para la fase Design.",
    },
    {
      question: "¿Cuál de estas es una buena práctica EARS?",
      options: [
        "Usar términos como 'rápido' o 'amigable' para no limitar al diseñador",
        "Escribir en voz pasiva para sonar más formal",
        "Un requisito por sentencia, con voz activa, resultado testable y terminología consistente",
        "Combinar varios requisitos en una frase para ahorrar espacio",
      ],
      correctIndex: 2,
      explanation:
        "Las buenas prácticas EARS son: voz activa, especificidad (sin términos subjetivos), un requisito por sentencia (un solo SHALL), resultados testables y terminología consistente. Lo demás describe anti-patrones.",
    },
  ],
};
