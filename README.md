Centro Cristiano Transformación
Proyecto final de la materia Diseño de Aplicaciones Web.
Esta aplicación web fue desarrollada con el objetivo de presentar información de la iglesia, mostrar sus ministerios y grupos, además de permitir la recepción de mensajes, solicitudes de oración y registros a grupos por parte de los usuarios.

🚀 Tecnologías utilizadas
Frontend
Angular
HTML5
CSS3
Bootstrap
Backend
Node.js
Express
Base de datos
MySQL

📌 Funcionalidades principales
Página de inicio con sección tipo parallax
Página Nosotros con información general
Ministerios: listado dinámico obtenido desde la API
Grupos: listado + formulario integrado de registro a grupos
Contacto: formulario para enviar mensajes
Oración: formulario para enviar peticiones de oración
Navbar y Footer como componentes reutilizables
Diseño responsivo con la paleta de colores definida para el proyecto

📁 Estructura general del proyecto
CCT final/
│── backend/
│   └── server.js
│── database/
│   └── schema.sql
│── frontend/
│   ├── src/app/
│   └── ...
│── README.md

▶️ Cómo ejecutar el proyecto
1. Ejecutar el backend
cd backend
npm start

2. Crear la base de datos
Ejecuta el contenido de database/schema.sql en MySQL

3. Ejecutar el frontend
cd frontend
npm start


La aplicación iniciará en:
👉 http://localhost:4200

🧩 Componentes principales
InicioComponent
NosotrosComponent
MinisteriosComponent
GruposComponent
RegistroGrupoComponent (integrado en Grupos)
ContactoComponent
OracionComponent
NavbarComponent
FooterComponent

