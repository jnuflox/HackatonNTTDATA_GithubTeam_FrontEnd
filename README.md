# IA Projects - Sistema de Gestión de Proyectos con IA

Sistema completo de gestión de proyectos con análisis predictivo usando Azure OpenAI, implementado con Node.js, PostgreSQL y Docker.

## 🚀 Características

- **Backend Node.js** con Express y Sequelize ORM
- **Base de datos PostgreSQL** con migraciones y seeds
- **Azure OpenAI** para análisis predictivo de proyectos (con modo mock para desarrollo)
- **Frontend** con páginas HTML/JS/jQuery
- **Docker** para orquestación de servicios
- **API RESTful** completamente documentada

## 📋 Requisitos Previos

- Docker Desktop instalado
- Docker Compose v2.0+
- Node.js 18+ (solo para desarrollo local)
- Puerto 3000, 5432, 8080, 5050 disponibles

## 🏗️ Arquitectura

```
┌─────────────┐      ┌─────────────┐      ┌──────────────┐
│   Frontend  │─────▶│  API Node.js │─────▶│  PostgreSQL  │
│   (Nginx)   │      │   (Express)  │      │              │
│  Port: 8080 │      │  Port: 3000  │      │  Port: 5432  │
└─────────────┘      └──────┬───────┘      └──────────────┘
                            │
                            ▼
                     ┌──────────────┐
                     │ Azure OpenAI │
                     │  (Mock Mode) │
                     └──────────────┘
```

## 🚀 Inicio Rápido

### 1. Clonar y Configurar

```bash
cd c:\Users\josec\Downloads\eapps-project-config\eapps-project-config

# Copiar archivo de variables de entorno
cd api-ia-projects
copy .env.example .env
```

### 2. Configurar Variables de Entorno

Editar `api-ia-projects/.env`:

```env
# Modo desarrollo con mock de Azure OpenAI
AZURE_OPENAI_MOCK_MODE=true

# Para producción con Azure OpenAI real, cambiar a:
# AZURE_OPENAI_MOCK_MODE=false
# AZURE_OPENAI_ENDPOINT=https://your-resource.openai.azure.com/
# AZURE_OPENAI_API_KEY=your-api-key
# AZURE_OPENAI_DEPLOYMENT_NAME=gpt-4
```

### 3. Levantar los Servicios con Docker

```bash
# Desde la raíz del proyecto
docker-compose up -d
```

Esto levantará:
- ✅ PostgreSQL en `localhost:5432`
- ✅ API Node.js en `localhost:3000`
- ✅ Frontend en `localhost:8080`
- ✅ pgAdmin en `localhost:5050`

### 4. Verificar Estado de Servicios

```bash
# Ver logs
docker-compose logs -f

# Verificar contenedores
docker-compose ps

# Health check de la API
curl http://localhost:3000/health
```

### 5. Acceder a las Aplicaciones

- **Frontend**: http://localhost:8080
- **API Documentation**: http://localhost:3000/api
- **Health Check**: http://localhost:3000/health
- **pgAdmin**: http://localhost:5050 (admin@iaprojects.com / admin)

## 📊 Base de Datos

### Inicializar Base de Datos

Las migraciones y seeds se ejecutan automáticamente al levantar el contenedor. Para ejecutarlas manualmente:

```bash
# Ejecutar migraciones
docker-compose exec api npm run db:migrate

# Ejecutar seeds (datos de prueba)
docker-compose exec api npm run db:seed
```

### Estructura de Tablas

- **projects**: Proyectos principales
- **tasks**: Tareas asociadas a proyectos
- **project_history**: Historial de cambios
- **documents**: Documentos del proyecto

## 🔌 API Endpoints

### Proyectos

```
GET    /api/projects                    # Listar todos los proyectos
GET    /api/projects/:id                # Obtener proyecto por ID
POST   /api/projects                    # Crear proyecto
PUT    /api/projects/:id                # Actualizar proyecto
DELETE /api/projects/:id                # Eliminar proyecto
GET    /api/projects/:id/ai-analysis    # Análisis IA del proyecto
GET    /api/projects/:id/history        # Historial del proyecto
POST   /api/projects/:id/history        # Agregar entrada al historial
GET    /api/projects/dashboard/stats    # Estadísticas del dashboard
```

### Tareas

```
GET    /api/tasks/project/:projectId           # Listar tareas de un proyecto
POST   /api/tasks/project/:projectId           # Crear tarea
GET    /api/tasks/:taskCode                    # Obtener tarea
PUT    /api/tasks/:taskCode                    # Actualizar tarea
DELETE /api/tasks/:taskCode                    # Eliminar tarea
GET    /api/tasks/project/:projectId/statistics # Estadísticas de tareas
GET    /api/tasks/:taskCode/risk-analysis      # Análisis de riesgo de tarea
```

### Ejemplo de Uso

```bash
# Listar proyectos
curl http://localhost:3000/api/projects

# Obtener análisis IA de un proyecto
curl http://localhost:3000/api/projects/{project-id}/ai-analysis

# Obtener estadísticas del dashboard
curl http://localhost:3000/api/projects/dashboard/stats
```

## 🤖 Azure OpenAI - Prompts Avanzados

El servicio de IA implementa técnicas avanzadas de prompting:

- **Chain-of-Thought reasoning**: Análisis paso a paso
- **Few-Shot learning**: Ejemplos contextuales
- **Role-based prompting**: Definición de experto en PM
- **Structured output**: Salida en JSON estructurado

### Modo Mock vs Producción

**Modo Mock** (Desarrollo):
```env
AZURE_OPENAI_MOCK_MODE=true
```
Genera análisis simulados sin llamar a Azure OpenAI.

**Modo Producción**:
```env
AZURE_OPENAI_MOCK_MODE=false
AZURE_OPENAI_ENDPOINT=https://your-resource.openai.azure.com/
AZURE_OPENAI_API_KEY=your-api-key
AZURE_OPENAI_DEPLOYMENT_NAME=gpt-4
```
Usa Azure OpenAI real para análisis.

## 🛠️ Desarrollo Local (sin Docker)

```bash
# Instalar dependencias
cd api-ia-projects
npm install

# Configurar base de datos PostgreSQL local
# Actualizar .env con credenciales locales

# Ejecutar migraciones
npm run db:migrate

# Ejecutar seeds
npm run db:seed

# Iniciar servidor en modo desarrollo
npm run dev
```

## 📦 Comandos Docker Útiles

```bash
# Detener servicios
docker-compose down

# Detener y eliminar volúmenes (⚠️ borra la BD)
docker-compose down -v

# Reconstruir imágenes
docker-compose build --no-cache

# Ver logs de un servicio específico
docker-compose logs -f api

# Ejecutar comando en contenedor
docker-compose exec api sh

# Reiniciar un servicio
docker-compose restart api
```

## 🧪 Testing

```bash
# Ejecutar tests
docker-compose exec api npm test

# Con coverage
docker-compose exec api npm run test:coverage
```

## 🔒 Seguridad

- Helmet.js para headers de seguridad
- CORS configurado
- Variables de entorno para secretos
- Usuario no-root en contenedor Docker
- Rate limiting configurado
- Validación de entrada con Joi

## 📈 Monitoreo

### Health Checks

```bash
# API Health
curl http://localhost:3000/health

# Frontend Health
curl http://localhost:8080/health

# Database Health
docker-compose exec postgres pg_isready -U postgres
```

### Logs

```bash
# Logs de todos los servicios
docker-compose logs

# Logs en tiempo real
docker-compose logs -f

# Logs de la API solamente
docker-compose logs -f api
```

## 🐛 Troubleshooting

### Puerto ya en uso

```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Cambiar puerto en docker-compose.yml
ports:
  - "3001:3000"
```

### Base de datos no conecta

```bash
# Verificar que PostgreSQL esté running
docker-compose ps postgres

# Ver logs de PostgreSQL
docker-compose logs postgres

# Reiniciar servicio
docker-compose restart postgres
```

### API no responde

```bash
# Ver logs
docker-compose logs api

# Verificar health
curl http://localhost:3000/health

# Reiniciar
docker-compose restart api
```

## 📝 Estructura del Proyecto

```
eapps-project-config/
├── api-ia-projects/              # Backend Node.js
│   ├── src/
│   │   ├── config/               # Configuración
│   │   ├── controllers/          # Controladores
│   │   ├── database/             # Migraciones y seeds
│   │   ├── models/               # Modelos Sequelize
│   │   ├── routes/               # Rutas Express
│   │   ├── services/             # Lógica de negocio
│   │   └── server.js             # Punto de entrada
│   ├── Dockerfile
│   ├── package.json
│   └── .env
├── app-ia-projects/              # Frontend
│   └── feature/
│       ├── dashboard/            # Dashboard ejecutivo
│       └── projects/             # Gestión de proyectos
├── docker-compose.yml            # Orquestación Docker
├── nginx.conf                    # Configuración Nginx
└── README.md
```

## 🤝 Contribuir

1. Fork el proyecto
2. Crear feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📄 Licencia

MIT License

## 👥 Soporte

Para soporte, crear un issue en el repositorio o contactar al equipo de desarrollo.

---

**Desarrollado con ❤️ usando Node.js, PostgreSQL, Azure OpenAI y Docker**
