# 🤖 Prompts para Generar la Aplicación

Este documento contiene una guía completa de los prompts utilizados para generar esta aplicación frontend de gestión de proyectos con IA, desde la concepción inicial hasta la integración completa con el backend.

---

## 📋 Índice

1. [Configuración Inicial del Proyecto](#1-configuración-inicial-del-proyecto)
2. [Estructura y Arquitectura](#2-estructura-y-arquitectura)
3. [Página Principal (Landing)](#3-página-principal-landing)
4. [Dashboard Ejecutivo](#4-dashboard-ejecutivo)
5. [Gestión de Proyectos](#5-gestión-de-proyectos)
6. [Análisis con IA](#6-análisis-con-ia)
7. [Cliente API y Backend](#7-cliente-api-y-backend)
8. [Integración y Despliegue](#8-integración-y-despliegue)

---

## 1. Configuración Inicial del Proyecto

### Prompt 1.1: Inicialización del Proyecto

```
Crear un proyecto frontend para una aplicación de gestión de proyectos corporativos 
con las siguientes características:

- Estructura modular organizada por features
- HTML5, CSS3 y JavaScript vanilla (ES6+)
- Sin frameworks pesados, enfoque en rendimiento
- Diseño responsivo y moderno
- Preparado para integración con API REST

Generar:
1. Estructura de carpetas
2. package.json con configuración básica
3. README.md inicial
4. .gitignore apropiado
```

### Prompt 1.2: Configuración de Dependencias

```
Configurar el proyecto con las siguientes dependencias de desarrollo:

- http-server para servidor local
- Scripts npm para desarrollo (dev) y producción (start)
- Configuración para CORS habilitado
- Puerto 8080 con cache deshabilitado para desarrollo

Crear los scripts necesarios en package.json
```

---

## 2. Estructura y Arquitectura

### Prompt 2.1: Arquitectura de Features

```
Diseñar una arquitectura modular basada en features para la aplicación con:

Estructura propuesta:
```
/
├── index.html (página principal)
├── api-client.js (cliente centralizado)
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

Cada feature debe:
- Ser autocontenida
- Tener su HTML y JS separados
- Seguir nomenclatura consistente (page-*)
- Facilitar mantenimiento y escalabilidad
```

### Prompt 2.2: Cliente API Centralizado

```
Crear un módulo api-client.js que centralice todas las llamadas al backend con:

Funcionalidades:
- Configuración de URL base del API
- Métodos para todas las operaciones CRUD
- Manejo de errores HTTP
- Construcción dinámica de URLs con parámetros
- Soporte para diferentes entornos (local, docker, producción)

Endpoints a incluir:
- Proyectos (list, get, create, update, delete)
- Dashboard stats
- Tareas por proyecto
- Análisis con IA
- Historial de proyectos

Implementar con fetch API y promesas
```

---

## 3. Página Principal (Landing)

### Prompt 3.1: Diseño de la Landing Page

```
Crear una página principal (index.html) moderna y atractiva para la aplicación 
de gestión de proyectos con IA que incluya:

Elementos visuales:
- Header con branding y navegación
- Hero section con título impactante y descripción
- Tarjetas de características principales (Dashboard, Proyectos, IA)
- Sección de tecnologías utilizadas
- Links a recursos (API docs, health check)
- Footer corporativo

Diseño:
- Responsivo con Bootstrap 5
- Iconos de Font Awesome
- Gradientes y efectos modernos
- Animaciones sutiles (hover effects)
- Paleta de colores profesional (azules, morados)

Funcionalidad:
- Navegación a las diferentes secciones
- Check de estado del API en tiempo real
- Visualización de stats básicas
```

### Prompt 3.2: Interactividad del Landing

```
Agregar JavaScript para la página principal con:

- Verificación de estado del backend (health check)
- Carga y visualización de estadísticas en tarjetas
- Animaciones al hacer scroll
- Manejo de errores si el API no está disponible
- Feedback visual del estado de conexión
- Transiciones suaves entre secciones

Usar jQuery para manipulación del DOM y fetch para las llamadas API
```

---

## 4. Dashboard Ejecutivo

### Prompt 4.1: Layout del Dashboard

```
Crear un dashboard ejecutivo (page-executive-dashboard.html) con:

Layout principal:
- Header con título, filtros y botón de actualización
- Grid de KPI cards (métricas principales)
- Sección de gráficos principales (2 columnas)
- Sección de análisis detallado
- Tabla de proyectos filtrable

Métricas a mostrar:
- Total de proyectos
- Proyectos activos
- Tasa de éxito
- Proyectos en riesgo
- Tareas completadas
- Eficiencia promedio

Diseño:
- Cards con iconos y colores distintivos
- Gráficos responsivos
- Filtros por período, estado y riesgo
- Diseño limpio estilo corporativo
```

### Prompt 4.2: Visualizaciones con Chart.js

```
Implementar gráficos interactivos con Chart.js en el dashboard:

Gráficos requeridos:
1. Proyectos por Estado (Bar Chart)
   - Eje X: Estados (En Progreso, Completado, Pausado, etc.)
   - Colores por estado

2. Tendencia Temporal (Line Chart)
   - Proyectos iniciados vs completados por mes
   - Múltiples líneas con interpolación suave

3. Distribución de Riesgos (Doughnut Chart)
   - Porcentaje por nivel de riesgo (Bajo, Medio, Alto)
   - Colores: verde, amarillo, rojo

4. Eficiencia por Equipo (Radar Chart)
   - Múltiples métricas (velocidad, calidad, comunicación, etc.)
   - Comparación de equipos

Configuración:
- Responsive: true
- Plugins: leyendas, tooltips personalizados
- Animaciones suaves
- Colores consistentes con la marca
```

### Prompt 4.3: Lógica del Dashboard

```
Implementar la lógica JavaScript (page-executive-dashboard.js) con:

Estado de la aplicación:
- Todos los proyectos cargados
- Proyectos filtrados según criterios
- Estado de los filtros activos
- Referencias a los gráficos de Chart.js

Funcionalidades principales:
1. Carga inicial de datos desde el API
2. Actualización de KPIs dinámicamente
3. Creación y actualización de todos los gráficos
4. Sistema de filtros (período, estado, riesgo)
5. Aplicación de filtros a todos los gráficos
6. Tabla de proyectos con búsqueda
7. Modo mockup para desarrollo sin backend
8. Actualización manual con botón refresh
9. Timestamp de última actualización

Arquitectura:
- Funciones modulares y reutilizables
- Event listeners bien organizados
- Manejo de errores robusto
- Loading states
```

---

## 5. Gestión de Proyectos

### Prompt 5.1: Listado de Proyectos

```
Crear la página de listado de proyectos (page-projects.html) con:

Elementos principales:
- Header con título y botón "Nuevo Proyecto"
- Barra de búsqueda y filtros
- Grid de tarjetas de proyectos (responsive)
- Modal para crear/editar proyectos
- Badges de estado y prioridad
- Acciones rápidas (ver, editar, eliminar)

Información en cada tarjeta:
- Nombre del proyecto
- Descripción breve
- Estado (badge colorido)
- Nivel de riesgo (indicador visual)
- Progreso (barra de progreso)
- Fechas de inicio y fin
- Responsable
- Acciones (botones)

Diseño:
- Grid responsivo (1, 2, 3, 4 columnas según viewport)
- Hover effects
- Iconografía clara
- Color coding por estado/riesgo
```

### Prompt 5.2: CRUD de Proyectos

```
Implementar el JavaScript para gestión de proyectos con operaciones CRUD completas:

Funcionalidades:
1. Listar proyectos
   - Carga desde API
   - Renderizado en grid
   - Filtrado local

2. Crear proyecto
   - Modal con formulario
   - Validación de campos
   - POST al API
   - Actualización de la lista

3. Editar proyecto
   - Pre-carga de datos en modal
   - PUT al API
   - Actualización inline

4. Eliminar proyecto
   - Confirmación
   - DELETE al API
   - Animación de salida

5. Ver detalle
   - Navegación a página de detalle
   - Paso de ID por URL params

Features adicionales:
- Búsqueda en tiempo real
- Filtros por estado/riesgo
- Ordenamiento
- Estados de carga
- Mensajes de éxito/error
- Modo mockup con datos de prueba
```

### Prompt 5.3: Detalle de Proyecto

```
Crear página de detalle de proyecto (page-project-detail.html) que muestre:

Secciones principales:
1. Header
   - Nombre del proyecto
   - Estado y riesgo
   - Botón volver

2. Información General (Cards)
   - Descripción completa
   - Fechas (inicio, fin, duración)
   - Responsable y equipo
   - Presupuesto y costos
   - Tecnologías utilizadas

3. Métricas y KPIs
   - Progreso general
   - Tareas (total, completadas, pendientes)
   - Eficiencia
   - Calidad
   - Indicadores visuales

4. Gestión de Tareas
   - Lista de tareas del proyecto
   - Crear nueva tarea
   - Editar/eliminar tareas
   - Cambiar estados
   - Filtros por estado

5. Análisis
   - Gráfico de progreso temporal
   - Distribución de tareas
   - Botón para análisis con IA

Diseño:
- Layout en 2 columnas (info + métricas)
- Cards separadas por sección
- Colores consistentes
- Responsive design
```

### Prompt 5.4: Lógica de Detalle y Tareas

```
Implementar JavaScript para la página de detalle (page-project-detail.js):

Inicialización:
- Obtener projectId de URL params
- Cargar datos del proyecto desde API
- Cargar tareas asociadas
- Renderizar toda la información

Gestión de Tareas:
- Listar tareas del proyecto
- Crear nueva tarea (modal)
- Editar tarea existente
- Eliminar tarea con confirmación
- Cambiar estado de tarea
- Actualizar estadísticas al modificar tareas

Visualizaciones:
- Gráfico de progreso temporal (Line chart)
- Distribución de tareas por estado (Doughnut)
- Actualización dinámica de KPIs

Interacciones:
- Navegación a análisis con IA
- Volver al listado
- Refresh de datos
- Estados de carga
- Manejo de errores
```

---

## 6. Análisis con IA

### Prompt 6.1: Interfaz de Análisis IA

```
Crear página de análisis con IA (page-project-ia.html) que incluya:

Layout principal:
1. Header
   - Nombre del proyecto
   - Botones: Volver, Nuevo Análisis

2. Configuración de Análisis
   - Select de tipo de análisis
     * Análisis General
     * Análisis de Riesgos
     * Optimización de Recursos
     * Predicción de Tiempos
     * Recomendaciones
   - Textarea para contexto adicional
   - Botón "Generar Análisis"

3. Resultados del Análisis
   - Card de resultado principal
   - Secciones dinámicas según tipo:
     * Resumen ejecutivo
     * Riesgos identificados (con nivel)
     * Recomendaciones priorizadas
     * Métricas predictivas
     * Insights clave
     * Plan de acción sugerido

4. Historial de Análisis
   - Lista de análisis previos
   - Timestamp y tipo
   - Ver análisis anterior
   - Comparar análisis

Diseño:
- Iconos de IA modernos
- Loading animation durante análisis
- Cards expandibles
- Colores que denoten criticidad
- Badges para categorías
```

### Prompt 6.2: Lógica del Análisis IA

```
Implementar la lógica JavaScript (page-project-ia.js) para:

Flujo principal:
1. Cargar información del proyecto
2. Configurar tipo de análisis
3. Enviar solicitud al endpoint de IA
4. Mostrar loading animation
5. Procesar y renderizar respuesta
6. Guardar en historial
7. Permitir exportar/compartir resultados

Procesamiento de respuesta:
- Parse de JSON estructurado
- Renderizado dinámico según tipo de análisis
- Visualización de riesgos con colores
- Ordenamiento de recomendaciones por prioridad
- Formateo de métricas predictivas

Historial:
- Guardar localmente (localStorage)
- Sincronizar con backend
- Permitir ver análisis previos
- Comparación lado a lado

Features:
- Modo mockup con análisis simulados
- Regenerar análisis
- Exportar a PDF/JSON
- Compartir vía link
- Feedback sobre utilidad
```

---

## 7. Cliente API y Backend

### Prompt 7.1: Configuración del Cliente API

```
Configurar el cliente API (api-client.js) para trabajar con:

Ambientes:
- LOCAL: http://localhost:3000/api
- DOCKER: /api (proxy via nginx)
- PRODUCTION: https://hackaton-nttdata-github-team-backen.vercel.app/api

Funcionalidades:
- Toggle entre ambientes (USE_DOCKER_API flag)
- Construcción dinámica de URLs
- Reemplazo de parámetros en paths (:id, :projectId, etc.)
- Headers estándar (Content-Type, CORS)

Estructura de endpoints:
- PROJECTS.*
- TASKS.*
- DASHBOARD.*
- AI_ANALYSIS.*

Helpers:
- buildUrl(endpoint, params)
- replaceParams(url, params)
- handleResponse(response)
- handleError(error)
```

### Prompt 7.2: Integración con Backend en Vercel

```
Integrar el frontend con el backend desplegado en Vercel:

Configuración:
- URL base: https://hackaton-nttdata-github-team-backen.vercel.app
- Actualizar todas las URLs hardcodeadas
- Configurar CORS apropiadamente
- Verificar endpoints disponibles

Actualizar en todos los archivos:
1. api-client.js - LOCAL_API_BASE
2. page-executive-dashboard.js - API_ENDPOINT
3. page-projects.js - API_ENDPOINTS
4. page-project-detail.js - API_ENDPOINTS
5. page-project-ia.js - API_ENDPOINT
6. index.html - health check y stats endpoints

Validar:
- Health check responde correctamente
- CORS permite solicitudes desde localhost
- Todas las operaciones CRUD funcionan
- Manejo de errores apropiado
```

---

## 8. Integración y Despliegue

### Prompt 8.1: Preparación para Producción

```
Preparar la aplicación para producción:

Optimizaciones:
- Minificar archivos CSS/JS (opcional)
- Optimizar imágenes
- Configurar cache headers
- Eliminar código de debugging
- Validar todos los links

Documentación:
- README.md completo con:
  * Descripción del proyecto
  * Tecnologías utilizadas
  * Instrucciones de instalación
  * Cómo ejecutar localmente
  * Endpoints del API
  * Estructura del proyecto
  * Features principales
  * Screenshots (opcional)
  
- PROMPTS.md con todos los prompts utilizados

Configuración:
- Verificar package.json
- Scripts de npm correctos
- .gitignore apropiado
- Variables de entorno si aplica
```

### Prompt 8.2: Testing y Validación

```
Realizar validación completa de la aplicación:

Tests manuales:
1. Navegación entre páginas
2. Todas las operaciones CRUD
3. Filtros y búsquedas
4. Gráficos se renderizan correctamente
5. Responsive design en diferentes dispositivos
6. Manejo de errores del API
7. Estados de carga
8. Validaciones de formularios

Checklist de integración:
- [ ] Health check funciona
- [ ] Listar proyectos
- [ ] Crear proyecto
- [ ] Editar proyecto
- [ ] Eliminar proyecto
- [ ] Ver detalle
- [ ] Dashboard carga estadísticas
- [ ] Gráficos se actualizan
- [ ] Filtros funcionan
- [ ] Análisis con IA responde
- [ ] Gestión de tareas
- [ ] Navegación sin errores
- [ ] Responsive en móvil
- [ ] Responsive en tablet
- [ ] Cross-browser (Chrome, Firefox, Safari)
```

### Prompt 8.3: Despliegue

```
Desplegar la aplicación frontend:

Opciones de hosting:
1. GitHub Pages
   - Push a rama gh-pages
   - Configurar en Settings
   - URL: https://username.github.io/repo

2. Vercel
   - Conectar repositorio
   - Build settings automáticas
   - Configurar variables de entorno

3. Netlify
   - Deploy desde GitHub
   - Configurar redirects
   - HTTPS automático

Configuración post-deploy:
- Verificar URL del backend en producción
- Actualizar CORS en backend si es necesario
- Verificar todos los endpoints funcionan
- Configurar dominio personalizado (opcional)
- Monitoreo básico
```

---

## 🎯 Prompts Adicionales Útiles

### Debugging y Solución de Problemas

```
Debugging de errores CORS:
"El frontend no puede conectarse al backend. Error: CORS policy blocked.
Backend está en: https://hackaton-nttdata-github-team-backen.vercel.app
Frontend está en: http://localhost:8080

Diagnosticar y resolver:
1. Verificar configuración CORS en backend
2. Verificar headers en requests
3. Confirmar URL correcta del API
4. Test con curl
5. Implementar solución"
```

```
Optimización de rendimiento:
"La aplicación carga lento. Analizar y optimizar:
1. Tamaño de librerías externas
2. Número de llamadas al API
3. Renderizado de gráficos
4. Imágenes sin optimizar
5. JavaScript no minificado

Proponer mejoras específicas con código"
```

### Mejoras Incrementales

```
Agregar feature X:
"Implementar nueva funcionalidad: [DESCRIPCIÓN]

Requisitos:
- Debe integrarse con la arquitectura existente
- Seguir los mismos patrones de código
- Actualizar documentación
- No romper funcionalidades existentes

Generar:
1. HTML necesario
2. JavaScript
3. Integración con API
4. Actualización de navegación
5. Tests básicos"
```

```
Mejorar UX:
"Mejorar la experiencia de usuario en [PÁGINA/FEATURE]:

Aspectos a mejorar:
- Loading states más claros
- Feedback visual inmediato
- Animaciones suaves
- Mensajes de error amigables
- Confirmaciones antes de acciones destructivas
- Tooltips informativos
- Atajos de teclado

Implementar mejoras específicas con código"
```

---

## 📚 Recursos y Referencias

### Librerías Utilizadas

- **Bootstrap 5.3.0**: https://getbootstrap.com/
- **jQuery 3.6.0**: https://jquery.com/
- **Chart.js 4.4.0**: https://www.chartjs.org/
- **Font Awesome 6.4.0**: https://fontawesome.com/

### Documentación de APIs

- **Fetch API**: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
- **Chart.js Docs**: https://www.chartjs.org/docs/latest/
- **Bootstrap Components**: https://getbootstrap.com/docs/5.3/components/

### Buenas Prácticas

- **Clean Code**: Nombres descriptivos, funciones pequeñas, DRY
- **Separation of Concerns**: HTML, CSS, JS separados
- **Progressive Enhancement**: Funciona sin JS, mejor con JS
- **Responsive Design**: Mobile-first approach
- **Accessibility**: ARIA labels, semantic HTML, keyboard navigation

---

## ✅ Checklist de Generación

Al usar estos prompts, asegurarse de:

- [ ] Seguir el orden sugerido (base → features → integración)
- [ ] Probar cada módulo antes de continuar
- [ ] Mantener consistencia en nombres y estructura
- [ ] Documentar cambios importantes
- [ ] Validar integración con backend
- [ ] Verificar responsive design
- [ ] Optimizar antes de desplegar
- [ ] Actualizar README y documentación

---

## 🎓 Notas Finales

Estos prompts son una guía para recrear o extender la aplicación. Pueden adaptarse según:

- Requisitos específicos del proyecto
- Tecnologías disponibles
- Restricciones de tiempo
- Nivel de experiencia del equipo
- Necesidades del cliente

**Consejo**: Usar los prompts de forma iterativa, refinando según los resultados obtenidos.

---

**Documento generado para la Hackaton NTT DATA 2026**  
**Equipo: GitHub Team**
