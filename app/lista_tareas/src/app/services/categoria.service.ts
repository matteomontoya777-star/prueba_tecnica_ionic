import { Injectable } from '@angular/core';
import { Categoria } from '../models/categoria.model';
import { TareaService } from './tarea.services';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  categorias: Categoria[] = [];

  constructor(
    private tareaService: TareaService
  ) {

    const categoriasGuardadas =
      localStorage.getItem('categorias');

    if (categoriasGuardadas) {

      this.categorias =
        JSON.parse(categoriasGuardadas);

    }

  }

  guardar() {

    localStorage.setItem(
      'categorias',
      JSON.stringify(this.categorias)
    );

  }

}