# 🎯 Prompt Maestro para Generación de Historias de Usuario

## Contexto del Proyecto

Este documento contiene el prompt optimizado para generar Historias de Usuario (HU) para el sistema **"App IA Projects"**, una aplicación de gestión de proyectos con análisis de Inteligencia Artificial.

---

## 📋 Prompt Principal (Chain of Thought + Role-Based)

```markdown
### ROL Y CONTEXTO

Actúa como un **Analista de Negocios Senior** con más de 10 años de experiencia en metodologías ágiles, 
certificación CSM y CSPO, especializado en sistemas de gestión de proyectos empresariales y soluciones 
con Inteligencia Artificial.

### SISTEMA A ANALIZAR

El sistema "App IA Projects" es una aplicación web de gestión de proyectos que incluye:

**Módulos Principales:**
1. **Mantenimiento de Proyectos** - CRUD completo de proyectos con filtros avanzados
2. **Detalle de Proyecto** - Visualización detallada con tareas, dashboard IA y análisis financiero
3. **Análisis IA de Proyecto** - Historial de cambios y análisis predictivo con IA
4. **Dashboard Ejecutivo** - Vista consolidada del portafolio con KPIs y gráficos

**Características Técnicas:**
- Cálculo de desviaciones según estándares ITIL/PMP (Verde ≤5%, Amarillo 5-10%, Rojo >10%)
- Integración con sistemas de gestión externos (Jira, MS Project, Excel)
- Validación IA de tareas con integración GitLab y SonarQube
- Análisis financiero (presupuesto, facturación, hitos)
- Predicciones y recomendaciones basadas en IA

### INSTRUCCIONES (Chain of Thought)

**Paso 1: Identificación de Actores**
- Identifica todos los roles/usuarios que interactuarán con el sistema
- Define sus responsabilidades y nivel de acceso

**Paso 2: Mapeo de Funcionalidades**
- Por cada módulo, identifica las funcionalidades principales
- Agrupa funcionalidades relacionadas

**Paso 3: Generación de HU**
Para cada funcionalidad, genera una Historia de Usuario usando el formato:

```
**Como** [rol/actor]
**Quiero** [acción/funcionalidad]
**Para** [beneficio/valor de negocio]
```

**Paso 4: Criterios de Aceptación**
Para cada HU, define criterios SMART:
- Específicos y medibles
- Orientados a comportamiento observable
- En formato Given-When-Then cuando aplique

**Paso 5: Estimación y Priorización**
- Asigna Story Points (Fibonacci: 1, 2, 3, 5, 8, 13)
- Clasifica por prioridad (Must Have, Should Have, Could Have, Won't Have)

### FORMATO DE SALIDA

Para cada Historia de Usuario, utiliza esta plantilla:

---
## HU-XXX: [Título Descriptivo]

**Epic:** [Nombre del Epic]
**Módulo:** [Nombre del Módulo]
**Prioridad:** [Must Have | Should Have | Could Have]
**Story Points:** [1-13]

### Descripción
**Como** [rol]
**Quiero** [acción]
**Para** [beneficio]

### Criterios de Aceptación
1. **DADO** [contexto inicial]
   **CUANDO** [acción del usuario]
   **ENTONCES** [resultado esperado]

2. [Criterio adicional...]

### Notas Técnicas
- [Consideración técnica relevante]

### Dependencias
- [HU relacionada si aplica]

---

### RESTRICCIONES

1. Cada HU debe ser independiente cuando sea posible
2. Las HU deben poder completarse en un sprint (máximo 8 SP)
3. Incluir escenarios de error y edge cases en criterios de aceptación
4. Considerar accesibilidad y responsive design
5. Mantener coherencia con estándares ITIL/PMP mencionados
```

---

## 🔄 Prompt de Refinamiento (Few-Shot)

```markdown
### EJEMPLO DE HU BIEN ESTRUCTURADA

## HU-001: Visualizar lista de proyectos con filtros

**Epic:** Gestión de Proyectos
**Módulo:** Mantenimiento de Proyectos
**Prioridad:** Must Have
**Story Points:** 5

### Descripción
**Como** Gerente de Proyectos
**Quiero** ver una lista de todos los proyectos con opciones de filtrado
**Para** identificar rápidamente proyectos que requieren atención según su estado y desviación

### Criterios de Aceptación
1. **DADO** que estoy en la página de proyectos
   **CUANDO** cargo la página
   **ENTONCES** veo una tabla con todos los proyectos mostrando: código, nombre, estado, líder, 
   fechas, avance planificado, avance real y desviación con indicador visual

2. **DADO** que hay proyectos disponibles
   **CUANDO** filtro por código "PRJ-001"
   **ENTONCES** solo veo proyectos cuyo código contenga "PRJ-001"

3. **DADO** que quiero ver proyectos críticos
   **CUANDO** selecciono filtro de desviación "Crítico (>10%)"
   **ENTONCES** solo veo proyectos con desviación absoluta mayor al 10%

4. **DADO** que aplico filtros
   **CUANDO** hago clic en "Limpiar Filtros"
   **ENTONCES** todos los filtros se reinician y veo la lista completa

### Notas Técnicas
- Indicadores de desviación según ITIL/PMP: Verde (≤5%), Amarillo (5-10%), Rojo (>10%)
- La tabla debe ser responsive y ordenable por cualquier columna
- Implementar paginación si hay más de 20 proyectos

---

Ahora genera las HU para el módulo [NOMBRE_MÓDULO] siguiendo exactamente este formato y nivel de detalle.
```

---

## 🧠 Prompt de Validación (Self-Consistency)

```markdown
### VALIDACIÓN DE HISTORIAS DE USUARIO

Revisa las siguientes HU generadas y verifica:

**Checklist de Calidad:**

□ **Independencia (I)**: ¿Puede implementarse sin depender de otras HU?
□ **Negociable (N)**: ¿Los detalles pueden discutirse con el equipo?
□ **Valiosa (V)**: ¿Aporta valor real al usuario final?
□ **Estimable (E)**: ¿El equipo puede estimar el esfuerzo?
□ **Small (S)**: ¿Puede completarse en un sprint?
□ **Testeable (T)**: ¿Los criterios de aceptación son verificables?

**Preguntas de Validación:**
1. ¿El "Para" expresa un beneficio de negocio claro?
2. ¿Los criterios cubren el happy path y edge cases?
3. ¿Se consideró la experiencia en dispositivos móviles?
4. ¿Hay criterios de rendimiento si aplica?
5. ¿Las dependencias están correctamente identificadas?

Corrige cualquier HU que no cumpla estos criterios.
```

---

## 📊 Prompt para Épicas y Roadmap

```markdown
### GENERACIÓN DE ÉPICAS

Basándote en el análisis del sistema App IA Projects, genera las Épicas principales:

**Formato de Épica:**
```
# EPIC-XXX: [Nombre de la Épica]

## Descripción
[Descripción de alto nivel del objetivo de la épica]

## Objetivos de Negocio
- [Objetivo 1]
- [Objetivo 2]

## Métricas de Éxito
- [KPI 1 con meta]
- [KPI 2 con meta]

## Historias de Usuario Incluidas
- HU-XXX: [Título]
- HU-XXX: [Título]

## Dependencias con Otras Épicas
- [EPIC-XXX si aplica]

## Estimación Total
- Story Points: XX
- Sprints Estimados: X
```

Organiza las Épicas en un roadmap de 4 releases.
```

---

## 🎨 Técnicas de Prompting Utilizadas

| Técnica | Aplicación |
|---------|------------|
| **Role-Based Prompting** | Definir al LLM como Analista de Negocios Senior |
| **Chain of Thought** | Pasos secuenciales para análisis sistemático |
| **Few-Shot Learning** | Ejemplo detallado de HU bien estructurada |
| **Self-Consistency** | Prompt de validación con checklist INVEST |
| **Structured Output** | Templates específicos para formato de salida |
| **Context Setting** | Descripción detallada del sistema y sus módulos |

---

*Documento generado para el proyecto App IA Projects - Enero 2026*
