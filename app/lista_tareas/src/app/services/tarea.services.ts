import { Injectable } from '@angular/core';

export interface Tarea {

  id: string;

  nombre: string;

  categoria: string;

  prioridad: 'Alta' | 'Media' | 'Baja';

  completada: boolean;

  seleccionada?: boolean;

}

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  tareas: Tarea[] = [];

  crear(tarea: Tarea) {

    this.tareas.push(tarea);

  }

  actualizar(indice: number, tarea: Tarea) {

    this.tareas[indice] = tarea;

  }

  eliminar(indice: number) {

    this.tareas.splice(indice, 1);

  }

  pasarASinCategoria(nombreCategoria: string) {

    this.tareas.forEach(tarea => {

      if (tarea.categoria === nombreCategoria) {

        tarea.categoria = '';

      }

    });

  }

}