# Prompt para Generación de Historias de Usuario
## Sistema de Gestión de Proyectos con Predictor Inteligente IA

---

## 📋 Contexto del Sistema

Actúa como un **Product Owner Senior experto en metodologías ágiles (Scrum/SAFe)** con 10+ años de experiencia en proyectos empresariales. Tienes expertise en:
- Redacción de User Stories según estándares INVEST
- Gestión de proyectos con ITIL/PMP
- Sistemas de seguimiento y análisis predictivo con IA
- Integración de múltiples fuentes de datos (L1, RFP, GECO, sistemas de gestión)

---

## 🎯 Objetivo del Prompt

Genera **Historias de Usuario (User Stories)** completas, detalladas y profesionales para un **Sistema de Gestión de Proyectos con Predictor Inteligente basado en IA**.

El sistema debe permitir:
1. **Gestión integral de proyectos** con seguimiento de progreso real vs planificado
2. **Dashboard ejecutivo** con visualizaciones avanzadas y KPIs
3. **Análisis predictivo mediante IA** para detección temprana de riesgos
4. **Gestión de tareas** con criterios ITIL/PMP y desviaciones por color (verde/amarillo/rojo)
5. **Integración con sistemas de gestión** (Jira, MS Project, Excel)
6. **Gestión documental** (L1, RFP, Propuesta Técnica, GECO Excel)
7. **Análisis financiero** con presupuestos, facturas e hitos
8. **Historial de cambios** con trazabilidad completa

---

## 📊 Estructura de Datos del Sistema

### **Entidad Principal: Proyecto**
```javascript
{
  id: string,
  code: string,                    // PRJ-001
  name: string,
  status: enum,                     // Activo, En Pausa, Completado, Cancelado
  leader: string,
  startDate: date,
  endDate: date,
  plannedProgress: number,          // Porcentaje planificado
  actualProgress: number,           // Porcentaje real
  deviation: number,                // actualProgress - plannedProgress
  deviationLevel: enum,             // green (≤5%), yellow (5-10%), red (>10%)
  managementSystem: enum,           // Jira, Project, Excel, Otro
  managementPath: string,           // URL o ruta al sistema de gestión
  
  documents: {
    l1: { name, url, uploadDate },
    rfp: { name, url, uploadDate },
    propuestaTecnica: { name, url, uploadDate },
    gecoExcel: { name, url, uploadDate }
  },
  
  financialSummary: {
    budgetTotal: number,
    budgetConsumed: number,
    budgetConsumedPercent: number,
    invoicesTotal: number,
    invoicesPaid: number,
    invoicesPending: number,
    invoicesPendingAmount: number,
    milestonesTotal: number,
    milestonesApproved: number,
    milestonesPending: number
  },
  
  history: [
    { date, title, description, reason }
  ],
  
  aiAnalysis: {
    riskLevel: enum,                // bajo, medio, alto, crítico
    confidence: number,             // 0-100%
    predictedCompletion: date,
    recommendations: string[],
    alerts: Alert[]
  }
}
```

### **Entidad: Tarea**
```javascript
{
  taskCode: string,                 // TSK-001-001
  projectId: string,
  name: string,
  stage: string,                    // Planificación, Análisis, Desarrollo, Testing, Deploy
  milestone: string,
  status: enum,                     // Pendiente, En Progreso, Completado, Bloqueado
  responsible: string,
  plannedProgress: number,
  actualProgress: number,
  startDate: date,
  endDate: date,
  riskLevel: enum,                  // verde, amarillo, rojo
  aiValidation: {
    status: enum,                   // validado, advertencia, error
    messages: string[],
    suggestions: string[]
  }
}
```

---

## 🎨 Componentes del Sistema

### **Frontend - Aplicación Web**
1. **Dashboard Ejecutivo** (`page-executive-dashboard.html/js`)
   - Visualización con gráficos ApexCharts
   - KPIs principales: proyectos activos, completados, en riesgo
   - Filtros por período, estado y nivel de riesgo
   - Actualización en tiempo real

2. **Gestión de Proyectos** (`page-projects.html/js`)
   - Listado con filtros avanzados
   - CRUD completo de proyectos
   - Cálculo automático de desviaciones según ITIL/PMP
   - Navegación a detalle

3. **Detalle de Proyecto** (`page-project-detail.html/js`)
   - Información general del proyecto
   - Gestión de tareas con filtros múltiples
   - Análisis financiero con gráficos
   - Dashboard IA integrado

4. **Análisis IA del Proyecto** (`page-project-ia.html/js`)
   - Timeline predictivo
   - Análisis de riesgos con IA
   - Recomendaciones inteligentes
   - Alertas y notificaciones

### **Backend - API REST**
- **Node.js + Express**
- **Arquitectura por capas**: Routes → Services → Data
- **Endpoints RESTful**:
  - `/api/projects` - CRUD proyectos
  - `/api/tasks` - CRUD tareas
  - `/api/projects/:id/history` - Historial
  - `/api/projects/:id/financial` - Análisis financiero
  - `/api/tasks/:taskCode/validation` - Validación IA

---

## 🔧 Criterios para las User Stories

### **Formato INVEST**
- **I**ndependientes: Cada historia debe poder implementarse de forma independiente
- **N**egociables: Flexibles en detalles de implementación
- **V**aliosas: Aportan valor tangible al usuario
- **E**stimables: Con suficiente detalle para estimar esfuerzo
- **S**mall (Pequeñas): Completables en 1-2 sprints
- **T**estables: Con criterios de aceptación verificables

### **Estructura de Cada User Story**
```markdown
## [ID] - [Título Descriptivo]

**Como** [tipo de usuario]
**Quiero** [realizar alguna acción]
**Para** [obtener algún beneficio/valor]

### Criterios de Aceptación
- [ ] **DADO** [contexto inicial]
      **CUANDO** [acción realizada]
      **ENTONCES** [resultado esperado]
- [ ] [Criterio adicional...]

### Notas Técnicas
- [Consideraciones de implementación]
- [Dependencias con otros módulos]
- [Tecnologías específicas: ApexCharts, jQuery, etc.]

### Definición de Hecho (DoD)
- [ ] Código implementado y revisado
- [ ] Pruebas unitarias creadas y pasando
- [ ] Pruebas de integración exitosas
- [ ] Documentación técnica actualizada
- [ ] UI responsiva y accesible
- [ ] Validación de datos implementada

### Prioridad
**[Alta/Media/Baja]** - [Justificación]

### Estimación
**[Puntos de historia o días]**

### Dependencias
- [Lista de historias relacionadas]
```

---

## 👥 Roles de Usuario

1. **Director de Proyectos / PMO**
   - Visualiza dashboard ejecutivo
   - Analiza KPIs y métricas globales
   - Toma decisiones estratégicas

2. **Gerente de Proyecto / Project Manager**
   - Gestiona proyectos completos
   - Administra tareas y recursos
   - Actualiza progreso y documentación
   - Revisa análisis de IA

3. **Analista de Proyectos**
   - Registra y actualiza información
   - Sube documentos (L1, RFP, GECO)
   - Valida datos con IA
   - Genera reportes

4. **Líder Técnico / Team Lead**
   - Consulta detalle de tareas
   - Actualiza estado de tareas
   - Reporta bloqueos

5. **Sistema IA**
   - Analiza datos automáticamente
   - Genera predicciones
   - Envía alertas
   - Sugiere recomendaciones

---

## 🎯 Áreas Funcionales a Cubrir

### 1. **Dashboard Ejecutivo**
- Visualización de KPIs principales
- Gráficos interactivos (proyectos por estado, riesgos, progreso)
- Filtros dinámicos
- Actualización automática

### 2. **Gestión de Proyectos**
- Listado con búsqueda y filtros
- Crear/Editar/Eliminar proyectos
- Cálculo automático de desviaciones
- Integración con sistemas de gestión

### 3. **Gestión de Tareas**
- Listado por proyecto con filtros múltiples
- CRUD de tareas
- Estados y responsables
- Validación IA en tiempo real

### 4. **Análisis Financiero**
- Presupuesto total vs consumido
- Gestión de facturas
- Control de hitos
- Gráficos de distribución

### 5. **Gestión Documental**
- Carga de documentos (L1, RFP, Propuesta, GECO)
- Versionamiento
- Links de descarga
- Validación de formatos

### 6. **Análisis Predictivo IA**
- Detección de riesgos
- Predicción de fechas de finalización
- Recomendaciones automatizadas
- Alertas tempranas

### 7. **Historial y Auditoría**
- Registro de cambios
- Trazabilidad completa
- Consulta histórica
- Justificación de modificaciones

### 8. **Integración con Sistemas Externos**
- Conexión con Jira/MS Project/Excel
- Sincronización de datos
- Actualización bidireccional

---

## 📝 Instrucciones de Generación

**GENERA las Historias de Usuario siguiendo estos pasos:**

1. **Identifica todas las funcionalidades** del sistema basándote en:
   - Componentes frontend descritos
   - Endpoints API backend
   - Estructura de datos
   - Flujos de usuario

2. **Agrupa las historias por ÉPICAS**:
   - Dashboard Ejecutivo
   - Gestión de Proyectos
   - Gestión de Tareas
   - Análisis Financiero
   - Gestión Documental
   - Análisis IA y Predicción
   - Historial y Auditoría
   - Integraciones

3. **Numera las historias** secuencialmente:
   - HU-001, HU-002, HU-003...
   - Agrupa por épica: HU-101, HU-102... (Dashboard), HU-201, HU-202... (Proyectos)

4. **Prioriza las historias** según:
   - Valor de negocio
   - Dependencias técnicas
   - Riesgo
   - Complejidad

5. **Asegura la cobertura completa** de:
   - Todos los CRUDs
   - Todas las vistas
   - Todos los flujos de interacción
   - Validaciones y manejo de errores
   - Casos edge y excepcionales

6. **Incluye historias técnicas** para:
   - Configuración inicial del proyecto
   - Arquitectura de microservicios
   - Integración de librerías (ApexCharts, jQuery)
   - Despliegue y DevOps

---

## ✅ Validación de Calidad

Cada User Story debe cumplir:
- ✅ Redacción clara en formato "Como...Quiero...Para..."
- ✅ Mínimo 3 criterios de aceptación en formato Given-When-Then
- ✅ Definición de Hecho completa
- ✅ Estimación y prioridad asignadas
- ✅ Notas técnicas relevantes
- ✅ Dependencias identificadas
- ✅ Testable y medible
- ✅ Alineada con estándares ITIL/PMP cuando aplique

---

## 🚀 Output Esperado

Genera un documento completo en **Markdown** con:

```markdown
# Historias de Usuario - Sistema de Gestión de Proyectos con IA

## Resumen Ejecutivo
[Descripción general del backlog]

## Épicas del Proyecto
[Lista de épicas identificadas]

## Priorización Global
[Tabla con prioridad de cada historia]

---

## ÉPICA 1: Dashboard Ejecutivo

### HU-101: Visualizar Dashboard Ejecutivo con KPIs
[Historia completa según template]

### HU-102: Filtrar Dashboard por Período y Estado
[Historia completa según template]

[...continuar con todas las historias...]

---

## ÉPICA 2: Gestión de Proyectos
[Historias de esta épica...]

[...continuar con todas las épicas...]
```

---

## 🎓 Ejemplo de User Story Completa

```markdown
## HU-201: Crear un Nuevo Proyecto

**Como** Gerente de Proyecto
**Quiero** crear un nuevo proyecto en el sistema con toda su información básica
**Para** poder comenzar a gestionar su seguimiento y asignar tareas

### Criterios de Aceptación

- [ ] **DADO** que soy un usuario con rol de Gerente de Proyecto
      **CUANDO** hago clic en el botón "Crear Proyecto"
      **ENTONCES** se abre un formulario modal con todos los campos requeridos

- [ ] **DADO** que estoy llenando el formulario de creación
      **CUANDO** completo los campos obligatorios (código, nombre, líder, fechas)
      **ENTONCES** el botón "Guardar" se habilita

- [ ] **DADO** que he completado el formulario correctamente
      **CUANDO** hago clic en "Guardar"
      **ENTONCES** el proyecto se crea con código autogenerado (PRJ-XXX)
      **Y** se calcula automáticamente la desviación (inicial = 0)
      **Y** se muestra un mensaje de éxito
      **Y** el proyecto aparece en el listado

- [ ] **DADO** que intento crear un proyecto con código duplicado
      **CUANDO** hago clic en "Guardar"
      **ENTONCES** se muestra un error "El código ya existe"

- [ ] **DADO** que intento guardar sin campos obligatorios
      **CUANDO** hago clic en "Guardar"
      **ENTONCES** se resaltan los campos faltantes en rojo

### Notas Técnicas
- Implementar en `page-projects.js`
- Usar jQuery para manipulación del DOM
- Validación frontend y backend
- El código se autogenera si no se proporciona: `PRJ-XXX`
- La desviación inicial es `actualProgress - plannedProgress = 0 - 0 = 0`
- El nivel de desviación inicial es `green`
- POST `/api/projects` en el backend

### Definición de Hecho (DoD)
- [x] Código implementado y revisado
- [x] Validaciones frontend implementadas
- [x] Endpoint API `/api/projects` POST funcionando
- [x] Pruebas unitarias para el servicio
- [x] Pruebas de integración
- [x] Modal responsivo
- [x] Manejo de errores implementado
- [x] Documentación API actualizada

### Prioridad
**Alta** - Es funcionalidad core del sistema y bloquea otras historias

### Estimación
**5 puntos de historia** (~2-3 días)

### Dependencias
- Ninguna (puede implementarse de forma independiente)
```

---

## 🏁 ¡Comienza la Generación!

**Con toda esta información, GENERA AHORA:**
- Todas las Historias de Usuario necesarias
- Organizadas por épicas
- Con numeración secuencial
- Siguiendo el formato especificado
- Cubriendo todas las funcionalidades del sistema
- Con nivel de detalle profesional

**IMPORTANTE**: Sé exhaustivo. Este es un sistema empresarial complejo que requiere cobertura total de funcionalidades.

---

**Fecha de Creación:** 31 de enero de 2026
**Versión:** 1.0
**Autor:** Product Owner - Sistema IA Projects
