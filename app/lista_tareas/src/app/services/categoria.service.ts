import { Injectable } from '@angular/core';
import { Categoria } from '../models/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  categorias: Categoria[] = [];

}