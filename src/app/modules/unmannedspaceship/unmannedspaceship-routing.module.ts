import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from '@layout/default-layout/default-layout.component';
import { UnmannedspaceshipsListComponent } from './pages/unmannedspaceships-list/unmannedspaceships-list.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'unmannedspaceships-list',
        pathMatch: 'full'
      },
      {
        path: 'unmannedspaceships-list',
        component: UnmannedspaceshipsListComponent,
        data: { title: 'Unmanned Spaceships List' }
      },
      {
        path: '**',
        redirectTo: 'unmannedspaceships-list',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UnmannedspaceshipRoutingModule { }
