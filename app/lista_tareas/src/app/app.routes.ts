import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs/inicio',
    pathMatch: 'full',
  },
  {
    path: 'tabs',
    loadComponent: () =>
      import('./tabs/tabs.page').then((m) => m.TabsPage),
    children: [
      {
        path: 'inicio',
        loadComponent: () =>
          import('./inicio/inicio.page').then((m) => m.InicioPage),
      },
      {
        path: 'tareas',
        loadComponent: () =>
          import('./tareas/tareas.page').then((m) => m.TareasPage),
      },
      {
        path: 'categorias',
        loadComponent: () =>
          import('./categorias/categorias.page').then((m) => m.CategoriasPage),
      },
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full',
      },
    ],
  },
];