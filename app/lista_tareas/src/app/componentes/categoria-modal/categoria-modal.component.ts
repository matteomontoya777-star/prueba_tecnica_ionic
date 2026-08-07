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
  IonToolbar
} from '@ionic/angular/standalone';


@Component({
  selector: 'app-categoria-modal',
  templateUrl: './categoria-modal.component.html',
  styleUrls: ['./categoria-modal.component.scss'],
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
    FormsModule
  ]
})
export class CategoriaModalComponent {

  constructor(
    private modalController: ModalController
  ) {}

  @Input()nombre = '';

  @Input() indice = -1;
  @Input() titulo = 'Nueva categoría';

  cancelar() {
    this.modalController.dismiss();
  }

  guardar() {
    if (!this.nombre.trim()) {
      return;
    }
    this.modalController.dismiss(this.nombre.trim());
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