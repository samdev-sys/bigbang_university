# 🎓 Big Bang University - Escuela de Negocios Digital

## 📋 Descripción General

**Big Bang University (EDIBS - Escuela de Negocios Digital)** es una plataforma web interactiva y moderna que ofrece programas educativos profesionales enfocados en emprendimiento, tecnología y finanzas. Es la primera escuela de negocios digital que centra su propuesta en la **libertad geográfica** y la **práctica real**.

La plataforma permite a los usuarios:
- Explorar programas educativos especializados
- Conocer mentores y expertos de la industria
- Completar un quiz interactivo (PathFinder) para encontrar su programa ideal
- Solicitar admisión en programas específicos
- Gestionar sus solicitudes de admisión en un dashboard personal

---

## ✨ Características Principales

### 1. **Catálogo de Programas**
- 5 programas especializados disponibles
- Información detallada de cada programa (duración, nivel, descripción)
- Módulos de estudio estructurados
- Expectativas salariales y perfil objetivo
- Certificaciones profesionales reconocidas

### 2. **Sistema de Mentores**
- Perfiles detallados de mentores expertos
- Información de especialidades y áreas de experiencia
- Enlaces a perfiles de LinkedIn
- Descripción biográfica extendida

### 3. **PathFinder Quiz**
- Test interactivo para encontrar el programa más adecuado
- Análisis de compatibilidad basado en perfil y objetivos
- Puntuación de coincidencia con recomendaciones

### 4. **Sistema de Admisiones**
- Formulario de solicitud completo
- Captura de información del solicitante
- Validación de datos
- Estados de solicitud (pendiente, revisión, aceptada)

### 5. **Dashboard de Aspirantes**
- Visualización de todas las solicitudes realizadas
- Seguimiento del estado de aplicaciones
- Historial de solicitudes
- Opción de limpiar historial

### 6. **Interfaz Visual Moderna**
- Diseño oscuro sofisticado
- Animaciones fluidas
- Sistema de órbitas interactivo (HeroOrbitSystem)
- Gradientes personalizados por programa
- Tema visual coherente con identidad EDIBS

---

## 🎯 Programas Disponibles

### 1. **Amazon FBA** 🟠
- **Duración:** 12 meses
- **Nivel:** Avanzado
- **Descripción:** Construye un negocio global vendiendo en Amazon
- **Expectativa Salarial:** 5K€ - 50K€ mensuales
- **Contenido:** 6 módulos sobre comercio electrónico, logística internacional y escalado de marca
- **Certificación:** Certificación Profesional en Amazon FBA Logistics & Brand Creation

### 2. **Inteligencia Artificial** 🔵
- **Duración:** 12 meses
- **Nivel:** Avanzado
- **Descripción:** Domina la IA y automatiza procesos para escalar
- **Expectativa Salarial:** 65.000€ - 120.000€ o 3K€+/mes por agencia
- **Contenido:** 6 módulos sobre IA, automatización, agentes inteligentes y APIs
- **Certificación:** Especialista Máster en IA Aplicada y Automatización Industrial

### 3. **Trading & Inversión** 🟢
- **Duración:** 12 meses
- **Nivel:** Avanzado
- **Descripción:** Aprende a invertir en mercados como profesional
- **Expectativa Salarial:** Cuentas de 100K€ - 300K€ con 80% de ganancias
- **Contenido:** 6 módulos sobre análisis técnico, riesgo, psicología de trading y DeFi
- **Certificación:** Chartered Financial Trader & Private Cryptoportfolio Analyst

### 4. **Ecommerce & Marca** 🟣
- **Duración:** 12 meses
- **Nivel:** Avanzado
- **Descripción:** Crea tu marca y escala tu tienda online
- **Expectativa Salarial:** Negocios con valoración de mercado escalables (>1M€)
- **Contenido:** 6 módulos sobre branding DTC, Shopify, marketing viral y exit strategy
- **Certificación:** Máster Profesional en Dirección y Crecimiento de Marcas Digitales

### 5. **Ciberseguridad** 🔴
- **Duración:** 12 meses
- **Nivel:** Avanzado
- **Descripción:** Conviértete en experto en seguridad digital
- **Expectativa Salarial:** Según especialización (salarios competitivos en sector tech)
- **Contenido:** Módulos sobre redes, criptografía, pentesting y seguridad defensiva
- **Certificación:** Especialista en Ciberseguridad Ofensiva y Defensiva

---

## 🏗️ Estructura del Proyecto

```
edibs---escuela-de-negocios-digital/
├── src/
│   ├── components/              # Componentes React reutilizables
│   │   ├── AdmissionModal.tsx    # Formulario modal de solicitud de admisión
│   │   ├── ApplicantDashboard.tsx # Dashboard de seguimiento de solicitudes
│   │   ├── HeroOrbitSystem.tsx   # Sistema visual de órbitas interactivas
│   │   ├── MainHeader.tsx        # Encabezado navegable principal
│   │   ├── MainFooter.tsx        # Pie de página
│   │   ├── MentorDetailsModal.tsx # Modal detallado de mentor
│   │   ├── PathFinderQuiz.tsx    # Quiz interactivo para encontrar programa
│   │   └── ProgramDetailsModal.tsx # Modal con detalles de programa
│   ├── App.tsx                   # Componente raíz y orquestador principal
│   ├── data.ts                   # Datos de programas y mentores
│   ├── types.ts                  # Interfaces TypeScript
│   ├── main.tsx                  # Punto de entrada React
│   ├── index.css                 # Estilos globales
│   └── vite-env.d.ts            # Definiciones de tipo Vite
├── assets/                       # Recursos estáticos (imágenes)
├── dist/                         # Compilación de producción
├── index.html                    # Archivo HTML principal
├── package.json                  # Dependencias del proyecto
├── tsconfig.json                 # Configuración TypeScript
├── vite.config.ts               # Configuración Vite
├── metadata.json                # Metadatos del proyecto
└── README.md                     # Este archivo

```

---

## 💻 Tecnologías Utilizadas

### Frontend
- **React 19.0.1** - Librería UI moderna
- **TypeScript 5.8.2** - Tipado estático para JavaScript
- **Tailwind CSS 4.1.14** - Framework CSS utilitario
- **Vite 6.2.3** - Herramienta de compilación rápida
- **Lucide React 0.546.0** - Librería de iconos SVG
- **Motion 12.23.24** - Animaciones fluidas

### Backend & APIs
- **Express 4.21.2** - Framework web Node.js
- **Google GenAI 2.4.0** - Integración con APIs de Google
- **dotenv 17.2.3** - Gestión de variables de entorno

### Desarrollo
- **@vitejs/plugin-react 5.0.4** - Soporte React en Vite
- **@tailwindcss/vite 4.1.14** - Integración Tailwind en Vite
- **@types/node 22.14.0** - Tipos de Node.js
- **@types/express 4.17.21** - Tipos de Express
- **Autoprefixer 10.4.21** - Prefijos CSS automáticos
- **esbuild 0.25.0** - Empaquetador JavaScript
- **tsx 4.21.0** - Ejecutor TypeScript

---

## 📦 Instalación y Configuración

### Requisitos Previos
- Node.js (v18 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clonar o descargar el repositorio**
   ```bash
   cd edibs---escuela-de-negocios-digital
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   - Crear archivo `.env` en la raíz del proyecto
   - Añadir las claves necesarias (API de Google GenAI, si aplica)

4. **Ejecutar en desarrollo**
   ```bash
   npm run dev
   ```
   La aplicación estará disponible en `http://localhost:3000`

5. **Compilar para producción**
   ```bash
   npm run build
   ```

6. **Visualizar build de producción**
   ```bash
   npm run preview
   ```

### Scripts Disponibles

| Comando | Descripción |
|---------|------------|
| `npm run dev` | Inicia servidor de desarrollo en puerto 3000 con host 0.0.0.0 |
| `npm run build` | Compila la aplicación para producción |
| `npm run preview` | Visualiza el build de producción localmente |
| `npm run clean` | Limpia carpeta dist y archivo server.js |
| `npm run lint` | Valida tipado TypeScript sin emitir output |

---

## 🎨 Componentes Principales

### **App.tsx** (Orquestador Central)
Componente raíz que gestiona:
- Estado global de modales y selecciones
- Gestión de solicitudes de admisión con localStorage
- Navegación entre secciones
- Renderizado condicional de componentes

**Estados principales:**
- `selectedProgramId` - Programa actualmente seleccionado
- `selectedMentorId` - Mentor actualmente seleccionado
- `isAdmissionOpen` - Estado del formulario de admisión
- `isDashboardOpen` - Estado del dashboard de solicitudes
- `applications` - Array de solicitudes de admisión

### **MainHeader.tsx** (Encabezado Navegable)
- Logo y branding de EDIBS
- Navegación a diferentes secciones
- Acceso al dashboard
- Botones de llamada a la acción

### **HeroOrbitSystem.tsx** (Sistema Visual Principal)
- Sistema de órbitas interactivas
- Animaciones de rotación
- Presentación visual de programas o características
- Efecto parallax y profundidad

### **PathFinderQuiz.tsx** (Quiz Interactivo)
- Preguntas para determinar el programa ideal
- Cálculo de puntuación de compatibilidad
- Recomendación personalizada
- Interfaz intuitiva

### **AdmissionModal.tsx** (Formulario de Solicitud)
Campos de captura:
- Nombre completo
- Email
- Teléfono
- Programa seleccionado
- Perfil actual
- Motivación personal
- Validación de formulario
- Almacenamiento en localStorage

### **ApplicantDashboard.tsx** (Panel de Seguimiento)
Funcionalidades:
- Listado de todas las solicitudes realizadas
- Visualización del estado de cada solicitud
- Fecha de creación de solicitud
- ID único de aplicación
- Opción de limpiar historial

### **ProgramDetailsModal.tsx** (Detalles del Programa)
Información detallada:
- Descripción completa del programa
- Syllabus completo (módulos)
- Certificación otorgada
- Expectativa salarial
- Perfil objetivo
- Duración y nivel
- Botón para solicitar admisión

### **MentorDetailsModal.tsx** (Perfil del Mentor)
Información del experto:
- Biografía extendida
- Especialidades
- Foto de perfil
- Enlace a LinkedIn
- Descripción de experiencia

### **MainFooter.tsx** (Pie de Página)
- Información de contacto
- Enlaces sociales
- Copyright y legal
- Información de EDIBS

---

## 💾 Gestión de Datos

### **types.ts** (Interfaces TypeScript)

```typescript
// Programa de estudio
interface Program {
  id: string
  name: string
  shortDescription: string
  detailedDescription: string
  duration: string
  level: string
  imageUrl: string
  syllabus: string[]
  certification: string
  salaryExpectation: string
  targetProfile: string
  colorTheme: string
  accentGradient: string
}

// Mentor/Experto
interface Mentor {
  id: string
  name: string
  title: string
  description: string
  longBio: string
  imageUrl: string
  linkedinUrl: string
  specialty: string[]
}

// Resultado del Quiz
interface PathFinderResult {
  programId: string
  matchScore: number
  reason: string
}

// Solicitud de Admisión
interface AdmissionApplication {
  id: string
  fullName: string
  email: string
  phone: string
  programId: string
  currentProfile: string
  motivation: string
  status: 'pending' | 'accepted' | 'reviewing'
  createdAt: string
}
```

### **data.ts** (Fuente de Datos)
- Array de programas con información completa
- Array de mentores con perfiles
- Datos estáticos iniciales para la plataforma

---

## 🔄 Flujo de Funcionalidad

### 1. **Flujo de Exploración**
```
Inicio → Ver Programas → Consultar Detalles → Ver Mentores → Quiz PathFinder
```

### 2. **Flujo de Admisión**
```
Seleccionar Programa → Abrir Formulario → Completar Datos → Guardar en localStorage → Ver en Dashboard
```

### 3. **Flujo del Dashboard**
```
Acceder Dashboard → Ver Solicitudes → Revisar Estados → Opción Limpiar Historial
```

---

## 🎨 Diseño y Estilos

### **Tema de Color**
- **Fondo Oscuro:** `bg-edibs-dark` para tema nocturno profesional
- **Color Primario:** `edibs-primary` para elementos destacados
- **Gradientes Personalizados:** Cada programa tiene su gradiente (`accentGradient`)

### **Animaciones**
- `animate-pulse-subtle` - Animaciones sutiles de pulsación
- Animaciones en órbitas del sistema Hero
- Transiciones suaves en modales
- Efectos de parallax en fondo

### **Tipografía**
- `font-sans` - Fuente sans-serif consistente
- Selección personalizada: `selection:bg-edibs-primary selection:text-black`

---

## 📱 Responsividad

La aplicación está optimizada para:
- **Desktop** - Experiencia completa
- **Tablet** - Adaptación de layouts
- **Móvil** - Interfaz táctil amigable

---

## 🔐 Almacenamiento Local

**localStorage keys:**
- `bbu_applications` - Array JSON de solicitudes de admisión

Los datos se guardan automáticamente en el navegador del usuario y se cargan al iniciar.

---

## 🚀 Despliegue

### Compilación
```bash
npm run build
```
Genera carpeta `dist/` lista para producción.

### Hosting Recomendado
- Vercel
- Netlify
- GitHub Pages
- Servidores Node.js con Express

---

## 🔗 Integración con APIs

### Google GenAI
- Integración preparada en `package.json`
- Variables de entorno configurables en `.env`
- Utilizada para funcionalidades avanzadas de IA

---

## 📝 Notas de Desarrollo

### Convenciones
- Componentes en PascalCase
- Archivos de componentes con extensión `.tsx`
- Tipos en interfaces dedicadas en `types.ts`
- Datos centralizados en `data.ts`

### Estructura de Carpetas
- Componentes reutilizables en `src/components/`
- Lógica de datos en `src/data.ts`
- Tipado centralizado en `src/types.ts`
- Estilos globales en `src/index.css`

### Hot Module Replacement (HMR)
- HMR configurado dinámicamente vía variable `DISABLE_HMR`
- Deshabilitación automática en entornos de edición de agentes

---

## 🐛 Troubleshooting

### Puerto 3000 en Uso
```bash
# El servidor ya usa este puerto
# Solución: Cambiar puerto en vite.config.ts o usar otro puerto
npm run dev -- --port 3001
```

### Problemas con localStorage
- Verificar que localStorage está habilitado en navegador
- Limpiar cookies/datos del navegador si hay conflictos
- Usar modo incógnito para pruebas

### Errores de Tipado
```bash
npm run lint
```
Verifica la salud del tipado TypeScript

---

## 📞 Soporte

**Plataforma:** Big Bang University (EDIBS)  
**Propósito:** Plataforma educativa de admisiones y exploración de programas  
**Modalidad:** Escuela de Negocios Digital con enfoque en libertad y práctica real

---

## 📄 Licencia

Proyecto propietario de Big Bang University / EDIBS - Escuela de Negocios Digital

---

## ✅ Checklist de Características

- [x] Catálogo de 5 programas especializados
- [x] Sistema de perfiles de mentores
- [x] Quiz interactivo (PathFinder)
- [x] Formulario de admisión modal
- [x] Dashboard de solicitudes
- [x] Almacenamiento persistente (localStorage)
- [x] Interfaz oscura moderna
- [x] Animaciones y efectos visuales
- [x] Navegación intuitiva
- [x] Validación de formularios
- [x] Tipado completo con TypeScript
- [x] Responsive design

---

**Última actualización:** Junio 2026  
**Versión:** 0.0.0  
**Estado:** En desarrollo activo
