# Proyecto de Virtualización de Imágenes

Este proyecto es una aplicación web de React que permite a los usuarios subir, visualizar y gestionar imágenes. La aplicación utiliza TypeScript y Vite para su desarrollo, y cuenta con una arquitectura modular y escalable.

## Características

* Subida de imágenes
* Visualización de imágenes
* Gestion de imágenes (eliminación, etc.)
* Autenticación de usuarios
* Uso de tecnologías modernas como React, TypeScript y Vite

## Objetivos

* Proporcionar una plataforma fácil de usar para la gestión de imágenes
* Ofrecer una experiencia de usuario intuitiva y atractiva
* Utilizar tecnologías modernas para asegurar la escalabilidad y el rendimiento de la  aplicación

## Tecnologías utilizadas

* React
* TypeScript
* Vite
* ESLint
* React Router
* React Hook Form
* Axios

---

## Instalación y ejecución

Para instalar y ejecutar el proyecto, sigue los siguientes pasos:

* Clona el repositorio
* Instala las dependencias con ``npm install`` o ``yarn install``
* Ejecuta el proyecto con ``npm run dev`` o ``yarn dev``
* Poner la ip correcta en axios.ts

 ```bash
const api = axios.create({
    baseURL: "http://<DIRECCION_IP>/api"
})
```
Seguido de esto correr el siguiente comando para crear una versión optimizada y lista para producción
 ```bash
 npm run build 
   ```
Esto generara una carpeta llamada dist que es lo que debemos pasar a la VM 

---
