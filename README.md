# Introducción a la IA en Medicina

Landing page de una clase de 2 horas para estudiantes de medicina. Contenido conceptual, clínico y estratégico sobre inteligencia artificial — sin programación ni matemáticas.

## Requisitos

- Node.js 18+
- npm

## Instalación

```bash
npm install
```

## Ejecutar

```bash
ng serve
```

O bien:

```bash
npm start
```

Abre [http://localhost:4200](http://localhost:4200) en tu navegador.

## Build para producción

```bash
npm run build
```

Los archivos se generan en `dist/ai-medicine-landing/browser/`.

## Desplegar en Firebase

1. **Instalar Firebase CLI** (si no lo tienes):

```bash
npm install -g firebase-tools
```

2. **Iniciar sesión en Firebase**:

```bash
firebase login
```

3. **Configurar el proyecto** (si es la primera vez):

```bash
firebase init hosting
```

   - Selecciona "Use an existing project" o crea uno nuevo
   - Public directory: `dist/ai-medicine-landing/browser` (ya configurado en firebase.json)
   - Single-page app: Sí

4. **Compilar y desplegar**:

```bash
npm run deploy
```

O manualmente:

```bash
npm run build:prod
firebase deploy
```

## Estructura del proyecto

- **`src/app/data/ai-course-content.ts`** — Contenido central del curso (textos, datos)
- **`src/app/hero/`** — Sección hero con título y CTA
- **`src/app/what-is-ai/`** — Definición honesta de IA
- **`src/app/ai-map/`** — Mapa general del ecosistema IA
- **`src/app/ml-vs-dl/`** — Machine Learning vs Deep Learning
- **`src/app/generative-ai/`** — IA generativa (ChatGPT, usos, riesgos)
- **`src/app/agents-rag-flows/`** — Agentes, RAG y automatización
- **`src/app/medical-use-cases/`** — Casos reales en medicina
- **`src/app/myths/`** — Mitos vs realidad
- **`src/app/risks/`** — Riesgos y responsabilidad clínica
- **`src/app/conclusion/`** — Cierre y takeaways

## Tecnologías

- Angular 17+ (standalone components)
- TailwindCSS
- SPA sin backend
