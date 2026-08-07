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
import { CategoriaService } from '../services/categoria.service';
import { TareaService } from '../services/tarea.services';


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

  constructor(
    public categoriaService: CategoriaService,
    public tareaService: TareaService
  ) {

    addIcons({
      createOutline,
      trashOutline
    });

  }

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
      this.categoriaService.categorias[this.indiceEditar].nombre = nombre;
      this.categoriaService.guardar();
      this.indiceEditar = -1;

    } else {
      this.categoriaService.categorias.push({
        id: Date.now().toString(),
        nombre
      });
      this.categoriaService.guardar();
    }
  }

  get tieneCategorias(): boolean {
    return this.categoriaService.categorias.length > 0;
  }

  editarCategoria(indice: number) {

    this.indiceEditar = indice;

    this.modalAbierto = true;

  }

  eliminarCategoria(indice: number) {

    const nombreCategoria =
      this.categoriaService.categorias[indice].nombre;

    this.tareaService.pasarASinCategoria(nombreCategoria);

    this.categoriaService.categorias.splice(indice, 1);
    this.categoriaService.guardar();

  }

}