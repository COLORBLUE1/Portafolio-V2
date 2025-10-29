
# Portafolio V2 — Camilo Sol

[![COVER.png](https://i.postimg.cc/0y4bpVP7/COVER.png)](https://postimg.cc/68dWKL7Q)

> Portafolio personal moderno para mostrar **experiencia, proyectos y formas de contacto**. Construido con **React + Vite**, estilos en **SCSS/CSS**, y desplegado en **Vercel**.

[![React](https://img.shields.io/badge/React-18-%2361DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF)](https://vitejs.dev/)
[![CI/CD-Vercel](https://img.shields.io/badge/Deploy-Vercel-black)](https://vercel.com/)
[![ESLint](https://img.shields.io/badge/ESLint-Configured-4B32C3)](https://eslint.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)

- 🚀 **Demo en vivo:** https://portafolio-v2-three.vercel.app/
- 🧩 **Repositorio:** https://github.com/COLORBLUE1/Portafolio-V2

---

## Tabla de contenidos
- [Características](#características)
- [Preview](#preview)
- [Stack técnico](#stack-técnico)
- [Arquitectura y estructura](#arquitectura-y-estructura)
- [Componentes](#componentes)
- [Estilos y guía visual](#estilos-y-guía-visual)
- [SEO y Accesibilidad](#seo-y-accesibilidad)
- [Rendimiento](#rendimiento)
- [Datos y configuración](#datos-y-configuración)
- [Primeros pasos](#primeros-pasos)
- [Despliegue en Vercel](#despliegue-en-vercel)
- [Roadmap](#roadmap)
- [Contribuir](#contribuir)
- [Autor](#autor)
- [Licencia](#licencia)

---

## Características

- **SPA** con secciones: *Hero*, *About*, *Skills*, *Projects*, *Contact*.
- **Responsive** (mobile‑first), tipografías limpias y layout con grid/flex.
- **Rendimiento de desarrollo** alto con **Vite** (HMR, build rápida).
- **SCSS modular** con variables, mixins y separación por dominios.
- **Tarjetas de proyecto** reutilizables, datos centralizados en `src/data`.
- **Formulario de contacto** listo para integrar EmailJS/Formspree.
- **CI/CD en Vercel** y previsualizaciones por PR (Preview Deployments).
- **Linting** con ESLint y formateo con Prettier (opcional).

---

## Preview

<p align="center">
  <img src="https://i.postimg.cc/JhcC1h6M/shot-Y-m-d-H-M-S.png" alt="Contact" width="75%"/>
</p>

<p align="center">
  <img src="https://i.postimg.cc/zfmqz6q7/2.png" alt="Hero" width="75%"/>
</p>

<p align="center">
  <img src="https://i.postimg.cc/vmWbchm3/23.png" alt="Projects" width="75%"/>
</p>


---

## Stack técnico

- **Framework/UI:** React 18 (con Vite 5)
- **Lenguajes:** JavaScript, HTML, SCSS/CSS  
- **Herramientas:** ESLint, (opcional) Prettier
- **Build y dev server:** Vite
- **Hosting:** Vercel

**Scripts típicos**

```bash
npm install       # o pnpm/yarn
npm run dev       # entorno de desarrollo
npm run build     # build producción (salida en dist/)
npm run preview   # servir dist/ localmente
npm run lint      # análisis estático
```

---

## Arquitectura y estructura

```
Portafolio-V2/
├─ public/                      # estáticos públicos (favicons, imágenes crudas)
├─ src/
│  ├─ assets/                   # imágenes optimizadas, fuentes, íconos
│  ├─ components/               # UI reutilizable (Button, Card, Navbar, Tag, Modal)
│  ├─ sections/                 # secciones de página (Hero, About, Skills, Projects, Contact)
│  ├─ data/                     # data estática (projects.js, skills.js, profile.js)
│  ├─ styles/                   # SCSS global (variables, mixins, resets, base)
│  ├─ hooks/                    # hooks personalizados (useScrollSpy, useTheme)
│  ├─ App.jsx                   # layout y orquestación de secciones
│  └─ main.jsx                  # entrada (hydrate/render)
├─ index.html
├─ package.json
├─ vite.config.js
├─ eslint.config.js
├─ vercel.json                  # redirects/headers (si aplica)
└─ README.md
```

**Patrones clave**
- **Data‑driven UI:** las secciones consumen datos desde `src/data/*.js`.
- **Separation of Concerns:** componentes puros, estilos en SCSS, lógica en hooks.
- **Atomic-ish:** componentes básicos (átomos) → compuestos (moleculas) → secciones.

---

## Componentes

> Lista breve de los principales componentes y sus props/uso.

### `Navbar`
- **Ruta:** `src/components/Navbar.jsx`
- **Rol:** navegación sticky, enlaces a secciones, resaltado activo (scrollspy).
- **Props sugeridos:** `sections` (array), `current` (id activa), `onNavigate(id)`.

```jsx
<Navbar
  sections={[
    {{ id: "home", label: "Inicio" }},
    {{ id: "projects", label: "Proyectos" }},
    {{ id: "contact", label: "Contacto" }},
  ]}
  current={currentId}
  onNavigate={(id) => scrollToSection(id)}
/>
```

### `Hero`
- **Ruta:** `src/sections/Hero.jsx`
- **Rol:** presentación, CTA, links a redes.
- **Props sugeridos:** `title`, `subtitle`, `ctaText`, `onCta`.

### `ProjectCard`
- **Ruta:** `src/components/ProjectCard.jsx`
- **Rol:** tarjeta de proyecto con imagen, descripción, tech y enlaces.
- **Props:** `project` (objeto con `title`, `description`, `tech`, `image`, `liveUrl`, `repoUrl`).

```jsx
<ProjectCard project={p} />
```

### `SkillsGrid`
- **Ruta:** `src/components/SkillsGrid.jsx`
- **Rol:** muestra íconos/etiquetas de tecnologías.
- **Props:** `items` (array de strings/objetos).

### `ContactForm`
- **Ruta:** `src/sections/Contact.jsx` o `components/ContactForm.jsx`
- **Rol:** formulario de contacto con validación.
- **Props:** `onSubmit(data)`; integra EmailJS/Formspree vía env vars.

> Otros: `Footer`, `Button`, `Tag`, `Modal`, `SectionTitle`, `SocialLinks`.

---

## Estilos y guía visual

- **SCSS global** en `src/styles/` con:
  - `_variables.scss` → colores, tipografías, z-index, breakpoints.
  - `_mixins.scss` → media queries, contenedores, truncado de texto, sombras.
  - `_reset.scss` / `_base.scss` → normalización y reglas base.
- **Breakpoints sugeridos:** `480px`, `768px`, `1024px`, `1280px`.
- **Tipografías:** Inter/Roboto/Poppins.
- **Componentes:**
  - **Botones:** tamaños sm/md/lg, estados `:hover`, `:focus-visible`, `:disabled`.
  - **Cards:** borde suave, sombra ligera, hover‑lift 4–6px.
- **Dark/Light:** variable `data-theme` en `<html>`; persistencia en `localStorage`.

---

## SEO y Accesibilidad

- **SEO básico:** title/description/OG tags en `index.html` (+ social preview).
- **Sitemap/robots:** opcional en `public/`.
- **A11y:** foco visible, `aria-label` en íconos, contraste AA, semántica (`<header>`, `<main>`, `<section>`), `skip to content`.

---

## Rendimiento

- **Imágenes**: `srcset`/`sizes`, WebP/AVIF si aplica, `loading="lazy"`.
- **Code‑splitting**: `import()` para secciones pesadas.
- **Preload**: fuentes críticas (`<link rel="preload">`).
- **Lighthouse**: medir y ajustar (Performance/Accessibility/Best Practices/SEO).

---

## Datos y configuración

**Ejemplo `src/data/projects.js`:**
```js
export const projects = [
  {{ 
    title: "Nombre del Proyecto",
    description: "Qué hace y por qué importa.",
    tech: ["React", "Vite", "SCSS"],
    image: "/assets/projects/proyecto-1.png",
    liveUrl: "https://...",
    repoUrl: "https://..."
  }},
];
```

**Variables de entorno (si usas EmailJS/Formspree):**
```bash
VITE_EMAILJS_PUBLIC_KEY=...
VITE_EMAILJS_SERVICE_ID=...
VITE_EMAILJS_TEMPLATE_ID=...
```

---

## Primeros pasos

```bash
# 1) Clonar
git clone https://github.com/COLORBLUE1/Portafolio-V2
cd Portafolio-V2

# 2) Instalar deps
npm install  # o pnpm/yarn

# 3) Desarrollo
npm run dev

# 4) Build y preview
npm run build
npm run preview
```

> Requisitos: **Node.js 18+** y gestor de paquetes actualizado.

---

## Despliegue en Vercel

- **Import Project** desde GitHub y usa preset **Vite**.
- **Build Command:** `npm run build`
- **Output:** `dist`
- **Variables** (si tienes EmailJS/Formspree): Project → Settings → Environment Variables.
- **Preview Deployments** en cada PR para revisar cambios antes de producción.

---

## Roadmap

- Modo **oscuro/claro** con toggle.
- **Animaciones** con Framer/GSAP.
- i18n (ES/EN).
- Tests con **Vitest + RTL**.
- Blog o CMS ligero (Contentlayer/MDX).

---

## Contribuir

1. Fork.
2. Rama feature: `git checkout -b feature/mi-mejora`
3. Commits claros: `feat(projects): agrega proyecto X`
4. Push y PR.

---

## Autor

**Camilo Sol**  
🔗 Demo: https://portafolio-v2-three.vercel.app/  
📦 Repo: https://github.com/COLORBLUE1/Portafolio-V2

---

## Licencia

MIT © Camilo Sol
