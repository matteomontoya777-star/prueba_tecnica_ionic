# Prueba Técnica Mobile (Accenture) - Lista de Tareas

## Descripción

Aplicación móvil híbrida desarrollada con Ionic, Angular y Capacitor para la gestión de tareas personales.

La aplicación permite administrar tareas mediante categorías, prioridades y estados de completado, incorporando además Firebase Remote Config para habilitar y deshabilitar funcionalidades mediante Feature Flags sin necesidad de publicar una nueva versión.

El proyecto fue desarrollado como solución para la prueba técnica de Desarrollador Mobile (Accenture).

---

## Funcionalidades Implementadas

### Gestión de Tareas

- Crear tareas.
- Editar tareas.
- Eliminar tareas.
- Marcar tareas como completadas.
- Asignar prioridad:
  - Alta
  - Media
  - Baja.
- Filtrar tareas por estado.
- Filtrar tareas por categoría.

### Gestión de Categorías

- Crear categorías.
- Editar categorías.
- Eliminar categorías.
- Asociación de categorías a tareas.

### Pantalla de Inicio

- Visualización de las tres tareas pendientes con mayor prioridad.
- Estado vacío cuando no existen tareas pendientes.

### Persistencia Local

La aplicación almacena localmente:

- Tareas.
- Categorías.
- Estado de completado.

La información permanece disponible después de cerrar la aplicación o recargar el navegador.

---

## Firebase Remote Config

Se integró Firebase Remote Config para implementar Feature Flags que permiten modificar el comportamiento de la aplicación sin necesidad de desplegar una nueva versión.

### Feature Flags implementadas

#### mostrar_prioridad

Permite mostrar u ocultar la prioridad de las tareas dentro de la aplicación.

#### habilitar_categorias

Permite habilitar o deshabilitar completamente la funcionalidad de categorías.

---

## Tecnologías Utilizadas

- Ionic 8
- Angular 20
- TypeScript
- Capacitor 8
- Firebase
- Firebase Remote Config
- Android Studio

---

## Estructura General

```text
prueba_tecnica_ionic/
│
├── docs/
│   ├── capturas/
│   ├── video/
│   │   └── app-lista-tareas.mp4
│   ├── respuestas_tecnicas.pdf
│   └── Soporte_iOS_Prueba_Tecnica.pdf
│
├── android/
├── src/
└── ...
```

---

## Ejecución Local

### Instalar dependencias

```bash
npm install
```

### Ejecutar en navegador

```bash
ionic serve
```

La aplicación quedará disponible en:

```text
http://localhost:8100
```

---

## Compilación Android

### Generar aplicación web

```bash
ionic build
```

### Sincronizar Capacitor

```bash
npx cap sync android
```

### Abrir Android Studio

```bash
npx cap open android
```

### Generar APK

Desde Android Studio:

```text
Build
→ Generate App Bundles or APKs
→ Generate APKs
```

---

## APK

El APK generado durante la prueba se encuentra en la siguiente ruta:

```text
android/app/build/outputs/apk/debug/app-debug.apk
```

La aplicación fue instalada y validada correctamente en un dispositivo Android físico.

---

## Soporte iOS

El proyecto fue preparado para soportar la plataforma iOS mediante Capacitor.

La documentación completa sobre la estrategia utilizada para validar el soporte de iOS se encuentra en:

```text
docs/Soporte_iOS_Prueba_Tecnica.pdf
```

Debido a los requisitos de Apple para la generación de archivos IPA firmados, no fue posible generar un binario final de distribución dentro del entorno de desarrollo utilizado para esta prueba.

---

## Evidencias

### Capturas de pantalla

```text
docs/capturas/
```

### Video demostrativo

```text
docs/video/app-lista-tareas.mp4
```

---

## Respuestas Técnicas

Las respuestas a las preguntas solicitadas en la prueba se encuentran en:

```text
docs/respuestas_tecnicas.pdf
```

---

## Documentación Complementaria

### Soporte iOS

```text
docs/Soporte_iOS_Prueba_Tecnica.pdf
```

### Respuestas Técnicas

```text
docs/respuestas_tecnicas.pdf
```

---

## Validaciones Realizadas

### Navegador

- Creación de tareas.
- Edición de tareas.
- Eliminación de tareas.
- Gestión de categorías.
- Persistencia local.
- Feature Flags mediante Firebase.

### Android

- Generación de APK.
- Instalación en dispositivo físico.
- Validación funcional completa.

---

## Control de Versiones

El proyecto fue desarrollado utilizando Git, manteniendo commits incrementales para cada funcionalidad implementada durante el desarrollo de la prueba técnica.

---