# Prompt para Generación de Diagramas de Secuencia
## Sistema de Gestión de Proyectos con IA

---

## 🎯 Contexto y Objetivo

Eres un **Arquitecto de Software Senior** especializado en diseño de sistemas, modelado UML y documentación técnica. Tu tarea es analizar el sistema de gestión de proyectos con IA y generar diagramas de secuencia detallados que documenten las interacciones entre componentes para cada flujo crítico del sistema.

---

## 📐 Estándares y Convenciones

### **Notación UML 2.5**
Utiliza la notación estándar de diagramas de secuencia UML 2.5 con:
- **Participantes**: Actor, Frontend, Service, API, Database, IA Service
- **Mensajes síncronos**: Flecha sólida →
- **Mensajes asíncronos**: Flecha abierta ⇢
- **Mensajes de retorno**: Flecha punteada ⤺
- **Activación**: Barras verticales en lifelines
- **Fragmentos**: alt, opt, loop, par para control de flujo
- **Notas**: Para aclaraciones técnicas importantes

### **Niveles de Detalle**
Cada diagrama debe incluir:
1. **Nivel 1 - Happy Path**: Flujo principal sin errores
2. **Nivel 2 - Alternative Flows**: Flujos alternativos y validaciones
3. **Nivel 3 - Error Handling**: Manejo de errores y excepciones

---

## 🔍 Componentes del Sistema Identificados

### **Capa de Presentación (Frontend)**
- `page-executive-dashboard.js` - Dashboard ejecutivo
- `page-projects.js` - Gestión de proyectos
- `page-project-detail.js` - Detalle de proyecto
- `page-project-ia.js` - Asistente IA

### **Capa de Servicios (Backend)**
- `projects.service.js` - Lógica de negocio de proyectos
- `tasks.service.js` - Lógica de negocio de tareas
- API Routes - Endpoints REST

### **Capa de Datos**
- `projects.data.js` - Datos mock de proyectos
- `tasks.data.js` - Datos mock de tareas

### **Servicios Externos**
- IA Service - Servicio de inteligencia artificial

---

## 📋 Flujos Críticos a Documentar

### **Grupo 1: Dashboard y Visualización**

#### D1. Carga del Dashboard Ejecutivo
**Trigger**: Usuario accede a la página del dashboard  
**Actores**: Usuario, Frontend (Dashboard), API, Service, Database  
**Complejidad**: Media  
**Incluir**:
- Carga inicial de métricas
- Renderizado de gráficos
- Auto-refresh periódico
- Manejo de estados de carga

#### D2. Actualización Automática de Métricas
**Trigger**: Timer de auto-refresh (30s)  
**Actores**: Frontend (Dashboard), API, Service  
**Complejidad**: Baja  
**Incluir**:
- Polling periódico
- Actualización incremental
- Manejo de errores de red

---

### **Grupo 2: Gestión de Proyectos**

#### P1. Listar Proyectos con Filtros
**Trigger**: Usuario accede a lista de proyectos  
**Actores**: Usuario, Frontend (Projects), API, Service, Database  
**Complejidad**: Media  
**Incluir**:
- Carga inicial con paginación
- Aplicación de filtros (estado, búsqueda)
- Ordenamiento de columnas
- Manejo de resultados vacíos

#### P2. Crear Nuevo Proyecto
**Trigger**: Usuario hace clic en "Nuevo Proyecto"  
**Actores**: Usuario, Frontend (Projects), API, Service, Database  
**Complejidad**: Alta  
**Incluir**:
- Apertura de modal
- Validaciones del formulario (client-side y server-side)
- Persistencia de datos
- Actualización de UI
- Manejo de errores de validación y persistencia

#### P3. Editar Proyecto Existente
**Trigger**: Usuario hace clic en "Editar" en un proyecto  
**Actores**: Usuario, Frontend (Projects), API, Service, Database  
**Complejidad**: Alta  
**Incluir**:
- Carga de datos actuales
- Pre-llenado de formulario
- Validaciones
- Actualización de datos
- Manejo de concurrencia (si aplica)

#### P4. Eliminar Proyecto
**Trigger**: Usuario hace clic en "Eliminar" y confirma  
**Actores**: Usuario, Frontend (Projects), API, Service, Database  
**Complejidad**: Media  
**Incluir**:
- Confirmación de acción
- Eliminación en cascada de tareas relacionadas
- Actualización de UI
- Manejo de errores

#### P5. Buscar y Filtrar Proyectos
**Trigger**: Usuario escribe en el campo de búsqueda  
**Actores**: Usuario, Frontend (Projects), API, Service, Database  
**Complejidad**: Media  
**Incluir**:
- Debounce de búsqueda (500ms)
- Query con parámetros
- Actualización dinámica de resultados

---

### **Grupo 3: Detalle y Seguimiento**

#### T1. Visualizar Detalle de Proyecto
**Trigger**: Usuario hace clic en "Ver" en un proyecto  
**Actores**: Usuario, Frontend (Detail), API, Service, Database  
**Complejidad**: Alta  
**Incluir**:
- Carga de datos del proyecto
- Carga de tareas asociadas
- Renderizado de timeline
- Cálculo de progreso
- Manejo de proyecto no encontrado

#### T2. Crear Tarea en Proyecto
**Trigger**: Usuario hace clic en "Nueva Tarea"  
**Actores**: Usuario, Frontend (Detail), API, Service, Database  
**Complejidad**: Media  
**Incluir**:
- Validación de datos
- Asociación con proyecto
- Actualización de progreso del proyecto
- Refresco de lista de tareas

#### T3. Actualizar Estado de Tarea
**Trigger**: Usuario cambia el estado en el dropdown  
**Actores**: Usuario, Frontend (Detail), API, Service, Database  
**Complejidad**: Media  
**Incluir**:
- Actualización optimista (UI primero)
- Persistencia en servidor
- Rollback en caso de error
- Recálculo de progreso del proyecto

#### T4. Eliminar Tarea
**Trigger**: Usuario hace clic en "Eliminar Tarea"  
**Actores**: Usuario, Frontend (Detail), API, Service, Database  
**Complejidad**: Baja  
**Incluir**:
- Confirmación
- Eliminación
- Actualización de progreso

---

### **Grupo 4: Asistente de IA**

#### AI1. Iniciar Conversación con IA
**Trigger**: Usuario accede a la página del asistente  
**Actores**: Usuario, Frontend (IA), API, IA Service  
**Complejidad**: Baja  
**Incluir**:
- Carga de mensaje de bienvenida
- Inicialización del contexto
- Carga de historial previo (si existe)

#### AI2. Enviar Mensaje al Asistente
**Trigger**: Usuario envía un mensaje  
**Actores**: Usuario, Frontend (IA), API, IA Service  
**Complejidad**: Media  
**Incluir**:
- Envío del mensaje con contexto
- Indicador de "escribiendo..."
- Recepción de respuesta
- Guardado en historial
- Manejo de timeouts

#### AI3. Solicitar Análisis de Proyecto
**Trigger**: Usuario hace clic en "Analizar Proyecto"  
**Actores**: Usuario, Frontend (IA), API, IA Service, Service, Database  
**Complejidad**: Alta  
**Incluir**:
- Obtención de datos del proyecto
- Obtención de tareas
- Cálculo de métricas
- Envío a IA para análisis
- Recepción de análisis estructurado
- Renderizado de resultados
- Opción de exportar

#### AI4. Generar Reporte Automático
**Trigger**: Usuario hace clic en "Generar Reporte"  
**Actores**: Usuario, Frontend (IA), API, IA Service, Service  
**Complejidad**: Alta  
**Incluir**:
- Recopilación de datos
- Generación con IA
- Formateo del documento
- Descarga del archivo
- Manejo de generación en proceso

#### AI5. Recibir Recomendaciones Proactivas
**Trigger**: Sistema analiza proyecto automáticamente  
**Actores**: Sistema (Timer), Frontend (IA), API, IA Service, Service  
**Complejidad**: Alta  
**Incluir**:
- Trigger automático
- Análisis en background
- Priorización de recomendaciones
- Notificación al usuario
- Almacenamiento de recomendaciones

---

## 🎨 Formato de Salida

Para cada diagrama, genera:

```markdown
## [ID]. [Nombre del Flujo]

### Descripción
[Descripción breve del flujo y su propósito]

### Precondiciones
- Condición 1
- Condición 2

### Postcondiciones Exitosas
- Resultado 1
- Resultado 2

### Postcondiciones de Error
- Error 1 y su resultado
- Error 2 y su resultado

### Diagrama de Secuencia (Mermaid)

\`\`\`mermaid
sequenceDiagram
    participant U as Usuario
    participant F as Frontend
    participant A as API
    participant S as Service
    participant D as Database
    participant IA as IA Service
    
    %% Happy Path
    U->>F: Acción inicial
    activate F
    F->>A: GET /endpoint
    activate A
    A->>S: llamada al servicio
    activate S
    S->>D: consulta datos
    activate D
    D-->>S: datos
    deactivate D
    S-->>A: resultado procesado
    deactivate S
    A-->>F: respuesta JSON
    deactivate A
    F->>F: renderizar UI
    F-->>U: vista actualizada
    deactivate F
    
    %% Error handling
    alt Error de validación
        F->>A: POST con datos inválidos
        A-->>F: 400 Bad Request
        F->>U: mostrar errores
    end
\`\`\`

### Flujo Detallado

#### Paso 1: [Nombre]
**Descripción**: [Qué ocurre]  
**Request**: [Detalles del request si aplica]  
**Response**: [Detalles de la respuesta]  
**Validaciones**:
- Validación 1
- Validación 2

#### Paso 2: [Nombre]
[Continuar con cada paso...]

### Manejo de Errores

| Error | Código | Causa | Manejo |
|-------|--------|-------|--------|
| Validación | 400 | Datos inválidos | Mostrar errores en formulario |
| No encontrado | 404 | Recurso inexistente | Mostrar mensaje y redirigir |
| Servidor | 500 | Error interno | Mostrar error genérico |

### Consideraciones Técnicas
- **Performance**: [Optimizaciones aplicadas]
- **Seguridad**: [Medidas de seguridad]
- **Escalabilidad**: [Consideraciones de escala]
- **Testing**: [Puntos clave para tests]

### APIs Involucradas

| Endpoint | Método | Request Body | Response | Código |
|----------|--------|--------------|----------|--------|
| `/api/projects` | GET | - | `Project[]` | 200 |
| `/api/projects` | POST | `ProjectDTO` | `Project` | 201 |

---
```

---

## ✅ Checklist de Calidad para Cada Diagrama

Verifica que cada diagrama cumpla:

- [ ] Incluye todos los participantes relevantes
- [ ] Las flechas están correctamente direccionadas
- [ ] Los mensajes síncronos y asíncronos están diferenciados
- [ ] Incluye activaciones (barras en lifelines)
- [ ] Incluye manejo de errores (alt, opt fragments)
- [ ] Las validaciones están documentadas
- [ ] Los endpoints API están especificados
- [ ] Incluye tiempos o delays importantes
- [ ] La sintaxis Mermaid es válida
- [ ] El flujo es fácil de seguir visualmente
- [ ] Incluye notas para aclaraciones técnicas
- [ ] Documenta las precondiciones y postcondiciones
- [ ] Especifica códigos de respuesta HTTP
- [ ] Incluye tabla de manejo de errores

---

## 🎯 Técnicas de Prompting Aplicadas

### **1. Structured Output**
Formato consistente y plantilla predefinida para todos los diagramas.

### **2. Chain-of-Thought**
Descomponer flujos complejos en pasos lógicos secuenciales.

### **3. Few-Shot Learning**
Proporcionar ejemplos de diagramas bien documentados.

### **4. Constraint-Based**
Especificar restricciones claras (notación UML, nivel de detalle).

### **5. Role Prompting**
Mantener rol de Arquitecto de Software durante toda la generación.

---

## 💡 Ejemplo de Referencia Completo

```markdown
## P2. Crear Nuevo Proyecto

### Descripción
Flujo completo para la creación de un nuevo proyecto en el sistema, incluyendo validaciones client-side y server-side, persistencia de datos y actualización de la UI.

### Precondiciones
- Usuario autenticado con permisos de creación
- Navegador con JavaScript habilitado
- API disponible y funcional

### Postcondiciones Exitosas
- Proyecto creado en la base de datos con ID único
- Proyecto aparece en la lista de proyectos
- Usuario recibe notificación de éxito
- Modal de creación se cierra

### Postcondiciones de Error
- Si validación falla: se muestran errores en campos correspondientes
- Si API falla: se muestra mensaje de error genérico
- Datos no se persisten si hay errores
- Modal permanece abierto para corrección

### Diagrama de Secuencia (Mermaid)

\`\`\`mermaid
sequenceDiagram
    participant U as Usuario
    participant F as Frontend<br/>(Projects)
    participant V as Validator
    participant A as API<br/>(/projects)
    participant S as ProjectService
    participant D as Database
    
    %% Apertura de modal
    U->>F: Click "Nuevo Proyecto"
    activate F
    F->>F: showCreateModal()
    F-->>U: Mostrar formulario vacío
    deactivate F
    
    %% Llenado de formulario
    U->>F: Completar campos
    U->>F: Click "Guardar"
    activate F
    
    %% Validación client-side
    F->>V: validar datos del formulario
    activate V
    
    alt Datos inválidos
        V-->>F: errores de validación
        deactivate V
        F->>U: mostrar errores en campos
        Note over F,U: Campos requeridos, formatos, rangos
        deactivate F
    else Datos válidos
        V-->>F: validación OK
        deactivate V
        
        %% Deshabilitar botón y mostrar loading
        F->>F: deshabilitar botón "Guardar"
        F->>F: mostrar spinner
        
        %% Request a API
        F->>A: POST /api/projects<br/>{ProjectDTO}
        activate A
        Note right of A: Content-Type: application/json<br/>Body: proyecto completo
        
        %% Validación server-side
        A->>S: crearProyecto(projectData)
        activate S
        S->>S: validar reglas de negocio
        
        alt Validación de negocio falla
            S-->>A: ValidationError
            deactivate S
            A-->>F: 400 Bad Request<br/>{errors: [...]}
            deactivate A
            F->>F: habilitar botón
            F->>F: ocultar spinner
            F->>U: mostrar errores del servidor
            deactivate F
        else Validación exitosa
            %% Persistencia
            S->>D: INSERT INTO projects
            activate D
            
            alt Error de base de datos
                D-->>S: DB Error (duplicado, constraint)
                deactivate D
                S-->>A: DatabaseError
                deactivate S
                A-->>F: 500 Internal Server Error
                deactivate A
                F->>F: habilitar botón
                F->>U: "Error al guardar. Intente nuevamente"
                deactivate F
            else Guardado exitoso
                D-->>S: proyecto con ID generado
                deactivate D
                S->>S: registrar en audit log
                S-->>A: Proyecto creado
                deactivate S
                A-->>F: 201 Created<br/>{project: {...}}
                deactivate A
                
                %% Actualización de UI
                F->>F: cerrar modal
                F->>F: actualizar lista de proyectos
                F->>F: mostrar notificación éxito
                F-->>U: "Proyecto creado exitosamente"
                
                opt Auto-refresh habilitado
                    F->>A: GET /api/projects
                    A-->>F: lista actualizada
                end
                
                deactivate F
            end
        end
    end
\`\`\`

### Flujo Detallado

#### Paso 1: Apertura del Modal
**Descripción**: Usuario inicia el proceso de creación  
**Acción**: Click en botón "Nuevo Proyecto"  
**Respuesta**: Modal con formulario vacío y campos inicializados  

#### Paso 2: Validación Client-Side
**Descripción**: Validación inmediata de datos en el navegador  
**Validaciones**:
- Nombre: requerido, 3-100 caracteres
- Cliente: requerido, 3-100 caracteres
- Fechas: formato válido, fecha fin > fecha inicio
- Presupuesto: número positivo, formato moneda
- Estado y Fase: valores del enum permitido

**Beneficio**: Feedback inmediato sin esperar respuesta del servidor

#### Paso 3: Request HTTP a API
**Descripción**: Envío de datos al backend  
**Request**:
```json
POST /api/projects
Content-Type: application/json

{
  "nombre": "Migración Cloud",
  "cliente": "Empresa XYZ",
  "descripcion": "Migración de infraestructura on-premise a Azure",
  "estado": "planificacion",
  "fase": "planificacion",
  "fechaInicio": "2026-02-01",
  "fechaFin": "2026-06-30",
  "presupuesto": 150000,
  "prioridad": "alta"
}
```

#### Paso 4: Validación Server-Side
**Descripción**: Validación de reglas de negocio en el backend  
**Validaciones**:
- Unicidad del nombre del proyecto
- Cliente existe en el sistema
- Presupuesto dentro de límites permitidos
- Usuario tiene permisos para crear proyectos

#### Paso 5: Persistencia en Base de Datos
**Descripción**: Almacenamiento del proyecto  
**Query** (conceptual):
```sql
INSERT INTO projects (id, nombre, cliente, ..., created_at)
VALUES (UUID(), 'Migración Cloud', 'Empresa XYZ', ..., NOW())
```

#### Paso 6: Response Exitosa
**Response**:
```json
HTTP/1.1 201 Created
Content-Type: application/json

{
  "success": true,
  "project": {
    "id": "proj_abc123",
    "nombre": "Migración Cloud",
    "cliente": "Empresa XYZ",
    ...campos completos,
    "createdAt": "2026-01-31T10:30:00Z"
  }
}
```

#### Paso 7: Actualización de UI
**Descripción**: Actualización de la interfaz  
**Acciones**:
- Cerrar modal con animación
- Agregar proyecto a la tabla (al inicio)
- Mostrar toast de éxito (verde, 4 segundos)
- Limpiar formulario para próximo uso

### Manejo de Errores

| Error | Código | Causa | Manejo en UI |
|-------|--------|-------|--------------|
| Validación client | - | Datos inválidos | Resaltar campos en rojo con mensaje específico |
| Validación server | 400 | Reglas de negocio | Mostrar errores del servidor en campos |
| Proyecto duplicado | 409 | Nombre ya existe | "Ya existe un proyecto con ese nombre" |
| Sin permisos | 403 | Usuario sin autorización | "No tiene permisos para crear proyectos" |
| Error de red | - | Timeout o no conectividad | "Error de conexión. Verifique su red" |
| Error servidor | 500 | Fallo interno | "Error inesperado. Contacte soporte" |

### Consideraciones Técnicas

**Performance**:
- Validación client-side evita requests innecesarios
- Debounce en campos de texto (opcional)
- Deshabilitación de botón previene doble-submit
- Timeout de request: 30 segundos

**Seguridad**:
- Sanitización de inputs (XSS prevention)
- Validación doble (client + server)
- CSRF token en request
- Autenticación JWT en header
- Rate limiting en API (max 10 requests/min)

**UX**:
- Loading states (spinner en botón)
- Deshabilitación de formulario durante submit
- Mensajes de error específicos y accionables
- Confirmación visual de éxito
- Auto-focus en primer campo con error

**Testing**:
- Unit tests para validaciones client-side
- Integration tests para flujo completo
- Tests de casos de error (400, 500, network)
- Tests de UI (formulario, modal, notificaciones)

### APIs Involucradas

| Endpoint | Método | Request Body | Response Success | Response Error |
|----------|--------|--------------|------------------|----------------|
| `/api/projects` | POST | `ProjectDTO` | `201: Project` | `400: ValidationErrors`<br/>`403: Forbidden`<br/>`409: Conflict`<br/>`500: ServerError` |
| `/api/projects` | GET | - | `200: Project[]` | `500: ServerError` |

### Datos de Ejemplo

**Input válido**:
```json
{
  "nombre": "Desarrollo App Mobile",
  "cliente": "StartupTech",
  "descripcion": "App iOS y Android para delivery",
  "estado": "en_progreso",
  "fase": "ejecucion",
  "fechaInicio": "2026-01-15",
  "fechaFin": "2026-04-30",
  "presupuesto": 80000,
  "prioridad": "alta"
}
```

**Input inválido (validación)**:
```json
{
  "nombre": "AB", // muy corto (min 3)
  "cliente": "",  // requerido
  "fechaInicio": "2026-05-01",
  "fechaFin": "2026-03-01", // anterior a inicio
  "presupuesto": -1000 // negativo
}
```

---
```

---

## 📝 Instrucciones de Generación

1. **Analiza cada flujo** identificado en la sección "Flujos Críticos"
2. **Genera el diagrama Mermaid** siguiendo la plantilla y notación UML
3. **Documenta paso a paso** el flujo con detalles técnicos
4. **Incluye manejo de errores** con tabla y fragments en el diagrama
5. **Especifica APIs** con contratos claros (request/response)
6. **Valida la sintaxis** Mermaid antes de finalizar
7. **Revisa completitud** contra el checklist de calidad

---

## 🚀 Output Esperado

Genera un documento único con:
1. **Índice** de todos los diagramas organizados por grupo
2. **15 diagramas completos** siguiendo el formato especificado
3. **Matriz de dependencias** entre flujos
4. **Glosario** de términos técnicos
5. **Índice de APIs** consolidado

---

## 📚 Recursos Adicionales

### Sintaxis Mermaid para Diagramas de Secuencia

```mermaid
sequenceDiagram
    participant Alias as Nombre Largo
    
    %% Mensajes
    Actor->>Receiver: Mensaje síncrono
    Actor--)Receiver: Mensaje asíncrono
    Receiver-->>Actor: Respuesta
    
    %% Activación
    activate Receiver
    deactivate Receiver
    
    %% Fragmentos
    alt Condición
        Actor->>Receiver: Caso 1
    else Otra condición
        Actor->>Receiver: Caso 2
    end
    
    opt Opcional
        Actor->>Receiver: Solo si...
    end
    
    loop Repetir N veces
        Actor->>Receiver: Acción repetida
    end
    
    par Paralelo
        Actor->>Receiver1: Tarea 1
    and
        Actor->>Receiver2: Tarea 2
    end
    
    %% Notas
    Note right of Actor: Nota importante
    Note over Actor,Receiver: Nota entre dos
```

---

**¡Genera ahora todos los diagramas de secuencia siguiendo estas directrices!**
