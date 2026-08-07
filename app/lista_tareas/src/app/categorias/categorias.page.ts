import { Component} from '@angular/core';
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
  IonModal
} from '@ionic/angular/standalone';

import { Categoria } from '../models/categoria.model';
import { createOutline, trashOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { CategoriaModalComponent } from '../componentes/categoria-modal/categoria-modal.component';


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
    IonIcon,
    IonModal,
    CategoriaModalComponent
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

  indiceEditar = -1;

  modalAbierto = false;

  abrirModal() {
    this.modalAbierto = true;
  }

  cerrarModal(event: CustomEvent) {
    this.modalAbierto = false;
    const nombre = event.detail.data;
    if (!nombre) {
      return;
    }

    if (this.indiceEditar >= 0) {
      this.categorias[this.indiceEditar].nombre = nombre;
      this.indiceEditar = -1;

    } else {
      this.categorias.push({
        id: Date.now().toString(),
        nombre
      });
    }
  }

  get tieneCategorias(): boolean {
    return this.categorias.length > 0;
  }

  editarCategoria(indice: number) {

    this.indiceEditar = indice;

    this.modalAbierto = true;

  }

  eliminarCategoria(indice: number) {

    this.categorias.splice(indice, 1);

  }

}