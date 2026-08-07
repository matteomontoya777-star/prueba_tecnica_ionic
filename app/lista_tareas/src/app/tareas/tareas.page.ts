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

interface Tarea {

  id: string;

  nombre: string;

  categoria: string;

  prioridad: 'Alta' | 'Media' | 'Baja';

  completada: boolean;

}

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

  constructor(
    public categoriaService: CategoriaService
  ) {
    addIcons({
      createOutline,
      trashOutline
    });
  }

  ngOnInit() {
  }

  tareas: Tarea[] = []

  modalAbierto = false;

  abrirModal() {

    this.modalAbierto = true;

  }

  cerrarModal(event: CustomEvent) {

    this.modalAbierto = false;

    const tarea = event.detail.data;

    if (!tarea) {
      return;
    }

    this.tareas.push({
      id: Date.now().toString(),
      nombre: tarea.nombre,
      categoria: tarea.categoria,
      prioridad: tarea.prioridad,
      completada: false
    });

  }

}
