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

  constructor() {

    const tareasGuardadas =
      localStorage.getItem('tareas');

    if (tareasGuardadas) {

      this.tareas = JSON.parse(tareasGuardadas);

    }

  }

  private guardar() {

    localStorage.setItem(
      'tareas',
      JSON.stringify(this.tareas)
    );

  }

  crear(tarea: Tarea) {

    this.tareas.push(tarea);

    this.guardar();

  }

  actualizar(indice: number, tarea: Tarea) {

    this.tareas[indice] = tarea;

    this.guardar();

  }

  eliminar(indice: number) {

    this.tareas.splice(indice, 1);

    this.guardar();

  }

  pasarASinCategoria(nombreCategoria: string) {

    this.tareas.forEach(tarea => {

      if (tarea.categoria === nombreCategoria) {

        tarea.categoria = '';

      }

    });

    this.guardar();

  }

  guardarCambios() {

    this.guardar();

  }

}