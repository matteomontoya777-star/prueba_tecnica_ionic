import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'inicio',
        loadComponent: () =>
          import('../inicio/inicio.page').then((m) => m.InicioPage),
      },
      {
        path: 'tareas',
        loadComponent: () =>
          import('../tareas/tareas.page').then((m) => m.TareasPage),
      },
      {
        path: 'categorias',
        loadComponent: () =>
          import('../categorias/categorias.page').then(
            (m) => m.CategoriasPage
          ),
      },
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/inicio',
    pathMatch: 'full',
  },
];