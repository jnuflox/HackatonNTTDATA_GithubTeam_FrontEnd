# 📋 Historias de Usuario - App IA Projects

## Índice de Épicas

| ID | Épica | Prioridad | Story Points |
|----|-------|-----------|--------------|
| EPIC-001 | Gestión de Proyectos | Must Have | 34 |
| EPIC-002 | Detalle y Tareas de Proyecto | Must Have | 42 |
| EPIC-003 | Análisis IA y Predicciones | Must Have | 29 |
| EPIC-004 | Dashboard Ejecutivo | Should Have | 37 |
| EPIC-005 | Análisis Financiero | Should Have | 21 |
| EPIC-006 | Integraciones Externas | Could Have | 18 |

---

# EPIC-001: Gestión de Proyectos

## Descripción
Funcionalidades para administrar el ciclo de vida completo de proyectos, incluyendo creación, edición, visualización y eliminación, con sistema de filtrado avanzado.

---

## HU-001: Visualizar lista de proyectos

**Epic:** EPIC-001 - Gestión de Proyectos  
**Módulo:** Mantenimiento de Proyectos  
**Prioridad:** Must Have  
**Story Points:** 5

### Descripción
**Como** Gerente de Proyectos  
**Quiero** ver una lista completa de todos los proyectos con su información clave  
**Para** tener visibilidad del estado general del portafolio de proyectos

### Criterios de Aceptación

1. **DADO** que accedo a la página de proyectos  
   **CUANDO** la página carga completamente  
   **ENTONCES** veo una tabla con las columnas: Código, Nombre, Estado, Líder, Fecha Inicio, Fecha Fin, Avance Planificado, Avance Real, Desviación y Acciones

2. **DADO** que hay proyectos registrados  
   **CUANDO** visualizo la lista  
   **ENTONCES** cada proyecto muestra un indicador visual de desviación (🟢 ≤5%, 🟡 5-10%, 🔴 >10%)

3. **DADO** que un proyecto tiene sistema de gestión externo configurado  
   **CUANDO** visualizo su fila en la tabla  
   **ENTONCES** veo un enlace para abrir el proyecto en el sistema externo (Jira, MS Project, etc.)

4. **DADO** que no hay proyectos registrados  
   **CUANDO** visualizo la página  
   **ENTONCES** veo un mensaje indicando que no hay proyectos y un botón para crear uno nuevo

### Notas Técnicas
- Implementar indicadores de desviación según estándares ITIL/PMP
- La tabla debe soportar ordenamiento por cualquier columna
- Mostrar contador de resultados: "X proyectos encontrados"

---

## HU-002: Filtrar proyectos por múltiples criterios

**Epic:** EPIC-001 - Gestión de Proyectos  
**Módulo:** Mantenimiento de Proyectos  
**Prioridad:** Must Have  
**Story Points:** 5

### Descripción
**Como** Gerente de Proyectos  
**Quiero** filtrar la lista de proyectos por código, estado, fechas y nivel de desviación  
**Para** encontrar rápidamente proyectos específicos que requieren atención

### Criterios de Aceptación

1. **DADO** que estoy en la lista de proyectos  
   **CUANDO** escribo "PRJ-001" en el campo de código  
   **ENTONCES** la lista muestra solo proyectos cuyo código contiene "PRJ-001" (búsqueda parcial, case-insensitive)

2. **DADO** que quiero ver proyectos activos  
   **CUANDO** selecciono "Activo" en el filtro de estado  
   **ENTONCES** solo veo proyectos con estado "Activo"

3. **DADO** que quiero ver proyectos en un rango de fechas  
   **CUANDO** selecciono fecha inicio "2026-01-01" y fecha fin "2026-06-30"  
   **ENTONCES** veo proyectos cuyo periodo se superpone con el rango especificado

4. **DADO** que quiero ver proyectos críticos  
   **CUANDO** selecciono nivel de desviación "Crítico (>10%)"  
   **ENTONCES** solo veo proyectos con desviación absoluta mayor al 10%

5. **DADO** que he aplicado múltiples filtros  
   **CUANDO** hago clic en "Limpiar Filtros"  
   **ENTONCES** todos los filtros se reinician y veo la lista completa

6. **DADO** que aplico filtros que no coinciden con ningún proyecto  
   **CUANDO** la búsqueda no tiene resultados  
   **ENTONCES** veo mensaje "No se encontraron proyectos" con opción de limpiar filtros

### Notas Técnicas
- Niveles de desviación: "En Camino (≤5%)", "En Riesgo (5-10%)", "Crítico (>10%)"
- Estados disponibles: Activo, En Pausa, Completado, Cancelado
- Los filtros deben aplicarse en tiempo real (debounce de 300ms para campos de texto)

---

## HU-003: Crear nuevo proyecto

**Epic:** EPIC-001 - Gestión de Proyectos  
**Módulo:** Mantenimiento de Proyectos  
**Prioridad:** Must Have  
**Story Points:** 8

### Descripción
**Como** Gerente de Proyectos  
**Quiero** crear un nuevo proyecto con toda su información básica  
**Para** registrar y dar seguimiento a nuevas iniciativas

### Criterios de Aceptación

1. **DADO** que hago clic en "Nuevo Proyecto"  
   **CUANDO** se abre el formulario  
   **ENTONCES** veo campos para: Código, Nombre, Líder, Estado, Fecha Inicio, Fecha Fin, Sistema de Gestión, Ruta del Sistema

2. **DADO** que completo el formulario correctamente  
   **CUANDO** hago clic en "Guardar"  
   **ENTONCES** el proyecto se crea con avance planificado y real en 0% y se muestra mensaje de éxito

3. **DADO** que intento guardar sin código  
   **CUANDO** hago clic en "Guardar"  
   **ENTONCES** veo un mensaje de error "El código es obligatorio"

4. **DADO** que ingreso un código que ya existe  
   **CUANDO** intento guardar  
   **ENTONCES** veo error "El código de proyecto ya existe"

5. **DADO** que la fecha de fin es anterior a la fecha de inicio  
   **CUANDO** intento guardar  
   **ENTONCES** veo error "La fecha de fin debe ser posterior a la fecha de inicio"

6. **DADO** que estoy creando el proyecto  
   **CUANDO** hago clic en "Cancelar"  
   **ENTONCES** el formulario se cierra sin guardar cambios y vuelvo a la lista

### Notas Técnicas
- Código debe ser único y alfanumérico (formato sugerido: PRJ-XXX)
- Sistemas de gestión soportados: Jira, MS Project, Excel, Otro
- Validar formato de URL para rutas de sistemas web

---

## HU-004: Editar proyecto existente

**Epic:** EPIC-001 - Gestión de Proyectos  
**Módulo:** Mantenimiento de Proyectos  
**Prioridad:** Must Have  
**Story Points:** 5

### Descripción
**Como** Gerente de Proyectos  
**Quiero** modificar la información de un proyecto existente  
**Para** mantener los datos actualizados conforme avanza el proyecto

### Criterios de Aceptación

1. **DADO** que hago clic en "Configuración" de un proyecto  
   **CUANDO** se abre el formulario de edición  
   **ENTONCES** veo todos los campos prellenados con la información actual del proyecto

2. **DADO** que modifico el avance real del proyecto  
   **CUANDO** guardo los cambios  
   **ENTONCES** se recalcula automáticamente la desviación y su indicador visual

3. **DADO** que cambio el estado a "Completado"  
   **CUANDO** el avance real es menor al 100%  
   **ENTONCES** veo advertencia preguntando si deseo continuar

4. **DADO** que guardo cambios exitosamente  
   **CUANDO** se completa la operación  
   **ENTONCES** se registra el cambio en el historial del proyecto con fecha, descripción y razón

5. **DADO** que no hay cambios en el formulario  
   **CUANDO** hago clic en "Guardar"  
   **ENTONCES** el botón está deshabilitado o muestra mensaje "Sin cambios"

### Notas Técnicas
- El código del proyecto no debe ser editable después de creado
- Mantener historial de cambios para auditoría
- Permitir campo opcional "Razón del cambio" para cambios significativos

---

## HU-005: Eliminar proyecto

**Epic:** EPIC-001 - Gestión de Proyectos  
**Módulo:** Mantenimiento de Proyectos  
**Prioridad:** Must Have  
**Story Points:** 3

### Descripción
**Como** Gerente de Proyectos  
**Quiero** eliminar proyectos que ya no son necesarios  
**Para** mantener limpia la base de proyectos

### Criterios de Aceptación

1. **DADO** que hago clic en "Eliminar" de un proyecto  
   **CUANDO** se muestra el diálogo de confirmación  
   **ENTONCES** veo el mensaje "¿Está seguro de eliminar el proyecto [CÓDIGO] - [NOMBRE]?"

2. **DADO** que confirmo la eliminación  
   **CUANDO** el proyecto tiene tareas asociadas  
   **ENTONCES** veo advertencia indicando que se eliminarán X tareas asociadas

3. **DADO** que confirmo la eliminación  
   **CUANDO** se completa exitosamente  
   **ENTONCES** el proyecto desaparece de la lista y veo mensaje de confirmación

4. **DADO** que cancelo la eliminación  
   **CUANDO** cierro el diálogo  
   **ENTONCES** el proyecto permanece sin cambios

### Notas Técnicas
- Considerar soft-delete para posible recuperación
- Registrar eliminaciones en log de auditoría
- Restringir eliminación si hay facturas pendientes asociadas

---

## HU-006: Acceder a análisis IA desde lista de proyectos

**Epic:** EPIC-001 - Gestión de Proyectos  
**Módulo:** Mantenimiento de Proyectos  
**Prioridad:** Should Have  
**Story Points:** 3

### Descripción
**Como** Gerente de Proyectos  
**Quiero** acceder rápidamente al análisis IA de un proyecto desde la lista  
**Para** obtener insights predictivos sin navegar múltiples páginas

### Criterios de Aceptación

1. **DADO** que estoy en la lista de proyectos  
   **CUANDO** hago clic en el botón "🤖 IA" de un proyecto  
   **ENTONCES** navego a la página de Análisis IA de ese proyecto específico

2. **DADO** que accedo al análisis IA  
   **CUANDO** la página carga  
   **ENTONCES** veo el ID del proyecto en la URL como parámetro (ej: ?id=1)

3. **DADO** que el proyecto no tiene historial ni análisis IA disponible  
   **CUANDO** accedo a la página IA  
   **ENTONCES** veo mensajes indicando que aún no hay datos disponibles

### Notas Técnicas
- Navegación debe mantener el contexto de filtros aplicados al volver
- Considerar abrir en nueva pestaña como opción (clic derecho)

---

## HU-007: Navegar al detalle del proyecto

**Epic:** EPIC-001 - Gestión de Proyectos  
**Módulo:** Mantenimiento de Proyectos  
**Prioridad:** Must Have  
**Story Points:** 2

### Descripción
**Como** Gerente de Proyectos  
**Quiero** acceder al detalle completo de un proyecto  
**Para** ver sus tareas, métricas IA y análisis financiero

### Criterios de Aceptación

1. **DADO** que hago clic en "👁️ Detalle" de un proyecto  
   **CUANDO** navego a la página de detalle  
   **ENTONCES** veo la información completa del proyecto con sus tareas

2. **DADO** que estoy en el detalle  
   **CUANDO** quiero volver a la lista  
   **ENTONCES** hay un botón "Volver" y breadcrumb para navegar

---

# EPIC-002: Detalle y Tareas de Proyecto

## Descripción
Funcionalidades para visualizar información detallada de proyectos, gestionar tareas y aplicar filtros avanzados sobre las actividades del proyecto.

---

## HU-008: Visualizar información general del proyecto

**Epic:** EPIC-002 - Detalle y Tareas de Proyecto  
**Módulo:** Detalle de Proyecto  
**Prioridad:** Must Have  
**Story Points:** 5

### Descripción
**Como** Líder de Proyecto  
**Quiero** ver la información consolidada del proyecto  
**Para** tener contexto completo antes de revisar las tareas

### Criterios de Aceptación

1. **DADO** que accedo al detalle de un proyecto  
   **CUANDO** la página carga  
   **ENTONCES** veo panel con: Código, Nombre, Líder, Estado, Periodo, Avance Real, Avance Planificado, Desviación

2. **DADO** que el proyecto tiene desviación  
   **CUANDO** visualizo el panel  
   **ENTONCES** la desviación se muestra con color según severidad (verde/amarillo/rojo)

3. **DADO** que el proyecto tiene sistema de gestión configurado  
   **CUANDO** visualizo el panel  
   **ENTONCES** veo enlace para abrir en el sistema externo

4. **DADO** que accedo a un proyecto inexistente  
   **CUANDO** el ID en la URL no corresponde a ningún proyecto  
   **ENTONCES** veo mensaje de error "Proyecto no encontrado"

### Notas Técnicas
- Breadcrumb: Proyectos > [Nombre del Proyecto]
- El título de la página debe actualizarse con el nombre del proyecto

---

## HU-009: Visualizar dashboard IA de tareas

**Epic:** EPIC-002 - Detalle y Tareas de Proyecto  
**Módulo:** Detalle de Proyecto  
**Prioridad:** Must Have  
**Story Points:** 8

### Descripción
**Como** Líder de Proyecto  
**Quiero** ver un dashboard con métricas de validación IA de las tareas  
**Para** identificar rápidamente áreas que requieren atención

### Criterios de Aceptación

1. **DADO** que el proyecto tiene tareas  
   **CUANDO** visualizo el dashboard IA  
   **ENTONCES** veo 4 tarjetas: Distribución de Riesgos, Validación IA Exitosa, Desviaciones Críticas, Hitos del Proyecto

2. **DADO** que visualizo la tarjeta de Distribución de Riesgos  
   **CUANDO** hay tareas analizadas  
   **ENTONCES** veo desglose: X Verde (Bajo), Y Amarillo (Medio), Z Rojo (Alto)

3. **DADO** que visualizo la tarjeta de Validación IA  
   **CUANDO** hay tareas validadas  
   **ENTONCES** veo porcentaje de tareas con estado "OK" (X de Y tareas validadas)

4. **DADO** que visualizo Desviaciones Críticas  
   **CUANDO** hay tareas con desviación >10%  
   **ENTONCES** veo el conteo de tareas en estado crítico

5. **DADO** que el proyecto no tiene tareas  
   **CUANDO** cargo la página  
   **ENTONCES** el dashboard IA no se muestra o indica "Sin datos"

### Notas Técnicas
- Colores de riesgo: `green` = #10b981, `yellow` = #f59e0b, `red` = #ef4444
- Los niveles de riesgo vienen del campo `aiRiskLevel` de cada tarea
- Validación considera `aiValidationStatus === 'OK'`

---

## HU-010: Visualizar lista de tareas del proyecto

**Epic:** EPIC-002 - Detalle y Tareas de Proyecto  
**Módulo:** Detalle de Proyecto  
**Prioridad:** Must Have  
**Story Points:** 5

### Descripción
**Como** Líder de Proyecto  
**Quiero** ver todas las tareas del proyecto con su información de seguimiento  
**Para** monitorear el progreso de cada actividad

### Criterios de Aceptación

1. **DADO** que el proyecto tiene tareas  
   **CUANDO** visualizo la sección de tareas  
   **ENTONCES** veo tabla con: Código, Nombre, Etapa, Hito, Responsable, Fechas, Estado, Avance, Desviación, Validación IA

2. **DADO** que una tarea tiene integración con GitLab/SonarQube  
   **CUANDO** visualizo su fila  
   **ENTONCES** veo indicadores de estado para cada integración (OK/Warning/Error)

3. **DADO** que una tarea tiene nivel de riesgo IA  
   **CUANDO** visualizo su fila  
   **ENTONCES** veo el indicador visual correspondiente (🟢/🟡/🔴)

4. **DADO** que hago clic en expandir una tarea  
   **CUANDO** se expande el detalle  
   **ENTONCES** veo información detallada de validaciones IA (GitLab, SonarQube, Jira)

### Notas Técnicas
- Cada tarea debe mostrar las razones de riesgo IA si las tiene (`aiRiskReasons`)
- Las validaciones detalladas incluyen GitLab (Code Review, Commits, MRs, Pipeline), SonarQube (Quality, Coverage, Vulnerabilities, Smells, Debt), Jira (Completion, Subtasks, Time, Docs)

---

## HU-011: Filtrar tareas por múltiples criterios

**Epic:** EPIC-002 - Detalle y Tareas de Proyecto  
**Módulo:** Detalle de Proyecto  
**Prioridad:** Must Have  
**Story Points:** 5

### Descripción
**Como** Líder de Proyecto  
**Quiero** filtrar las tareas por código, etapa, hito, estado, responsable y nivel de riesgo  
**Para** enfocarme en tareas específicas que requieren atención

### Criterios de Aceptación

1. **DADO** que estoy en el detalle del proyecto  
   **CUANDO** uso el filtro de código de tarea  
   **ENTONCES** veo solo tareas cuyo código contiene el texto ingresado

2. **DADO** que quiero ver tareas de una etapa específica  
   **CUANDO** selecciono "Desarrollo" en el filtro de etapa  
   **ENTONCES** solo veo tareas con etapa "Desarrollo"

3. **DADO** que quiero ver tareas de un hito  
   **CUANDO** selecciono un hito del dropdown  
   **ENTONCES** solo veo tareas asociadas a ese hito

4. **DADO** que quiero ver tareas de alto riesgo  
   **CUANDO** selecciono "Riesgo Alto" en el filtro  
   **ENTONCES** solo veo tareas con `aiRiskLevel === 'red'`

5. **DADO** que aplico múltiples filtros simultáneamente  
   **CUANDO** la combinación no tiene resultados  
   **ENTONCES** veo mensaje "No se encontraron tareas" con sugerencia de ajustar filtros

### Notas Técnicas
- Etapas disponibles: Diseño, Desarrollo, Integración, Pruebas, Despliegue
- Estados de tarea: Pendiente, En Progreso, Completada, Bloqueada
- Los selectores de filtro se populan dinámicamente según datos del proyecto

---

## HU-012: Ver detalle de validación IA de tarea

**Epic:** EPIC-002 - Detalle y Tareas de Proyecto  
**Módulo:** Detalle de Proyecto  
**Prioridad:** Must Have  
**Story Points:** 8

### Descripción
**Como** Desarrollador/Líder de Proyecto  
**Quiero** ver el detalle de las validaciones IA realizadas en cada tarea  
**Para** entender los hallazgos y tomar acciones correctivas

### Criterios de Aceptación

1. **DADO** que expando el detalle de una tarea  
   **CUANDO** tiene validación de GitLab  
   **ENTONCES** veo sección con: Code Review, Commits/Branches, Merge Requests, Pipeline CI/CD, cada uno con estado y resumen IA

2. **DADO** que expando el detalle de una tarea  
   **CUANDO** tiene validación de SonarQube  
   **ENTONCES** veo sección con: Code Quality, Coverage Tests, Security Vulnerabilities, Code Smells, Technical Debt

3. **DADO** que expando el detalle de una tarea  
   **CUANDO** tiene validación de Jira  
   **ENTONCES** veo sección con: Task Completion, Subtasks Status, Time Tracking, Documentation

4. **DADO** que una validación tiene estado "incomplete"  
   **CUANDO** visualizo el detalle  
   **ENTONCES** se resalta visualmente con ícono de advertencia y texto descriptivo

5. **DADO** que una validación tiene estado "complete"  
   **CUANDO** visualizo el detalle  
   **ENTONCES** se muestra con ícono de check verde

### Notas Técnicas
- Cada validación tiene: name, status (complete/incomplete), aiSummary
- El `aiSummary` es el texto generado por IA explicando el hallazgo
- Agrupar validaciones por categoría (GitLab, SonarQube, Jira)

---

# EPIC-003: Análisis IA y Predicciones

## Descripción
Funcionalidades de inteligencia artificial para análisis predictivo, identificación de riesgos, generación de planes de acción y recomendaciones automáticas.

---

## HU-013: Visualizar historial de cambios del proyecto

**Epic:** EPIC-003 - Análisis IA y Predicciones  
**Módulo:** Análisis IA de Proyecto  
**Prioridad:** Must Have  
**Story Points:** 5

### Descripción
**Como** Gerente de Proyectos  
**Quiero** ver el historial cronológico de cambios del proyecto  
**Para** entender la evolución del proyecto y las decisiones tomadas

### Criterios de Aceptación

1. **DADO** que accedo a la página de Análisis IA de un proyecto  
   **CUANDO** la página carga  
   **ENTONCES** veo una línea de tiempo con los cambios registrados

2. **DADO** que visualizo la línea de tiempo  
   **CUANDO** hay cambios registrados  
   **ENTONCES** cada entrada muestra: fecha/hora, título, descripción y motivo (si existe)

3. **DADO** que el proyecto no tiene historial  
   **CUANDO** visualizo la sección  
   **ENTONCES** veo mensaje "Sin historial de cambios" con ícono informativo

4. **DADO** que hay múltiples cambios  
   **CUANDO** visualizo la línea de tiempo  
   **ENTONCES** están ordenados del más reciente al más antiguo

### Notas Técnicas
- Formato de fecha: "DD MMM YYYY, HH:mm" (ej: "27 Ene 2026, 09:30")
- Cada entrada del historial tiene: date, title, description, reason (opcional)
- Implementar con diseño visual de timeline vertical

---

## HU-014: Visualizar análisis IA del estado del proyecto

**Epic:** EPIC-003 - Análisis IA y Predicciones  
**Módulo:** Análisis IA de Proyecto  
**Prioridad:** Must Have  
**Story Points:** 8

### Descripción
**Como** Gerente de Proyectos  
**Quiero** ver el análisis generado por IA sobre el estado actual del proyecto  
**Para** obtener una evaluación objetiva basada en los datos

### Criterios de Aceptación

1. **DADO** que accedo al análisis IA  
   **CUANDO** la página carga  
   **ENTONCES** veo sección "Estado del Proyecto" con análisis textual generado por IA

2. **DADO** que el proyecto tiene desviación ≤5%  
   **CUANDO** visualizo el análisis  
   **ENTONCES** el texto indica que el proyecto está en buen estado con tono positivo

3. **DADO** que el proyecto tiene desviación entre 5-10%  
   **CUANDO** visualizo el análisis  
   **ENTONCES** el texto indica desviación moderada y necesidad de monitoreo

4. **DADO** que el proyecto tiene desviación >10%  
   **CUANDO** visualizo el análisis  
   **ENTONCES** el texto indica desviación crítica con ícono de advertencia prominente

5. **DADO** que visualizo el análisis  
   **CUANDO** el proyecto tiene datos completos  
   **ENTONCES** el análisis menciona nombre del proyecto, desviación numérica, avance actual y planificado

### Notas Técnicas
- El análisis puede ser pre-generado (`aiAnalysis.status`) o calculado dinámicamente
- Usar `generateDefaultAIAnalysis()` como fallback si no hay análisis guardado
- El tono del mensaje debe ajustarse al nivel de severidad

---

## HU-015: Ver riesgos identificados por IA

**Epic:** EPIC-003 - Análisis IA y Predicciones  
**Módulo:** Análisis IA de Proyecto  
**Prioridad:** Must Have  
**Story Points:** 5

### Descripción
**Como** Gerente de Proyectos  
**Quiero** ver los riesgos identificados por la IA con su severidad  
**Para** priorizar acciones de mitigación

### Criterios de Aceptación

1. **DADO** que visualizo el análisis IA  
   **CUANDO** hay riesgos identificados  
   **ENTONCES** veo lista de riesgos con categoría, severidad (high/medium/low) e indicador visual

2. **DADO** que un riesgo tiene severidad "high"  
   **CUANDO** lo visualizo  
   **ENTONCES** se muestra con ícono 🔴 y texto descriptivo detallado

3. **DADO** que un riesgo tiene severidad "medium"  
   **CUANDO** lo visualizo  
   **ENTONCES** se muestra con ícono 🟡

4. **DADO** que un riesgo tiene severidad "low"  
   **CUANDO** lo visualizo  
   **ENTONCES** se muestra con ícono 🟢

5. **DADO** que no hay riesgos identificados  
   **CUANDO** visualizo la sección  
   **ENTONCES** veo mensaje "No se han identificado riesgos significativos"

### Notas Técnicas
- Cada riesgo tiene: category, severity, description
- Categorías típicas: Retraso en Cronograma, Sobrecostes Potenciales, Calidad del Entregable, etc.
- Los riesgos se generan basándose en desviación, estado financiero y validaciones de tareas

---

## HU-016: Ver plan de acción recomendado por IA

**Epic:** EPIC-003 - Análisis IA y Predicciones  
**Módulo:** Análisis IA de Proyecto  
**Prioridad:** Must Have  
**Story Points:** 5

### Descripción
**Como** Gerente de Proyectos  
**Quiero** ver las acciones recomendadas por la IA para mejorar el proyecto  
**Para** implementar medidas correctivas o preventivas

### Criterios de Aceptación

1. **DADO** que visualizo el análisis IA  
   **CUANDO** hay acciones recomendadas  
   **ENTONCES** veo lista de acciones con título y descripción detallada

2. **DADO** que el proyecto tiene retraso  
   **CUANDO** visualizo las acciones  
   **ENTONCES** veo recomendaciones específicas como "Plan de recuperación urgente" o "Revisión de recursos"

3. **DADO** que el proyecto está adelantado  
   **CUANDO** visualizo las acciones  
   **ENTONCES** veo recomendaciones como "Revisión de calidad" de entregables

4. **DADO** que no hay acciones recomendadas  
   **CUANDO** visualizo la sección  
   **ENTONCES** veo mensaje "No hay acciones recomendadas en este momento"

### Notas Técnicas
- Cada acción tiene: title, description
- Las acciones se contextualizan según el estado del proyecto
- Priorizar acciones de mayor impacto primero

---

## HU-017: Ver sugerencias de mejora

**Epic:** EPIC-003 - Análisis IA y Predicciones  
**Módulo:** Análisis IA de Proyecto  
**Prioridad:** Should Have  
**Story Points:** 3

### Descripción
**Como** Gerente de Proyectos  
**Quiero** ver sugerencias de mejora continua generadas por IA  
**Para** optimizar procesos y evitar problemas futuros

### Criterios de Aceptación

1. **DADO** que visualizo el análisis IA  
   **CUANDO** hay sugerencias disponibles  
   **ENTONCES** veo lista de sugerencias con título y descripción

2. **DADO** que el proyecto va bien  
   **CUANDO** visualizo sugerencias  
   **ENTONCES** veo recomendaciones proactivas como "Continuar con el ritmo actual"

3. **DADO** que el proyecto tiene desviación  
   **CUANDO** visualizo sugerencias  
   **ENTONCES** veo recomendaciones específicas como "Ajustar planificación"

### Notas Técnicas
- Cada mejora tiene: title, description
- Las sugerencias son de carácter preventivo/proactivo

---

## HU-018: Navegar entre pestañas del análisis IA

**Epic:** EPIC-003 - Análisis IA y Predicciones  
**Módulo:** Análisis IA de Proyecto  
**Prioridad:** Must Have  
**Story Points:** 3

### Descripción
**Como** Gerente de Proyectos  
**Quiero** alternar entre la vista de historial y el análisis IA  
**Para** consultar diferentes perspectivas del proyecto

### Criterios de Aceptación

1. **DADO** que estoy en la página de Análisis IA  
   **CUANDO** la página carga  
   **ENTONCES** veo pestañas "📅 Historial de Cambios" y "🤖 Análisis IA"

2. **DADO** que hago clic en una pestaña  
   **CUANDO** cambio de vista  
   **ENTONCES** el contenido se actualiza y la pestaña activa se resalta

3. **DADO** que la página carga por primera vez  
   **CUANDO** no hay pestaña seleccionada  
   **ENTONCES** la pestaña "Historial" está activa por defecto

### Notas Técnicas
- Implementar con tabs sin recarga de página
- Mantener estado de la pestaña activa en `appState.currentTab`

---

# EPIC-004: Dashboard Ejecutivo

## Descripción
Vista consolidada del portafolio de proyectos para ejecutivos, con KPIs, gráficos analíticos, predicciones IA y recomendaciones estratégicas.

---

## HU-019: Visualizar KPIs del portafolio

**Epic:** EPIC-004 - Dashboard Ejecutivo  
**Módulo:** Dashboard Ejecutivo  
**Prioridad:** Must Have  
**Story Points:** 8

### Descripción
**Como** Ejecutivo/Director  
**Quiero** ver indicadores clave de rendimiento del portafolio de proyectos  
**Para** tomar decisiones estratégicas informadas

### Criterios de Aceptación

1. **DADO** que accedo al Dashboard Ejecutivo  
   **CUANDO** la página carga  
   **ENTONCES** veo 5 tarjetas KPI: Total Proyectos, Inversión Total, Proyectos en Riesgo, Salud del Portafolio, Validación IA

2. **DADO** que visualizo "Total Proyectos"  
   **CUANDO** hay proyectos activos  
   **ENTONCES** veo número total y subtexto con proyectos activos

3. **DADO** que visualizo "Inversión Total"  
   **CUANDO** hay datos financieros  
   **ENTONCES** veo presupuesto total, consumido y porcentaje

4. **DADO** que visualizo "Proyectos en Riesgo"  
   **CUANDO** hay proyectos con desviación >5%  
   **ENTONCES** veo conteo y porcentaje del total

5. **DADO** que visualizo "Salud del Portafolio"  
   **CUANDO** calculo la salud  
   **ENTONCES** veo score de 0-100 basado en desviaciones y estados

6. **DADO** que visualizo "Validación IA"  
   **CUANDO** hay tareas validadas  
   **ENTONCES** veo porcentaje de tareas con validación OK

7. **DADO** que un KPI está en estado crítico  
   **CUANDO** visualizo la tarjeta  
   **ENTONCES** tiene borde o color indicando peligro (rojo)

### Notas Técnicas
- Cálculo de Salud: 100 - (10 por cada proyecto con desviación >10%) - (3 por desviación >5%) - (5 por pausado) - (8 por cancelado)
- Colores KPI: success (verde), warning (amarillo), danger (rojo)
- Formato moneda: USD con símbolo $ y separadores de miles

---

## HU-020: Filtrar dashboard por periodo, estado y riesgo

**Epic:** EPIC-004 - Dashboard Ejecutivo  
**Módulo:** Dashboard Ejecutivo  
**Prioridad:** Should Have  
**Story Points:** 5

### Descripción
**Como** Ejecutivo/Director  
**Quiero** filtrar el dashboard por diferentes criterios  
**Para** analizar segmentos específicos del portafolio

### Criterios de Aceptación

1. **DADO** que estoy en el Dashboard  
   **CUANDO** selecciono periodo "Q1 2026"  
   **ENTONCES** los KPIs y gráficos reflejan solo proyectos de ese periodo

2. **DADO** que filtro por estado "Activo"  
   **CUANDO** aplico el filtro  
   **ENTONCES** solo considero proyectos activos en los cálculos

3. **DADO** que filtro por nivel de riesgo "Rojo"  
   **CUANDO** aplico el filtro  
   **ENTONCES** solo veo proyectos con desviación crítica

4. **DADO** que aplico filtros  
   **CUANDO** hago clic en "Aplicar Filtros"  
   **ENTONCES** todo el dashboard se actualiza reflejando los filtros

### Notas Técnicas
- Periodos: Todos, Proyectos Activos, Últimos 30 días, Q1 2026, 2026, 2025
- Estados: Activo, En Pausa, Completado, Cancelado
- Riesgos: Verde (≤5%), Amarillo (5-10%), Rojo (>10%)

---

## HU-021: Visualizar gráfico de matriz de riesgos

**Epic:** EPIC-004 - Dashboard Ejecutivo  
**Módulo:** Dashboard Ejecutivo  
**Prioridad:** Must Have  
**Story Points:** 8

### Descripción
**Como** Ejecutivo/Director  
**Quiero** ver un gráfico de dispersión que relacione desviación temporal y presupuestal  
**Para** identificar proyectos que requieren atención en ambas dimensiones

### Criterios de Aceptación

1. **DADO** que visualizo el Dashboard  
   **CUANDO** hay proyectos con datos financieros  
   **ENTONCES** veo gráfico scatter con ejes: Desviación Temporal (X) y Desviación Presupuestal (Y)

2. **DADO** que un proyecto tiene desviación >10%  
   **CUANDO** visualizo el gráfico  
   **ENTONCES** aparece como punto rojo (Riesgo Crítico)

3. **DADO** que un proyecto tiene desviación 5-10%  
   **CUANDO** visualizo el gráfico  
   **ENTONCES** aparece como punto amarillo (Riesgo Medio)

4. **DADO** que un proyecto tiene desviación ≤5%  
   **CUANDO** visualizo el gráfico  
   **ENTONCES** aparece como punto verde (Riesgo Bajo)

5. **DADO** que paso el mouse sobre un punto  
   **CUANDO** veo el tooltip  
   **ENTONCES** muestra código, nombre y valores de desviación

### Notas Técnicas
- Usar ApexCharts tipo scatter
- Líneas de referencia en X=0 e Y=0 para indicar "En Plan"
- Desviación presupuestal = % Consumido - % Avance Real

---

## HU-022: Visualizar distribución de riesgos

**Epic:** EPIC-004 - Dashboard Ejecutivo  
**Módulo:** Dashboard Ejecutivo  
**Prioridad:** Should Have  
**Story Points:** 5

### Descripción
**Como** Ejecutivo/Director  
**Quiero** ver la distribución de proyectos por nivel de riesgo  
**Para** entender la composición del portafolio

### Criterios de Aceptación

1. **DADO** que visualizo el Dashboard  
   **CUANDO** hay proyectos  
   **ENTONCES** veo gráfico de dona/pie con distribución de riesgos

2. **DADO** que visualizo el gráfico  
   **CUANDO** paso el mouse  
   **ENTONCES** veo cantidad y porcentaje de cada categoría

3. **DADO** que hay 0 proyectos en una categoría de riesgo  
   **CUANDO** visualizo el gráfico  
   **ENTONCES** esa categoría no aparece o muestra 0

### Notas Técnicas
- Categorías: Riesgo Bajo, Riesgo Medio, Riesgo Alto
- Colores: #10b981 (verde), #f59e0b (amarillo), #ef4444 (rojo)

---

## HU-023: Visualizar tendencias de progreso

**Epic:** EPIC-004 - Dashboard Ejecutivo  
**Módulo:** Dashboard Ejecutivo  
**Prioridad:** Should Have  
**Story Points:** 5

### Descripción
**Como** Ejecutivo/Director  
**Quiero** ver gráfico comparativo de avance planificado vs real por proyecto  
**Para** identificar patrones de desempeño

### Criterios de Aceptación

1. **DADO** que visualizo el Dashboard  
   **CUANDO** hay proyectos  
   **ENTONCES** veo gráfico de barras comparando avance planificado y real por proyecto

2. **DADO** que visualizo el gráfico  
   **CUANDO** un proyecto está retrasado  
   **ENTONCES** la barra de avance real es menor que la planificada

3. **DADO** que visualizo el gráfico  
   **CUANDO** un proyecto está adelantado  
   **ENTONCES** la barra de avance real supera la planificada

### Notas Técnicas
- Usar chart tipo bar agrupado
- Eje X: Códigos de proyecto
- Eje Y: Porcentaje (0-100%)

---

## HU-024: Visualizar proyectos críticos

**Epic:** EPIC-004 - Dashboard Ejecutivo  
**Módulo:** Dashboard Ejecutivo  
**Prioridad:** Must Have  
**Story Points:** 5

### Descripción
**Como** Ejecutivo/Director  
**Quiero** ver un listado de proyectos en estado crítico con sus detalles  
**Para** priorizar intervenciones urgentes

### Criterios de Aceptación

1. **DADO** que hay proyectos con desviación >10%  
   **CUANDO** visualizo la sección de proyectos críticos  
   **ENTONCES** veo tabla con: Código, Nombre, Desviación, Estado, Líder, Acciones

2. **DADO** que hago clic en un proyecto de la lista  
   **CUANDO** selecciono "Ver Detalle"  
   **ENTONCES** navego a la página de detalle del proyecto

3. **DADO** que no hay proyectos críticos  
   **CUANDO** visualizo la sección  
   **ENTONCES** veo mensaje positivo "No hay proyectos en estado crítico"

### Notas Técnicas
- Ordenar por severidad de desviación (mayor primero)
- Incluir enlace rápido a Análisis IA

---

## HU-025: Ver análisis de causas de fallo

**Epic:** EPIC-004 - Dashboard Ejecutivo  
**Módulo:** Dashboard Ejecutivo  
**Prioridad:** Should Have  
**Story Points:** 5

### Descripción
**Como** Ejecutivo/Director  
**Quiero** ver un análisis de las principales causas de fallos en proyectos  
**Para** implementar mejoras sistémicas

### Criterios de Aceptación

1. **DADO** que hay proyectos con problemas  
   **CUANDO** visualizo el análisis de fallos  
   **ENTONCES** veo categorización de causas comunes con frecuencia

2. **DADO** que visualizo las causas  
   **CUANDO** hay datos suficientes  
   **ENTONCES** veo causas como: Retrasos en entregas, Problemas de calidad, Sobrecostes

3. **DADO** que hago clic en una causa  
   **CUANDO** es interactiva  
   **ENTONCES** veo detalle de proyectos afectados por esa causa

### Notas Técnicas
- Analizar `aiRiskReasons` de tareas para categorizar causas
- Mostrar gráfico de barras horizontales con frecuencia

---

## HU-026: Ver recomendaciones estratégicas

**Epic:** EPIC-004 - Dashboard Ejecutivo  
**Módulo:** Dashboard Ejecutivo  
**Prioridad:** Should Have  
**Story Points:** 5

### Descripción
**Como** Ejecutivo/Director  
**Quiero** ver recomendaciones estratégicas generadas por IA  
**Para** orientar decisiones a nivel de portafolio

### Criterios de Aceptación

1. **DADO** que visualizo el Dashboard  
   **CUANDO** hay datos de portafolio  
   **ENTONCES** veo sección con 3-5 recomendaciones estratégicas

2. **DADO** que hay proyectos críticos  
   **CUANDO** visualizo recomendaciones  
   **ENTONCES** veo sugerencias de intervención prioritaria

3. **DADO** que el portafolio está sano  
   **CUANDO** visualizo recomendaciones  
   **ENTONCES** veo sugerencias de optimización y mejora continua

### Notas Técnicas
- Las recomendaciones se generan basándose en KPIs del portafolio
- Priorizar por impacto potencial

---

## HU-027: Refrescar dashboard

**Epic:** EPIC-004 - Dashboard Ejecutivo  
**Módulo:** Dashboard Ejecutivo  
**Prioridad:** Must Have  
**Story Points:** 2

### Descripción
**Como** Ejecutivo/Director  
**Quiero** refrescar los datos del dashboard manualmente  
**Para** ver la información más reciente

### Criterios de Aceptación

1. **DADO** que hago clic en "🔄 Actualizar"  
   **CUANDO** se inicia la carga  
   **ENTONCES** el botón muestra "Actualizando..." y se deshabilita

2. **DADO** que la actualización completa  
   **CUANDO** hay datos nuevos  
   **ENTONCES** todos los KPIs y gráficos se actualizan

3. **DADO** que la actualización completa  
   **CUANDO** finaliza  
   **ENTONCES** se muestra timestamp "Última actualización: HH:mm"

### Notas Técnicas
- Mostrar indicador de carga mientras se refresca
- El botón vuelve a habilitarse al completar

---

# EPIC-005: Análisis Financiero

## Descripción
Funcionalidades para monitorear el estado financiero de proyectos, incluyendo presupuesto, facturación e hitos.

---

## HU-028: Visualizar análisis de presupuesto vs progreso

**Epic:** EPIC-005 - Análisis Financiero  
**Módulo:** Detalle de Proyecto  
**Prioridad:** Should Have  
**Story Points:** 8

### Descripción
**Como** Líder de Proyecto  
**Quiero** ver la relación entre avance del proyecto y consumo de presupuesto  
**Para** identificar desviaciones financieras tempranamente

### Criterios de Aceptación

1. **DADO** que el proyecto tiene datos financieros  
   **CUANDO** visualizo el análisis  
   **ENTONCES** veo gráfico de barras comparando % Avance vs % Presupuesto Consumido

2. **DADO** que el presupuesto consumido supera el avance en más de 20%  
   **CUANDO** visualizo el análisis  
   **ENTONCES** veo alerta visual de "Riesgo de Sobrecosto"

3. **DADO** que visualizo los detalles  
   **CUANDO** hay datos completos  
   **ENTONCES** veo: Presupuesto Total, Consumido, Desviación numérica

4. **DADO** que el proyecto no tiene datos financieros  
   **CUANDO** cargo la página  
   **ENTONCES** la sección financiera no se muestra

### Notas Técnicas
- Desviación financiera = % Consumido - % Avance Real
- Estados: success (≤0), warning (0-10%), danger (>10%)
- Formato: USD con separadores de miles

---

## HU-029: Visualizar estado de facturación

**Epic:** EPIC-005 - Análisis Financiero  
**Módulo:** Detalle de Proyecto  
**Prioridad:** Should Have  
**Story Points:** 5

### Descripción
**Como** Líder de Proyecto  
**Quiero** ver el estado de facturación del proyecto  
**Para** gestionar el flujo de caja y pagos pendientes

### Criterios de Aceptación

1. **DADO** que visualizo el análisis financiero  
   **CUANDO** hay datos de facturación  
   **ENTONCES** veo: Facturas Pagadas, Pendientes, Monto Pendiente, % Facturación Pagada

2. **DADO** que hay muchas facturas pendientes (>50%)  
   **CUANDO** visualizo el estado  
   **ENTONCES** veo alerta de advertencia

3. **DADO** que visualizo la tarjeta  
   **CUANDO** paso el mouse  
   **ENTONCES** veo tooltip con detalles adicionales

### Notas Técnicas
- Mostrar X/Y formato para facturas
- Calcular % Pagado = (Pagadas/Total) * 100

---

## HU-030: Visualizar estado de hitos aprobados

**Epic:** EPIC-005 - Análisis Financiero  
**Módulo:** Detalle de Proyecto  
**Prioridad:** Should Have  
**Story Points:** 5

### Descripción
**Como** Líder de Proyecto  
**Quiero** ver el estado de aprobación de hitos del proyecto  
**Para** hacer seguimiento de entregables formales

### Criterios de Aceptación

1. **DADO** que visualizo el análisis financiero  
   **CUANDO** hay datos de hitos  
   **ENTONCES** veo: Hitos Aprobados, Pendientes, % de Aprobación

2. **DADO** que hay hitos atrasados  
   **CUANDO** visualizo el estado  
   **ENTONCES** veo indicador de alerta

3. **DADO** que todos los hitos están aprobados  
   **CUANDO** visualizo el estado  
   **ENTONCES** veo indicador de éxito

### Notas Técnicas
- Formato: X/Y (Aprobados/Total)
- Relacionar con facturación si hay pagos por hito

---

# EPIC-006: Integraciones Externas

## Descripción
Funcionalidades para integración con sistemas externos de gestión de proyectos.

---

## HU-031: Enlazar a sistema de gestión externo

**Epic:** EPIC-006 - Integraciones Externas  
**Módulo:** Mantenimiento de Proyectos  
**Prioridad:** Could Have  
**Story Points:** 3

### Descripción
**Como** Líder de Proyecto  
**Quiero** acceder directamente al proyecto en el sistema de gestión externo  
**Para** consultar información detallada sin cambiar de contexto

### Criterios de Aceptación

1. **DADO** que el proyecto tiene sistema de gestión configurado  
   **CUANDO** visualizo el proyecto  
   **ENTONCES** veo enlace con ícono del sistema (Jira, Project, Excel)

2. **DADO** que hago clic en el enlace  
   **CUANDO** es una URL web  
   **ENTONCES** se abre en nueva pestaña

3. **DADO** que la ruta es un path de red  
   **CUANDO** hago clic  
   **ENTONCES** intenta abrir el archivo local (con advertencia de seguridad del navegador)

### Notas Técnicas
- Sistemas soportados: Jira, MS Project, Excel, SharePoint
- URLs web: https://...
- Paths de red: \\servidor\...

---

## HU-032: Visualizar estado de integración GitLab

**Epic:** EPIC-006 - Integraciones Externas  
**Módulo:** Detalle de Proyecto  
**Prioridad:** Could Have  
**Story Points:** 5

### Descripción
**Como** Desarrollador  
**Quiero** ver el estado de integración con GitLab en cada tarea  
**Para** validar que el código cumple con los estándares

### Criterios de Aceptación

1. **DADO** que una tarea tiene integración GitLab  
   **CUANDO** visualizo su detalle  
   **ENTONCES** veo estado de: Code Review, Commits, Merge Requests, Pipeline

2. **DADO** que hay problemas en GitLab  
   **CUANDO** visualizo el estado  
   **ENTONCES** veo indicador "Error" o "Warning" con descripción IA

3. **DADO** que todo está correcto en GitLab  
   **CUANDO** visualizo el estado  
   **ENTONCES** veo indicador "OK" verde

### Notas Técnicas
- Estados: OK, Warning, Error, null (sin integración)
- Cada validación tiene `aiSummary` con análisis generado

---

## HU-033: Visualizar estado de integración SonarQube

**Epic:** EPIC-006 - Integraciones Externas  
**Módulo:** Detalle de Proyecto  
**Prioridad:** Could Have  
**Story Points:** 5

### Descripción
**Como** Desarrollador  
**Quiero** ver el estado de calidad de código de SonarQube  
**Para** asegurar que el código cumple estándares de calidad

### Criterios de Aceptación

1. **DADO** que una tarea tiene integración SonarQube  
   **CUANDO** visualizo su detalle  
   **ENTONCES** veo: Code Quality, Coverage, Vulnerabilities, Code Smells, Technical Debt

2. **DADO** que el coverage está por debajo del umbral  
   **CUANDO** visualizo el estado  
   **ENTONCES** veo alerta indicando el porcentaje actual vs requerido

3. **DADO** que hay vulnerabilidades  
   **CUANDO** visualizo el estado  
   **ENTONCES** veo conteo y severidad con recomendación IA

### Notas Técnicas
- Umbral de coverage recomendado: 80%
- Calificaciones SonarQube: A (excelente) a E (muy malo)
- Mostrar deuda técnica en horas estimadas

---

## HU-034: Configurar modo de datos (Mock/API)

**Epic:** EPIC-006 - Integraciones Externas  
**Módulo:** Configuración Global  
**Prioridad:** Could Have  
**Story Points:** 2

### Descripción
**Como** Desarrollador  
**Quiero** alternar entre datos mock y API real  
**Para** desarrollar y probar sin dependencia del backend

### Criterios de Aceptación

1. **DADO** que `MOCKUP_MODE = true`  
   **CUANDO** la aplicación carga  
   **ENTONCES** usa datos mock locales (mockProjectsData)

2. **DADO** que `MOCKUP_MODE = false`  
   **CUANDO** la aplicación carga  
   **ENTONCES** hace llamadas a los endpoints API configurados

3. **DADO** que la API falla  
   **CUANDO** hay error de conexión  
   **ENTONCES** muestra mensaje de error amigable

### Notas Técnicas
- Variable `MOCKUP_MODE` definida en cada archivo JS
- En modo mock, simular delay de red (500-800ms)
- Endpoints configurados en `API_ENDPOINTS`

---

# Resumen de Historias de Usuario

| Epic | ID | Título | SP | Prioridad |
|------|-----|--------|----|----|
| EPIC-001 | HU-001 | Visualizar lista de proyectos | 5 | Must Have |
| EPIC-001 | HU-002 | Filtrar proyectos por múltiples criterios | 5 | Must Have |
| EPIC-001 | HU-003 | Crear nuevo proyecto | 8 | Must Have |
| EPIC-001 | HU-004 | Editar proyecto existente | 5 | Must Have |
| EPIC-001 | HU-005 | Eliminar proyecto | 3 | Must Have |
| EPIC-001 | HU-006 | Acceder a análisis IA desde lista | 3 | Should Have |
| EPIC-001 | HU-007 | Navegar al detalle del proyecto | 2 | Must Have |
| EPIC-002 | HU-008 | Visualizar información general del proyecto | 5 | Must Have |
| EPIC-002 | HU-009 | Visualizar dashboard IA de tareas | 8 | Must Have |
| EPIC-002 | HU-010 | Visualizar lista de tareas del proyecto | 5 | Must Have |
| EPIC-002 | HU-011 | Filtrar tareas por múltiples criterios | 5 | Must Have |
| EPIC-002 | HU-012 | Ver detalle de validación IA de tarea | 8 | Must Have |
| EPIC-003 | HU-013 | Visualizar historial de cambios | 5 | Must Have |
| EPIC-003 | HU-014 | Visualizar análisis IA del estado | 8 | Must Have |
| EPIC-003 | HU-015 | Ver riesgos identificados por IA | 5 | Must Have |
| EPIC-003 | HU-016 | Ver plan de acción recomendado | 5 | Must Have |
| EPIC-003 | HU-017 | Ver sugerencias de mejora | 3 | Should Have |
| EPIC-003 | HU-018 | Navegar entre pestañas análisis IA | 3 | Must Have |
| EPIC-004 | HU-019 | Visualizar KPIs del portafolio | 8 | Must Have |
| EPIC-004 | HU-020 | Filtrar dashboard | 5 | Should Have |
| EPIC-004 | HU-021 | Visualizar matriz de riesgos | 8 | Must Have |
| EPIC-004 | HU-022 | Visualizar distribución de riesgos | 5 | Should Have |
| EPIC-004 | HU-023 | Visualizar tendencias de progreso | 5 | Should Have |
| EPIC-004 | HU-024 | Visualizar proyectos críticos | 5 | Must Have |
| EPIC-004 | HU-025 | Ver análisis de causas de fallo | 5 | Should Have |
| EPIC-004 | HU-026 | Ver recomendaciones estratégicas | 5 | Should Have |
| EPIC-004 | HU-027 | Refrescar dashboard | 2 | Must Have |
| EPIC-005 | HU-028 | Análisis presupuesto vs progreso | 8 | Should Have |
| EPIC-005 | HU-029 | Estado de facturación | 5 | Should Have |
| EPIC-005 | HU-030 | Estado de hitos aprobados | 5 | Should Have |
| EPIC-006 | HU-031 | Enlazar a sistema externo | 3 | Could Have |
| EPIC-006 | HU-032 | Estado integración GitLab | 5 | Could Have |
| EPIC-006 | HU-033 | Estado integración SonarQube | 5 | Could Have |
| EPIC-006 | HU-034 | Configurar modo Mock/API | 2 | Could Have |

**Total Story Points:** 181

---

*Documento generado para el proyecto App IA Projects - Enero 2026*
