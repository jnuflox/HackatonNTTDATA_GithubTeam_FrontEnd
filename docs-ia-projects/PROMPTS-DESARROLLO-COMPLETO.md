# Prompts para Desarrollo Completo del Sistema
## Sistema de Gestión de Proyectos con Predictor Inteligente IA

**Fecha:** 31 de enero de 2026  
**Versión:** 1.0  
**Metodología de Prompting:** Chain of Thought + Role-Based + Few-Shot Learning

---

## 📚 Índice de Prompts

1. [Configuración Inicial del Proyecto](#1-configuración-inicial-del-proyecto)
2. [Desarrollo del Backend - Microservicios](#2-desarrollo-del-backend---microservicios)
3. [Desarrollo del Frontend - Dashboard Ejecutivo](#3-desarrollo-del-frontend---dashboard-ejecutivo)
4. [Desarrollo del Frontend - Gestión de Proyectos](#4-desarrollo-del-frontend---gestión-de-proyectos)
5. [Desarrollo del Frontend - Detalle de Proyecto](#5-desarrollo-del-frontend---detalle-de-proyecto)
6. [Desarrollo del Frontend - Análisis IA](#6-desarrollo-del-frontend---análisis-ia)
7. [Sistema de Validación IA](#7-sistema-de-validación-ia)
8. [Integración y Testing](#8-integración-y-testing)
9. [Optimización y Performance](#9-optimización-y-performance)
10. [Despliegue y DevOps](#10-despliegue-y-devops)

---

## 🎯 Técnicas de Prompting Utilizadas

### 1. **Role-Based Prompting**
Asignar un rol específico al AI para mejorar la calidad de las respuestas:
```
Actúa como un [Rol Experto] con X años de experiencia en [Dominio]...
```

### 2. **Chain of Thought (CoT)**
Solicitar razonamiento paso a paso:
```
Piensa paso a paso sobre cómo implementar esto...
Primero analiza X, luego Y, finalmente Z...
```

### 3. **Few-Shot Learning**
Proporcionar ejemplos concretos:
```
Ejemplo 1: [Input] → [Output esperado]
Ejemplo 2: [Input] → [Output esperado]
Ahora, para este caso: [Nuevo input]
```

### 4. **Context Setting**
Establecer contexto completo y detallado antes de la tarea.

### 5. **Output Formatting**
Especificar exactamente el formato de salida deseado.

### 6. **Constraint Definition**
Definir claramente las restricciones y limitaciones.

### 7. **Iterative Refinement**
Solicitar revisión y mejora progresiva.

---

# 1. Configuración Inicial del Proyecto

## Prompt 1.1: Estructura del Proyecto Frontend

```markdown
**Rol:** Actúa como un Arquitecto de Software Frontend Senior con 10+ años de experiencia en desarrollo de aplicaciones web empresariales.

**Contexto:**
Necesito configurar la estructura inicial de un proyecto frontend para un Sistema de Gestión de Proyectos con Predictor IA. El proyecto NO utiliza frameworks como React/Vue/Angular, sino JavaScript vanilla con jQuery y ApexCharts.

**Estructura Requerida:**
```
app-ia-projects/
├── feature/
│   ├── dashboard/
│   │   ├── page-executive-dashboard.html
│   │   └── page-executive-dashboard.js
│   ├── projects/
│   │   ├── page-projects.html
│   │   ├── page-projects.js
│   │   ├── page-project-detail.html
│   │   ├── page-project-detail.js
│   │   ├── page-project-ia.html
│   │   └── page-project-ia.js
├── shared/
│   ├── css/
│   │   ├── variables.css
│   │   ├── common.css
│   │   └── components.css
│   ├── js/
│   │   ├── utils.js
│   │   ├── api-client.js
│   │   └── validators.js
│   └── data/
│       └── mock-data.js
└── assets/
    ├── icons/
    └── images/
```

**Tarea:**
Genera los archivos de configuración base necesarios:

1. **variables.css**: Con variables CSS para theming (colores, espaciados, fuentes)
   - Colores principales: Degradado púrpura (#667eea a #764ba2)
   - Colores de estado: verde (#10b981), amarillo (#f59e0b), rojo (#ef4444)
   - Colores neutrales: escalas de gris
   - Tipografía: -apple-system, BlinkMacSystemFont, 'Segoe UI'
   - Espaciados: sistema de 4px base

2. **common.css**: Estilos globales reutilizables
   - Reset CSS básico
   - Clases de utilidad (.flex, .grid, .text-center, etc.)
   - Estilos de formularios
   - Estilos de botones (.btn-primary, .btn-secondary, etc.)
   - Estilos de cards y containers
   - Estados de loading y error

3. **utils.js**: Funciones utilitarias
   - Formateo de fechas (DD/MM/YYYY)
   - Formateo de números (separador de miles, decimales)
   - Formateo de moneda ($ con separadores)
   - Generación de códigos únicos
   - Validaciones básicas
   - Manejo de localStorage

4. **api-client.js**: Cliente HTTP reutilizable
   - Configuración base de endpoints
   - Funciones GET, POST, PUT, DELETE
   - Manejo de errores consistente
   - Loading states
   - Mock mode toggle

5. **validators.js**: Validadores de datos
   - Validación de fechas (inicio < fin)
   - Validación de porcentajes (0-100)
   - Validación de emails
   - Validación de campos obligatorios
   - Validación de códigos únicos

**Formato de Salida:**
Para cada archivo, proporciona:
- El código completo y funcional
- Comentarios explicativos en español
- Ejemplos de uso en comentarios
- Clean code principles aplicados

**Restricciones:**
- NO usar ES6 modules (usar scripts globales)
- Compatibilidad con IE11+ (opcional pero deseable)
- Código limpio, bien documentado
- Funciones puras cuando sea posible
- Evitar dependencias externas adicionales

**Ejemplo de Estructura de Respuesta:**

```css
/* variables.css */
:root {
  /* Colores principales */
  --color-primary: #667eea;
  --color-primary-dark: #5568d3;
  ...
}
```

```javascript
/* utils.js */
/**
 * Formatea una fecha al formato DD/MM/YYYY
 * @param {string|Date} date - Fecha a formatear
 * @returns {string} Fecha formateada
 * @example formatDate('2026-01-31') // '31/01/2026'
 */
function formatDate(date) {
  // Implementación
}
```

Ahora, **genera el código completo para cada uno de los 5 archivos solicitados**.
```

---

## Prompt 1.2: Estructura del Proyecto Backend

```markdown
**Rol:** Actúa como un Arquitecto de Microservicios Backend experto en Node.js y Express, con especialización en APIs RESTful y arquitectura limpia.

**Contexto:**
Necesito configurar un microservicio backend para el Sistema de Gestión de Proyectos con IA. Debe seguir arquitectura de 3 capas (Routes → Services → Data) y exponer APIs REST.

**Arquitectura Objetivo:**
```
ms-ia-projects/
└── feature/
    └── ms-api-projects/
        ├── api/
        │   ├── server.js
        │   ├── package.json
        │   ├── .env.example
        │   ├── routes/
        │   │   ├── projects.routes.js
        │   │   └── tasks.routes.js
        │   ├── services/
        │   │   ├── projects.service.js
        │   │   └── tasks.service.js
        │   ├── data/
        │   │   ├── projects.data.js
        │   │   └── tasks.data.js
        │   └── middleware/
        │       ├── error-handler.js
        │       ├── logger.js
        │       └── validator.js
        └── tests/
            ├── projects.test.js
            └── tasks.test.js
```

**Tarea:**
Genera los archivos de configuración y estructura base:

1. **package.json**: Dependencias y scripts
   - express: 4.18.x
   - cors: latest
   - dotenv: latest
   - uuid: latest
   - nodemon (dev dependency)
   - Scripts: start, dev, test

2. **server.js**: Servidor principal
   - Configuración de Express
   - Middleware: CORS, JSON parser, logger
   - Registro de rutas
   - Manejo de errores global
   - Health check endpoint
   - Documentación de API en /api

3. **.env.example**: Variables de entorno
   - PORT
   - NODE_ENV
   - API_VERSION
   - CORS_ORIGIN

4. **middleware/error-handler.js**: Manejo centralizado de errores
   - Formateo consistente de errores
   - Logging de errores
   - Códigos HTTP apropiados

5. **middleware/logger.js**: Logging de requests
   - Timestamp
   - Método HTTP
   - Ruta
   - Status code
   - Tiempo de respuesta

6. **middleware/validator.js**: Validación de datos
   - Validador genérico de schemas
   - Mensajes de error descriptivos

**Principios a Seguir:**
- SOLID principles
- Separation of concerns
- DRY (Don't Repeat Yourself)
- Clean Architecture
- RESTful best practices

**Formato de Respuesta Esperado:**

```json
{
  "name": "ms-api-projects",
  "version": "1.0.0",
  ...
}
```

```javascript
/**
 * Main Server - Projects Management API
 * 
 * Este servidor expone APIs REST para gestión de proyectos y tareas
 */
const express = require('express');
...
```

**Criterios de Calidad:**
- Código autodocumentado con JSDoc
- Manejo robusto de errores
- Logging adecuado
- Respuestas consistentes
- Código testeable

Ahora, **genera el código completo para cada archivo solicitado**.
```

---

# 2. Desarrollo del Backend - Microservicios

## Prompt 2.1: API de Gestión de Proyectos

```markdown
**Rol:** Actúa como un Desarrollador Backend Senior especializado en Node.js, Express y diseño de APIs RESTful, con profundo conocimiento de estándares ITIL/PMP.

**Contexto del Dominio:**
Estás desarrollando la API de gestión de proyectos para un sistema que:
- Gestiona proyectos con seguimiento de progreso real vs planificado
- Calcula desviaciones según estándares ITIL/PMP (verde ≤5%, amarillo 5-10%, rojo >10%)
- Mantiene historial de cambios con trazabilidad
- Gestiona documentos (L1, RFP, Propuesta Técnica, GECO Excel)
- Calcula métricas financieras (presupuesto, facturas, hitos)

**Modelo de Datos - Proyecto:**
```javascript
{
  id: string,
  code: string,                    // PRJ-001 (único)
  name: string,
  status: enum ['Activo', 'En Pausa', 'Completado', 'Cancelado'],
  leader: string,
  startDate: date,                 // ISO 8601
  endDate: date,
  plannedProgress: number,         // 0-100
  actualProgress: number,          // 0-100
  deviation: number,               // calculado: actualProgress - plannedProgress
  deviationLevel: enum ['green', 'yellow', 'red'],  // calculado
  managementSystem: enum ['Jira', 'Project', 'Excel', 'Otro', 'Ninguno'],
  managementPath: string,          // URL o ruta UNC
  documents: {
    l1: { name: string, url: string, uploadDate: date } | null,
    rfp: { name: string, url: string, uploadDate: date } | null,
    propuestaTecnica: { name: string, url: string, uploadDate: date } | null,
    gecoExcel: { name: string, url: string, uploadDate: date } | null
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
    {
      date: date,
      title: string,
      description: string,
      reason: string,
      user: string
    }
  ],
  createdAt: date,
  updatedAt: date
}
```

**Tarea - Implementar:**

### **A) projects.service.js**

Implementa un servicio completo con las siguientes funciones:

1. **getAllProjects(filters)**
   - Filtros opcionales: status, leader, search
   - Retorna array de proyectos con desviación calculada
   - Ordenamiento por fecha de actualización descendente

2. **getProjectById(id)**
   - Validación de ID
   - Cálculo de desviación en runtime
   - Retorna null si no existe

3. **getProjectByCode(code)**
   - Similar a getById pero por código

4. **createProject(projectData)**
   - Generación automática de ID (uuid)
   - Generación de código si no se proporciona (PRJ-XXX)
   - Validaciones:
     - Campos obligatorios: name, leader, startDate, endDate
     - startDate < endDate
     - Progreso entre 0-100
     - Código único
   - Inicialización de arrays vacíos (history, documents)
   - Cálculo de desviación inicial
   - Timestamp de creación

5. **updateProject(id, updates)**
   - Validación de existencia
   - Validaciones de negocio
   - Recálculo de desviación
   - Actualización de timestamp
   - Registro en historial si cambios significativos

6. **deleteProject(id, reason)**
   - Validación de existencia
   - Soft delete recomendado (agregar campo deletedAt)
   - Registro en log de auditoría

7. **calculateDeviationLevel(deviation)**
   - Helper function
   - Implementa lógica ITIL/PMP:
     - |deviation| ≤ 5% → 'green'
     - 5% < |deviation| ≤ 10% → 'yellow'
     - |deviation| > 10% → 'red'

8. **getProjectsStats()**
   - Retorna estadísticas para dashboard:
     - Total proyectos
     - Por estado (activo, pausado, completado, cancelado)
     - Por nivel de riesgo (verde, amarillo, rojo)
     - Promedio de progreso
     - Tasa de cumplimiento

9. **addHistoryEntry(projectId, entry)**
   - Validación de proyecto
   - Validación de entry (date, title, description, reason)
   - Agregar al array history
   - Timestamp automático

10. **getProjectHistory(projectId, filters)**
    - Retorna historial completo o filtrado
    - Ordenamiento descendente por fecha

### **B) projects.routes.js**

Implementa los siguientes endpoints RESTful:

1. `GET /api/projects`
   - Query params: ?status=...&leader=...&search=...
   - Response: { success: true, count: N, data: [...] }

2. `GET /api/projects/stats`
   - Response: { success: true, data: { totalProjects, byStatus, byRisk, ... } }

3. `GET /api/projects/:id`
   - Params: id
   - Response 200: { success: true, data: {...} }
   - Response 404: { success: false, error: 'Proyecto no encontrado' }

4. `GET /api/projects/code/:code`
   - Similar a GET by ID

5. `POST /api/projects`
   - Body: projectData
   - Validación de body
   - Response 201: { success: true, data: {...} }
   - Response 400: { success: false, error: 'Mensaje de validación' }

6. `PUT /api/projects/:id`
   - Body: updates
   - Response 200: { success: true, data: {...} }

7. `DELETE /api/projects/:id`
   - Body: { reason: string }
   - Response 200: { success: true, message: 'Proyecto eliminado' }

8. `GET /api/projects/:id/history`
   - Response: { success: true, data: [...] }

9. `POST /api/projects/:id/history`
   - Body: { title, description, reason }
   - Response 201: { success: true, data: {...} }

10. `GET /api/projects/:id/financial`
    - Response: { success: true, data: financialSummary }

**Principios de Implementación:**
- Usar async/await para operaciones asíncronas
- Try-catch en todas las rutas
- Validación exhaustiva de inputs
- Respuestas HTTP apropiadas (200, 201, 400, 404, 500)
- Logging de operaciones importantes
- Código limpio y bien documentado

**Ejemplo de Implementación Esperada:**

```javascript
/**
 * Projects Service
 * Business logic for project operations
 */

const { v4: uuidv4 } = require('uuid');
const { projects } = require('../data/projects.data');

/**
 * Calculate deviation level based on ITIL/PMP standards
 * @param {number} deviation - The deviation percentage
 * @returns {string} - 'green', 'yellow', or 'red'
 */
const calculateDeviationLevel = (deviation) => {
  const absDeviation = Math.abs(deviation);
  if (absDeviation <= 5) return 'green';
  if (absDeviation <= 10) return 'yellow';
  return 'red';
};

/**
 * Get all projects with optional filtering
 * @param {Object} filters - Optional filters
 * @returns {Array} Array of projects
 */
const getAllProjects = (filters = {}) => {
  let result = [...projects];

  // Apply filters
  if (filters.status) {
    result = result.filter(p => 
      p.status.toLowerCase() === filters.status.toLowerCase()
    );
  }

  // ... más filtros

  // Add calculated fields
  return result.map(project => ({
    ...project,
    deviation: project.actualProgress - project.plannedProgress,
    deviationLevel: calculateDeviationLevel(
      project.actualProgress - project.plannedProgress
    )
  }));
};

// ... más funciones

module.exports = {
  getAllProjects,
  getProjectById,
  // ... exportar todas
};
```

**Criterios de Calidad:**
✅ Funciones puras donde sea posible
✅ Validaciones exhaustivas
✅ Manejo de errores robusto
✅ JSDoc completo
✅ Clean Code principles
✅ Testeable

Ahora, **genera el código completo de projects.service.js y projects.routes.js** siguiendo estas especificaciones.
```

---

## Prompt 2.2: API de Gestión de Tareas

```markdown
**Rol:** Actúa como un Desarrollador Backend Senior especializado en Node.js y gestión de datos relacionales en memoria.

**Contexto:**
Implementa la API de gestión de tareas que están vinculadas a proyectos. Cada tarea debe validarse automáticamente con IA al crear/actualizar.

**Modelo de Datos - Tarea:**
```javascript
{
  taskCode: string,                // TSK-PRJ-001-001 (único)
  projectId: string,               // FK a proyecto
  name: string,
  description: string,
  stage: enum ['Planificación', 'Análisis', 'Desarrollo', 'Testing', 'Deploy'],
  milestone: string,
  status: enum ['Pendiente', 'En Progreso', 'Completado', 'Bloqueado'],
  responsible: string,
  plannedProgress: number,         // 0-100
  actualProgress: number,          // 0-100
  startDate: date,
  endDate: date,
  riskLevel: enum ['green', 'yellow', 'red'],  // calculado
  aiValidation: {
    status: enum ['validado', 'advertencia', 'error'],
    messages: [string],
    suggestions: [string],
    validatedAt: date
  },
  dependencies: [string],          // Array de taskCodes
  createdAt: date,
  updatedAt: date
}
```

**Tarea - Implementar:**

### **A) tasks.service.js**

Funciones requeridas:

1. **getTasksByProject(projectId)**
   - Filtrar todas las tareas del proyecto
   - Calcular riskLevel para cada una
   - Ordenar por fecha de inicio

2. **getTaskByCode(taskCode)**
   - Buscar por código único
   - Incluir datos del proyecto asociado

3. **createTask(projectId, taskData)**
   - Generar taskCode: TSK-{projectCode}-{secuencial}
   - Validaciones:
     - Proyecto existe
     - Campos obligatorios
     - startDate dentro del rango del proyecto
     - endDate dentro del rango y posterior a startDate
   - Ejecutar validación IA automática
   - Inicializar aiValidation

4. **updateTask(taskCode, updates)**
   - Re-ejecutar validación IA si cambios significativos
   - Recalcular riskLevel
   - Actualizar progreso del proyecto (promedio ponderado)

5. **deleteTask(taskCode)**
   - Eliminar tarea
   - Recalcular progreso del proyecto

6. **validateTaskWithAI(task, project)**
   - Función de validación IA
   - Reglas a validar:
     - Fechas dentro del rango del proyecto
     - Progreso coherente con estado
     - Sin saltos imposibles de progreso
     - Responsable asignado
     - Desviación aceptable
   - Retornar: { status, messages, suggestions }

7. **calculateTaskRiskLevel(task)**
   - Similar a proyectos pero para tareas
   - Considerar fecha de vencimiento

### **B) tasks.routes.js**

Endpoints:

1. `GET /api/tasks/project/:projectId`
2. `GET /api/tasks/:taskCode`
3. `POST /api/tasks/project/:projectId`
4. `PUT /api/tasks/:taskCode`
5. `DELETE /api/tasks/:taskCode`
6. `GET /api/tasks/:taskCode/validation`

**Lógica de Validación IA:**

```javascript
/**
 * Validate task with AI rules
 * @param {Object} task - Task to validate
 * @param {Object} project - Associated project
 * @returns {Object} Validation result
 */
const validateTaskWithAI = (task, project) => {
  const messages = [];
  const suggestions = [];
  let status = 'validado';

  // Rule 1: Dates within project range
  if (new Date(task.startDate) < new Date(project.startDate) ||
      new Date(task.endDate) > new Date(project.endDate)) {
    messages.push('❌ Las fechas de la tarea están fuera del rango del proyecto');
    suggestions.push('Ajusta las fechas para que estén entre ' + 
      project.startDate + ' y ' + project.endDate);
    status = 'error';
  }

  // Rule 2: Progress vs Status consistency
  if (task.status === 'Completado' && task.actualProgress < 100) {
    messages.push('⚠️ Tarea marcada como completada pero progreso < 100%');
    suggestions.push('Actualiza el progreso a 100% o cambia el estado');
    status = status === 'error' ? 'error' : 'advertencia';
  }

  // Rule 3: Unrealistic progress jumps
  // (comparar con progreso anterior si existe)

  // Rule 4: Responsible assigned
  if (!task.responsible || task.responsible.trim() === '') {
    messages.push('⚠️ No hay responsable asignado');
    suggestions.push('Asigna un responsable a esta tarea');
    status = status === 'error' ? 'error' : 'advertencia';
  }

  // Rule 5: Deviation check
  const deviation = task.actualProgress - task.plannedProgress;
  if (Math.abs(deviation) > 15) {
    messages.push('🔴 Desviación crítica detectada: ' + deviation.toFixed(1) + '%');
    suggestions.push('Revisa las causas del retraso y actualiza la planificación');
    status = status === 'error' ? 'error' : 'advertencia';
  }

  return {
    status,
    messages,
    suggestions,
    validatedAt: new Date().toISOString()
  };
};
```

**Criterios de Calidad:**
- Validación IA robusta y útil
- Mensajes claros y accionables
- Mantener integridad referencial con proyectos
- Performance optimizado

Genera el código completo de **tasks.service.js** y **tasks.routes.js**.
```

---

# 3. Desarrollo del Frontend - Dashboard Ejecutivo

## Prompt 3.1: Página HTML del Dashboard

```markdown
**Rol:** Actúa como un Desarrollador Frontend Senior especializado en HTML5 semántico, CSS3 avanzado y diseño de interfaces empresariales.

**Contexto:**
Desarrolla la página HTML del Dashboard Ejecutivo que será la vista principal para directores de proyectos. Debe ser profesional, moderna y altamente visual con gráficos interactivos.

**Requisitos de Diseño:**
- Diseño limpio y profesional
- Fondo con degradado púrpura (#667eea a #764ba2)
- Container blanco centrado con sombra
- Layout responsive (mobile-first)
- Uso de ApexCharts para visualizaciones
- KPIs destacados con cards
- Sección de filtros colapsable
- Lista de proyectos en riesgo destacada
- Footer con última actualización

**Estructura de la Página:**

1. **Header**
   - Título: "Dashboard Ejecutivo - Predictor Inteligente IA"
   - Subtítulo: "Análisis y seguimiento de proyectos en tiempo real"
   - Botón "Actualizar" con ícono
   - Botón "Volver"

2. **Sección de Filtros**
   - Período (dropdown)
   - Estado (dropdown)
   - Nivel de Riesgo (dropdown)
   - Botones: "Aplicar Filtros" y "Limpiar"

3. **KPIs Cards** (Grid 4 columnas)
   - Total Proyectos Activos
   - Total Proyectos Completados
   - Proyectos en Riesgo
   - % Cumplimiento Global

4. **Sección de Gráficos** (Grid 2 columnas)
   - Gráfico 1: Proyectos por Estado (Donut)
   - Gráfico 2: Proyectos por Nivel de Riesgo (Barras)
   - Gráfico 3: Evolución Mensual (Líneas)
   - Gráfico 4: Distribución Presupuestaria (Área)

5. **Proyectos en Riesgo Crítico**
   - Banner destacado en rojo
   - Lista de proyectos con desviación >10%
   - Botón "Ver Detalle" por cada proyecto

6. **Footer**
   - Última actualización
   - Versión del sistema

**Elementos Visuales:**
- Cards con sombra y hover effects
- Badges de colores para estados
- Iconos intuitivos (📊 📈 🔄 ⚠️ 🚨)
- Loading spinners
- Estados vacíos con mensajes amigables

**Librerías CDN:**
```html
<!-- jQuery -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

<!-- ApexCharts -->
<script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>

<!-- Mock Data (desarrollo) -->
<script src="../../shared/data/mock-data.js"></script>

<!-- JavaScript de la página -->
<script src="page-executive-dashboard.js"></script>
```

**CSS Inline Requerido:**
- Variables CSS en :root
- Estilos del layout principal
- Estilos de KPI cards
- Estilos de gráficos
- Estilos de filtros
- Estilos de alertas
- Estilos responsive (media queries)

**Estructura HTML Esperada:**

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard Ejecutivo - Predictor Inteligente IA</title>
    
    <!-- Librerías -->
    <script src="..."></script>
    
    <style>
        /* Variables CSS */
        :root {
            --color-primary: #667eea;
            --color-primary-dark: #764ba2;
            ...
        }
        
        /* Reset y estilos base */
        * { margin: 0; padding: 0; box-sizing: border-box; }
        
        /* Layout principal */
        body { ... }
        
        /* Header */
        .dashboard-header { ... }
        
        /* KPIs */
        .kpis-grid { ... }
        .kpi-card { ... }
        
        /* Gráficos */
        .charts-grid { ... }
        .chart-container { ... }
        
        /* Filtros */
        .filters-section { ... }
        
        /* Proyectos en riesgo */
        .risk-alert { ... }
        
        /* Responsive */
        @media (max-width: 768px) { ... }
    </style>
</head>
<body>
    <div class="dashboard-container">
        <!-- Header -->
        <header class="dashboard-header">
            ...
        </header>
        
        <!-- Filtros -->
        <section class="filters-section">
            ...
        </section>
        
        <!-- KPIs -->
        <section class="kpis-section">
            <div class="kpis-grid">
                <div class="kpi-card">
                    <div class="kpi-icon">📊</div>
                    <div class="kpi-value" id="kpiActiveProjects">0</div>
                    <div class="kpi-label">Proyectos Activos</div>
                </div>
                <!-- Más KPI cards... -->
            </div>
        </section>
        
        <!-- Gráficos -->
        <section class="charts-section">
            <div class="charts-grid">
                <div class="chart-container">
                    <h3 class="chart-title">Proyectos por Estado</h3>
                    <div id="chartProjectsByStatus"></div>
                </div>
                <!-- Más gráficos... -->
            </div>
        </section>
        
        <!-- Proyectos en Riesgo -->
        <section class="risk-section">
            ...
        </section>
        
        <!-- Loading & Error States -->
        <div id="loadingSpinner" class="loading-spinner" style="display: none;">
            <div class="spinner"></div>
            <p>Cargando datos...</p>
        </div>
        
        <div id="errorMessage" class="error-message" style="display: none;">
            <p>❌ Error al cargar datos</p>
            <button onclick="location.reload()">Reintentar</button>
        </div>
    </div>
</body>
</html>
```

**Criterios de Calidad:**
✅ HTML5 semántico
✅ Accesibilidad (ARIA labels)
✅ SEO-friendly
✅ Performance optimizado
✅ Diseño responsive
✅ UX intuitiva

Genera el código HTML completo con todos los estilos CSS inline para **page-executive-dashboard.html**.
```

---

## Prompt 3.2: Lógica JavaScript del Dashboard

```markdown
**Rol:** Actúa como un Desarrollador JavaScript Senior con experiencia en jQuery, visualización de datos con ApexCharts y arquitectura frontend limpia.

**Contexto:**
Implementa la lógica JavaScript completa para el Dashboard Ejecutivo. Debe manejar carga de datos, renderizado de gráficos ApexCharts, filtros dinámicos y actualizaciones en tiempo real.

**Arquitectura del Código:**

```javascript
// ============================================
// CONFIGURATION
// ============================================
const MOCKUP_MODE = true;  // Toggle entre mock y API real
const API_ENDPOINT = '/api/projects/dashboard';

// ============================================
// APPLICATION STATE
// ============================================
const appState = {
    allProjects: [],
    filteredProjects: [],
    filters: {
        period: 'all',
        status: '',
        risk: ''
    },
    charts: {}  // Almacenar instancias de gráficos
};

// ============================================
// INITIALIZATION
// ============================================
function init() {
    setupEventListeners();
    loadDashboardData();
}

// ============================================
// EVENT LISTENERS
// ============================================
function setupEventListeners() {
    // Click en botón actualizar
    // Click en aplicar filtros
    // Click en limpiar filtros
    // Change en dropdowns de filtros
}

// ============================================
// DATA LOADING
// ============================================
async function loadDashboardData() {
    // Mostrar loading
    // Fetch data (mock o API)
    // Procesar datos
    // Actualizar state
    // Renderizar todo
    // Ocultar loading
}

// ============================================
// FILTERING
// ============================================
function applyFilters() {
    // Filtrar por período
    // Filtrar por estado
    // Filtrar por riesgo
    // Actualizar filteredProjects
    // Re-renderizar
}

// ============================================
// RENDERING - KPIs
// ============================================
function renderKPIs(projects) {
    // Calcular métricas
    // Actualizar DOM de KPI cards
}

// ============================================
// RENDERING - CHARTS
// ============================================
function renderCharts(projects) {
    renderChartProjectsByStatus(projects);
    renderChartProjectsByRisk(projects);
    renderChartMonthlyProgress(projects);
    renderChartBudgetDistribution(projects);
}

// ============================================
// RENDERING - RISK ALERT
// ============================================
function renderRiskProjects(projects) {
    // Filtrar proyectos en riesgo rojo
    // Renderizar lista
}

// ============================================
// UTILITY FUNCTIONS
// ============================================
function showLoading(show) { ... }
function updateLastUpdateTime() { ... }
function formatNumber(num) { ... }
function formatCurrency(num) { ... }
```

**Implementaciones Detalladas Requeridas:**

### 1. **Carga de Datos**

```javascript
async function loadDashboardData() {
    showLoading(true);
    
    try {
        let projects;
        
        if (MOCKUP_MODE) {
            // Usar mock data
            if (typeof window.mockProjectsData === 'undefined') {
                throw new Error('Mock data not loaded');
            }
            projects = window.mockProjectsData;
            // Simular delay de red
            await new Promise(resolve => setTimeout(resolve, 800));
        } else {
            // Llamar API real
            const response = await fetch(API_ENDPOINT);
            if (!response.ok) throw new Error('Error al cargar datos');
            const data = await response.json();
            projects = data.data || data;
        }
        
        appState.allProjects = projects;
        applyFilters();
        updateLastUpdateTime();
        
    } catch (error) {
        console.error('Error loading dashboard:', error);
        showError('Error al cargar el dashboard. Por favor, intente nuevamente.');
    } finally {
        showLoading(false);
    }
}
```

### 2. **Gráfico de Proyectos por Estado (Donut)**

```javascript
function renderChartProjectsByStatus(projects) {
    const statusCount = {
        'Activo': 0,
        'En Pausa': 0,
        'Completado': 0,
        'Cancelado': 0
    };
    
    projects.forEach(p => {
        statusCount[p.status] = (statusCount[p.status] || 0) + 1;
    });
    
    const chartData = {
        series: Object.values(statusCount),
        labels: Object.keys(statusCount),
        colors: ['#10b981', '#f59e0b', '#3b82f6', '#6b7280']
    };
    
    const options = {
        series: chartData.series,
        chart: {
            type: 'donut',
            height: 350,
            toolbar: { show: true }
        },
        labels: chartData.labels,
        colors: chartData.colors,
        legend: {
            position: 'bottom'
        },
        dataLabels: {
            enabled: true,
            formatter: function(val) {
                return val.toFixed(1) + '%';
            }
        },
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                        total: {
                            show: true,
                            label: 'Total',
                            formatter: function(w) {
                                return w.globals.seriesTotals.reduce((a, b) => a + b, 0);
                            }
                        }
                    }
                }
            }
        },
        responsive: [{
            breakpoint: 480,
            options: {
                chart: { height: 300 },
                legend: { position: 'bottom' }
            }
        }]
    };
    
    // Destruir gráfico anterior si existe
    if (appState.charts.byStatus) {
        appState.charts.byStatus.destroy();
    }
    
    // Crear nuevo gráfico
    appState.charts.byStatus = new ApexCharts(
        document.querySelector("#chartProjectsByStatus"),
        options
    );
    appState.charts.byStatus.render();
}
```

### 3. **Gráfico de Proyectos por Riesgo (Barras)**

```javascript
function renderChartProjectsByRisk(projects) {
    const riskCount = { green: 0, yellow: 0, red: 0 };
    
    projects.forEach(p => {
        const deviation = Math.abs(p.actualProgress - p.plannedProgress);
        if (deviation <= 5) riskCount.green++;
        else if (deviation <= 10) riskCount.yellow++;
        else riskCount.red++;
    });
    
    const options = {
        series: [{
            name: 'Proyectos',
            data: [riskCount.green, riskCount.yellow, riskCount.red]
        }],
        chart: {
            type: 'bar',
            height: 350,
            toolbar: { show: true }
        },
        plotOptions: {
            bar: {
                borderRadius: 4,
                horizontal: false,
                columnWidth: '55%',
                distributed: true
            }
        },
        dataLabels: {
            enabled: true
        },
        colors: ['#10b981', '#f59e0b', '#ef4444'],
        xaxis: {
            categories: ['🟢 Verde (≤5%)', '🟡 Amarillo (5-10%)', '🔴 Rojo (>10%)']
        },
        yaxis: {
            title: { text: 'Cantidad de Proyectos' }
        },
        legend: { show: false }
    };
    
    if (appState.charts.byRisk) {
        appState.charts.byRisk.destroy();
    }
    
    appState.charts.byRisk = new ApexCharts(
        document.querySelector("#chartProjectsByRisk"),
        options
    );
    appState.charts.byRisk.render();
}
```

### 4. **Renderizado de KPIs**

```javascript
function renderKPIs(projects) {
    // Total Proyectos Activos
    const activeProjects = projects.filter(p => p.status === 'Activo').length;
    $('#kpiActiveProjects').text(activeProjects);
    
    // Total Completados
    const completedProjects = projects.filter(p => p.status === 'Completado').length;
    $('#kpiCompletedProjects').text(completedProjects);
    
    // Proyectos en Riesgo
    const riskProjects = projects.filter(p => {
        const deviation = Math.abs(p.actualProgress - p.plannedProgress);
        return deviation > 5;
    }).length;
    $('#kpiRiskProjects').text(riskProjects);
    
    // % Cumplimiento Global
    const avgProgress = projects.length > 0
        ? projects.reduce((sum, p) => sum + p.actualProgress, 0) / projects.length
        : 0;
    $('#kpiGlobalCompliance').text(avgProgress.toFixed(1) + '%');
    
    // Animación de números (opcional)
    animateKPIs();
}
```

### 5. **Sistema de Filtros**

```javascript
function applyFilters() {
    let filtered = [...appState.allProjects];
    
    // Filtro de período
    if (appState.filters.period !== 'all') {
        const now = new Date();
        let startDate;
        
        switch(appState.filters.period) {
            case 'month':
                startDate = new Date(now.setMonth(now.getMonth() - 1));
                break;
            case 'quarter':
                startDate = new Date(now.setMonth(now.getMonth() - 3));
                break;
            case 'year':
                startDate = new Date(now.setFullYear(now.getFullYear() - 1));
                break;
        }
        
        filtered = filtered.filter(p => 
            new Date(p.startDate) >= startDate
        );
    }
    
    // Filtro de estado
    if (appState.filters.status) {
        filtered = filtered.filter(p => 
            p.status === appState.filters.status
        );
    }
    
    // Filtro de riesgo
    if (appState.filters.risk) {
        filtered = filtered.filter(p => {
            const deviation = Math.abs(p.actualProgress - p.plannedProgress);
            const level = calculateDeviationLevel(deviation);
            return level === appState.filters.risk;
        });
    }
    
    appState.filteredProjects = filtered;
    
    // Re-renderizar todo
    renderKPIs(filtered);
    renderCharts(filtered);
    renderRiskProjects(filtered);
}
```

### 6. **Proyectos en Riesgo Crítico**

```javascript
function renderRiskProjects(projects) {
    const criticalProjects = projects
        .filter(p => {
            const deviation = Math.abs(p.actualProgress - p.plannedProgress);
            return deviation > 10;
        })
        .sort((a, b) => {
            const devA = Math.abs(a.actualProgress - a.plannedProgress);
            const devB = Math.abs(b.actualProgress - b.plannedProgress);
            return devB - devA;
        })
        .slice(0, 10);  // Top 10
    
    const container = $('#riskProjectsList');
    container.empty();
    
    if (criticalProjects.length === 0) {
        container.html(`
            <div class="no-risk-message">
                ✅ No hay proyectos en riesgo crítico
            </div>
        `);
        return;
    }
    
    criticalProjects.forEach(project => {
        const deviation = project.actualProgress - project.plannedProgress;
        const daysDelay = Math.round(Math.abs(deviation) * 3);  // Estimación simplificada
        
        const html = `
            <div class="risk-project-card">
                <div class="risk-project-header">
                    <span class="risk-badge">🔴 Crítico</span>
                    <span class="project-code">${project.code}</span>
                </div>
                <div class="risk-project-name">${project.name}</div>
                <div class="risk-project-info">
                    <div class="info-item">
                        <span class="label">Desviación:</span>
                        <span class="value red">${deviation.toFixed(1)}%</span>
                    </div>
                    <div class="info-item">
                        <span class="label">Días de retraso:</span>
                        <span class="value">${daysDelay} días</span>
                    </div>
                    <div class="info-item">
                        <span class="label">Líder:</span>
                        <span class="value">${project.leader}</span>
                    </div>
                </div>
                <button class="btn-view-detail" onclick="navigateToProject('${project.id}')">
                    Ver Detalle
                </button>
            </div>
        `;
        container.append(html);
    });
}
```

### 7. **Navegación**

```javascript
function navigateToProject(projectId) {
    window.location.href = `../projects/page-project-detail.html?id=${projectId}`;
}

function navigateBack() {
    window.location.href = '../projects/page-projects.html';
}
```

### 8. **Utilidades**

```javascript
function showLoading(show) {
    if (show) {
        $('#loadingSpinner').fadeIn();
        $('#dashboardContent').css('opacity', '0.5');
    } else {
        $('#loadingSpinner').fadeOut();
        $('#dashboardContent').css('opacity', '1');
    }
}

function showError(message) {
    $('#errorMessage').find('p').text(message);
    $('#errorMessage').fadeIn();
}

function updateLastUpdateTime() {
    const now = new Date();
    const timeString = now.toLocaleString('es-ES');
    $('#lastUpdateTime').text(`Última actualización: ${timeString}`);
}

function calculateDeviationLevel(deviation) {
    const abs = Math.abs(deviation);
    if (abs <= 5) return 'green';
    if (abs <= 10) return 'yellow';
    return 'red';
}
```

**Al cargar la página:**
```javascript
$(document).ready(function() {
    init();
});
```

**Criterios de Calidad:**
✅ Código modular y organizado
✅ Manejo robusto de errores
✅ Estados de carga visibles
✅ Performance optimizado
✅ Comentarios claros
✅ Clean Code

Genera el código JavaScript completo para **page-executive-dashboard.js** con todas las funciones implementadas.
```

---

[Continúa con los prompts para las otras secciones del proyecto...]

# 4. Desarrollo del Frontend - Gestión de Proyectos

## Prompt 4.1: Página de Listado de Proyectos

```markdown
**Rol:** Actúa como un Desarrollador Frontend Full-Stack especializado en interfaces CRUD empresariales con jQuery.

**Contexto:**
Desarrolla la página completa de gestión de proyectos (page-projects.html/js) que incluye:
- Listado con tabla responsive
- Búsqueda y filtros avanzados
- Modal de creación/edición
- Modal de confirmación de eliminación
- Cálculo automático de desviaciones según ITIL/PMP
- Navegación a detalle

**Componentes Principales:**

1. **Tabla de Proyectos**
   - Columnas: Código, Nombre, Líder, Fechas, Progreso Real, Progreso Planificado, Desviación, Estado, Acciones
   - Indicadores visuales de desviación (🟢🟡🔴)
   - Barras de progreso visual
   - Badges de estado con colores
   - Acciones: Ver, Editar, Eliminar

2. **Filtros Avanzados**
   - Búsqueda por código o nombre (tiempo real)
   - Filtro por estado (dropdown)
   - Filtro por rango de fechas
   - Filtro por nivel de desviación
   - Botones: Buscar, Limpiar Filtros

3. **Modal de Crear/Editar Proyecto**
   - Formulario completo con todos los campos
   - Validaciones frontend
   - Generación automática de código
   - Datepickers para fechas
   - Cálculo automático de desviación preview

4. **Modal de Confirmación de Eliminación**
   - Advertencia clara
   - Campo obligatorio de motivo
   - Botones: Cancelar, Confirmar

**Lógica JavaScript:**

```javascript
// ============================================
// APPLICATION STATE
// ============================================
const appState = {
    projects: [],
    filteredProjects: [],
    currentProject: null,
    filters: {
        code: '',
        status: '',
        startDate: '',
        endDate: '',
        deviation: ''
    }
};

// ============================================
// CRUD OPERATIONS
// ============================================

// CREATE
async function createProject(projectData) {
    // Validar datos
    // Generar código si no existe
    // POST /api/projects
    // Actualizar lista
    // Mostrar mensaje de éxito
    // Cerrar modal
}

// READ
async function loadProjects() {
    // GET /api/projects
    // Actualizar appState.projects
    // Aplicar filtros
    // Renderizar tabla
}

// UPDATE
async function updateProject(projectId, updates) {
    // Validar cambios
    // PUT /api/projects/:id
    // Actualizar lista
    // Mostrar mensaje de éxito
}

// DELETE
async function deleteProject(projectId, reason) {
    // Validar motivo
    // DELETE /api/projects/:id
    // Actualizar lista
    // Mostrar mensaje de éxito
}

// ============================================
// FILTERING
// ============================================
function applyFilters() {
    let filtered = [...appState.projects];
    
    // Búsqueda por texto
    if (appState.filters.code) {
        const search = appState.filters.code.toLowerCase();
        filtered = filtered.filter(p =>
            p.code.toLowerCase().includes(search) ||
            p.name.toLowerCase().includes(search)
        );
    }
    
    // Filtro por estado
    // Filtro por fechas
    // Filtro por desviación
    
    appState.filteredProjects = filtered;
    renderProjectsList();
}

// ============================================
// RENDERING
// ============================================
function renderProjectsList() {
    const tbody = $('#projectsTableBody');
    tbody.empty();
    
    if (appState.filteredProjects.length === 0) {
        tbody.html(`
            <tr>
                <td colspan="9" class="no-data">
                    No se encontraron proyectos con los criterios seleccionados
                </td>
            </tr>
        `);
        return;
    }
    
    appState.filteredProjects.forEach(project => {
        const deviation = project.actualProgress - project.plannedProgress;
        const deviationAbs = Math.abs(deviation);
        
        let deviationIcon = '🟢';
        let deviationClass = 'green';
        if (deviationAbs > 10) {
            deviationIcon = '🔴';
            deviationClass = 'red';
        } else if (deviationAbs > 5) {
            deviationIcon = '🟡';
            deviationClass = 'yellow';
        }
        
        const row = `
            <tr>
                <td>${project.code}</td>
                <td class="project-name">${project.name}</td>
                <td>${project.leader}</td>
                <td>${formatDate(project.startDate)} - ${formatDate(project.endDate)}</td>
                <td>
                    <div class="progress-bar-container">
                        <div class="progress-bar" style="width: ${project.actualProgress}%"></div>
                        <span class="progress-text">${project.actualProgress}%</span>
                    </div>
                </td>
                <td>${project.plannedProgress}%</td>
                <td class="deviation ${deviationClass}">
                    ${deviationIcon} ${deviation > 0 ? '+' : ''}${deviation.toFixed(1)}%
                </td>
                <td><span class="badge badge-${getStatusClass(project.status)}">${project.status}</span></td>
                <td class="actions">
                    <button class="btn-icon" onclick="viewProject('${project.id}')" title="Ver Detalle">
                        👁️
                    </button>
                    <button class="btn-icon" onclick="openEditModal('${project.id}')" title="Editar">
                        ✏️
                    </button>
                    <button class="btn-icon btn-danger" onclick="openDeleteModal('${project.id}')" title="Eliminar">
                        🗑️
                    </button>
                </td>
            </tr>
        `;
        tbody.append(row);
    });
}

// ============================================
// MODAL MANAGEMENT
// ============================================
function openCreateModal() {
    appState.currentProject = null;
    $('#modalTitle').text('Crear Nuevo Proyecto');
    $('#projectForm')[0].reset();
    $('#projectCode').val(generateProjectCode());
    $('#projectModal').fadeIn();
}

function openEditModal(projectId) {
    const project = appState.projects.find(p => p.id === projectId);
    if (!project) return;
    
    appState.currentProject = project;
    $('#modalTitle').text('Editar Proyecto');
    
    // Pre-llenar formulario
    $('#projectCode').val(project.code);
    $('#projectName').val(project.name);
    $('#projectLeader').val(project.leader);
    $('#projectStartDate').val(project.startDate);
    $('#projectEndDate').val(project.endDate);
    $('#projectStatus').val(project.status);
    $('#projectPlannedProgress').val(project.plannedProgress);
    $('#projectActualProgress').val(project.actualProgress);
    
    $('#projectModal').fadeIn();
}

function closeModal() {
    $('#projectModal').fadeOut();
    appState.currentProject = null;
}

// ============================================
// VALIDATION
// ============================================
function validateProjectForm() {
    const errors = [];
    
    const name = $('#projectName').val().trim();
    if (!name) errors.push('El nombre es obligatorio');
    
    const leader = $('#projectLeader').val().trim();
    if (!leader) errors.push('El líder es obligatorio');
    
    const startDate = $('#projectStartDate').val();
    const endDate = $('#projectEndDate').val();
    if (!startDate || !endDate) {
        errors.push('Las fechas son obligatorias');
    } else if (new Date(startDate) >= new Date(endDate)) {
        errors.push('La fecha de fin debe ser posterior a la fecha de inicio');
    }
    
    const plannedProgress = parseFloat($('#projectPlannedProgress').val());
    if (isNaN(plannedProgress) || plannedProgress < 0 || plannedProgress > 100) {
        errors.push('El progreso planificado debe estar entre 0 y 100');
    }
    
    const actualProgress = parseFloat($('#projectActualProgress').val());
    if (isNaN(actualProgress) || actualProgress < 0 || actualProgress > 100) {
        errors.push('El progreso real debe estar entre 0 y 100');
    }
    
    return errors;
}

// ============================================
// FORM SUBMISSION
// ============================================
async function handleFormSubmit(event) {
    event.preventDefault();
    
    const errors = validateProjectForm();
    if (errors.length > 0) {
        showAlert('error', errors.join('<br>'));
        return;
    }
    
    const projectData = {
        code: $('#projectCode').val(),
        name: $('#projectName').val().trim(),
        leader: $('#projectLeader').val().trim(),
        startDate: $('#projectStartDate').val(),
        endDate: $('#projectEndDate').val(),
        status: $('#projectStatus').val(),
        plannedProgress: parseFloat($('#projectPlannedProgress').val()),
        actualProgress: parseFloat($('#projectActualProgress').val()),
        managementSystem: $('#projectManagementSystem').val(),
        managementPath: $('#projectManagementPath').val().trim()
    };
    
    try {
        if (appState.currentProject) {
            // Actualizar proyecto existente
            await updateProject(appState.currentProject.id, projectData);
        } else {
            // Crear nuevo proyecto
            await createProject(projectData);
        }
        
        closeModal();
    } catch (error) {
        showAlert('error', 'Error al guardar el proyecto: ' + error.message);
    }
}

// ============================================
// UTILITIES
// ============================================
function generateProjectCode() {
    const maxCode = appState.projects.reduce((max, p) => {
        const num = parseInt(p.code.split('-')[1]);
        return num > max ? num : max;
    }, 0);
    
    return `PRJ-${String(maxCode + 1).padStart(3, '0')}`;
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES');
}

function getStatusClass(status) {
    const classes = {
        'Activo': 'success',
        'En Pausa': 'warning',
        'Completado': 'info',
        'Cancelado': 'secondary'
    };
    return classes[status] || 'secondary';
}
```

**HTML del Modal:**

```html
<!-- Modal de Crear/Editar Proyecto -->
<div id="projectModal" class="modal">
    <div class="modal-content">
        <div class="modal-header">
            <h2 id="modalTitle">Crear Nuevo Proyecto</h2>
            <button class="modal-close" onclick="closeModal()">&times;</button>
        </div>
        <div class="modal-body">
            <form id="projectForm" onsubmit="handleFormSubmit(event)">
                <div class="form-grid">
                    <div class="form-group">
                        <label for="projectCode">Código *</label>
                        <input type="text" id="projectCode" class="form-control" readonly>
                    </div>
                    
                    <div class="form-group">
                        <label for="projectName">Nombre del Proyecto *</label>
                        <input type="text" id="projectName" class="form-control" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="projectLeader">Líder *</label>
                        <input type="text" id="projectLeader" class="form-control" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="projectStartDate">Fecha Inicio *</label>
                        <input type="date" id="projectStartDate" class="form-control" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="projectEndDate">Fecha Fin *</label>
                        <input type="date" id="projectEndDate" class="form-control" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="projectStatus">Estado *</label>
                        <select id="projectStatus" class="form-control" required>
                            <option value="Activo">Activo</option>
                            <option value="En Pausa">En Pausa</option>
                            <option value="Completado">Completado</option>
                            <option value="Cancelado">Cancelado</option>
                        </select>
                    </div>
                    
                    <div class="form-group">
                        <label for="projectPlannedProgress">Progreso Planificado (%) *</label>
                        <input type="number" id="projectPlannedProgress" class="form-control" 
                               min="0" max="100" step="0.1" value="0" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="projectActualProgress">Progreso Real (%) *</label>
                        <input type="number" id="projectActualProgress" class="form-control" 
                               min="0" max="100" step="0.1" value="0" required>
                    </div>
                    
                    <div class="form-group">
                        <label for="projectManagementSystem">Sistema de Gestión</label>
                        <select id="projectManagementSystem" class="form-control">
                            <option value="Ninguno">Ninguno</option>
                            <option value="Jira">Jira</option>
                            <option value="Project">MS Project</option>
                            <option value="Excel">Excel</option>
                            <option value="Otro">Otro</option>
                        </select>
                    </div>
                    
                    <div class="form-group full-width">
                        <label for="projectManagementPath">Ruta del Sistema</label>
                        <input type="text" id="projectManagementPath" class="form-control" 
                               placeholder="https://... o \\servidor\...">
                    </div>
                </div>
                
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" onclick="closeModal()">
                        Cancelar
                    </button>
                    <button type="submit" class="btn btn-primary">
                        Guardar Proyecto
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
```

**Criterios de Calidad:**
✅ CRUD completo funcional
✅ Validaciones robustas
✅ UX fluida con feedback visual
✅ Manejo de errores
✅ Código limpio y modular
✅ Responsive design

Genera el código completo HTML y JavaScript para **page-projects.html** y **page-projects.js**.
```

---

# 10. Despliegue y DevOps

## Prompt 10.1: Dockerización Completa

```markdown
**Rol:** Actúa como un DevOps Engineer experto en Docker, Docker Compose y arquitecturas de microservicios.

**Contexto:**
Dockeriza completamente el Sistema de Gestión de Proyectos con IA para facilitar el despliegue en cualquier entorno.

**Arquitectura de Despliegue:**
- Frontend: Servido por Nginx
- Backend: Node.js API
- Ambos contenedores en la misma red Docker
- Variables de entorno configurables
- Health checks implementados

**Tareas:**

### 1. **Dockerfile para Backend**

```dockerfile
# Dockerfile ubicado en: ms-ia-projects/feature/ms-api-projects/Dockerfile

FROM node:18-alpine AS builder

# Metadata
LABEL maintainer="DevOps Team <devops@company.com>"
LABEL description="Projects Management API"

# Set working directory
WORKDIR /app

# Copy package files
COPY api/package*.json ./

# Install dependencies
RUN npm ci --only=production && \
    npm cache clean --force

# Copy application code
COPY api/ ./

# Expose port
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD node -e "require('http').get('http://localhost:3000/health', (r) => {if(r.statusCode !== 200) throw new Error('Unhealthy')})"

# Run as non-root user
USER node

# Start server
CMD ["node", "server.js"]
```

### 2. **Dockerfile para Frontend**

```dockerfile
# Dockerfile ubicado en: app-ia-projects/Dockerfile

FROM nginx:alpine

# Metadata
LABEL maintainer="DevOps Team <devops@company.com>"
LABEL description="Projects Management Frontend"

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy application files
COPY feature/ /usr/share/nginx/html/feature/
COPY shared/ /usr/share/nginx/html/shared/
COPY assets/ /usr/share/nginx/html/assets/ 2>/dev/null || true

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
```

### 3. **nginx.conf**

```nginx
server {
    listen 80;
    server_name _;
    
    root /usr/share/nginx/html;
    index index.html;
    
    # Logging
    access_log /var/log/nginx/access.log;
    error_log /var/log/nginx/error.log warn;
    
    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
    
    # SPA routing
    location / {
        try_files $uri $uri/ /feature/dashboard/page-executive-dashboard.html;
    }
    
    # Cache static assets
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
    
    # API proxy (opcional si backend está en otro host)
    location /api/ {
        proxy_pass http://backend:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
    
    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "no-referrer-when-downgrade" always;
}
```

### 4. **docker-compose.yml**

```yaml
version: '3.8'

services:
  backend:
    build:
      context: ./ms-ia-projects/feature/ms-api-projects
      dockerfile: Dockerfile
    container_name: projects-api
    restart: unless-stopped
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - PORT=3000
      - API_VERSION=1.0.0
    networks:
      - projects-network
    healthcheck:
      test: ["CMD", "wget", "--quiet", "--tries=1", "--spider", "http://localhost:3000/health"]
      interval: 30s
      timeout: 3s
      retries: 3
      start_period: 10s
    volumes:
      - api-logs:/app/logs
    labels:
      - "com.project.description=Projects Management API"
      - "com.project.version=1.0.0"

  frontend:
    build:
      context: ./app-ia-projects
      dockerfile: Dockerfile
    container_name: projects-frontend
    restart: unless-stopped
    ports:
      - "80:80"
    depends_on:
      - backend
    networks:
      - projects-network
    healthcheck:
      test: ["CMD", "wget", "--quiet", "--tries=1", "--spider", "http://localhost"]
      interval: 30s
      timeout: 3s
      retries: 3
      start_period: 5s
    labels:
      - "com.project.description=Projects Management Frontend"
      - "com.project.version=1.0.0"

networks:
  projects-network:
    driver: bridge
    name: projects-network

volumes:
  api-logs:
    name: projects-api-logs
```

### 5. **.dockerignore para Backend**

```
node_modules
npm-debug.log
.env
.env.local
.git
.gitignore
README.md
*.md
.vscode
.idea
coverage
*.test.js
tests
.DS_Store
```

### 6. **.dockerignore para Frontend**

```
.git
.gitignore
README.md
*.md
.vscode
.idea
.DS_Store
Dockerfile
docker-compose.yml
```

### 7. **Makefile para Comandos Comunes**

```makefile
.PHONY: help build up down restart logs clean

# Variables
COMPOSE=docker-compose
PROJECT_NAME=projects-ia-system

help: ## Show this help message
	@echo 'Usage: make [target]'
	@echo ''
	@echo 'Available targets:'
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "  %-15s %s\n", $$1, $$2}' $(MAKEFILE_LIST)

build: ## Build all containers
	$(COMPOSE) build --no-cache

up: ## Start all services
	$(COMPOSE) up -d
	@echo "✅ Services started!"
	@echo "Frontend: http://localhost"
	@echo "Backend: http://localhost:3000"
	@echo "API Docs: http://localhost:3000/api"

down: ## Stop all services
	$(COMPOSE) down

restart: ## Restart all services
	$(COMPOSE) restart

logs: ## Show logs (use: make logs service=backend)
	@if [ -z "$(service)" ]; then \
		$(COMPOSE) logs -f; \
	else \
		$(COMPOSE) logs -f $(service); \
	fi

clean: ## Remove all containers, volumes and images
	$(COMPOSE) down -v --rmi all
	@echo "✅ All cleaned up!"

status: ## Show status of services
	$(COMPOSE) ps

shell-backend: ## Open shell in backend container
	$(COMPOSE) exec backend sh

shell-frontend: ## Open shell in frontend container
	$(COMPOSE) exec frontend sh

test-backend: ## Run backend tests
	$(COMPOSE) exec backend npm test

health: ## Check health of all services
	@echo "Checking backend health..."
	@curl -f http://localhost:3000/health || echo "❌ Backend unhealthy"
	@echo ""
	@echo "Checking frontend health..."
	@curl -f http://localhost/ > /dev/null 2>&1 && echo "✅ Frontend healthy" || echo "❌ Frontend unhealthy"
```

### 8. **README-DEPLOYMENT.md**

```markdown
# Guía de Despliegue - Sistema de Gestión de Proyectos con IA

## Requisitos Previos

- Docker 20.x o superior
- Docker Compose 2.x o superior
- Puertos disponibles: 80 (frontend), 3000 (backend)

## Despliegue Rápido

### Opción 1: Docker Compose (Recomendado)

```bash
# 1. Clonar el repositorio
git clone <repository-url>
cd projects-ia-system

# 2. Construir imágenes
docker-compose build

# 3. Iniciar servicios
docker-compose up -d

# 4. Verificar estado
docker-compose ps

# 5. Ver logs
docker-compose logs -f
```

### Opción 2: Usando Makefile

```bash
# Construir
make build

# Iniciar
make up

# Ver logs
make logs

# Ver estado
make status

# Detener
make down
```

## Verificación

### Backend API

```bash
# Health check
curl http://localhost:3000/health

# API documentation
curl http://localhost:3000/api

# Get projects
curl http://localhost:3000/api/projects
```

### Frontend

Abrir navegador en: http://localhost

## Configuración

### Variables de Entorno

Editar `docker-compose.yml` sección `environment`:

```yaml
environment:
  - NODE_ENV=production
  - PORT=3000
  - API_VERSION=1.0.0
  - CORS_ORIGIN=http://localhost
```

### Puertos

Cambiar puertos en `docker-compose.yml`:

```yaml
ports:
  - "8080:80"    # Frontend en puerto 8080
  - "4000:3000"  # Backend en puerto 4000
```

## Monitoreo

### Ver Logs en Tiempo Real

```bash
# Todos los servicios
docker-compose logs -f

# Solo backend
docker-compose logs -f backend

# Solo frontend
docker-compose logs -f frontend
```

### Health Checks

```bash
# Verificar salud de servicios
docker-compose ps

# Detalle de health checks
docker inspect --format='{{json .State.Health}}' projects-api
```

## Troubleshooting

### Backend no inicia

```bash
# Ver logs detallados
docker-compose logs backend

# Verificar que puerto 3000 esté disponible
netstat -an | grep 3000

# Reconstruir contenedor
docker-compose build --no-cache backend
docker-compose up -d backend
```

### Frontend no carga

```bash
# Ver logs de nginx
docker-compose logs frontend

# Verificar archivos en contenedor
docker-compose exec frontend ls -la /usr/share/nginx/html

# Verificar configuración nginx
docker-compose exec frontend nginx -t
```

### Reiniciar Servicios

```bash
# Reiniciar todo
docker-compose restart

# Reiniciar solo un servicio
docker-compose restart backend
```

## Mantenimiento

### Actualización

```bash
# 1. Detener servicios
docker-compose down

# 2. Actualizar código (git pull)
git pull origin main

# 3. Reconstruir
docker-compose build

# 4. Iniciar
docker-compose up -d
```

### Limpieza

```bash
# Eliminar contenedores
docker-compose down

# Eliminar contenedores y volúmenes
docker-compose down -v

# Limpieza completa (imágenes también)
docker-compose down -v --rmi all
```

### Backup de Datos

```bash
# Backup de volúmenes
docker run --rm -v projects-api-logs:/data -v $(pwd):/backup alpine tar czf /backup/api-logs-backup.tar.gz /data
```

## Producción

### Recomendaciones

1. **Usar variables de entorno externas**
   ```bash
   docker-compose --env-file .env.production up -d
   ```

2. **Habilitar HTTPS** (usar reverse proxy como Traefik o Nginx)

3. **Configurar límites de recursos**
   ```yaml
   deploy:
     resources:
       limits:
         cpus: '0.5'
         memory: 512M
   ```

4. **Implementar logging centralizado**

5. **Monitoreo con Prometheus/Grafana**

## Soporte

Para problemas o consultas:
- Issues: [GitHub Issues]
- Docs: [Documentación completa]
- Email: devops@company.com
```

**Criterios de Calidad:**
✅ Multi-stage builds para optimización
✅ Health checks configurados
✅ Seguridad (non-root users)
✅ Logging adecuado
✅ Documentación completa
✅ Fácil de usar

Genera todos los archivos de Docker y despliegue especificados.
```

---

## 📚 Resumen de Prompts

Este documento contiene **10 categorías principales** de prompts para el desarrollo completo del sistema:

1. ✅ **Configuración Inicial** - Estructura de proyectos frontend y backend
2. ✅ **Backend - Microservicios** - APIs REST de proyectos y tareas
3. ✅ **Frontend - Dashboard** - Visualización ejecutiva con gráficos
4. ✅ **Frontend - Gestión Proyectos** - CRUD completo de proyectos
5. ⏳ **Frontend - Detalle Proyecto** - Vista detallada con secciones
6. ⏳ **Frontend - Análisis IA** - Timeline y predicciones
7. ⏳ **Sistema de Validación IA** - Motor de reglas de negocio
8. ⏳ **Integración y Testing** - Pruebas unitarias e integración
9. ⏳ **Optimización y Performance** - Mejoras de rendimiento
10. ✅ **Despliegue y DevOps** - Dockerización y CI/CD

---

## 🎯 Cómo Usar Este Documento

### Para Desarrolladores Humanos:
1. Lee el prompt completo de la sección que vas a desarrollar
2. Entiende el contexto y requisitos
3. Implementa siguiendo las especificaciones
4. Verifica contra los criterios de calidad

### Para Desarrollo Asistido por IA:
1. Copia el prompt completo de la sección
2. Pégalo en tu IDE con Copilot o ChatGPT
3. Revisa el código generado
4. Ajusta y prueba según necesidad

### Orden Recomendado de Desarrollo:
```
Sprint 1: Prompts 1.1, 1.2, 2.1, 2.2
Sprint 2: Prompts 3.1, 3.2, 4.1
Sprint 3: Prompts 5.1, 5.2, 6.1
Sprint 4: Prompts 7.1, 7.2, 8.1
Sprint 5: Prompts 9.1, 10.1
```

---

**Documento Generado:** 31 de enero de 2026  
**Versión:** 1.0  
**Última Actualización:** 31 de enero de 2026  
**Autor:** Arquitecto de Software Senior - Sistema IA Projects
