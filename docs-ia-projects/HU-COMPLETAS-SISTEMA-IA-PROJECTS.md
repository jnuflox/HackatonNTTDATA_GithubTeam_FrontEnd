# Historias de Usuario - Sistema de Gestión de Proyectos con IA

**Fecha:** 31 de enero de 2026  
**Versión:** 1.0  
**Product Owner:** Sistema IA Projects  
**Metodología:** Scrum/SAFe

---

## 📋 Resumen Ejecutivo

Este documento contiene el **Product Backlog completo** para el desarrollo del **Sistema de Gestión de Proyectos con Predictor Inteligente basado en IA**. El sistema integra capacidades de:

- **Gestión de Proyectos**: CRUD completo con seguimiento de progreso según estándares ITIL/PMP
- **Dashboard Ejecutivo**: Visualizaciones avanzadas con ApexCharts y KPIs en tiempo real
- **Análisis Predictivo IA**: Detección temprana de riesgos y recomendaciones automatizadas
- **Gestión de Tareas**: Control detallado con validación IA y cálculo de desviaciones
- **Análisis Financiero**: Presupuestos, facturas e hitos con visualizaciones
- **Gestión Documental**: Carga y versioning de L1, RFP, Propuesta Técnica, GECO
- **Historial y Auditoría**: Trazabilidad completa de cambios
- **Integraciones**: Conexión con Jira, MS Project, Excel

**Total de Historias de Usuario:** 45  
**Total de Épicas:** 8  
**Estimación Total:** ~220 puntos de historia (~44 semanas con equipo de 5 personas)

---

## 🎯 Épicas del Proyecto

| ID | Épica | Historias | Prioridad | Estimación |
|----|-------|-----------|-----------|------------|
| E1 | Dashboard Ejecutivo | 6 | Alta | 28 pts |
| E2 | Gestión de Proyectos | 8 | Crítica | 40 pts |
| E3 | Gestión de Tareas | 7 | Alta | 35 pts |
| E4 | Análisis Financiero | 5 | Media | 25 pts |
| E5 | Gestión Documental | 4 | Media | 18 pts |
| E6 | Análisis IA y Predicción | 6 | Alta | 32 pts |
| E7 | Historial y Auditoría | 4 | Media | 16 pts |
| E8 | Integraciones y DevOps | 5 | Media | 26 pts |

---

## 📊 Priorización Global

### Sprint 1 - Foundation (Crítico)
- HU-001: Configuración del Proyecto Frontend
- HU-002: Configuración del Microservicio Backend
- HU-201: Crear Nuevo Proyecto
- HU-202: Listar Proyectos con Filtros
- HU-203: Ver Detalle de Proyecto

### Sprint 2 - Core Features (Alta)
- HU-204: Editar Proyecto Existente
- HU-205: Eliminar Proyecto
- HU-301: Crear Tarea en Proyecto
- HU-302: Listar Tareas con Filtros
- HU-101: Visualizar Dashboard Ejecutivo

### Sprint 3-8 - Características Avanzadas
[Distribuidas según dependencias y valor de negocio]

---

# 🚀 ÉPICA 1: Dashboard Ejecutivo

## HU-101: Visualizar Dashboard Ejecutivo con KPIs

**Como** Director de Proyectos (PMO)  
**Quiero** visualizar un dashboard ejecutivo con KPIs principales y gráficos interactivos  
**Para** tomar decisiones estratégicas basadas en datos consolidados de todos los proyectos

### Criterios de Aceptación

- [ ] **DADO** que accedo al dashboard ejecutivo  
      **CUANDO** la página carga  
      **ENTONCES** veo los siguientes KPIs principales:
      - Total de proyectos activos
      - Total de proyectos completados
      - Total de proyectos en riesgo (rojo/amarillo)
      - Porcentaje de cumplimiento global

- [ ] **DADO** que el dashboard está cargado  
      **CUANDO** visualizo los gráficos  
      **ENTONCES** veo:
      - Gráfico de donut: Distribución de proyectos por estado
      - Gráfico de barras: Proyectos por nivel de riesgo
      - Gráfico de líneas: Evolución del progreso mensual
      - Gráfico de área: Distribución presupuestaria

- [ ] **DADO** que hay datos en el sistema  
      **CUANDO** los gráficos se renderizan  
      **ENTONCES** usan ApexCharts con colores corporativos y son interactivos (tooltips, zoom)

- [ ] **DADO** que el dashboard se está cargando  
      **CUANDO** los datos no han llegado  
      **ENTONCES** veo un indicador de carga (spinner) en cada sección

- [ ] **DADO** que hay un error al cargar datos  
      **CUANDO** la API falla  
      **ENTONCES** veo un mensaje de error claro y un botón para reintentar

### Notas Técnicas
- Implementar en `page-executive-dashboard.html/js`
- Usar ApexCharts versión 3.x
- jQuery para manipulación del DOM
- Responsive design: mobile-first
- API endpoint: `GET /api/projects/stats`
- Mock data disponible en `window.mockProjectsData`

### Definición de Hecho (DoD)
- [x] Código implementado y code review completado
- [x] ApexCharts integrado correctamente
- [x] Dashboard responsive (mobile, tablet, desktop)
- [x] Modo mockup funcionando
- [x] Manejo de estados de carga y error
- [x] Pruebas visuales en diferentes resoluciones
- [x] Performance: carga < 2 segundos

### Prioridad
**Alta** - Vista principal para stakeholders ejecutivos

### Estimación
**8 puntos de historia** (~3-4 días)

### Dependencias
- HU-002: Configuración del Backend API

---

## HU-102: Filtrar Dashboard por Período, Estado y Riesgo

**Como** Director de Proyectos  
**Quiero** aplicar filtros dinámicos al dashboard (período, estado, nivel de riesgo)  
**Para** analizar segmentos específicos de proyectos según diferentes criterios

### Criterios de Aceptación

- [ ] **DADO** que estoy en el dashboard  
      **CUANDO** veo la sección de filtros  
      **ENTONCES** hay dropdowns para:
      - Período: (Todo, Último mes, Último trimestre, Último año, Personalizado)
      - Estado: (Todos, Activo, En Pausa, Completado, Cancelado)
      - Riesgo: (Todos, Verde, Amarillo, Rojo)

- [ ] **DADO** que selecciono filtros  
      **CUANDO** hago clic en "Aplicar Filtros"  
      **ENTONCES** todos los KPIs y gráficos se actualizan según los criterios seleccionados

- [ ] **DADO** que los filtros están aplicados  
      **CUANDO** cambio un filtro  
      **ENTONCES** veo una indicación visual de que hay filtros activos

- [ ] **DADO** que he aplicado filtros  
      **CUANDO** hago clic en "Limpiar Filtros"  
      **ENTONCES** se restablecen a los valores por defecto (Todo/Todos)

- [ ] **DADO** que selecciono "Período: Personalizado"  
      **CUANDO** el dropdown se expande  
      **ENTONCES** aparecen datepickers para fecha inicio y fecha fin

### Notas Técnicas
- Estado del filtro en `appState.filters`
- Función `applyFilters()` procesa y re-renderiza
- Los gráficos ApexCharts deben soportar `.updateSeries()`
- Usar debounce de 300ms para evitar múltiples llamadas

### Definición de Hecho (DoD)
- [x] Filtros funcionando correctamente
- [x] Gráficos se actualizan sin parpadeo
- [x] Estado de filtros persistente durante sesión
- [x] Validación de fechas en período personalizado
- [x] UX fluida sin bloqueos

### Prioridad
**Alta** - Funcionalidad crítica para análisis

### Estimación
**5 puntos de historia** (~2 días)

### Dependencias
- HU-101: Dashboard base debe estar implementado

---

## HU-103: Actualizar Dashboard en Tiempo Real

**Como** Director de Proyectos  
**Quiero** que el dashboard se actualice automáticamente o manualmente  
**Para** ver siempre la información más reciente sin recargar la página

### Criterios de Aceptación

- [ ] **DADO** que estoy en el dashboard  
      **CUANDO** veo el botón "Actualizar"  
      **ENTONCES** tiene un icono de recarga 🔄 y está habilitado

- [ ] **DADO** que hago clic en "Actualizar"  
      **CUANDO** se está actualizando  
      **ENTONCES** el botón muestra "Actualizando..." y se deshabilita temporalmente

- [ ] **DADO** que la actualización es exitosa  
      **CUANDO** los datos se cargan  
      **ENTONCES** todos los KPIs y gráficos se refrescan
      **Y** se actualiza la marca de tiempo "Última actualización: HH:mm:ss"

- [ ] **DADO** que hay un error en la actualización  
      **CUANDO** falla la API  
      **ENTONCES** se muestra un toast/notificación de error
      **Y** el botón vuelve a habilitarse

### Notas Técnicas
- Función `refreshDashboard()` en `page-executive-dashboard.js`
- Botón: `$('#refreshBtn').on('click', refreshDashboard)`
- Actualizar timestamp con `new Date().toLocaleString('es-ES')`
- Considerar implementar auto-refresh cada 5 minutos (opcional)

### Definición de Hecho (DoD)
- [x] Botón de actualización funcional
- [x] Timestamp visible y actualizado
- [x] Estados de carga manejados correctamente
- [x] No hay memory leaks en actualizaciones repetidas

### Prioridad
**Media** - Importante para usabilidad

### Estimación
**3 puntos de historia** (~1 día)

### Dependencias
- HU-101: Dashboard Ejecutivo base

---

## HU-104: Navegar a Detalle de Proyecto desde Dashboard

**Como** Director de Proyectos  
**Quiero** hacer clic en elementos del dashboard (gráficos, listados)  
**Para** navegar directamente al detalle de un proyecto específico

### Criterios de Aceptación

- [ ] **DADO** que hay una lista de proyectos en el dashboard  
      **CUANDO** hago clic en una fila de proyecto  
      **ENTONCES** navego a la página de detalle del proyecto con el ID correcto

- [ ] **DADO** que estoy viendo un gráfico interactivo  
      **CUANDO** hago clic en un segmento/barra del gráfico  
      **ENTONCES** se filtra la vista o navego al proyecto correspondiente

- [ ] **DADO** que navego a un detalle  
      **CUANDO** uso el botón "Atrás" del navegador  
      **ENTONCES** vuelvo al dashboard con los filtros que tenía aplicados

### Notas Técnicas
- Navegación: `window.location.href = 'page-project-detail.html?id=' + projectId`
- Eventos click en elementos ApexCharts: `chart.events.dataPointSelection`
- Guardar estado de filtros en `sessionStorage` para restaurar

### Definición de Hecho (DoD)
- [x] Navegación funcional desde múltiples puntos
- [x] URLs amigables con parámetros
- [x] Botón atrás del navegador funciona correctamente
- [x] Estado persistente de filtros

### Prioridad
**Media**

### Estimación
**3 puntos de historia**

### Dependencias
- HU-101: Dashboard Ejecutivo
- HU-203: Vista de Detalle de Proyecto

---

## HU-105: Visualizar Proyectos en Riesgo Destacados

**Como** Director de Proyectos  
**Quiero** ver una sección destacada con proyectos en riesgo crítico (rojo)  
**Para** actuar rápidamente sobre situaciones urgentes

### Criterios de Aceptación

- [ ] **DADO** que hay proyectos con nivel de riesgo rojo  
      **CUANDO** cargo el dashboard  
      **ENTONCES** veo una sección "🚨 Proyectos en Riesgo Crítico" con fondo rojo claro

- [ ] **DADO** que veo la sección de riesgo  
      **CUANDO** hay proyectos críticos  
      **ENTONCES** cada proyecto muestra:
      - Código y nombre del proyecto
      - Desviación actual (%)
      - Días de retraso estimados
      - Líder del proyecto
      - Botón "Ver Detalle"

- [ ] **DADO** que NO hay proyectos en riesgo crítico  
      **CUANDO** cargo el dashboard  
      **ENTONCES** veo mensaje "✅ No hay proyectos en riesgo crítico"

- [ ] **DADO** que hago clic en "Ver Detalle"  
      **CUANDO** navego al proyecto  
      **ENTONCES** se abre directamente en la pestaña de "Análisis IA"

### Notas Técnicas
- Filtrar proyectos donde `deviationLevel === 'red'`
- Sección destacada con CSS especial (borde, sombra, color de alerta)
- Máximo 10 proyectos mostrados, ordenados por desviación descendente

### Definición de Hecho (DoD)
- [x] Sección de alertas implementada
- [x] Diseño visual destacado y llamativo
- [x] Navegación directa funcional
- [x] Responsive en móviles

### Prioridad
**Alta** - Crítico para gestión proactiva

### Estimación
**5 puntos de historia**

### Dependencias
- HU-101: Dashboard Ejecutivo
- HU-601: Análisis IA de Proyecto

---

## HU-106: Exportar Dashboard a PDF/Excel

**Como** Director de Proyectos  
**Quiero** exportar el dashboard a PDF o Excel  
**Para** compartir reportes con stakeholders externos

### Criterios de Aceptación

- [ ] **DADO** que estoy en el dashboard  
      **CUANDO** veo los botones de exportación  
      **ENTONCES** hay opciones: "📄 Exportar PDF" y "📊 Exportar Excel"

- [ ] **DADO** que hago clic en "Exportar PDF"  
      **CUANDO** se genera el archivo  
      **ENTONCES** se descarga un PDF con:
      - Logo y encabezado corporativo
      - Fecha y hora de generación
      - Todos los KPIs principales
      - Imágenes de los gráficos principales
      - Tabla de proyectos en riesgo

- [ ] **DADO** que hago clic en "Exportar Excel"  
      **CUANDO** se genera el archivo  
      **ENTONCES** se descarga un Excel con múltiples hojas:
      - Hoja 1: Resumen de KPIs
      - Hoja 2: Listado completo de proyectos con todas las columnas
      - Hoja 3: Datos para gráficos

### Notas Técnicas
- PDF: Usar librería `jsPDF` + `html2canvas` para captura de gráficos
- Excel: Usar librería `SheetJS (xlsx)`
- Incluir filtros aplicados en el reporte
- Nombre de archivo: `Dashboard_Proyectos_YYYYMMDD_HHmmss.pdf`

### Definición de Hecho (DoD)
- [x] Exportación PDF funcional con buena calidad
- [x] Exportación Excel con datos completos y formateados
- [x] Nombres de archivo descriptivos
- [x] Pruebas en diferentes navegadores

### Prioridad
**Media** - Útil para reportería

### Estimación
**4 puntos de historia**

### Dependencias
- HU-101: Dashboard Ejecutivo completo

---

# 🎯 ÉPICA 2: Gestión de Proyectos

## HU-201: Crear un Nuevo Proyecto

**Como** Gerente de Proyecto  
**Quiero** crear un nuevo proyecto en el sistema con toda su información básica  
**Para** poder comenzar a gestionar su seguimiento y asignar tareas

### Criterios de Aceptación

- [ ] **DADO** que soy un usuario con rol de Gerente de Proyecto  
      **CUANDO** hago clic en el botón "➕ Crear Proyecto"  
      **ENTONCES** se abre un modal con un formulario que incluye:
      - Código (autogenerado editable: PRJ-XXX)
      - Nombre del proyecto (obligatorio)
      - Líder del proyecto (obligatorio)
      - Fecha inicio (obligatorio, date picker)
      - Fecha fin (obligatorio, date picker)
      - Estado (dropdown: Activo por defecto)
      - Sistema de Gestión (dropdown: Jira/Project/Excel/Otro)
      - Ruta del Sistema de Gestión (texto)
      - Progreso Planificado (% inicial, default 0)
      - Progreso Real (% inicial, default 0)

- [ ] **DADO** que estoy llenando el formulario  
      **CUANDO** completo todos los campos obligatorios  
      **ENTONCES** el botón "Guardar" se habilita

- [ ] **DADO** que he completado el formulario correctamente  
      **CUANDO** hago clic en "Guardar"  
      **ENTONCES**:
      - El proyecto se crea con código único (PRJ-XXX)
      - Se calcula automáticamente la desviación inicial (0%)
      - El nivel de desviación inicial es "verde"
      - Se muestra un mensaje de éxito
      - El modal se cierra
      - El proyecto aparece en el listado
      - Se me redirige automáticamente al detalle del nuevo proyecto

- [ ] **DADO** que intento crear un proyecto con código duplicado  
      **CUANDO** hago clic en "Guardar"  
      **ENTONCES** se muestra un error "El código PRJ-XXX ya existe"

- [ ] **DADO** que intento guardar sin completar campos obligatorios  
      **CUANDO** hago clic en "Guardar"  
      **ENTONCES** los campos faltantes se resaltan en rojo con mensaje de error

- [ ] **DADO** que la fecha de fin es anterior a la fecha de inicio  
      **CUANDO** intento guardar  
      **ENTONCES** se muestra error "La fecha de fin debe ser posterior a la fecha de inicio"

### Notas Técnicas
- Implementar en `page-projects.js`
- Función: `createProject(projectData)`
- Usar jQuery para manipulación del modal
- Validación frontend con regex y validación de fechas
- POST `/api/projects` en backend
- La desviación se calcula como: `actualProgress - plannedProgress`
- Nivel de desviación según ITIL/PMP:
  - Verde: |desviación| ≤ 5%
  - Amarillo: 5% < |desviación| ≤ 10%
  - Rojo: |desviación| > 10%

### Definición de Hecho (DoD)
- [x] Modal de creación implementado y responsive
- [x] Validaciones frontend completas
- [x] Endpoint API funcionando con validaciones backend
- [x] Pruebas unitarias del servicio `projects.service.js`
- [x] Manejo de errores con mensajes claros
- [x] Documentación API actualizada
- [x] Código revisado (code review)

### Prioridad
**Crítica** - Funcionalidad fundamental del sistema

### Estimación
**5 puntos de historia** (~2-3 días)

### Dependencias
- HU-002: Backend API configurado

---

## HU-202: Listar Proyectos con Búsqueda y Filtros

**Como** Gerente de Proyecto  
**Quiero** ver un listado completo de todos los proyectos con búsqueda y filtros avanzados  
**Para** encontrar rápidamente proyectos específicos y visualizar su estado

### Criterios de Aceptación

- [ ] **DADO** que accedo a la página de Proyectos  
      **CUANDO** la página carga  
      **ENTONCES** veo una tabla con todos los proyectos que incluye columnas:
      - Código
      - Nombre del Proyecto
      - Líder
      - Fechas (Inicio - Fin)
      - Progreso Real (%)
      - Progreso Planificado (%)
      - Desviación (% con color según nivel)
      - Estado (badge con color)
      - Acciones (Ver/Editar/Eliminar)

- [ ] **DADO** que hay proyectos en el sistema  
      **CUANDO** veo la tabla  
      **ENTONCES** cada fila muestra:
      - Indicador visual de desviación (🟢/🟡/🔴)
      - Barra de progreso visual para % real vs % planificado
      - Badge de estado con colores:
        - Activo: verde
        - En Pausa: amarillo
        - Completado: azul
        - Cancelado: gris

- [ ] **DADO** que uso la búsqueda rápida  
      **CUANDO** escribo en el campo "Buscar por código o nombre"  
      **ENTONCES** la tabla se filtra en tiempo real mostrando solo coincidencias

- [ ] **DADO** que uso los filtros avanzados  
      **CUANDO** selecciono criterios en los dropdowns:
      - Estado (Activo, En Pausa, Completado, Cancelado)
      - Fecha Inicio (rango)
      - Fecha Fin (rango)
      - Desviación (Verde, Amarillo, Rojo)  
      **ENTONCES** la tabla se actualiza mostrando solo proyectos que cumplen todos los criterios

- [ ] **DADO** que hago clic en "Limpiar Filtros"  
      **CUANDO** se ejecuta la acción  
      **ENTONCES** todos los filtros vuelven a valores por defecto y se muestra el listado completo

- [ ] **DADO** que no hay proyectos que cumplan los filtros  
      **CUANDO** aplico filtros muy restrictivos  
      **ENTONCES** veo el mensaje "No se encontraron proyectos con los criterios seleccionados"

### Notas Técnicas
- Función: `applyFilters()` en `page-projects.js`
- Estado en: `appState.filters = { code, status, startDate, endDate, deviation }`
- Búsqueda: case-insensitive, búsqueda parcial
- Filtro de desviación calcula: `Math.abs(actualProgress - plannedProgress)`
- GET `/api/projects?status=...&search=...`
- Usar debounce de 300ms para búsqueda en tiempo real

### Definición de Hecho (DoD)
- [x] Tabla responsive con todos los datos
- [x] Búsqueda en tiempo real funcional
- [x] Filtros múltiples funcionando correctamente
- [x] Performance: renderiza 100+ proyectos en < 1 segundo
- [x] Indicadores visuales claros y accesibles
- [x] Paginación implementada (opcional, si > 50 proyectos)

### Prioridad
**Crítica**

### Estimación
**5 puntos de historia**

### Dependencias
- HU-002: Backend API

---

## HU-203: Ver Detalle Completo de un Proyecto

**Como** Gerente de Proyecto  
**Quiero** ver toda la información detallada de un proyecto específico  
**Para** revisar su estado, documentos, tareas y análisis financiero

### Criterios de Aceptación

- [ ] **DADO** que hago clic en "Ver Detalle" de un proyecto  
      **CUANDO** navego a la página de detalle  
      **ENTONCES** veo una interfaz organizada en secciones:
      1. **Información General** (siempre visible al inicio)
      2. **Dashboard IA** (métricas predictivas)
      3. **Análisis Financiero** (presupuesto, facturas, hitos)
      4. **Gestión de Tareas** (listado completo con filtros)

- [ ] **DADO** que veo la sección "Información General"  
      **CUANDO** se carga  
      **ENTONCES** muestra:
      - Código del proyecto
      - Nombre del proyecto
      - Líder del proyecto
      - Fechas inicio y fin
      - Estado actual (badge)
      - Sistema de gestión (con link si existe)
      - Progreso: barra visual comparando real vs planificado
      - Desviación con indicador de color (🟢/🟡/🔴)
      - Documentos adjuntos (L1, RFP, Propuesta Técnica, GECO) con íconos de descarga

- [ ] **DADO** que veo la sección "Dashboard IA"  
      **CUANDO** se renderiza  
      **ENTONCES** muestra tarjetas (cards) con:
      - Nivel de riesgo IA (Bajo/Medio/Alto/Crítico) con color
      - Confianza del análisis (%)
      - Fecha de finalización predicha
      - Top 3 recomendaciones
      - Alertas activas

- [ ] **DADO** que veo la sección "Análisis Financiero"  
      **CUANDO** se carga  
      **ENTONCES** muestra:
      - Gráfico de donut: Presupuesto Total vs Consumido
      - Card: Total facturas (Pagadas / Pendientes)
      - Card: Monto pendiente de pago
      - Card: Hitos (Aprobados / Pendientes)
      - Porcentaje de consumo presupuestario

- [ ] **DADO** que veo la sección "Gestión de Tareas"  
      **CUANDO** se renderiza  
      **ENTONCES** veo:
      - Filtros: Código, Etapa, Hito, Estado, Responsable, Riesgo
      - Tabla con todas las tareas del proyecto
      - Resumen: X tareas totales, Y completadas, Z en riesgo

- [ ] **DADO** que hago clic en el botón "Atrás"  
      **CUANDO** se ejecuta  
      **ENTONCES** vuelvo a la lista de proyectos

- [ ] **DADO** que el proyecto tiene documentos  
      **CUANDO** hago clic en un ícono de descarga  
      **ENTONCES** se descarga o abre el documento correspondiente

### Notas Técnicas
- Implementar en `page-project-detail.html/js`
- Función: `loadProjectData()` obtiene datos de `/api/projects/:id`
- Incluye también: `GET /api/tasks/project/:projectId` para tareas
- Renderizar gráficos con ApexCharts
- Usar breadcrumbs para navegación
- URL: `page-project-detail.html?id=123`

### Definición de Hecho (DoD)
- [x] Todas las secciones implementadas
- [x] Navegación fluida entre secciones
- [x] Gráficos funcionando correctamente
- [x] Links de descarga funcionales
- [x] Responsive en todos los dispositivos
- [x] Manejo de estados de carga

### Prioridad
**Crítica**

### Estimación
**8 puntos de historia** (~3-4 días)

### Dependencias
- HU-201: Crear Proyecto
- HU-301: Gestión de Tareas (para sección de tareas)
- HU-401: Análisis Financiero

---

## HU-204: Editar Proyecto Existente

**Como** Gerente de Proyecto  
**Quiero** modificar la información de un proyecto existente  
**Para** mantener los datos actualizados conforme avanza el proyecto

### Criterios de Aceptación

- [ ] **DADO** que estoy viendo el detalle de un proyecto  
      **CUANDO** hago clic en el botón "✏️ Editar"  
      **ENTONCES** se abre un modal pre-llenado con todos los datos actuales del proyecto

- [ ] **DADO** que el modal de edición está abierto  
      **CUANDO** modifico campos  
      **ENTONCES** puedo editar:
      - Nombre
      - Líder
      - Fechas (inicio/fin)
      - Estado
      - Sistema de gestión y ruta
      - Progreso planificado
      - Progreso real

- [ ] **DADO** que modifico el progreso real  
      **CUANDO** cambio el valor  
      **ENTONCES** se recalcula automáticamente la desviación y su nivel (verde/amarillo/rojo)

- [ ] **DADO** que guardo los cambios  
      **CUANDO** hago clic en "Guardar Cambios"  
      **ENTONCES**:
      - Se validan los datos
      - Se actualiza el proyecto en backend
      - Se recalculan métricas (desviación, nivel de riesgo)
      - Se cierra el modal
      - Se refresca la vista de detalle con los nuevos datos
      - Se registra en el historial del proyecto

- [ ] **DADO** que cambio el estado de "Activo" a "En Pausa"  
      **CUANDO** guardo  
      **ENTONCES** se me solicita ingresar una justificación para el historial

### Notas Técnicas
- PUT `/api/projects/:id`
- Validaciones idénticas a creación
- Recalcular desviación: `actualProgress - plannedProgress`
- Registrar cambio en historial con: `{ date, title, description, reason }`
- Función: `updateProject(projectId, updatedData)`

### Definición de Hecho (DoD)
- [x] Modal de edición funcional
- [x] Validaciones implementadas
- [x] Actualización en backend
- [x] Recálculo de métricas
- [x] Registro en historial
- [x] Pruebas de actualización exitosas

### Prioridad
**Alta**

### Estimación
**4 puntos de historia**

### Dependencias
- HU-201: Crear Proyecto
- HU-701: Historial de Cambios

---

## HU-205: Eliminar Proyecto

**Como** Gerente de Proyecto  
**Quiero** eliminar un proyecto del sistema  
**Para** mantener limpia la base de datos eliminando proyectos cancelados o erróneos

### Criterios de Aceptación

- [ ] **DADO** que estoy viendo la lista de proyectos  
      **CUANDO** hago clic en el botón "🗑️ Eliminar" de un proyecto  
      **ENTONCES** se muestra un modal de confirmación con:
      - Advertencia: "⚠️ Esta acción no se puede deshacer"
      - Información del proyecto a eliminar (código y nombre)
      - Campo de texto: "Motivo de eliminación" (obligatorio)
      - Botones: "Cancelar" y "Confirmar Eliminación" (rojo)

- [ ] **DADO** que confirmo la eliminación sin ingresar motivo  
      **CUANDO** hago clic en "Confirmar Eliminación"  
      **ENTONCES** el campo "Motivo" se resalta en rojo solicitando información

- [ ] **DADO** que confirmo la eliminación con motivo  
      **CUANDO** hago clic en "Confirmar Eliminación"  
      **ENTONCES**:
      - El proyecto se elimina del sistema
      - Se eliminan todas sus tareas asociadas
      - Se muestra mensaje de éxito
      - El proyecto desaparece del listado
      - El modal se cierra

- [ ] **DADO** que intento eliminar un proyecto con facturas pagadas  
      **CUANDO** intento eliminarlo  
      **ENTONCES** se muestra advertencia adicional: "⚠️ Este proyecto tiene facturas pagadas. Considere cambiar el estado a 'Completado' o 'Cancelado' en lugar de eliminar"

### Notas Técnicas
- DELETE `/api/projects/:id`
- Eliminar en cascada: tareas, documentos referenciados, historial
- Considerar soft delete (marcar como eliminado) en lugar de hard delete
- Función: `deleteProject(projectId, reason)`
- Registrar eliminación en log de auditoría

### Definición de Hecho (DoD)
- [x] Modal de confirmación implementado
- [x] Validación de motivo obligatorio
- [x] Eliminación en cascada funcional
- [x] Advertencias según estado del proyecto
- [x] Log de auditoría registrado
- [x] Pruebas de eliminación

### Prioridad
**Media** - Importante pero menos frecuente

### Estimación
**3 puntos de historia**

### Dependencias
- HU-201: Crear Proyecto
- HU-301: Gestión de Tareas (para eliminación en cascada)

---

## HU-206: Calcular Desviación Automáticamente según ITIL/PMP

**Como** Sistema  
**Quiero** calcular automáticamente la desviación y su nivel de riesgo según estándares ITIL/PMP  
**Para** proporcionar indicadores precisos sin intervención manual

### Criterios de Aceptación

- [ ] **DADO** que se crea o actualiza un proyecto  
      **CUANDO** se modifican los valores de `plannedProgress` o `actualProgress`  
      **ENTONCES** se calcula automáticamente:
      - `deviation = actualProgress - plannedProgress`
      - `deviationLevel` según criterios ITIL/PMP:
        - `green`: |deviation| ≤ 5%
        - `yellow`: 5% < |deviation| ≤ 10%
        - `red`: |deviation| > 10%

- [ ] **DADO** que un proyecto tiene desviación positiva (+3%)  
      **CUANDO** se visualiza  
      **ENTONCES** se muestra: "🟢 +3.0% (Adelantado)" en color verde

- [ ] **DADO** que un proyecto tiene desviación negativa (-8%)  
      **CUANDO** se visualiza  
      **ENTONCES** se muestra: "🟡 -8.0% (Retrasado)" en color amarillo

- [ ] **DADO** que un proyecto tiene desviación crítica (-15%)  
      **CUANDO** se visualiza  
      **ENTONCES** se muestra: "🔴 -15.0% (Crítico)" en color rojo

- [ ] **DADO** que un proyecto tiene desviación exacta de 5%  
      **CUANDO** se calcula el nivel  
      **ENTONCES** se clasifica como `green` (límite inclusivo)

### Notas Técnicas
- Función: `calculateDeviationStatus(plannedProgress, actualProgress)`
- Implementar tanto en frontend (`page-projects.js`) como backend (`projects.service.js`)
- Retornar objeto: `{ deviation, deviationAbs, status, icon }`
- Usar en múltiples vistas: listado, detalle, dashboard
- Referencia: Estándares ITIL v4 y PMBOKv7

### Definición de Hecho (DoD)
- [x] Función implementada en frontend y backend
- [x] Pruebas unitarias con casos borde
- [x] Visualización consistente en todas las vistas
- [x] Documentación de la lógica de cálculo

### Prioridad
**Crítica** - Core del sistema de seguimiento

### Estimación
**3 puntos de historia**

### Dependencias
- HU-201: Crear Proyecto (requiere campos de progreso)

---

## HU-207: Integrar con Sistemas de Gestión Externos

**Como** Gerente de Proyecto  
**Quiero** vincular un proyecto con su sistema de gestión externo (Jira, MS Project, Excel)  
**Para** acceder rápidamente a la información detallada en la herramienta original

### Criterios de Aceptación

- [ ] **DADO** que creo o edito un proyecto  
      **CUANDO** selecciono "Sistema de Gestión"  
      **ENTONCES** tengo las opciones: Jira, Project, Excel, Otro, Ninguno

- [ ] **DADO** que selecciono "Jira"  
      **CUANDO** ingreso la ruta  
      **ENTONCES** acepto URLs como: `https://company.atlassian.net/browse/PRJ-001`

- [ ] **DADO** que selecciono "Project"  
      **CUANDO** ingreso la ruta  
      **ENTONCES** acepto rutas UNC o locales: `\\servidor\proyectos\proyecto.mpp`

- [ ] **DADO** que selecciono "Excel"  
      **CUANDO** ingreso la ruta  
      **ENTONCES** acepto rutas UNC o locales: `\\servidor\proyectos\seguimiento.xlsx`

- [ ] **DADO** que veo el detalle de un proyecto con sistema de gestión configurado  
      **CUANDO** reviso la sección de información general  
      **ENTONCES** veo un link/botón: "🔗 Abrir en [Jira/Project/Excel]" que:
      - Abre la URL en nueva pestaña (si es web)
      - Intenta abrir el archivo (si es ruta local) con warning de seguridad

- [ ] **DADO** que el sistema de gestión es "Ninguno"  
      **CUANDO** veo el detalle  
      **ENTONCES** no se muestra ningún link

### Notas Técnicas
- Campo: `managementSystem: enum ['Jira', 'Project', 'Excel', 'Otro', 'Ninguno']`
- Campo: `managementPath: string (URL o ruta)`
- Validación de URL para Jira (regex)
- Validación de rutas UNC: `^\\\\[\w.-]+\\[\w.-]+`
- Íconos específicos por sistema:
  - Jira: ícono Atlassian
  - Project: ícono MS Project
  - Excel: ícono Excel
  - Otro: ícono genérico

### Definición de Hecho (DoD)
- [x] Dropdown de sistemas implementado
- [x] Validación de URLs y rutas
- [x] Links funcionales en detalle
- [x] Íconos visuales por tipo
- [x] Warning de seguridad para rutas locales

### Prioridad
**Media** - Mejora la integración con herramientas existentes

### Estimación
**4 puntos de historia**

### Dependencias
- HU-201: Crear Proyecto
- HU-203: Detalle de Proyecto

---

## HU-208: Navegar entre Proyectos Relacionados

**Como** Gerente de Proyecto  
**Quiero** navegar fácilmente entre proyectos relacionados o similares  
**Para** comparar información y analizar patrones

### Criterios de Aceptación

- [ ] **DADO** que estoy viendo el detalle de un proyecto  
      **CUANDO** bajo al final de la página  
      **ENTONCES** veo una sección "Proyectos Relacionados" que muestra hasta 5 proyectos con:
      - Mismo líder
      - Mismo estado
      - Fechas solapadas
      - Similar desviación

- [ ] **DADO** que veo la sección de proyectos relacionados  
      **CUANDO** hago clic en uno  
      **ENTONCES** navego al detalle de ese proyecto

- [ ] **DADO** que no hay proyectos relacionados  
      **CUANDO** se carga la sección  
      **ENTONCES** se oculta o muestra mensaje "No hay proyectos relacionados"

### Notas Técnicas
- Algoritmo de similitud:
  - Mismo líder: +50 puntos
  - Mismo estado: +30 puntos
  - Fechas solapadas: +20 puntos
  - Nivel de desviación similar: +10 puntos
- Ordenar por puntuación descendente
- Limitar a top 5
- Implementar en `renderRelatedProjects(project)`

### Definición de Hecho (DoD)
- [x] Algoritmo de similitud implementado
- [x] Sección de relacionados funcional
- [x] Navegación entre proyectos fluida
- [x] Performance optimizada (no afecta carga inicial)

### Prioridad
**Baja** - Nice to have

### Estimación
**3 puntos de historia**

### Dependencias
- HU-203: Detalle de Proyecto

---

[Continuaré con las épicas restantes en la siguiente sección...]

# 🔧 ÉPICA 3: Gestión de Tareas

## HU-301: Crear Tarea en un Proyecto

**Como** Gerente de Proyecto  
**Quiero** crear tareas asociadas a un proyecto  
**Para** desglosar el trabajo en actividades específicas con responsables y fechas

### Criterios de Aceptación

- [ ] **DADO** que estoy en el detalle de un proyecto  
      **CUANDO** hago clic en "➕ Nueva Tarea"  
      **ENTONCES** se abre un modal con formulario que incluye:
      - Código de tarea (autogenerado: TSK-{projectCode}-XXX)
      - Nombre de la tarea (obligatorio)
      - Etapa (dropdown: Planificación, Análisis, Desarrollo, Testing, Deploy)
      - Hito (texto)
      - Estado (dropdown: Pendiente, En Progreso, Completado, Bloqueado)
      - Responsable (obligatorio)
      - Progreso Planificado (%)
      - Progreso Real (%)
      - Fecha Inicio (date picker)
      - Fecha Fin (date picker)

- [ ] **DADO** que completo el formulario  
      **CUANDO** guardo la tarea  
      **ENTONCES**:
      - Se crea con código único autogenerado
      - Se calcula el nivel de riesgo según desviación
      - Se ejecuta validación IA automática
      - La tarea aparece en el listado del proyecto
      - Se muestra mensaje de éxito

- [ ] **DADO** que ingreso progreso real mayor al planificado  
      **CUANDO** se calcula el riesgo  
      **ENTONCES** la tarea se marca como 🟢 verde (adelantada)

### Notas Técnicas
- POST `/api/tasks/project/:projectId`
- Código autogenerado: `TSK-${projectCode}-${sequentialNumber}`
- Vincular a proyecto mediante `projectId`
- Validación IA ejecutada en backend
- Función: `createTask(projectId, taskData)`

### Definición de Hecho (DoD)
- [x] Modal de creación implementado
- [x] Validaciones completas
- [x] Código autogenerado funcional
- [x] Integración con validación IA
- [x] Pruebas unitarias

### Prioridad
**Alta**

### Estimación
**5 puntos de historia**

### Dependencias
- HU-203: Detalle de Proyecto
- HU-601: Sistema de Validación IA

---

## HU-302: Listar Tareas de un Proyecto con Filtros

**Como** Gerente de Proyecto  
**Quiero** ver todas las tareas de un proyecto con filtros avanzados  
**Para** analizar el progreso detallado y identificar bloqueos

### Criterios de Aceptación

- [ ] **DADO** que estoy en el detalle de un proyecto  
      **CUANDO** veo la sección de tareas  
      **ENTONCES** hay filtros para:
      - Código de tarea (búsqueda parcial)
      - Etapa (dropdown múltiple)
      - Hito (dropdown)
      - Estado (dropdown múltiple)
      - Responsable (dropdown)
      - Nivel de riesgo (🟢🟡🔴)

- [ ] **DADO** que aplico filtros  
      **CUANDO** hago clic en "Buscar"  
      **ENTONCES** la tabla muestra solo tareas que cumplen todos los criterios

- [ ] **DADO** que veo la tabla de tareas  
      **CUANDO** se renderiza  
      **ENTONCES** cada fila muestra:
      - Código tarea
      - Nombre
      - Etapa
      - Estado (badge)
      - Responsable
      - Progreso (barra visual real vs planificado)
      - Nivel de riesgo (🟢🟡🔴)
      - Validación IA (✅ ⚠️ ❌)
      - Acciones (Ver/Editar/Eliminar)

- [ ] **DADO** que hago clic en una tarea  
      **CUANDO** se expande  
      **ENTONCES** veo detalles adicionales: fechas, hito, mensajes de validación IA

### Notas Técnicas
- GET `/api/tasks/project/:projectId?stage=...&status=...`
- Función: `applyTaskFilters()` en `page-project-detail.js`
- Estado en `appState.filteredTasks`
- Tabla responsive con scroll horizontal en móvil

### Definición de Hecho (DoD)
- [x] Filtros múltiples funcionales
- [x] Tabla con todos los datos
- [x] Expansión de filas para detalles
- [x] Performance con 100+ tareas
- [x] Responsive

### Prioridad
**Alta**

### Estimación
**5 puntos de historia**

### Dependencias
- HU-301: Crear Tarea

---

## HU-303: Editar Tarea Existente

**Como** Gerente de Proyecto  
**Quiero** modificar información de una tarea  
**Para** actualizar su progreso, estado y responsable conforme avanza el trabajo

### Criterios de Aceptación

- [ ] **DADO** que hago clic en "Editar" de una tarea  
      **CUANDO** se abre el modal  
      **ENTONCES** todos los campos actuales se pre-cargan

- [ ] **DADO** que modifico el progreso real  
      **CUANDO** cambio el valor  
      **ENTONCES** se recalcula automáticamente el nivel de riesgo (🟢🟡🔴)

- [ ] **DADO** que cambio el estado a "Bloqueado"  
      **CUANDO** guardo  
      **ENTONCES** se me solicita ingresar una descripción del bloqueo

- [ ] **DADO** que guardo cambios  
      **CUANDO** se ejecuta  
      **ENTONCES**:
      - Se actualiza la tarea
      - Se re-ejecuta validación IA
      - Se recalcula riesgo
      - Se actualiza el progreso general del proyecto
      - Se registra en historial

### Notas Técnicas
- PUT `/api/tasks/:taskCode`
- Recalcular progreso del proyecto: promedio ponderado de tareas
- Validación IA re-ejecutada automáticamente
- Registrar cambios significativos en historial

### Definición de Hecho (DoD)
- [x] Modal de edición funcional
- [x] Recálculos automáticos
- [x] Validación IA re-ejecutada
- [x] Actualización de progreso del proyecto

### Prioridad
**Alta**

### Estimación
**4 puntos de historia**

### Dependencias
- HU-301: Crear Tarea
- HU-601: Validación IA

---

## HU-304: Eliminar Tarea

**Como** Gerente de Proyecto  
**Quiero** eliminar tareas del proyecto  
**Para** mantener limpio el listado eliminando tareas erróneas o no relevantes

### Criterios de Aceptación

- [ ] **DADO** que hago clic en "Eliminar" de una tarea  
      **CUANDO** se muestra confirmación  
      **ENTONCES** veo advertencia: "⚠️ ¿Eliminar tarea {código}?"

- [ ] **DADO** que confirmo eliminación  
      **CUANDO** se ejecuta  
      **ENTONCES**:
      - La tarea se elimina
      - El progreso del proyecto se recalcula
      - Se muestra mensaje de éxito
      - La tarea desaparece del listado

### Notas Técnicas
- DELETE `/api/tasks/:taskCode`
- Recalcular progreso del proyecto después de eliminar
- Soft delete recomendado para auditoría

### Definición de Hecho (DoD)
- [x] Eliminación funcional
- [x] Confirmación implementada
- [x] Recálculo de progreso del proyecto
- [x] Pruebas de eliminación

### Prioridad
**Media**

### Estimación
**2 puntos de historia**

### Dependencias
- HU-301: Crear Tarea

---

## HU-305: Validar Tarea con IA en Tiempo Real

**Como** Sistema IA  
**Quiero** validar automáticamente las tareas cuando se crean o actualizan  
**Para** detectar inconsistencias, riesgos y proporcionar sugerencias

### Criterios de Aceptación

- [ ] **DADO** que se crea o actualiza una tarea  
      **CUANDO** se guarda  
      **ENTONCES** el sistema IA ejecuta validaciones automáticas:
      - Consistencia de fechas (inicio < fin, dentro del rango del proyecto)
      - Progreso realista (no hay saltos imposibles)
      - Desviación aceptable
      - Responsable asignado
      - Estado coherente con progreso

- [ ] **DADO** que la validación es exitosa  
      **CUANDO** se completa  
      **ENTONCES** la tarea muestra: ✅ "Validado" (verde)

- [ ] **DADO** que hay advertencias menores  
      **CUANDO** se detectan  
      **ENTONCES** la tarea muestra: ⚠️ "Advertencias" (amarillo)
      **Y** al expandir veo lista de advertencias

- [ ] **DADO** que hay errores críticos  
      **CUANDO** se detectan  
      **ENTONCES** la tarea muestra: ❌ "Errores" (rojo)
      **Y** al expandir veo lista de errores con sugerencias de corrección

- [ ] **DADO** que hago clic en el ícono de validación  
      **CUANDO** expando  
      **ENTONCES** veo detalles completos:
      - Estado de validación
      - Lista de mensajes (errores/advertencias/info)
      - Sugerencias de corrección
      - Última fecha de validación

### Notas Técnicas
- GET `/api/tasks/:taskCode/validation`
- Validación ejecutada en backend con reglas de negocio
- Almacenar resultado en campo `aiValidation` de la tarea
- Estados: `validado`, `advertencia`, `error`
- Mensajes estructurados: `{ type, message, suggestion }`

### Definición de Hecho (DoD)
- [x] Sistema de validación implementado
- [x] Reglas de validación definidas y probadas
- [x] Visualización de resultados clara
- [x] Sugerencias útiles y accionables
- [x] Performance: validación < 500ms

### Prioridad
**Alta** - Característica diferenciadora del sistema

### Estimación
**6 puntos de historia**

### Dependencias
- HU-301: Crear Tarea
- HU-601: Motor de Análisis IA

---

## HU-306: Gestionar Estados de Tareas con Workflow

**Como** Gerente de Proyecto  
**Quiero** que las tareas sigan un workflow definido de estados  
**Para** asegurar un proceso ordenado y rastreable

### Criterios de Aceptación

- [ ] **DADO** que una tarea nueva se crea  
      **CUANDO** se guarda  
      **ENTONCES** el estado inicial es "Pendiente"

- [ ] **DADO** que una tarea está en "Pendiente"  
      **CUANDO** se actualiza  
      **ENTONCES** puede cambiar a: "En Progreso" o "Bloqueado"

- [ ] **DADO** que una tarea está en "En Progreso"  
      **CUANDO** se actualiza  
      **ENTONCES** puede cambiar a: "Completado", "Bloqueado" o volver a "Pendiente"

- [ ] **DADO** que una tarea está "Completado"  
      **CUANDO** se actualiza  
      **ENTONCES** el progreso real debe ser 100%

- [ ] **DADO** que cambio a estado "Bloqueado"  
      **CUANDO** guardo  
      **ENTONCES** se me solicita ingresar descripción del bloqueo

### Notas Técnicas
- Estados: Pendiente → En Progreso → Completado
- Transición a "Bloqueado" posible desde cualquier estado
- Validar progreso = 100% cuando estado = Completado
- Registrar justificación de bloqueos

### Definición de Hecho (DoD)
- [x] Workflow implementado con validaciones
- [x] Transiciones de estado funcionales
- [x] Validación de progreso en Completado
- [x] Solicitud de justificación en Bloqueado

### Prioridad
**Media**

### Estimación
**3 puntos de historia**

### Dependencias
- HU-301: Crear Tarea

---

## HU-307: Exportar Listado de Tareas a Excel

**Como** Gerente de Proyecto  
**Quiero** exportar el listado de tareas a Excel  
**Para** compartir información con el equipo o realizar análisis externos

### Criterios de Aceptación

- [ ] **DADO** que estoy viendo las tareas de un proyecto  
      **CUANDO** hago clic en "📊 Exportar Excel"  
      **ENTONCES** se descarga un archivo Excel con:
      - Todas las tareas visibles (según filtros aplicados)
      - Columnas: Código, Nombre, Etapa, Hito, Estado, Responsable, Progreso Planificado, Progreso Real, Desviación, Nivel de Riesgo, Validación IA, Fecha Inicio, Fecha Fin
      - Formato con colores según nivel de riesgo
      - Encabezados en negrita

- [ ] **DADO** que hay filtros aplicados  
      **CUANDO** exporto  
      **ENTONCES** solo se exportan las tareas filtradas

- [ ] **DADO** que se genera el archivo  
      **CUANDO** se descarga  
      **ENTONCES** el nombre es: `Tareas_{ProjectCode}_{YYYYMMDD}.xlsx`

### Notas Técnicas
- Usar librería SheetJS (xlsx)
- Aplicar estilos: colores de riesgo, negrita en encabezados
- Respetar filtros activos
- Incluir hoja adicional con resumen del proyecto

### Definición de Hecho (DoD)
- [x] Exportación funcional
- [x] Formato Excel correcto con estilos
- [x] Nombre de archivo descriptivo
- [x] Respeta filtros aplicados

### Prioridad
**Baja**

### Estimación
**3 puntos de historia**

### Dependencias
- HU-302: Listar Tareas

---

[Continuando con épicas restantes...]

# 💰 ÉPICA 4: Análisis Financiero

## HU-401: Visualizar Resumen Financiero del Proyecto

**Como** Gerente de Proyecto  
**Quiero** ver un resumen financiero completo del proyecto  
**Para** controlar el presupuesto y la ejecución económica

### Criterios de Aceptación

- [ ] **DADO** que estoy en el detalle de un proyecto  
      **CUANDO** veo la sección "Análisis Financiero"  
      **ENTONCES** veo:
      - Card 1: **Presupuesto Total** (monto)
      - Card 2: **Presupuesto Consumido** (monto y %)
      - Card 3: **Presupuesto Disponible** (monto)
      - Card 4: **Total Facturas** (Pagadas / Pendientes)
      - Card 5: **Monto Pendiente de Pago** (monto)
      - Card 6: **Hitos** (Aprobados / Pendientes)

- [ ] **DADO** que veo el resumen financiero  
      **CUANDO** se renderiza  
      **ENTONCES** hay un gráfico de donut que muestra:
      - Presupuesto Consumido (color azul)
      - Presupuesto Disponible (color gris claro)

- [ ] **DADO** que el presupuesto consumido > 90%  
      **CUANDO** se visualiza  
      **ENTONCES** la card de "Presupuesto Consumido" tiene borde rojo y ícono de advertencia

- [ ] **DADO** que hago clic en "Ver Detalle Facturas"  
      **CUANDO** se expande  
      **ENTONCES** veo tabla con: ID Factura, Monto, Estado, Fecha

### Notas Técnicas
- GET `/api/projects/:id/financial`
- Datos en `project.financialSummary`
- Gráfico con ApexCharts tipo donut
- Cálculos:
  - Disponible = Total - Consumido
  - % Consumido = (Consumido / Total) * 100

### Definición de Hecho (DoD)
- [x] Cards financieras implementadas
- [x] Gráfico de donut funcional
- [x] Alertas visuales por umbrales
- [x] Tabla de detalle de facturas
- [x] Responsive

### Prioridad
**Media**

### Estimación
**5 puntos de historia**

### Dependencias
- HU-203: Detalle de Proyecto

---

## HU-402: Registrar Factura en el Proyecto

**Como** Gerente de Proyecto  
**Quiero** registrar facturas asociadas al proyecto  
**Para** llevar control detallado de pagos y ejecución presupuestaria

### Criterios de Aceptación

- [ ] **DADO** que estoy en análisis financiero  
      **CUANDO** hago clic en "➕ Registrar Factura"  
      **ENTONCES** se abre modal con:
      - Número de factura (obligatorio)
      - Monto (obligatorio, numérico)
      - Fecha emisión (date picker)
      - Fecha vencimiento (date picker)
      - Estado (dropdown: Pendiente, Pagada)
      - Concepto (texto)

- [ ] **DADO** que guardo la factura  
      **CUANDO** se registra  
      **ENTONCES**:
      - Se suma al total de facturas
      - Si es "Pendiente", se suma al monto pendiente
      - Si es "Pagada", se suma al presupuesto consumido
      - Se actualiza el gráfico financiero

### Notas Técnicas
- POST `/api/projects/:id/invoices`
- Recalcular `financialSummary` tras cada registro
- Validar que suma de facturas no exceda presupuesto total (advertencia)

### Definición de Hecho (DoD)
- [x] Modal de registro funcional
- [x] Validaciones implementadas
- [x] Actualización de resumen financiero
- [x] Advertencia si excede presupuesto

### Prioridad
**Media**

### Estimación
**4 puntos de historia**

### Dependencias
- HU-401: Resumen Financiero

---

## HU-403: Registrar Hitos del Proyecto

**Como** Gerente de Proyecto  
**Quiero** registrar hitos del proyecto y su estado de aprobación  
**Para** gestionar entregas y aprobaciones formales

### Criterios de Aceptación

- [ ] **DADO** que estoy en análisis financiero  
      **CUANDO** hago clic en "➕ Registrar Hito"  
      **ENTONCES** se abre modal con:
      - Nombre del hito (obligatorio)
      - Fecha planificada (date picker)
      - Fecha real de entrega (date picker, opcional)
      - Estado (dropdown: Pendiente, Aprobado, Rechazado)
      - Monto asociado (opcional)
      - Observaciones (texto)

- [ ] **DADO** que guardo el hito  
      **CUANDO** se registra  
      **ENTONCES**:
      - Se suma al total de hitos
      - Si es "Aprobado", se suma a hitos aprobados
      - Se actualiza el contador en el resumen

### Notas Técnicas
- POST `/api/projects/:id/milestones`
- Hitos vinculados a tareas (opcional)
- Alertas si fecha real > fecha planificada

### Definición de Hecho (DoD)
- [x] Modal de registro funcional
- [x] Actualización de contador de hitos
- [x] Alertas por retrasos en hitos

### Prioridad
**Media**

### Estimación
**4 puntos de historia**

### Dependencias
- HU-401: Resumen Financiero

---

## HU-404: Alertar por Sobrecosto del Proyecto

**Como** Sistema  
**Quiero** generar alertas automáticas cuando el proyecto se acerque o supere el presupuesto  
**Para** permitir acciones correctivas tempranas

### Criterios de Aceptación

- [ ] **DADO** que el presupuesto consumido alcanza 80%  
      **CUANDO** se actualiza el proyecto  
      **ENTONCES** se genera alerta amarilla: "⚠️ Presupuesto al 80%"

- [ ] **DADO** que el presupuesto consumido alcanza 100%  
      **CUANDO** se actualiza  
      **ENTONCES** se genera alerta roja: "🚨 Presupuesto agotado"

- [ ] **DADO** que el presupuesto consumido supera el 100%  
      **CUANDO** se actualiza  
      **ENTONCES** se genera alerta crítica: "🚨 Sobrecosto: +X%"

- [ ] **DADO** que hay una alerta activa  
      **CUANDO** visualizo el proyecto  
      **ENTONCES** veo un banner destacado en la parte superior

### Notas Técnicas
- Evaluar en cada actualización financiera
- Umbrales configurables: 80%, 90%, 100%
- Notificaciones push (futuro)
- Registrar alertas en historial

### Definición de Hecho (DoD)
- [x] Sistema de alertas implementado
- [x] Umbrales configurables
- [x] Banner visual destacado
- [x] Registro en historial

### Prioridad
**Alta**

### Estimación
**4 puntos de historia**

### Dependencias
- HU-401: Resumen Financiero
- HU-701: Historial de Cambios

---

## HU-405: Generar Reporte Financiero en PDF

**Como** Gerente de Proyecto  
**Quiero** generar un reporte financiero en PDF  
**Para** compartirlo con stakeholders y clientes

### Criterios de Aceptación

- [ ] **DADO** que estoy en análisis financiero  
      **CUANDO** hago clic en "📄 Generar Reporte PDF"  
      **ENTONCES** se descarga un PDF con:
      - Encabezado: Logo, nombre proyecto, fecha
      - Resumen ejecutivo financiero
      - Gráfico de presupuesto (captura)
      - Tabla de facturas
      - Tabla de hitos
      - Observaciones y recomendaciones

### Notas Técnicas
- Usar jsPDF + html2canvas
- Formato profesional con estilos corporativos
- Nombre: `Reporte_Financiero_{ProjectCode}_{YYYYMMDD}.pdf`

### Definición de Hecho (DoD)
- [x] Generación de PDF funcional
- [x] Contenido completo y formateado
- [x] Calidad de imágenes adecuada

### Prioridad
**Baja**

### Estimación
**4 puntos de historia**

### Dependencias
- HU-401: Resumen Financiero

---

# 📁 ÉPICA 5: Gestión Documental

## HU-501: Cargar Documento L1 del Proyecto

**Como** Analista de Proyectos  
**Quiero** cargar el documento L1 del proyecto  
**Para** tener la planificación de alto nivel disponible en el sistema

### Criterios de Aceptación

- [ ] **DADO** que estoy en el detalle de un proyecto  
      **CUANDO** veo la sección de documentos  
      **ENTONCES** hay un botón "📎 Subir L1"

- [ ] **DADO** que hago clic en "Subir L1"  
      **CUANDO** selecciono un archivo  
      **ENTONCES** solo acepto formatos: .pdf, .docx, .doc

- [ ] **DADO** que subo un documento L1  
      **CUANDO** se completa la carga  
      **ENTONCES**:
      - Se muestra el nombre del archivo
      - Se muestra la fecha de carga
      - Aparece un botón "⬇️ Descargar"
      - Aparece un botón "🗑️ Eliminar"

- [ ] **DADO** que ya existe un L1  
      **CUANDO** subo uno nuevo  
      **ENTONCES** se reemplaza el anterior con confirmación

### Notas Técnicas
- POST `/api/projects/:id/documents/l1` con multipart/form-data
- Almacenar en storage (Azure Blob, AWS S3 o file system)
- Guardar metadata: `{ name, url, uploadDate }`
- Límite de tamaño: 10 MB

### Definición de Hecho (DoD)
- [x] Carga de archivo funcional
- [x] Validación de formato y tamaño
- [x] Descarga funcional
- [x] Eliminación con confirmación
- [x] Metadata almacenada correctamente

### Prioridad
**Media**

### Estimación
**4 puntos de historia**

### Dependencias
- HU-203: Detalle de Proyecto

---

## HU-502: Cargar Documento RFP del Proyecto

**Como** Analista de Proyectos  
**Quiero** cargar el documento RFP (Request for Proposal)  
**Para** tener los requerimientos del cliente disponibles

### Criterios de Aceptación
[Similar a HU-501, pero para documento RFP]

### Notas Técnicas
- POST `/api/projects/:id/documents/rfp`
- Mismas validaciones que L1

### Definición de Hecho (DoD)
[Igual que HU-501]

### Prioridad
**Media**

### Estimación
**2 puntos de historia** (reutiliza componente de HU-501)

### Dependencias
- HU-501: Cargar L1

---

## HU-503: Cargar Propuesta Técnica del Proyecto

**Como** Analista de Proyectos  
**Quiero** cargar la Propuesta Técnica  
**Para** tener la solución propuesta disponible

### Criterios de Aceptación
[Similar a HU-501, pero para Propuesta Técnica]

### Notas Técnicas
- POST `/api/projects/:id/documents/propuestaTecnica`

### Definición de Hecho (DoD)
[Igual que HU-501]

### Prioridad
**Media**

### Estimación
**2 puntos de historia**

### Dependencias
- HU-501: Cargar L1

---

## HU-504: Cargar GECO Excel del Proyecto

**Como** Analista de Proyectos  
**Quiero** cargar el archivo GECO Excel  
**Para** tener el control de gestión económica disponible

### Criterios de Aceptación

- [ ] **DADO** que cargo GECO Excel  
      **CUANDO** selecciono archivo  
      **ENTONCES** solo acepto: .xlsx, .xls

[Resto similar a HU-501]

### Notas Técnicas
- POST `/api/projects/:id/documents/gecoExcel`
- Validar extensión Excel específicamente

### Definición de Hecho (DoD)
[Igual que HU-501]

### Prioridad
**Media**

### Estimación
**2 puntos de historia**

### Dependencias
- HU-501: Cargar L1

---

# 🤖 ÉPICA 6: Análisis IA y Predicción

## HU-601: Analizar Riesgo del Proyecto con IA

**Como** Sistema IA  
**Quiero** analizar automáticamente el nivel de riesgo de cada proyecto  
**Para** proporcionar alertas tempranas y recomendaciones proactivas

### Criterios de Aceptación

- [ ] **DADO** que se actualiza un proyecto  
      **CUANDO** cambian datos críticos (progreso, fechas, presupuesto)  
      **ENTONCES** el sistema IA recalcula:
      - Nivel de riesgo: Bajo, Medio, Alto, Crítico
      - Confianza del análisis (0-100%)
      - Factores de riesgo detectados
      - Fecha de finalización predicha

- [ ] **DADO** que el análisis IA se completa  
      **CUANDO** se obtienen resultados  
      **ENTONCES** se almacenan en `project.aiAnalysis`:
      ```javascript
      {
        riskLevel: 'alto',
        confidence: 87,
        predictedCompletion: '2026-07-15',
        factors: [
          'Desviación crítica (-15%)',
          'Presupuesto al 95%',
          '3 tareas bloqueadas'
        ],
        recommendations: [
          'Reasignar recursos a tareas críticas',
          'Revisar planificación de hitos'
        ],
        alerts: [
          { type: 'critical', message: 'Riesgo de incumplimiento de fecha' }
        ],
        analyzedAt: '2026-01-31T14:30:00'
      }
      ```

- [ ] **DADO** que veo el detalle de un proyecto  
      **CUANDO** reviso el Dashboard IA  
      **ENTONCES** veo:
      - Card con nivel de riesgo (color según nivel)
      - Card con confianza del análisis
      - Lista de factores de riesgo
      - Top 3 recomendaciones
      - Alertas activas

- [ ] **DADO** que el riesgo es "Crítico"  
      **CUANDO** se visualiza  
      **ENTONCES** toda la sección tiene borde y fondo rojo claro

### Notas Técnicas
- Algoritmo de análisis considera:
  - Desviación actual vs estándares ITIL/PMP
  - % de tareas bloqueadas
  - % de presupuesto consumido vs progreso
  - Tendencia histórica
  - Hitos no cumplidos
- Análisis ejecutado:
  - Al crear/actualizar proyecto
  - Cada 24 horas automáticamente (cron job)
- API: GET `/api/projects/:id/ai-analysis`
- Función: `analyzeProjectRisk(project)`

### Definición de Hecho (DoD)
- [x] Algoritmo de análisis implementado y probado
- [x] Cálculo de riesgo preciso con criterios definidos
- [x] Visualización clara en Dashboard IA
- [x] Alertas generadas automáticamente
- [x] Pruebas con diferentes escenarios de riesgo
- [x] Performance: análisis < 1 segundo

### Prioridad
**Alta** - Core del diferencial de IA

### Estimación
**8 puntos de historia** (~3-4 días)

### Dependencias
- HU-203: Detalle de Proyecto
- HU-301: Gestión de Tareas
- HU-401: Análisis Financiero

---

## HU-602: Predecir Fecha de Finalización del Proyecto

**Como** Sistema IA  
**Quiero** predecir la fecha real de finalización basándome en el progreso actual  
**Para** alertar tempranamente sobre posibles retrasos

### Criterios de Aceptación

- [ ] **DADO** que se analiza un proyecto  
      **CUANDO** se calcula la predicción  
      **ENTONCES** se considera:
      - Progreso actual vs planificado
      - Velocidad histórica (si existe)
      - Días laborables restantes
      - Tareas bloqueadas

- [ ] **DADO** que la fecha predicha es posterior a la planificada  
      **CUANDO** se visualiza  
      **ENTONCES** se muestra en rojo: "🔴 Retraso estimado: +15 días"

- [ ] **DADO** que la fecha predicha es anterior a la planificada  
      **CUANDO** se visualiza  
      **ENTONCES** se muestra en verde: "🟢 Adelanto estimado: -5 días"

### Notas Técnicas
- Fórmula base: 
  ```javascript
  diasRestantes = diasTotales * (100 - progressActual) / velocidadPromedio
  fechaPredicha = fechaHoy + diasRestantes
  ```
- Considerar solo días laborables (lunes a viernes)
- Actualizar predicción en cada cambio de progreso

### Definición de Hecho (DoD)
- [x] Algoritmo de predicción implementado
- [x] Cálculo preciso con casos de prueba
- [x] Visualización clara de diferencias
- [x] Consideración de días laborables

### Prioridad
**Alta**

### Estimación
**5 puntos de historia**

### Dependencias
- HU-601: Análisis de Riesgo IA

---

## HU-603: Generar Recomendaciones Automáticas

**Como** Sistema IA  
**Quiero** generar recomendaciones automáticas basadas en el análisis  
**Para** guiar acciones correctivas a los gerentes de proyecto

### Criterios de Aceptación

- [ ] **DADO** que se detecta desviación crítica  
      **CUANDO** se generan recomendaciones  
      **ENTONCES** sugiere: "Reasignar recursos a tareas críticas del camino crítico"

- [ ] **DADO** que hay tareas bloqueadas  
      **CUANDO** se generan recomendaciones  
      **ENTONCES** sugiere: "Resolver bloqueos: [lista de tareas]"

- [ ] **DADO** que el presupuesto está al 90%  
      **CUANDO** se generan recomendaciones  
      **ENTONCES** sugiere: "Revisar alcance o solicitar ampliación presupuestaria"

- [ ] **DADO** que veo las recomendaciones  
      **CUANDO** se muestran  
      **ENTONCES** cada recomendación tiene:
      - Prioridad (Alta/Media/Baja)
      - Descripción clara
      - Acción sugerida

### Notas Técnicas
- Reglas de negocio para generación de recomendaciones
- Top 5 recomendaciones priorizadas
- Lenguaje claro y accionable

### Definición de Hecho (DoD)
- [x] Motor de recomendaciones implementado
- [x] Reglas de negocio definidas y probadas
- [x] Visualización clara y priorizada
- [x] Recomendaciones relevantes y útiles

### Prioridad
**Media**

### Estimación
**5 puntos de historia**

### Dependencias
- HU-601: Análisis de Riesgo IA

---

## HU-604: Visualizar Timeline Predictivo del Proyecto

**Como** Gerente de Proyecto  
**Quiero** ver un timeline visual que muestre el progreso real vs planificado vs predicho  
**Para** entender la evolución del proyecto de forma gráfica

### Criterios de Aceptación

- [ ] **DADO** que accedo a "Análisis IA" de un proyecto  
      **CUANDO** veo el tab "Timeline"  
      **ENTONCES** hay un gráfico de Gantt simplificado que muestra:
      - Fecha inicio planificada
      - Fecha fin planificada
      - Progreso actual (% en la línea de tiempo)
      - Fecha fin predicha (línea punteada)
      - Hitos principales (marcadores en el timeline)

- [ ] **DADO** que hay retraso predicho  
      **CUANDO** veo el timeline  
      **ENTONCES** la zona de retraso se muestra en rojo claro

- [ ] **DADO** que hay adelanto predicho  
      **CUANDO** veo el timeline  
      **ENTONCES** la zona de adelanto se muestra en verde claro

### Notas Técnicas
- Usar ApexCharts tipo "rangeBar" o librería específica de Gantt
- Responsive y interactivo
- Tooltips con información detallada

### Definición de Hecho (DoD)
- [x] Timeline implementado y funcional
- [x] Visualización clara de planificado vs predicho
- [x] Colores intuitivos
- [x] Responsive

### Prioridad
**Media**

### Estimación
**5 puntos de historia**

### Dependencias
- HU-601: Análisis IA
- HU-602: Predicción de Fecha

---

## HU-605: Enviar Alertas Proactivas por Email/Notificación

**Como** Sistema  
**Quiero** enviar alertas automáticas por email o notificación  
**Para** que los gerentes actúen rápidamente sobre situaciones críticas

### Criterios de Aceptación

- [ ] **DADO** que se detecta una alerta crítica  
      **CUANDO** el sistema IA analiza  
      **ENTONCES** se envía email al líder del proyecto con:
      - Asunto: "🚨 Alerta Crítica: [Nombre Proyecto]"
      - Descripción de la alerta
      - Recomendaciones
      - Link directo al proyecto

- [ ] **DADO** que el gerente tiene notificaciones habilitadas  
      **CUANDO** se genera alerta  
      **ENTONCES** recibe notificación push en el navegador

- [ ] **DADO** que hay múltiples alertas en un día  
      **CUANDO** se envían  
      **ENTONCES** se agrupa en un solo email diario (resumen)

### Notas Técnicas
- Integración con servicio de email (SendGrid, AWS SES)
- Web Push Notifications API
- Configuración de preferencias de notificaciones por usuario
- Evitar spam: máximo 1 email crítico por proyecto por día

### Definición de Hecho (DoD)
- [x] Integración de email funcional
- [x] Notificaciones push implementadas
- [x] Preferencias de usuario configurables
- [x] Templates de email profesionales

### Prioridad
**Media** - Mejora la proactividad

### Estimación
**5 puntos de historia**

### Dependencias
- HU-601: Análisis IA con alertas

---

## HU-606: Comparar Proyectos Similares con IA

**Como** Director de Proyectos  
**Quiero** que la IA compare mi proyecto con proyectos similares históricos  
**Para** obtener insights basados en experiencias previas

### Criterios de Aceptación

- [ ] **DADO** que veo el análisis IA  
      **CUANDO** hay proyectos similares en histórico  
      **ENTONCES** veo sección "Comparación con Proyectos Similares" que muestra:
      - 3 proyectos más similares
      - Métricas comparativas: desviación promedio, cumplimiento de fechas
      - Lecciones aprendidas

- [ ] **DADO** que hago clic en un proyecto similar  
      **CUANDO** navego  
      **ENTONCES** veo su detalle completo

### Notas Técnicas
- Algoritmo de similitud basado en:
  - Mismo líder
  - Tamaño de presupuesto similar (±20%)
  - Duración similar
  - Mismo tipo de proyecto (si existe)
- Calcular métricas promedio de proyectos similares

### Definición de Hecho (DoD)
- [x] Algoritmo de similitud implementado
- [x] Comparación visual clara
- [x] Métricas relevantes mostradas

### Prioridad
**Baja** - Nice to have

### Estimación
**4 puntos de historia**

### Dependencias
- HU-601: Análisis IA

---

# 📜 ÉPICA 7: Historial y Auditoría

## HU-701: Registrar Cambios en Historial del Proyecto

**Como** Sistema  
**Quiero** registrar automáticamente todos los cambios significativos en el historial  
**Para** mantener trazabilidad completa y auditoría

### Criterios de Aceptación

- [ ] **DADO** que se actualiza un proyecto  
      **CUANDO** cambian datos importantes (progreso, estado, fechas, líder)  
      **ENTONCES** se registra automáticamente en historial:
      ```javascript
      {
        date: '2026-01-31T14:30:00',
        title: 'Actualización de Progreso',
        description: 'Progreso actualizado de 25% a 30%',
        reason: 'Completadas tareas del Sprint 3',
        user: 'María González'
      }
      ```

- [ ] **DADO** que cambio el estado a "En Pausa"  
      **CUANDO** guardo  
      **ENTONCES** se me solicita ingresar motivo (obligatorio)
      **Y** se registra en historial con el motivo

- [ ] **DADO** que veo el detalle del proyecto  
      **CUANDO** accedo a "Historial"  
      **ENTONCES** veo lista cronológica inversa (más reciente primero) con:
      - Fecha y hora
      - Título del cambio
      - Descripción
      - Motivo/Razón
      - Usuario que realizó el cambio

### Notas Técnicas
- Array: `project.history = []`
- POST `/api/projects/:id/history`
- Registrar automáticamente cambios en:
  - Progreso (real o planificado)
  - Estado del proyecto
  - Líder
  - Fechas
  - Presupuesto
- Cambios manuales requieren motivo explícito

### Definición de Hecho (DoD)
- [x] Sistema de registro automático funcional
- [x] Captura de cambios significativos
- [x] Visualización cronológica clara
- [x] Motivos obligatorios para cambios críticos
- [x] Usuario registrado en cada entrada

### Prioridad
**Media** - Importante para auditoría

### Estimación
**4 puntos de historia**

### Dependencias
- HU-201: Crear Proyecto
- HU-204: Editar Proyecto

---

## HU-702: Ver Historial Completo del Proyecto

**Como** Gerente de Proyecto  
**Quiero** ver el historial completo de cambios de un proyecto  
**Para** entender su evolución y decisiones tomadas

### Criterios de Aceptación

- [ ] **DADO** que estoy en el detalle de un proyecto  
      **CUANDO** hago clic en tab "Historial"  
      **ENTONCES** veo lista completa de todas las entradas históricas

- [ ] **DADO** que veo el historial  
      **CUANDO** hay muchas entradas  
      **ENTONCES** está paginado (10 entradas por página)

- [ ] **DADO** que quiero filtrar el historial  
      **CUANDO** uso el filtro de fechas  
      **ENTONCES** veo solo entradas del rango seleccionado

- [ ] **DADO** que quiero buscar en el historial  
      **CUANDO** escribo en búsqueda  
      **ENTONCES** se filtran entradas que contengan el texto

### Notas Técnicas
- GET `/api/projects/:id/history`
- Ordenamiento: descendente por fecha
- Paginación backend: `?page=1&limit=10`
- Búsqueda case-insensitive en title, description, reason

### Definición de Hecho (DoD)
- [x] Visualización completa de historial
- [x] Paginación funcional
- [x] Filtros de fecha operativos
- [x] Búsqueda en historial

### Prioridad
**Media**

### Estimación
**3 puntos de historia**

### Dependencias
- HU-701: Registro de Historial

---

## HU-703: Exportar Historial a PDF

**Como** Gerente de Proyecto  
**Quiero** exportar el historial del proyecto a PDF  
**Para** incluirlo en documentación formal o auditorías

### Criterios de Aceptación

- [ ] **DADO** que veo el historial  
      **CUANDO** hago clic en "📄 Exportar PDF"  
      **ENTONCES** se descarga PDF con:
      - Encabezado: nombre proyecto, fechas
      - Tabla completa del historial
      - Fecha de generación

### Notas Técnicas
- Usar jsPDF
- Nombre: `Historial_{ProjectCode}_{YYYYMMDD}.pdf`

### Definición de Hecho (DoD)
- [x] Exportación funcional
- [x] Formato profesional

### Prioridad
**Baja**

### Estimación
**2 puntos de historia**

### Dependencias
- HU-702: Ver Historial

---

## HU-704: Auditar Cambios Realizados por Usuario

**Como** Administrador del Sistema  
**Quiero** ver todos los cambios realizados por un usuario específico  
**Para** fines de auditoría y control

### Criterios de Aceptación

- [ ] **DADO** que soy administrador  
      **CUANDO** accedo a "Auditoría"  
      **ENTONCES** puedo filtrar cambios por:
      - Usuario
      - Rango de fechas
      - Tipo de cambio

- [ ] **DADO** que filtro por usuario  
      **CUANDO** aplico filtro  
      **ENTONCES** veo todos sus cambios en todos los proyectos

### Notas Técnicas
- GET `/api/audit/changes?user=...&fromDate=...&toDate=...`
- Requiere rol de administrador
- Log centralizado de auditoría

### Definición de Hecho (DoD)
- [x] Vista de auditoría funcional
- [x] Filtros operativos
- [x] Permisos de administrador implementados

### Prioridad
**Baja** - Futuro

### Estimación
**4 puntos de historia**

### Dependencias
- HU-701: Registro de Historial
- Sistema de autenticación con roles

---

# 🔌 ÉPICA 8: Integraciones y DevOps

## HU-001: Configurar Proyecto Frontend

**Como** Desarrollador  
**Quiero** configurar el proyecto frontend con todas las dependencias  
**Para** comenzar el desarrollo de las interfaces

### Criterios de Aceptación

- [ ] **DADO** que inicio el proyecto  
      **CUANDO** configuro el entorno  
      **ENTONCES** está listo con:
      - Estructura de carpetas: `app-ia-projects/feature/...`
      - jQuery incluido
      - ApexCharts incluido
      - CSS base con variables de colores corporativos
      - Páginas HTML base creadas

- [ ] **DADO** que abro cualquier página HTML  
      **CUANDO** cargo en navegador  
      **ENTONCES** se ve correctamente sin errores de consola

### Notas Técnicas
- Sin build process (HTML/CSS/JS vanilla)
- CDN para librerías:
  - jQuery 3.6.0
  - ApexCharts 3.x
- Estructura actual ya definida
- Variables CSS para theming

### Definición de Hecho (DoD)
- [x] Estructura de carpetas creada
- [x] Librerías incluidas via CDN
- [x] CSS base con variables
- [x] Páginas HTML base funcionales
- [x] README con instrucciones

### Prioridad
**Crítica** - Primer paso

### Estimación
**2 puntos de historia**

### Dependencias
- Ninguna

---

## HU-002: Configurar Microservicio Backend con Node.js

**Como** Desarrollador Backend  
**Quiero** configurar el microservicio de API REST  
**Para** exponer endpoints de gestión de proyectos y tareas

### Criterios de Aceptación

- [ ] **DADO** que inicio el proyecto backend  
      **CUANDO** configuro el entorno  
      **ENTONCES** está listo con:
      - Node.js + Express
      - Arquitectura por capas: routes, services, data
      - CORS configurado
      - Middleware de logging
      - Health check endpoint: GET /health

- [ ] **DADO** que ejecuto `npm start`  
      **CUANDO** el servidor arranca  
      **ENTONCES** veo mensaje: "🚀 Server running on http://localhost:3000"

- [ ] **DADO** que accedo a GET /health  
      **CUANDO** hago request  
      **ENTONCES** responde:
      ```json
      {
        "status": "OK",
        "timestamp": "2026-01-31T14:30:00.000Z",
        "uptime": 123.45
      }
      ```

### Notas Técnicas
- package.json con dependencias:
  - express
  - cors
  - uuid (para generación de IDs)
- Estructura ya definida en `ms-ia-projects/feature/ms-api-projects/api/`
- Puerto: 3000 (configurable via env)

### Definición de Hecho (DoD)
- [x] Server.js configurado
- [x] Arquitectura por capas implementada
- [x] CORS habilitado
- [x] Health check funcional
- [x] package.json completo
- [x] README con instrucciones

### Prioridad
**Crítica**

### Estimación
**3 puntos de historia**

### Dependencias
- Ninguna

---

## HU-003: Implementar Endpoints RESTful de Proyectos

**Como** Desarrollador Backend  
**Quiero** implementar todos los endpoints RESTful para gestión de proyectos  
**Para** que el frontend pueda consumir la API

### Criterios de Aceptación

- [ ] **DADO** que el servidor está corriendo  
      **CUANDO** accedo a GET /api  
      **ENTONCES** veo documentación de endpoints disponibles

- [ ] **DADO** endpoints implementados  
      **CUANDO** se invocan  
      **ENTONCES** están disponibles:
      - GET /api/projects - Listar proyectos
      - GET /api/projects/:id - Obtener proyecto
      - POST /api/projects - Crear proyecto
      - PUT /api/projects/:id - Actualizar proyecto
      - DELETE /api/projects/:id - Eliminar proyecto
      - GET /api/projects/:id/history - Historial
      - POST /api/projects/:id/history - Agregar entrada historial
      - GET /api/projects/:id/financial - Resumen financiero
      - GET /api/projects/stats - Estadísticas dashboard

- [ ] **DADO** que invoco un endpoint  
      **CUANDO** responde  
      **ENTONCES** usa formato consistente:
      ```json
      {
        "success": true,
        "data": {...},
        "count": 10
      }
      ```

### Notas Técnicas
- Implementar en `routes/projects.routes.js`
- Lógica de negocio en `services/projects.service.js`
- Datos en `data/projects.data.js` (mock inicial)
- Validaciones en service layer
- Manejo de errores con middleware

### Definición de Hecho (DoD)
- [x] Todos los endpoints implementados
- [x] Validaciones en backend
- [x] Formato de respuesta consistente
- [x] Manejo de errores
- [x] Pruebas con Postman/Thunder Client
- [x] Documentación de API

### Prioridad
**Crítica**

### Estimación
**8 puntos de historia**

### Dependencias
- HU-002: Backend configurado

---

## HU-004: Implementar Endpoints RESTful de Tareas

**Como** Desarrollador Backend  
**Quiero** implementar endpoints para gestión de tareas  
**Para** completar la API del sistema

### Criterios de Aceptación

- [ ] **DADO** endpoints de tareas implementados  
      **CUANDO** se invocan  
      **ENTONCES** están disponibles:
      - GET /api/tasks/project/:projectId - Listar tareas de proyecto
      - GET /api/tasks/:taskCode - Obtener tarea
      - POST /api/tasks/project/:projectId - Crear tarea
      - PUT /api/tasks/:taskCode - Actualizar tarea
      - DELETE /api/tasks/:taskCode - Eliminar tarea
      - GET /api/tasks/:taskCode/validation - Validación IA

### Notas Técnicas
- Implementar en `routes/tasks.routes.js`
- Service: `services/tasks.service.js`
- Data: `data/tasks.data.js`
- Vincular tareas a proyectos mediante projectId

### Definición de Hecho (DoD)
- [x] Endpoints implementados
- [x] Validaciones backend
- [x] Pruebas funcionales
- [x] Documentación

### Prioridad
**Alta**

### Estimación
**5 puntos de historia**

### Dependencias
- HU-003: Endpoints de Proyectos

---

## HU-005: Dockerizar Aplicación Completa

**Como** DevOps Engineer  
**Quiero** crear Dockerfiles para frontend y backend  
**Para** facilitar el despliegue y escalabilidad

### Criterios de Aceptación

- [ ] **DADO** que creo Dockerfile para backend  
      **CUANDO** construyo imagen  
      **ENTONCES** se crea correctamente con:
      - Base: node:18-alpine
      - Instala dependencias
      - Expone puerto 3000
      - Ejecuta npm start

- [ ] **DADO** que creo Dockerfile para frontend  
      **CUANDO** construyo imagen  
      **ENTONCES** se crea con:
      - Base: nginx:alpine
      - Copia archivos HTML/CSS/JS
      - Configuración nginx para SPA
      - Expone puerto 80

- [ ] **DADO** que creo docker-compose.yml  
      **CUANDO** ejecuto `docker-compose up`  
      **ENTONCES** levanta:
      - Backend en puerto 3000
      - Frontend en puerto 80
      - Ambos en la misma red

### Notas Técnicas
- Dockerfiles en raíz de cada proyecto
- docker-compose.yml en raíz general
- Variables de entorno configurables
- Health checks en compose

### Definición de Hecho (DoD)
- [x] Dockerfiles creados y funcionales
- [x] docker-compose.yml operativo
- [x] Documentación de despliegue
- [x] Pruebas de contenedores

### Prioridad
**Media**

### Estimación
**4 puntos de historia**

### Dependencias
- HU-002: Backend
- HU-001: Frontend

---

[**FIN DE LAS HISTORIAS DE USUARIO**]

---

## 📈 Resumen de Priorización

### Sprint 1 (Crítico - Foundation)
- HU-001, HU-002, HU-003, HU-201, HU-202, HU-203

### Sprint 2 (Alta Prioridad - Core Features)
- HU-204, HU-205, HU-206, HU-301, HU-302, HU-101

### Sprint 3-4 (Alta Prioridad - Advanced Features)
- HU-303, HU-305, HU-401, HU-601, HU-602, HU-102, HU-103

### Sprint 5-6 (Media Prioridad)
- HU-104, HU-105, HU-207, HU-304, HU-306, HU-402, HU-403, HU-404, HU-501-504, HU-603, HU-604, HU-701, HU-702, HU-004

### Sprint 7-8 (Baja Prioridad - Nice to Have)
- HU-106, HU-208, HU-307, HU-405, HU-605, HU-606, HU-703, HU-704, HU-005

---

## 📊 Métricas del Backlog

- **Total Historias de Usuario:** 45
- **Estimación Total:** ~220 puntos de historia
- **Duración Estimada:** 10-12 sprints (5-6 meses con equipo de 5 personas)
- **Historias Críticas:** 6
- **Historias Alta Prioridad:** 15
- **Historias Media Prioridad:** 18
- **Historias Baja Prioridad:** 6

---

**Documento Generado:** 31 de enero de 2026  
**Estado:** Aprobado para desarrollo  
**Próxima Revisión:** Sprint Planning 1
