
# Alerta Búsqueda

Proyecto desarrollado para la materia **Programación IV** de la Tecnicatura Universitaria en Programación de la UTN-FRT.

Alerta Búsqueda es una plataforma web orientada a la consulta, registro y difusión de información relacionada con la búsqueda de personas desaparecidas.

El proyecto comenzó con HTML, CSS y JavaScript, y posteriormente fue migrado a React + Vite. Durante los trabajos prácticos se incorporaron componentes reutilizables, rutas, Hooks de React y consultas a una API pública.

Actualmente es un prototipo educativo. No utiliza una base de datos propia ni realiza verificaciones oficiales de los casos.

## Integrantes

- Pereyra Valentina Nazarena
- Rosconi Ignacio

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- JSX
- React
- Vite
- React Bootstrap
- Bootstrap
- Bootstrap Icons
- React Router DOM
- Axios
- API Georef de Argentina
- LocalStorage
- SessionStorage
- Git y GitHub
- Vercel

## Funcionalidades principales

### Inicio

La página de Inicio contiene:

- Navbar con navegación responsive.
- Hero principal con imagen de fondo.
- Buscador de personas.
- Consulta geográfica de provincias y localidades.
- Tarjetas informativas.
- Footer con información del proyecto.

El buscador permite ingresar un nombre, apellido o zona y redirige a la página de búsqueda mediante un parámetro en la URL.

### Consulta geográfica

Se incorporó el componente `ConsultaGeografica.jsx`, que consume la API pública Georef de Argentina utilizando Axios.

Permite:

- Obtener el listado de provincias.
- Seleccionar una provincia.
- Consultar las localidades correspondientes.
- Mostrar los datos en selectores de React Bootstrap.
- Actualizar las localidades cuando cambia la provincia.
- Mostrar mensajes de carga y error.

Las solicitudes se realizan mediante el método HTTP GET.

Se utiliza `AbortController` para cancelar solicitudes pendientes cuando corresponde.

### Búsqueda de personas

La página de búsqueda permite:

- Mostrar tarjetas de personas.
- Buscar por nombre y apellido.
- Buscar por provincia y zona.
- Ignorar diferencias entre mayúsculas, minúsculas y tildes.
- Mostrar un mensaje cuando no existen resultados.
- Abrir un modal con los detalles de una persona.

Los casos de ejemplo se encuentran en `src/data/casos.js`.

Las solicitudes creadas desde el formulario de registro también se incorporan al listado mediante LocalStorage.

### Registrar búsqueda

El formulario permite ingresar:

- Nombre y apellido.
- Edad.
- Provincia.
- Fecha de desaparición.
- Último lugar donde fue vista la persona.
- Descripción física.
- Información adicional.
- Fotografía.
- Datos de contacto del denunciante.

Se implementaron validaciones para evitar números en los campos de nombres y letras en los campos numéricos.

Las fotografías seleccionadas se procesan mediante FileReader y se convierten a Base64.

Las solicitudes se guardan en LocalStorage con el estado:

`Pendiente de verificación`

Por el momento, este estado forma parte de la simulación del proyecto y no representa una verificación institucional real.

### Recibir alertas

El formulario permite ingresar datos de contacto y seleccionar preferencias de alertas:

- Alertas prioritarias.
- Búsquedas de niños y adolescentes.
- Personas mayores.
- Desapariciones en la zona seleccionada.
- Todas las búsquedas.

También se implementaron:

- Selección mediante checkboxes.
- Resumen dinámico de las opciones elegidas.
- Opción para seleccionar todas las alertas.
- Modal de confirmación.
- Acordeón informativo.

En esta etapa se simula el registro de preferencias. Todavía no se envían notificaciones reales.

### Crear cuenta

Se incorporó una página para crear cuentas de prueba.

El formulario solicita:

- Nombre.
- Apellido.
- Correo electrónico.

Se realizan validaciones sobre los datos ingresados y se comprueba que el correo no esté registrado previamente.

Las cuentas se guardan localmente utilizando la clave `usuariosAlertaBusqueda`.

Este registro es una simulación educativa. No utiliza un servidor de autenticación.

### Iniciar sesión

Se incorporó un formulario de inicio de sesión de prueba.

El usuario ingresa el correo electrónico con el que creó su cuenta.

La aplicación busca ese correo entre los usuarios almacenados en LocalStorage y, si existe, registra una sesión en SessionStorage.

La sesión permite acceder a las páginas protegidas.

También se agregó la opción para cerrar sesión desde el Navbar.

Actualmente no se implementaron contraseñas ni autenticación mediante un backend.

## Componentes reutilizables

El proyecto se organiza mediante componentes de React para evitar repetir código y facilitar su mantenimiento.

Entre los principales componentes se encuentran:

- `Navbar`
- `Footer`
- `Hero`
- `Benefits`
- `ConsultaGeografica`
- `PersonaCard`
- `DetallePersonaModal`
- `Rutas`

### Uso de props

Se utilizan props para pasar información entre componentes.

Por ejemplo, `PersonaCard` recibe los datos de una persona y una función para abrir sus detalles:

```jsx
<PersonaCard
  persona={persona}
  onSeleccionar={abrirDetalle}
/>
```

El modal recibe la persona seleccionada, su estado de visualización y una función para cerrarlo:

```jsx
<DetallePersonaModal
  persona={personaSeleccionada}
  show={mostrarModal}
  onHide={() => setMostrarModal(false)}
/>
```

## Hooks de React

### useState

Se utiliza `useState` para administrar información que cambia durante la interacción del usuario.

Algunos ejemplos son:

- Texto ingresado en el buscador.
- Datos de los formularios.
- Persona seleccionada.
- Apertura y cierre de modales.
- Selección de tipos de alertas.
- Provincia seleccionada.
- Listados de provincias y localidades.
- Estados de carga y mensajes de error.
- Estado de la sesión en el Navbar.

Cuando cambia un estado, React actualiza la parte correspondiente de la interfaz.

### useEffect

Se utiliza `useEffect` para ejecutar acciones relacionadas con los cambios o el montaje de los componentes.

En `Busqueda.jsx` se utiliza para escuchar el evento `storage` y actualizar las solicitudes guardadas cuando corresponde.

En `ConsultaGeografica.jsx` se implementan dos efectos:

1. El primero consulta las provincias cuando se monta el componente.
2. El segundo consulta las localidades cuando cambia la provincia seleccionada.

Los efectos de la consulta geográfica utilizan `AbortController` para cancelar solicitudes pendientes cuando corresponde.

También se utiliza un efecto en el Navbar para actualizar la información visual de la sesión.

## Consumo de API con Axios

Para el TP8 se incorporó Axios, que permite realizar solicitudes HTTP a servicios externos.

Se utiliza la API pública Georef de Argentina:

https://apis.datos.gob.ar/georef/api

El componente `ConsultaGeografica.jsx` realiza dos tipos de consultas:

**Provincias:**

`GET /provincias`

Obtiene el listado de provincias de Argentina.

**Localidades:**

`GET /localidades`

Obtiene las localidades correspondientes a la provincia seleccionada.

Las solicitudes utilizan parámetros para indicar qué información necesitamos obtener.

Las respuestas se procesan y se almacenan mediante `useState` para mostrarlas dinámicamente.

También se contemplan estados de carga y posibles errores en las solicitudes.

## Variables de entorno

La dirección base de la API se configura mediante una variable de entorno de Vite.

Variable utilizada:

`VITE_GEOREF_API_URL`

En el componente se obtiene mediante:

```jsx
const URL_API = import.meta.env.VITE_GEOREF_API_URL;
```

Para ejecutar el proyecto localmente, se necesita un archivo `.env` en la carpeta principal con la variable correspondiente:

```env
VITE_GEOREF_API_URL=https://apis.datos.gob.ar/georef/api
```

El archivo `.env` está incluido en `.gitignore` para evitar que se suba al repositorio.

En Vercel se configura la misma variable para los entornos Production y Preview.

## Almacenamiento local

El proyecto utiliza almacenamiento del navegador para simular algunas funcionalidades sin implementar una base de datos.

### LocalStorage

Se utilizan las siguientes claves:

- `solicitudesBusqueda`: almacena las solicitudes creadas desde el formulario.
- `usuariosAlertaBusqueda`: almacena las cuentas de prueba registradas.

Los datos permanecen en el navegador hasta que se eliminan.

### SessionStorage

Se utiliza la clave:

- `sesionAlertaBusqueda`: almacena la sesión de prueba iniciada por el usuario.

Esta información se utiliza para controlar el acceso a determinadas rutas y mostrar las opciones correspondientes en el Navbar.

Este almacenamiento no reemplaza una autenticación real ni una base de datos.

## Rutas

La navegación se organiza mediante React Router DOM.

El componente `Rutas.jsx` utiliza `Routes` y `Route`, mientras que `main.jsx` envuelve la aplicación con `BrowserRouter`.

Rutas implementadas:

| Ruta | Página |
|---|---|
| `/` | Inicio |
| `/busqueda` | Búsqueda de personas |
| `/registro` | Registrar búsqueda |
| `/alertas` | Recibir alertas |
| `/crear-cuenta` | Crear cuenta |
| `/iniciar-sesion` | Iniciar sesión |
| `*` | Error 404 |

Las rutas `/registro` y `/alertas` están protegidas.

Si un usuario intenta acceder sin una sesión de prueba iniciada, es redirigido a `/iniciar-sesion`.

## Estructura del proyecto

```text
src/
├── assets/
├── components/
│   ├── routes/
│   │   └── Rutas.jsx
│   ├── Benefits.jsx
│   ├── ConsultaGeografica.jsx
│   ├── DetallePersonaModal.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   └── PersonaCard.jsx
├── data/
│   └── casos.js
├── pages/
│   ├── Busqueda.jsx
│   ├── CrearCuenta.jsx
│   ├── Error404.jsx
│   ├── Home.jsx
│   ├── IniciarSesion.jsx
│   ├── RecibirAlertas.jsx
│   └── Registro.jsx
├── App.css
├── App.jsx
├── index.css
└── main.jsx
```

## Diseño responsive

Se utiliza React Bootstrap junto con clases de Bootstrap y estilos CSS propios.

La interfaz se adapta a computadoras, tablets y celulares.

Se realizaron ajustes en:

- Navbar y menú Offcanvas.
- Hero y buscador principal.
- Consulta geográfica.
- Tarjetas informativas.
- Tarjetas de personas.
- Formularios y modales.
- Distribución de columnas y espaciados.

También se unificaron estilos visuales utilizando bordes azul oscuro, esquinas redondeadas y sombras suaves.

## SEO y accesibilidad

En `index.html` se implementaron mejoras básicas de SEO:

- Idioma español mediante `lang="es"`.
- Título descriptivo.
- Meta description.
- Meta keywords.
- Meta author.
- Favicon personalizado.

Además, se utilizan elementos semánticos de HTML, títulos organizados y textos alternativos en las imágenes.

## Instalación y ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/IgnacioRosconi/AlertaBusqueda-frontend.git
```

### 2. Instalar las dependencias

```bash
npm install
```

### 3. Configurar la API

Crear el archivo `.env` en la carpeta principal y agregar la variable `VITE_GEOREF_API_URL` con la dirección de Georef indicada anteriormente.

### 4. Ejecutar el proyecto

```bash
npm run dev
```

Abrir en el navegador la dirección local indicada por Vite.

### 5. Verificar el código

```bash
npm run lint
```

### 6. Generar la versión de producción

```bash
npm run build
```

## Deploy

El proyecto está desplegado mediante Vercel:

https://alertabusqueda.vercel.app/

Actualmente Vercel utiliza la rama `dev` para el despliegue de Production.

La configuración de la API se realiza mediante las variables de entorno del proyecto en Vercel.

## Flujo de trabajo con Git y GitHub

Se utilizan ramas para organizar el desarrollo y separar las funcionalidades.

- `main`: rama destinada a la versión final.
- `dev`: rama de integración y utilizada actualmente para el despliegue en Vercel.
- `feature/*`: incorporación de funcionalidades.
- `refactor/*`: mejoras de estructura y organización.
- `fix/*`: corrección de errores.
- `docs/*`: cambios en documentación y SEO.

Los integrantes trabajan en ramas independientes y realizan Pull Requests hacia `dev`.

Los cambios son revisados por el otro integrante antes de integrarlos.

## Evolución del proyecto

### TP5 - React y componentes

Se migró el proyecto a React + Vite, incorporando componentes reutilizables, JSX, props y React Bootstrap.

### TP6 - React Router

Se organizaron las páginas mediante rutas con React Router DOM y se incorporó una página de error 404.

### TP7 - Hooks de React

Se utilizaron `useState` y `useEffect` para administrar estados, actualizar información y manejar efectos de los componentes.

También se incorporaron formularios de cuentas de prueba, sesiones locales y rutas protegidas.

### TP8 - Axios y API pública

Se instaló Axios y se incorporó la consulta geográfica a la API Georef de Argentina.

Se implementaron solicitudes GET, estados de carga, manejo de errores, actualización dinámica de localidades, `AbortController` y variables de entorno.

## Estado actual

Alerta Búsqueda es un prototipo académico desarrollado con React.

Actualmente permite consultar casos de ejemplo, crear solicitudes locales, simular el registro e inicio de sesión, seleccionar preferencias de alertas y consultar provincias y localidades mediante una API pública.

Para utilizar el sistema con casos reales sería necesario incorporar un backend, una base de datos, autenticación segura y un proceso de verificación de información con las autoridades correspondientes.
