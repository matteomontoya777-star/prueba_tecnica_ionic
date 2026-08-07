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

interface Tarea {

  id: string;

  nombre: string;

  categoria: string;

  prioridad: 'Alta' | 'Media' | 'Baja';

  completada: boolean;

}

@Component({
  selector: 'app-tareas',
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
      IonIcon
    ]
})
export class TareasPage implements OnInit {

  constructor() {
    addIcons({
      createOutline,
      trashOutline
    });
  }

  ngOnInit() {
  }

  tareas: Tarea[] = []

}
