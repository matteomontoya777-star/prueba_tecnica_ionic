import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonModal,
  IonCheckbox,
  IonIcon
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  createOutline,
  trashOutline
} from 'ionicons/icons';
import { TareaModalComponent } from '../componentes/tarea-modal/tarea-modal.component';
import { CategoriaService } from '../services/categoria.service';
import {
  TareaService,
  Tarea
} from '../services/tarea.services';

@Component({
  selector: 'app-tarea',
  templateUrl: './tareas.page.html',
  styleUrls: ['./tareas.page.scss'],
  standalone: true,
  imports: [
      IonHeader,
      IonToolbar,
      IonTitle,
      IonContent,
      IonItem,
      IonLabel,
      IonSelect,
      IonSelectOption,
      IonButton,
      IonCheckbox,
      IonIcon,
      TareaModalComponent,
      IonModal,
      CommonModule,
      FormsModule
    ]
})
export class TareasPage implements OnInit {

  categoriaFiltro = '';

  estadoFiltro = 'Pendientes';

  modalAbierto = false;

  indiceEditar = -1;

  cambiosPendientes = false;

  get tareasFiltradas() {

    return this.tareaService.tareas.filter(tarea => {

      const categoriaOk =
        this.categoriaFiltro === '' ||
        tarea.categoria === this.categoriaFiltro;

      const estadoOk =
        this.estadoFiltro === 'Todas'
          ? true
          : this.estadoFiltro === 'Pendientes'
            ? !tarea.completada
            : tarea.completada;

      return categoriaOk && estadoOk;

    });

  }

  constructor(

      public categoriaService: CategoriaService,

      public tareaService: TareaService

  ) {

      addIcons({
        createOutline,
        trashOutline
      });

    }

  ngOnInit() {
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

    this.indiceEditar = indice;

    this.modalAbierto = true;

  }

  eliminarTarea(indice: number) {

    this.tareaService.eliminar(indice);

  }

  completarTarea(indice: number) {

    this.tareaService.tareas[indice].seleccionada =
      !this.tareaService.tareas[indice].seleccionada;

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
