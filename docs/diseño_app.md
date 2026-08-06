# Diseño de la aplicación

> Este documento es únicamente una guía para el desarrollo. Puede cambiar durante la implementación si encuentro una mejor solución.

---

# Flujo de la aplicación

## Primer ingreso

Si no existen tareas:

- Mostrar un mensaje indicando que aún no hay tareas.
- Mostrar un botón para crear la primera tarea.

Si ya existen tareas:

- Mostrar el contenido normal de la aplicación.

---

# Navegación

La aplicación tendrá tres pantallas principales:

- Inicio
- Tareas
- Categorías

La navegación será mediante una barra inferior.

---

# Pantalla Inicio

## Sin tareas

Mostrar un mensaje indicando que aún no existen tareas.

Botón:

- Nueva tarea.

---

## Con tareas

Mostrar únicamente las tres tareas pendientes con mayor prioridad.

Cada tarea permitirá:

- Marcar como completada.
- Editar.
- Eliminar.

También tendrá un botón para ir a la pantalla de tareas.

---

# Pantalla Tareas

Parte superior:

- Filtro por categoría.
- Filtro por estado.

Los dos filtros funcionan al mismo tiempo.

---

Cada tarea mostrará:

Primera fila

- Checkbox.
- Nombre.
- Prioridad (círculo de color).

Segunda fila

- Categoría.
- Editar.
- Eliminar.

---

Botón inferior

- Nueva tarea.

---

Nueva tarea

Se abrirá mediante un modal.

Campos:

- Nombre.
- Categoría (opcional).
- Prioridad.

El estado siempre inicia como Pendiente.

---

# Pantalla Categorías

Lista sencilla de categorías.

Cada categoría mostrará:

- Nombre.
- Cantidad de tareas.
- Editar.
- Eliminar.

Botón inferior:

- Nueva categoría.

Crear y editar utilizarán el mismo modal.

---

# Reglas de negocio

- Una tarea puede crearse con o sin categoría.
- Si una tarea no tiene categoría, se mostrará como **[Sin categoría]**.
- El filtro de categorías tendrá la opción **Sin categoría**.
- Si una categoría se elimina, las tareas asociadas pasarán automáticamente a **[Sin categoría]**.
- El estado inicial de una tarea siempre será **Pendiente**.
- El Inicio mostrará únicamente las tres tareas pendientes con mayor prioridad.
- Si se elimina una tarea del Inicio, automáticamente aparecerá la siguiente disponible.
- Los filtros de categoría y estado funcionan de manera conjunta.

---

# Prioridades

Se manejarán tres niveles.

🔴 Alta

🟡 Media

🟢 Baja

La prioridad se mostrará únicamente mediante un indicador de color.

---

# Bocetos de las pantallas

## Inicio

### Sin tareas

```text
------------------------------------------------

Inicio

No tienes tareas registradas.

Comienza agregando tu primera tarea.

[ Nueva tarea ]

------------------------------------------------

Inicio | Tareas | Categorías
```

---

### Con tareas

```text
------------------------------------------------

Inicio

Tareas pendientes

☐ Comprar leche                     🔴
Personal                      ✏️   🗑️

☐ Estudiar Ionic                  🟡
Trabajo                       ✏️   🗑️

☐ Enviar prueba                  🟢
[Sin categoría]               ✏️   🗑️

[ Ver todas las tareas ]

------------------------------------------------

Inicio | Tareas | Categorías
```

---

# Tareas

### Sin tareas

```text
------------------------------------------------

Tareas

Categoría        Estado

[Todas ▼]    [Pendientes ▼]

-----------------------------------------------

No tienes tareas registradas.

[ Nueva tarea ]

------------------------------------------------

Inicio | Tareas | Categorías
```

---

### Con tareas

```text
------------------------------------------------

Tareas

Categoría        Estado

[Todas ▼]    [Pendientes ▼]

-----------------------------------------------

☐ Comprar leche                     🔴
Personal                      ✏️   🗑️

-----------------------------------------------

☐ Estudiar Ionic                  🟡
Trabajo                       ✏️   🗑️

-----------------------------------------------

☑ Enviar prueba                  🟢
[Sin categoría]               ✏️   🗑️

-----------------------------------------------

[ + Nueva tarea ]

------------------------------------------------

Inicio | Tareas | Categorías
```

---

# Categorías

### Sin categorías

```text
------------------------------------------------

Categorías

Aún no has creado categorías.

[ Crear categoría ]

------------------------------------------------

Inicio | Tareas | Categorías
```

---

### Con categorías

```text
------------------------------------------------

Categorías

Trabajo

3 tareas                   ✏️   🗑️

-----------------------------------------------

Personal

5 tareas                   ✏️   🗑️

-----------------------------------------------

Universidad

1 tarea                    ✏️   🗑️

-----------------------------------------------

[ + Nueva categoría ]

------------------------------------------------

Inicio | Tareas | Categorías
```

---

# Modales

## Nueva tarea

```text
--------------------------------

Nueva tarea

Nombre

[_____________________]

Categoría

[Sin categoría ▼]

Prioridad

○ Alta

○ Media

○ Baja

Cancelar        Guardar

--------------------------------
```

---

## Nueva categoría

```text
----------------------------

Nueva categoría

Nombre

[________________]

Cancelar   Guardar

----------------------------
```

---

## Confirmar eliminación

```text
--------------------------------

¿Eliminar?

Esta acción no se puede deshacer.

Cancelar      Eliminar

--------------------------------
```