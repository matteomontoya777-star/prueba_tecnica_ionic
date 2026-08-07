import { Component, HostListener, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalController } from '@ionic/angular/standalone';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonTitle,
  IonToolbar,
  IonSelect,
  IonSelectOption
} from '@ionic/angular/standalone';
import { Categoria } from '../../models/categoria.model';

@Component({
  selector: 'app-tarea-modal',
  templateUrl: './tarea-modal.component.html',
  styleUrls: ['./tarea-modal.component.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonInput,
    IonItem,
    IonTitle,
    IonToolbar,
    IonSelect,
    IonSelectOption,
    FormsModule
  ]
})
export class TareaModalComponent {

  constructor(
    private modalController: ModalController
  ) {}

  @Input() categorias: Categoria[] = [];

  @Input() titulo = 'Nueva tarea';

  @Input() nombre = '';

  @Input() categoria = '';

  @Input() prioridad: 'Alta' | 'Media' | 'Baja' = 'Media';

  cancelar() {
    this.modalController.dismiss();
  }

  guardar() {

    if (!this.nombre.trim()) {
      return;
    }

    this.modalController.dismiss({

      nombre: this.nombre.trim(),

      categoria: this.categoria,

      prioridad: this.prioridad

    });

  }

  @HostListener('document:keydown.escape')
  onEscape() {
    this.cancelar();
  }

  @HostListener('document:keydown.enter')
  onEnter() {

    if (!this.nombre.trim()) {
      return;
    }

    this.guardar();

  }

}