import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('@modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'mannedspaceship',
    loadChildren: () => import('@modules/mannedspaceship/mannedspaceship.module').then((m) => m.MannedspaceshipModule),
  },
  {
    path: 'unmannedspaceship',
    loadChildren: () => import('@modules/unmannedspaceship/unmannedspaceship.module').then((m) => m.UnmannedspaceshipModule),
  },
  {
    path: 'shuttlevehicle',
    loadChildren: () => import('@modules/shuttlevehicle/shuttlevehicle.module').then((m) => m.ShuttlevehicleModule),
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
