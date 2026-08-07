import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonButton,
  IonCheckbox,
  IonIcon,
  IonModal
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import {
  createOutline,
  trashOutline
} from 'ionicons/icons';

import { CategoriaService } from '../services/categoria.service';
import {
  TareaService,
  Tarea
} from '../services/tarea.services';

import { TareaModalComponent } from '../componentes/tarea-modal/tarea-modal.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonItem,
    IonLabel,
    IonButton,
    IonCheckbox,
    IonIcon,
    IonModal,
    TareaModalComponent
  ]
})
export class InicioPage {

  modalAbierto = false;

  indiceEditar = -1;

  cambiosPendientes = false;

  constructor(
    public categoriaService: CategoriaService,
    public tareaService: TareaService
  ) {

    addIcons({
      createOutline,
      trashOutline
    });

  }

  get tareasInicio() {

    const prioridad = {
      Alta: 3,
      Media: 2,
      Baja: 1
    };

    return this.tareaService.tareas

      .filter(tarea => !tarea.completada)

      .sort((a, b) =>
        prioridad[b.prioridad] - prioridad[a.prioridad]
      )

      .slice(0, 3);

  }

  abrirModal() {

    this.modalAbierto = true;

  }

  cerrarModal(event: CustomEvent) {

    this.modalAbierto = false;

    const tarea = event.detail.data;

    if (!tarea) {
      return;
    }

    if (this.indiceEditar >= 0) {

      this.tareaService.tareas[this.indiceEditar].nombre = tarea.nombre;
      this.tareaService.tareas[this.indiceEditar].categoria = tarea.categoria;
      this.tareaService.tareas[this.indiceEditar].prioridad = tarea.prioridad;

      this.indiceEditar = -1;

    } else {

      this.tareaService.crear({

        id: Date.now().toString(),

        nombre: tarea.nombre,

        categoria: tarea.categoria,

        prioridad: tarea.prioridad,

        completada: false,

        seleccionada: false

      });

    }

  }

  editarTarea(indice: number) {

    const tarea = this.tareasInicio[indice];

    this.indiceEditar =
      this.tareaService.tareas.findIndex(t => t.id === tarea.id);

    this.modalAbierto = true;

  }

  eliminarTarea(indice: number) {

    const tarea = this.tareasInicio[indice];

    const indiceReal =
      this.tareaService.tareas.findIndex(t => t.id === tarea.id);

    this.tareaService.eliminar(indiceReal);

  }

  completarTarea(indice: number) {

    const tarea = this.tareasInicio[indice];

    const indiceReal =
      this.tareaService.tareas.findIndex(t => t.id === tarea.id);

    this.tareaService.tareas[indiceReal].seleccionada =
      !this.tareaService.tareas[indiceReal].seleccionada;

    this.cambiosPendientes = true;

  }

  guardarCambios() {

    this.tareaService.tareas.forEach(tarea => {

      if (tarea.seleccionada !== undefined) {

        tarea.completada = tarea.seleccionada;

      }

    });

    this.cambiosPendientes = false;

  }

}