import type { Lesson } from "@/lib/types";

// Contenido redactado (tarea 14.1). Fuente de verdad técnica:
// docs-referencia/kiro-spec-driven/01-metodologia-y-producto.md (§Qué es Kiro,
// §El problema que resuelve). Terminología oficial de Kiro. Req 3.1, 9.1–9.3.
export const day01: Lesson = {
  day: 1,
  slug: "que-es-kiro",
  title: "Qué es Kiro y el problema que resuelve",
  section: "BÁSICO",
  estimatedMinutes: 18,
  icon: "concept-que-es-kiro",
  objectives: [
    "Explicar qué es Kiro: un IDE agéntico de AWS construido sobre Code OSS cuya propuesta central es el spec-driven development",
    "Distinguir el prompting sin estructura del spec-driven development y entender por qué este último lleva un prototipo a producción",
    "Identificar las opciones de autenticación de inicio (Google, GitHub, Builder ID o AWS SSO) y por qué no se exige una cuenta de AWS",
    "Reconocer las plataformas soportadas (Mac, Windows y Linux) y la compatibilidad con ajustes y plugins de VS Code vía Open VSX",
  ],
  blocks: [
    {
      type: "paragraph",
      text:
        "Antes de escribir una línea de código conviene tener claro qué herramienta tienes delante. Kiro es un IDE agéntico de AWS construido sobre Code OSS —la misma base de VS Code— y lanzado en 2025. No es un chat pegado a un editor: su propuesta central es el spec-driven development, es decir, convertir una idea en una especificación estructurada (requisitos, diseño y tareas) antes de generar código.",
    },
    {
      type: "serviceIcon",
      items: [
        { service: "Qué es Kiro", icon: "concept-que-es-kiro" },
        { service: "Filosofía spec-driven", icon: "concept-filosofia" },
        { service: "Las tres fases", icon: "concept-tres-fases" },
      ],
    },
    { type: "heading", level: 2, text: "El problema que resuelve" },
    {
      type: "paragraph",
      text:
        "El flujo habitual con un asistente de IA es prompt-prompt-prompt hasta que algo funciona. Ese ciclo tiene un coste oculto: las suposiciones que hizo el modelo no quedan documentadas, los requisitos son difusos, no puedes saber a ciencia cierta si la aplicación los cumple y no entiendes con rapidez cómo está diseñado el sistema. Cuando el prototipo crece, esa deuda de claridad se paga en retrabajo.",
    },
    {
      type: "comparison",
      lang: "text",
      before: {
        title: "Prompting sin estructura",
        code:
          "Idea difusa\n  -> prompt\n  -> prompt\n  -> prompt\n  = algo que 'funciona'\n\nSuposiciones del modelo: no documentadas\nRequisitos: difusos\n¿Cumple la app?: no verificable\nDiseño del sistema: opaco",
      },
      after: {
        title: "Spec-driven development",
        code:
          "Idea\n  -> Requirements (requisitos claros y testables)\n  -> Design (arquitectura explicita)\n  -> Tasks (plan de implementacion)\n  = de prototipo a produccion\n\nSuposiciones: explicitas\nRequisitos: claros\n¿Cumple la app?: verificable\nDiseño: documentado",
      },
    },
    {
      type: "paragraph",
      text:
        "Kiro sigue siendo bueno para el 'vibe coding' rápido, pero su fuerza real es llevar prototipos a producción: hace explícitas las suposiciones y da claridad antes de que el código las esconda.",
    },
    {
      type: "callout",
      variant: "info",
      text:
        "Spec-driven development no sustituye tu forma de trabajar: hace explícito lo que el prompting deja implícito. En las siguientes lecciones verás cómo esa estructura se materializa en tres archivos (requirements.md, design.md y tasks.md).",
    },
    { type: "heading", level: 2, text: "Autenticación al empezar" },
    {
      type: "paragraph",
      text:
        "Al abrir Kiro por primera vez eliges cómo autenticarte. Hay cuatro opciones y, a diferencia de lo que suele asumirse de una herramienta de AWS, no necesitas una cuenta de AWS para empezar:",
    },
    {
      type: "list",
      items: [
        "Google",
        "GitHub",
        "Builder ID (identidad personal de AWS, gratuita, independiente de una cuenta de AWS)",
        "AWS SSO (IAM Identity Center), pensado para entornos corporativos",
      ],
    },
    {
      type: "callout",
      variant: "success",
      text:
        "No es obligatorio tener cuenta de AWS para usar Kiro. Puedes autenticarte con Google, GitHub o un Builder ID y empezar a trabajar de inmediato.",
    },
    { type: "heading", level: 2, text: "Plataformas y continuidad con VS Code" },
    {
      type: "paragraph",
      text:
        "Kiro corre en Mac, Windows y Linux. Como está construido sobre Code OSS, mantiene tus ajustes de VS Code y es compatible con plugins publicados en Open VSX, de modo que no empiezas desde cero: tu configuración y buena parte de tu ecosistema de extensiones viajan contigo.",
    },
    {
      type: "list",
      items: [
        "Base: Code OSS (la base abierta de VS Code).",
        "Plataformas: Mac, Windows y Linux.",
        "Continuidad: conserva ajustes de VS Code y plugins compatibles con Open VSX.",
      ],
    },
    {
      type: "quote",
      text:
        "La claridad de pensamiento y de propósito precede a la implementación: invertir en entender, diseñar y planificar reduce incertidumbre y retrabajo.",
      author: "Filosofía spec-driven de Kiro",
    },
  ],
  selfCheck: [
    {
      question: "¿Qué describe mejor qué es Kiro?",
      options: [
        "Un servicio en la nube de AWS que solo funciona con una cuenta de AWS activa",
        "Un IDE agéntico de AWS construido sobre Code OSS cuya propuesta central es el spec-driven development",
        "Una extensión de chat para VS Code sin capacidades de edición de código",
        "Un framework de frontend para construir interfaces con IA",
      ],
      correctIndex: 1,
      explanation:
        "Kiro es un IDE agéntico de AWS construido sobre Code OSS (la base de VS Code), lanzado en 2025, cuya propuesta central es el spec-driven development: convertir una idea en requisitos, diseño y tareas antes de escribir código.",
    },
    {
      question:
        "¿Cuál es la diferencia principal entre el prompting sin estructura y el spec-driven development?",
      options: [
        "El prompting es más lento, pero ambos documentan las suposiciones por igual",
        "El spec-driven development elimina la necesidad de escribir código",
        "El spec-driven hace explícitas las suposiciones y los requisitos (de prototipo a producción), mientras que el prompting los deja difusos y no verificables",
        "No hay diferencia práctica: son dos nombres para lo mismo",
      ],
      correctIndex: 2,
      explanation:
        "Con prompting las suposiciones del modelo no quedan documentadas y los requisitos son difusos. El spec-driven development hace explícitas las suposiciones y da claridad, lo que permite llevar un prototipo a producción sin acumular deuda de diseño.",
    },
    {
      question: "Sobre la autenticación y las plataformas de Kiro, ¿qué afirmación es correcta?",
      options: [
        "Requiere obligatoriamente una cuenta de AWS y solo corre en Linux",
        "Permite autenticarse con Google, GitHub, Builder ID o AWS SSO, no exige cuenta de AWS, y corre en Mac, Windows y Linux",
        "Solo admite AWS SSO y descarta cualquier configuración previa de VS Code",
        "Funciona exclusivamente en Mac y no es compatible con plugins de VS Code",
      ],
      correctIndex: 1,
      explanation:
        "Kiro ofrece cuatro vías de autenticación (Google, GitHub, Builder ID o AWS SSO) y no obliga a tener cuenta de AWS. Soporta Mac, Windows y Linux, y conserva los ajustes de VS Code y los plugins compatibles con Open VSX.",
    },
  ],
};
