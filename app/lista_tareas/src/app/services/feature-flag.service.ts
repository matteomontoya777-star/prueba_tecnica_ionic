import { Injectable } from '@angular/core';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root'
})
export class FeatureFlagService {

  mostrarPrioridad = true;

  habilitarCategorias = true;

  constructor(
    private firebaseService: FirebaseService
  ) {}

  async cargar() {

    await this.firebaseService.inicializar();

    this.mostrarPrioridad =
      this.firebaseService.obtenerFeatureFlag('mostrar_prioridad');

    this.habilitarCategorias =
      this.firebaseService.obtenerFeatureFlag('habilitar_categorias');

  }

}