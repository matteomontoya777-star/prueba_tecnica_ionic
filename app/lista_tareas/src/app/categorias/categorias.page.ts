import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonList,
  IonIcon,
} from '@ionic/angular/standalone';

import { Categoria } from '../models/categoria.model';
import { addIcons } from 'ionicons';
import { createOutline, trashOutline } from 'ionicons/icons';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    IonItem,
    IonLabel,
    IonList,
    IonIcon
  ]
})
export class CategoriasPage {

  constructor() {
    addIcons({
      createOutline,
      trashOutline
    });
  }

  categorias: Categoria[] = [];

  get tieneCategorias(): boolean {
    return this.categorias.length > 0;
  }

}