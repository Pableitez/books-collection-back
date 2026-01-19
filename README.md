# API REST y CORS con obtención de usuarios y colecciones de libros

## 📌 Objetivo del Ejercicio

El objetivo de este ejercicio es que construyas una aplicación **Full Stack** sencilla para gestionar usuarios y sus colecciones de libros.

## 📂 Funcionalidades

Vas a desarrollar:

- Un **frontend** sencillo en **HTML, CSS y JavaScript** que permita mostrar los usuarios y sus colecciones de libros.
- Un **backend** en **Node.js con Express** que maneje la información de los usuarios y libros.
- **Conexión con una API REST** ya creada.
- Implementar **CORS** correctamente para permitir la comunicación entre frontend y backend.

## 🎯 Requisitos

1. **Frontend:**

   - Página principal con dos botones:
   - Botón para **mostrar todos los usuarios**.
   - Botón para **mostrar todos los libros**.

2. **Backend:**
   - Crea endpoints en Express para:
     - Obtener todos los usuarios (`GET /users`).
     - Obtener todos los libros (`GET /books`).

## 🔗 Endpoints Disponibles

**Usuarios:**

- `https://api-books-ac3j.onrender.com/users` → Obtener todos los usuarios.

**Libros:**

- `https://api-books-ac3j.onrender.com/books` → Obtener todos los libros.

## ❗Importante

Si probáis la URL desde el navegador la primera vez, puede que tarde un poco en cargar porque el servidor se está iniciando. Si le dais 20 segundos, podréis verlo funcionando correctamente.

## 🛠️ Pasos para Realizar el Ejercicio

### **1️⃣ Configurar el Backend**

1. Crea un servidor con **Express**.
2. Implementa las rutas mencionadas en los endpoints.
3. Asegúrate de usar **CORS** para permitir que el frontend se conecte al backend.

### **2️⃣ Configurar el Frontend**

Recuerda que el repositorio del frontend que tienes que forkear es este: `https://github.com/TheBridge-FullStackDeveloper/books-collection-front`

1. Crea un proyecto con **HTML, CSS y JavaScript**
2. Usa `fetch` o `axios` para consumir los endpoints de la API REST.
3. Crea una página y agrega dos botones:
   - Botón "Mostrar usuarios".
   - Botón "Mostrar libros".

## 🚀 Bonus

Si terminas antes, intenta agregar:

- Un **loader** mientras se cargan los datos.
- Manejo de **errores y mensajes de confirmación**.

---
