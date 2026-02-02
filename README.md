# 🚀 Hackaton NTT DATA – Frontend

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](http://127.0.0.1:8080)
[![Backend](https://img.shields.io/badge/backend-vercel-black)](https://hackaton-nttdata-github-team-backen.vercel.app)

Este repositorio contiene el **frontend** desarrollado para la Hackaton de **NTT DATA**, enfocado en la visualización y gestión de proyectos mediante dashboards ejecutivos y vistas asistidas por IA.

El proyecto está construido como una aplicación **web estática** usando **HTML, CSS y JavaScript**, organizada por *features* para facilitar la escalabilidad y el mantenimiento, con integración completa al backend desplegado en Vercel.

---

## 📌 Objetivo del Proyecto

Proveer una interfaz web clara e intuitiva que permita:

- 📊 Visualizar información ejecutiva a través de dashboards interactivos con gráficos y métricas en tiempo real
- 📁 Gestionar y consultar proyectos con filtros avanzados y búsqueda
- 🤖 Acceder a análisis y recomendaciones apoyadas por IA
- 📈 Analizar estadísticas de proyectos, tareas y estados
- 🎯 Simular un flujo real de una plataforma corporativa con conexión a API REST

---

## 🧱 Estructura del Proyecto

```
├── index.html
├── api-client.js
├── package.json
├── package-lock.json
├── README.md
└── feature/
    ├── dashboard/
    │   ├── page-executive-dashboard.html
    │   └── page-executive-dashboard.js
    └── projects/
        ├── page-projects.html
        ├── page-projects.js
        ├── page-project-detail.html
        ├── page-project-detail.js
        ├── page-project-ia.html
        └── page-project-ia.js
```

---

## 🛠 Tecnologías Utilizadas

- **HTML5** – Estructura semántica de las vistas
- **CSS3** – Estilos modernos con Flexbox y Grid
- **JavaScript (ES6+)** – Lógica de negocio y manejo del DOM
- **jQuery 3.6.0** – Manipulación del DOM y AJAX
- **Chart.js 4.4.0** – Gráficos interactivos y visualizaciones
- **Bootstrap 5.3.0** – Framework CSS para diseño responsivo
- **Font Awesome 6.4.0** – Iconografía
- **Fetch API** – Consumo de servicios REST
- **http-server** – Servidor local para desarrollo

### Backend Integration
- **API REST** desplegada en Vercel
- **CORS** habilitado para comunicación cross-origin
- Endpoints centralizados en `api-client.js`

---

## 📄 Descripción de Features

### 🏠 Página Principal
**Archivo:** `index.html`

- Punto de entrada de la aplicación
- Navegación hacia los distintos módulos

---

### 📊 Dashboard Ejecutivo
**Ruta:** `feature/dashboard/`

**Archivos:**
- `page-executive-dashboard.html`
- `page-executive-dashboard.js`

**Funcionalidades:**
- Visualización de indicadores clave
- Resumen ejecutivo de proyectos
- Enfoque en toma de decisiones

---

### 📁 Gestión de Proyectos
**Ruta:** `feature/projects/`

#### 📋 Listado de Proyectos
- **HTML:** `page-projects.html`
- **JS:** `page-projects.js`

Permite visualizar todos los proyectos disponibles y navegar al detalle.

---

#### 🔍 Detalle de Proyecto
- **HTML:** `page-project-detail.html`
- **JS:** `page-project-detail.js`

Muestra información detallada de un proyecto específico.

---

#### 🤖 Proyecto con IA
- **HTML:** `page-project-ia.html`
- **JS:** `page-project-ia.js`

Simula análisis inteligente del proyecto:
- Recomendaciones
- Insights
- Apoyo a decisiones estratégicas

---

## 🔌 Cliente API

**Archivo:** `api-client.js`

Centraliza las llamadas a servicios REST del backend:

- **URL Backend:** `https://hackaton-nttdata-github-team-backen.vercel.app/api`
- Abstracción del consumo de datos con `fetch`
- Configuración centralizada para fácil cambio de entorno
- Manejo de errores y respuestas
- Soporte para operaciones CRUD completas

### Endpoints Disponibles

- **Proyectos:** `/api/projects` - Listar, crear, actualizar, eliminar
- **Dashboard:** `/api/projects/dashboard/stats` - Estadísticas ejecutivas
- **Tareas:** `/api/projects/:id/tasks` - Gestión de tareas por proyecto
- **Health Check:** `/health` - Estado del servicio
- **Documentación:** `/api-docs` - Swagger UI

---

## ▶️ Cómo Ejecutar el Proyecto

### Requisitos Previos

- Node.js 14+ (opcional, para servidor local)
- Navegador web moderno (Chrome, Firefox, Safari, Edge)

### Opción 1: Servidor Local (Recomendada)

```bash
# Clonar el repositorio
git clone https://github.com/jnuflox/HackatonNTTDATA_GithubTeam_FrontEnd.git

# Navegar al directorio
cd HackatonNTTDATA_GithubTeam_FrontEnd

# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo (puerto 8080)
npm run dev
```

La aplicación se abrirá automáticamente en `http://127.0.0.1:8080`

### Opción 2: Ejecución Directa

Simplemente abrir `index.html` en tu navegador (algunas funcionalidades pueden requerir servidor local debido a CORS).

---

## ✅ Buenas Prácticas Aplicadas

- ✨ Organización modular por *features*
- 📦 Separación clara de responsabilidades (HTML, CSS, JS)
- 🔧 Código JavaScript modular y mantenible
- 📝 Nombres de archivos y variables descriptivos
- 🎨 Diseño responsivo con Bootstrap
- 🔒 Manejo centralizado de configuración API
- 📊 Visualizaciones interactivas con Chart.js
- ♿ Consideraciones de accesibilidad
- 🌐 Integración completa con backend REST
- 📱 Mobile-first approach

---

## 🎯 Características Principales

### Dashboard Ejecutivo
- 📊 Gráficos interactivos (barras, líneas, dona, radar)
- 📈 KPIs en tiempo real
- 🔍 Filtros avanzados (período, estado, riesgo)
- 🎨 Visualización de métricas clave
- ⏱️ Actualización automática de datos

### Gestión de Proyectos
- 📋 Listado completo con búsqueda y filtros
- ➕ Creación de nuevos proyectos
- ✏️ Edición inline
- 🗑️ Eliminación con confirmación
- 📄 Vista detallada con información completa
- 🤖 Análisis con IA y recomendaciones

### Gestión de Tareas
- ✅ Creación y seguimiento de tareas
- 🎯 Asignación y priorización
- 📊 Estados personalizables
- 📈 Estadísticas por proyecto
- ⚠️ Indicadores de riesgo

---

## 🚀 Mejoras Futuras

- 🔐 Sistema de autenticación y autorización
- 👥 Gestión de usuarios y roles
- 💾 Caché local con LocalStorage
- 🔄 Estado global con Redux o similar
- ⚡ Migración a framework moderno (React/Vue/Angular)
- 🧪 Tests automatizados (Jest, Cypress)
- 📱 Progressive Web App (PWA)
- 🌙 Modo oscuro
- 🌍 Internacionalización (i18n)
- 📧 Notificaciones en tiempo real

---

## 📚 Documentación Adicional

- [Documento de Prompts](./PROMPTS.md) - Prompts utilizados para generar la aplicación
- [API Backend](https://hackaton-nttdata-github-team-backen.vercel.app/api-docs) - Documentación Swagger
- [Health Check](https://hackaton-nttdata-github-team-backen.vercel.app/health) - Estado del servicio

---

## 👥 Equipo

Proyecto desarrollado para la **Hackaton NTT DATA**  
**Equipo:** GitHub Team

### Tecnologías del Stack Completo
- **Frontend:** HTML5, CSS3, JavaScript (ES6+), jQuery, Bootstrap, Chart.js
- **Backend:** Node.js, Express.js (desplegado en Vercel)
- **API:** RESTful con documentación Swagger

---

## 📄 Licencia

Este proyecto fue desarrollado para la Hackaton NTT DATA 2026.

---

✅ **README actualizado con información completa del proyecto frontend integrado con backend en Vercel.**
