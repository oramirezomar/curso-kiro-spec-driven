import type { Lesson } from "@/lib/types";

// Contenido redactado (tarea 14.1). Fuente de verdad técnica:
// docs-referencia/kiro-spec-driven/01-metodologia-y-producto.md
// (§Las tres fases, §Filosofía). Terminología oficial de Kiro. Req 3.3, 9.1–9.3.
export const day04: Lesson = {
  day: 4,
  slug: "las-tres-fases",
  title: "Panorama de las tres fases y las puertas de aprobación",
  section: "BÁSICO",
  estimatedMinutes: 20,
  icon: "concept-tres-fases",
  objectives: [
    "Describir las tres fases del spec-driven development de Kiro (Requirements, Design y Tasks) y qué produce cada una",
    "Explicar qué hace cada fase: de idea difusa a requisitos testables, de requisitos a arquitectura, y de arquitectura a un plan de tareas secuenciadas",
    "Entender las puertas de aprobación explícitas entre fases y por qué Kiro no avanza sin aprobación",
    "Reconocer que cada fase es iterativa: puede refinarse sobre sí misma según el feedback antes de pasar la puerta",
  ],
  blocks: [
    {
      type: "paragraph",
      text:
        "El spec-driven development de Kiro no es una sola generación de código: es un recorrido por tres fases encadenadas. Cada fase toma la salida de la anterior, la vuelve más concreta y la deja lista para la siguiente. El orden importa, porque cada fase reduce la incertidumbre que arrastraría la siguiente si empezaras a programar a ciegas.",
    },
    {
      type: "serviceIcon",
      items: [
        { service: "Fase Requirements", icon: "concept-requirements" },
        { service: "Fase Design", icon: "concept-design" },
        { service: "Fase Tasks", icon: "concept-tasks" },
      ],
    },
    { type: "heading", level: 2, text: "Las tres fases, una por una" },
    {
      type: "heading",
      level: 3,
      text: "1. Requirements (Requisitos)",
    },
    {
      type: "paragraph",
      text:
        "Transforma una idea difusa en requisitos claros y testables. Combina user stories con criterios de aceptación en formato EARS e identifica desde el principio los casos borde y las restricciones. El objetivo de la fase no es describir el cómo, sino fijar el qué de forma verificable.",
    },
    {
      type: "heading",
      level: 3,
      text: "2. Design (Diseño)",
    },
    {
      type: "paragraph",
      text:
        "Investiga enfoques técnicos y define la arquitectura: componentes, modelos de datos, manejo de errores y estrategia de pruebas. Es la fase donde aparecen los diagramas (Mermaid), las interfaces TypeScript, los esquemas de base de datos y los endpoints. El diseño responde al cómo, apoyándose en los requisitos ya aprobados.",
    },
    {
      type: "heading",
      level: 3,
      text: "3. Tasks (Tareas)",
    },
    {
      type: "paragraph",
      text:
        "Descompone el diseño en pasos de implementación discretos y secuenciados por dependencias, cada uno enlazado a los requisitos que lo justifican. El plan contempla tests unitarios y de integración, estados de carga, diseño responsive y accesibilidad. Es el puente entre la especificación y el código real.",
    },
    {
      type: "callout",
      variant: "info",
      text:
        "Regla mnemotécnica: Requirements fija el QUÉ, Design el CÓMO y Tasks el EN QUÉ ORDEN. Cada fase hereda y concreta la anterior.",
    },
    { type: "heading", level: 2, text: "Las puertas de aprobación explícitas" },
    {
      type: "paragraph",
      text:
        "Entre fase y fase hay una puerta de aprobación explícita. Kiro no salta de Requirements a Design ni de Design a Tasks por su cuenta: espera tu aprobación en cada transición. Esto es deliberado, porque corregir un requisito mal planteado es barato, y corregir un diseño o un plan de tareas levantados sobre ese requisito, no.",
    },
    {
      type: "code",
      lang: "text",
      title: "Flujo de fases con puertas de aprobación",
      code:
        "  Idea\n   |\n   v\n[ Requirements ]  <-- itera sobre si misma\n   |\n (aprobado)   <== puerta explicita\n   v\n[ Design ]        <-- itera sobre si misma\n   |\n (aprobado)   <== puerta explicita\n   v\n[ Tasks ]         <-- itera sobre si misma\n   |\n (aprobado)\n   v\n  Listo para implementar",
    },
    {
      type: "paragraph",
      text:
        "Además de las puertas entre fases, cada fase es iterativa: puede refinarse sobre sí misma según el feedback. Puedes dar varias vueltas a los requisitos antes de aprobarlos, y lo mismo con el diseño o el plan de tareas. La puerta solo se cruza cuando tú lo decides.",
    },
    {
      type: "checklist",
      title: "Antes de cruzar una puerta de aprobación",
      items: [
        "Los requisitos son claros, testables y cubren los casos borde conocidos",
        "El diseño responde a cada requisito aprobado, sin inventar alcance nuevo",
        "Cada tarea enlaza con los requisitos que la justifican y respeta las dependencias",
        "Has iterado la fase actual hasta quedar conforme antes de aprobar",
      ],
    },
    {
      type: "quote",
      text:
        "Cada fase es iterativa, con validación en cada paso: así detectas los problemas temprano, cuando todavía son baratos de corregir.",
      author: "Filosofía spec-driven de Kiro",
    },
  ],
  selfCheck: [
    {
      question: "¿Cuál es el orden correcto de las tres fases del spec-driven development de Kiro?",
      options: [
        "Design → Requirements → Tasks",
        "Requirements → Design → Tasks",
        "Tasks → Design → Requirements",
        "Requirements → Tasks → Design",
      ],
      correctIndex: 1,
      explanation:
        "El flujo es Requirements (el qué, requisitos testables en EARS), luego Design (el cómo, arquitectura y diagramas) y por último Tasks (el plan de implementación secuenciado por dependencias).",
    },
    {
      question: "¿Qué papel cumplen las puertas de aprobación entre fases?",
      options: [
        "Son opcionales y Kiro avanza automáticamente de una fase a la siguiente",
        "Solo existen entre Design y Tasks, no después de Requirements",
        "Son puntos explícitos donde Kiro espera tu aprobación antes de pasar de una fase a la siguiente (Requirements → aprobado → Design → aprobado → Tasks)",
        "Impiden que una fase pueda iterar sobre sí misma",
      ],
      correctIndex: 2,
      explanation:
        "Hay puertas de aprobación explícitas entre fases: Requirements → (aprobado) → Design → (aprobado) → Tasks. Kiro no avanza sin tu aprobación, y además cada fase puede iterar sobre sí misma antes de cruzar la puerta.",
    },
    {
      question: "¿Qué produce específicamente la fase de Design?",
      options: [
        "User stories y criterios de aceptación en formato EARS",
        "La arquitectura: componentes, modelos de datos, manejo de errores, estrategia de pruebas, con diagramas, interfaces y esquemas",
        "Un plan de tareas discretas secuenciadas por dependencias",
        "El código final listo para desplegar en producción",
      ],
      correctIndex: 1,
      explanation:
        "Design investiga enfoques técnicos y define la arquitectura: componentes, modelos de datos, manejo de errores y estrategia de pruebas, con diagramas (Mermaid), interfaces TypeScript, esquemas y endpoints. Las user stories son de Requirements y el plan de pasos es de Tasks.",
    },
  ],
};
