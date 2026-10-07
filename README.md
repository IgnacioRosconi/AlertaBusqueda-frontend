# Alerta Búsqueda

Proyecto desarrollado para Programación IV.

Alerta Búsqueda es una plataforma web orientada a la consulta, registro y difusión de información relacionada con la búsqueda de personas desaparecidas.

El proyecto fue migrado progresivamente a una nueva versión desarrollada con React + Vite y React Bootstrap.

## Integrantes

- Pereyra Valentina Nazarena
- Rosconi Ignacio

## Tecnologías utilizadas

- React
- Vite
- JavaScript
- JSX
- React Bootstrap
- Bootstrap
- Bootstrap Icons
- React Router DOM
- HTML
- CSS
- LocalStorage
- Git
- GitHub
- Vercel

## Funcionalidades principales

### Inicio

La página principal contiene:

- Navbar de navegación.
- Hero principal.
- Buscador de personas.
- Sección informativa con beneficios de la plataforma.
- Footer con información del proyecto.

El buscador del inicio permite ingresar un nombre, apellido o zona y redirige a la sección de búsqueda utilizando parámetros en la URL.

### Búsqueda de personas

La sección de búsqueda permite:

- Visualizar casos registrados.
- Buscar por nombre.
- Buscar por apellido.
- Buscar por provincia.
- Buscar por zona.
- Ignorar diferencias entre mayúsculas, minúsculas y tildes.
- Mostrar un mensaje cuando no existen resultados.
- Visualizar los datos de una persona mediante un modal.

Además, las nuevas solicitudes guardadas desde el formulario de registro se incorporan al listado utilizando LocalStorage.

### Registrar búsqueda

El formulario de registro permite cargar información de una persona desaparecida.

Incluye:

- Nombre.
- Apellido.
- Edad.
- Provincia.
- Fecha de desaparición.
- Último lugar donde fue vista.
- Descripción física.
- Información adicional.
- Fotografía.
- Datos de contacto del denunciante.

Se implementaron validaciones para evitar números en los campos de nombres y letras en campos numéricos.

Las imágenes seleccionadas se procesan mediante FileReader y se almacenan en formato Base64.

Las solicitudes se guardan en LocalStorage con el estado:

`Pendiente de verificación`

### Recibir alertas

La sección de alertas permite completar datos de contacto y seleccionar diferentes tipos de avisos:

- Alertas prioritarias.
- Búsquedas de niños y adolescentes.
- Personas mayores.
- Desapariciones en la zona seleccionada.
- Todas las búsquedas.

También incluye:

- Resumen dinámico de las opciones seleccionadas.
- Opción para seleccionar todas las alertas.
- Modal de confirmación.
- Acordeón informativo.

## Pages

Las vistas principales se organizan como páginas independientes dentro de `src/pages`.

## Componentes reutilizables

El proyecto fue dividido en componentes para mantener una estructura más organizada y reutilizable.

Entre los principales componentes se encuentran:

- `Navbar`
- `Footer`
- `Hero`
- `Benefits`
- `PersonaCard`
- `DetallePersonaModal`

## Uso de props

Se utilizan props para comunicar información entre componentes.

Por ejemplo, el componente `PersonaCard` recibe los datos de una persona y una función para seleccionar el caso:

```jsx
<PersonaCard
  persona={persona}
  onSeleccionar={abrirDetalle}
/>
```

El componente `DetallePersonaModal` recibe la persona seleccionada, el estado del modal y la función utilizada para cerrarlo:

```jsx
<DetallePersonaModal
  persona={personaSeleccionada}
  show={mostrarModal}
  onHide={() => setMostrarModal(false)}
/>
```
## Renderizado dinámico

Se utiliza `map()` para generar listas de elementos a partir de los datos, por ejemplo en las tarjetas de búsqueda.

## Estructura del proyecto

```text
src/
├── assets/
├── components/
│   ├── Benefits.jsx
│   ├── DetallePersonaModal.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   ├── PersonaCard.jsx
│   └── routes/
│       └── Rutas.jsx
├── data/
│   └── casos.js
├── pages/
│   ├── Busqueda.jsx
│   ├── Error404.jsx
│   ├── Home.jsx
│   ├── RecibirAlertas.jsx
│   └── Registro.jsx
├── App.css
├── App.jsx
├── index.css
└── main.jsx
```

## Rutas

Las rutas se organizan en el componente `Rutas.jsx` utilizando `Routes` y `Route`.

- `/` - Inicio
- `/busqueda` - Búsqueda de personas
- `/registro` - Registrar búsqueda
- `/alertas` - Recibir alertas
- `*` - Página de error 404 para rutas inexistentes

## Responsive

La interfaz fue adaptada para diferentes tamaños de pantalla utilizando React Bootstrap, Bootstrap y estilos personalizados.

Se realizaron ajustes específicos para mejorar la visualización del Hero, Navbar, formularios, tarjetas y demás componentes en dispositivos móviles.

## SEO

Se incorporaron mejoras básicas de SEO en el archivo `index.html`:

- Idioma principal configurado en español mediante `lang="es"`.
- Título descriptivo para la página.
- Meta description con una descripción del propósito de Alerta Búsqueda.
- Meta keywords relacionadas con la búsqueda de personas desaparecidas.
- Meta author con los integrantes del proyecto.
- Favicon de la aplicación.
- Textos alternativos (`alt`) en las imágenes para mejorar la accesibilidad y la descripción del contenido.

## LocalStorage

LocalStorage se utiliza para mantener las solicitudes de búsqueda creadas desde el formulario.

Clave utilizada:

```text
solicitudesBusqueda
```

Esto permite visualizar las solicitudes nuevas en la sección de búsqueda sin necesidad de utilizar un backend.

## Instalación

Instalar las dependencias:

```bash
npm install
```

Ejecutar el proyecto en modo desarrollo:

```bash
npm run dev
```

Generar la versión de producción:

```bash
npm run build
```

## Deploy

El proyecto se encuentra desplegado mediante Vercel.

Producción:

`https://alertabusqueda.vercel.app/`

## Flujo de trabajo con Git

El proyecto utiliza diferentes ramas para organizar el desarrollo.

- `main`: versión final y de producción.
- `dev`: rama de integración.
- `feature/*`: nuevas funcionalidades.
- `refactor/*`: migraciones y mejoras de estructura o diseño.
- `fix/*`: correcciones.

Los cambios desarrollados en ramas independientes se integran mediante Pull Requests y revisión de otro integrante del equipo.

## Hooks

El proyecto utiliza Hooks de React para manejar estados y ejecutar acciones relacionadas con el ciclo de vida de los componentes.

### useState

Se utiliza `useState` para manejar información que cambia durante la interacción del usuario.

Algunos ejemplos son:

- Texto ingresado en los buscadores.
- Persona seleccionada para visualizar su detalle.
- Estado de los modales.
- Datos ingresados en formularios.
- Selección de alertas.
- Solicitudes recuperadas desde LocalStorage.

### useEffect

En la página de búsqueda se utiliza `useEffect` para escuchar cambios en LocalStorage mediante el evento `storage`.

Cuando cambia la información guardada en `solicitudesBusqueda`, el efecto actualiza el estado de las solicitudes mediante `setSolicitudesGuardadas`, permitiendo que React vuelva a renderizar la lista.

El arreglo de dependencias está vacío (`[]`) porque el listener se configura una sola vez cuando se monta el componente.

El efecto también retorna una función de limpieza que elimina el listener cuando el componente deja de utilizarse.

## Evolución del proyecto

El proyecto evolucionó progresivamente desde su versión inicial hacia una aplicación desarrollada con React + Vite.

Se incorporaron componentes reutilizables, props, estados con `useState`, efectos con `useEffect`, eventos de React, React Router DOM, páginas independientes, rutas organizadas, formularios, validaciones, LocalStorage, diseño responsive, SEO básico y deploy en Vercel.