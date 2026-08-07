import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar,
  IonItem,
  IonLabel,
  IonButton
} from '@ionic/angular/standalone';
import { TareaService } from '../services/tarea.services';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule,
    IonItem,
    IonLabel,
    IonButton
  ]
})
export class InicioPage {

  constructor(
    public tareaService: TareaService
  ) {}

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

}
