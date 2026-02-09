/**
 * Contenido central del curso "Introducción a la IA en Medicina"
 * Contenido 100% en español, enfoque conceptual y clínico.
 */

export interface AiMapItem {
  id: string;
  title: string;
  description: string;
  whatItDoes: string;
  example: string;
}

export interface MythReality {
  myth: string;
  reality: string;
}

export interface MedicalUseCase {
  area: string;
  contributes: string;
  risk: string;
  cannotDo: string;
}

export interface GenerativeAllowed {
  title: string;
  description: string;
}

export interface GenerativeForbidden {
  title: string;
  description: string;
}

export interface RiskItem {
  title: string;
  description: string;
}

export const HERO = {
  title: 'Introducción a la Inteligencia Artificial en Medicina',
  subtitle: 'IA sin humo: qué es, qué hace y qué no debe hacer',
  badges: [
    'Nivel: conceptual',
    'Cero programación',
    'Enfoque clínico',
  ],
  ctaText: 'Ver el mapa de la IA',
  ctaTarget: '#ai-map',
};

export const WHAT_IS_AI = {
  definition: 'IA = modelos matemáticos que aprenden patrones de datos para predecir, clasificar o generar resultados.',
  highlight: 'La IA no entiende, no razona, no piensa. Predice.',
  subBlock: {
    title: 'No es realmente inteligente ni artificial',
    text: 'El término "inteligencia artificial" es engañoso: son algoritmos que procesan datos siguiendo patrones estadísticos. No tienen consciencia, intención ni comprensión real del mundo.',
  },
};

export const AI_MAP_ITEMS: AiMapItem[] = [
  {
    id: 'ml',
    title: 'Machine Learning',
    description: 'Algoritmos que aprenden patrones de datos sin programación explícita.',
    whatItDoes: 'Predice, clasifica y detecta patrones en datos estructurados.',
    example: 'Riesgo de reingreso hospitalario, predicción de mortalidad.',
  },
  {
    id: 'dl',
    title: 'Deep Learning',
    description: 'Redes neuronales profundas que procesan datos complejos.',
    whatItDoes: 'Analiza imágenes, audio y texto con alta precisión.',
    example: 'Detección de nódulos en radiografías, segmentación de resonancias.',
  },
  {
    id: 'generative',
    title: 'IA generativa',
    description: 'Modelos que crean contenido nuevo (texto, imágenes, audio).',
    whatItDoes: 'Genera respuestas, resúmenes, imágenes a partir de patrones aprendidos.',
    example: 'ChatGPT, resúmenes de historias clínicas, apoyo educativo.',
  },
  {
    id: 'rules',
    title: 'Sistemas basados en reglas',
    description: 'Lógica programada explícitamente por humanos.',
    whatItDoes: 'Aplica reglas definidas (si X entonces Y).',
    example: 'Alertas de interacciones farmacológicas, scores de riesgo predefinidos.',
  },
  {
    id: 'automation',
    title: 'Automatización inteligente',
    description: 'Combina IA con flujos de trabajo automatizados.',
    whatItDoes: 'Conecta sistemas, automatiza procesos repetitivos.',
    example: 'Codificación automática de diagnósticos, triage automatizado.',
  },
  {
    id: 'agents',
    title: 'Agentes',
    description: 'Sistemas que ejecutan tareas paso a paso usando IA.',
    whatItDoes: 'Planifica, consulta datos, genera reportes de forma autónoma.',
    example: 'Revisar historial, consultar guías, generar informe de alta.',
  },
  {
    id: 'rag',
    title: 'RAG (Retrieval-Augmented Generation)',
    description: 'IA que responde usando documentos reales en vez de inventar.',
    whatItDoes: 'Busca en documentos, guías y protocolos antes de responder.',
    example: 'Asistente basado en guías clínicas institucionales.',
  },
  {
    id: 'orchestrators',
    title: 'Orquestadores y flujos (ej. n8n)',
    description: 'Herramientas que conectan sistemas y automatizan procesos.',
    whatItDoes: 'Enlaza formularios, IA, correos, bases de datos en secuencia.',
    example: 'Formulario → IA resumidora → correo al médico → registro en HCE.',
  },
];

export const ML_VS_DL = {
  ml: {
    title: 'Machine Learning',
    items: [
      'Modelos clásicos (árboles, regresiones, SVM)',
      'Datos estructurados (tablas, números)',
      'Predicción, clasificación, riesgo',
      'Más interpretable y explicable',
    ],
    example: 'Riesgo de diabetes, reingreso, mortalidad.',
  },
  dl: {
    title: 'Deep Learning',
    items: [
      'Redes neuronales profundas',
      'Imágenes, audio, texto',
      'Más potente, menos explicable',
      'Requiere más datos y capacidad de cómputo',
    ],
    example: 'Radiografías, resonancias, notas clínicas.',
  },
  keyPhrase: 'Todo Deep Learning es Machine Learning, pero no todo ML es Deep Learning.',
};

export const GENERATIVE_AI = {
  title: 'IA generativa (ChatGPT y similares)',
  whatIs: 'Modelos que generan texto, imágenes o audio nuevo basándose en patrones aprendidos de grandes cantidades de datos.',
  whySeemsIntelligent: 'Porque produce respuestas fluidas y coherentes; pero no "sabe" nada: predice la siguiente palabra más probable.',
  doesWell: [
    'Resumir textos largos',
    'Apoyo educativo y explicaciones',
    'Borradores y redacción',
    'Explicaciones para pacientes (con revisión obligatoria)',
  ],
  doesPoorly: [
    'Inventar hechos con apariencia de verdad (alucinaciones)',
    'No distinguir fuentes fiables de inventadas',
    'Cometer errores sutiles en contextos médicos',
  ],
  allowed: [
    { title: 'Resumir textos', description: 'Reducir notas largas a síntesis.' },
    { title: 'Apoyo educativo', description: 'Explicar conceptos, no sustituir el estudio.' },
    { title: 'Borradores', description: 'Redacción inicial que siempre se revisa.' },
    { title: 'Explicaciones para pacientes', description: 'Material informativo con revisión médica obligatoria.' },
  ],
  forbidden: [
    { title: 'Diagnóstico autónomo', description: 'No usar para diagnosticar sin validación.' },
    { title: 'Recomendaciones clínicas sin validación', description: 'Toda sugerencia debe contrastarse con evidencia.' },
    { title: 'Decisiones críticas', description: 'El juicio clínico no se delega.' },
  ],
  warning: 'Puede alucinar con seguridad absoluta.',
};

export const AGENTS_RAG_FLOWS = {
  agents: {
    title: 'Agentes',
    description: 'Sistemas que usan una IA para ejecutar tareas paso a paso.',
    example: 'Revisar información del paciente, consultar datos, generar un reporte de alta.',
  },
  rag: {
    title: 'RAG',
    description: 'IA que responde usando documentos reales en vez de inventar.',
    example: 'Guías clínicas, protocolos, PDFs institucionales.',
  },
  flows: {
    title: 'Flujos / Orquestadores (ej. n8n)',
    description: 'Automatizan procesos conectando sistemas.',
    example: 'Formulario → IA → resumen → correo → registro.',
  },
  keyMessage: 'La IA rara vez trabaja sola. Funciona dentro de flujos.',
};

export const MEDICAL_USE_CASES: MedicalUseCase[] = [
  {
    area: 'Radiología',
    contributes: 'Detección de hallazgos, priorización de estudios, mediciones automáticas.',
    risk: 'Errores sutiles, sobreconfianza en resultados negativos.',
    cannotDo: 'Sustituir el criterio del radiólogo ni el informe final.',
  },
  {
    area: 'Patología',
    contributes: 'Ayuda en conteos celulares, detección de patrones en histología.',
    risk: 'Variabilidad entre centros, errores en casos raros.',
    cannotDo: 'Emitir diagnósticos sin validación patológica.',
  },
  {
    area: 'Historia clínica electrónica',
    contributes: 'Documentación asistida, extracción de datos estructurados, alertas.',
    risk: 'Errores de transcripción, sesgos en registros incompletos.',
    cannotDo: 'Garantizar que la documentación sea correcta sin revisión.',
  },
  {
    area: 'Urgencias y triage',
    contributes: 'Priorización inicial, sugerencias de recursos.',
    risk: 'Clasificación errónea en casos atípicos.',
    cannotDo: 'Reemplazar la evaluación clínica del profesional.',
  },
  {
    area: 'Gestión hospitalaria',
    contributes: 'Predicción de estancias, ocupación, demanda de recursos.',
    risk: 'Modelos entrenados en datos históricos que pueden no reflejar cambios.',
    cannotDo: 'Tomar decisiones administrativas sin supervisión humana.',
  },
];

export const MYTHS: MythReality[] = [
  { myth: 'La IA piensa', reality: 'Procesa patrones estadísticos. No tiene consciencia ni comprensión.' },
  { myth: 'La IA es objetiva', reality: 'Refleja sesgos de los datos con los que fue entrenada.' },
  { myth: 'La IA reemplaza médicos', reality: 'Complementa. La responsabilidad sigue siendo del profesional.' },
  { myth: 'Si suena segura, es verdad', reality: 'Puede afirmar falsedades con total confianza (alucinaciones).' },
  { myth: 'Más datos siempre es mejor', reality: 'Datos de mala calidad amplifican sesgos y errores.' },
  { myth: 'La IA ya es consciente', reality: 'No. Es una herramienta estadística sofisticada.' },
];

export const RISKS: RiskItem[] = [
  {
    title: 'Sesgos',
    description: 'Los modelos replican e incluso amplifican sesgos presentes en los datos de entrenamiento.',
  },
  {
    title: 'Errores silenciosos',
    description: 'Puede fallar sin advertirlo, dando resultados incorrectos con apariencia correcta.',
  },
  {
    title: 'Sobreconfianza',
    description: 'La facilidad de uso puede llevar a confiar sin validar adecuadamente.',
  },
  {
    title: 'Privacidad',
    description: 'Los datos clínicos son sensibles; su uso debe cumplir normativa y consentimiento.',
  },
  {
    title: 'Responsabilidad legal',
    description: 'La IA no tiene licencia médica. El médico sí. La decisión final es responsabilidad del profesional.',
  },
];

export const CONCLUSION = {
  takeaways: [
    'La IA no es magia.',
    'Es una herramienta estadística poderosa.',
    'El criterio clínico no se delega.',
    'Entender IA es parte del médico moderno.',
  ],
  ctaText: 'Descargar guía de la clase',
  ctaHref: '#', // Placeholder
};
