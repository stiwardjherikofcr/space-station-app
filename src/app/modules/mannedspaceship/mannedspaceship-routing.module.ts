import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from '@layout/default-layout/default-layout.component';
import { MannedspaceshipsListComponent } from './pages/mannedspaceships-list/mannedspaceships-list.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'mannedspaceships-list',
        pathMatch: 'full'
      },
      {
        path: 'mannedspaceships-list',
        component: MannedspaceshipsListComponent,
        data: { title: 'Manned Spaceships List' }
      },
      {
        path: '**',
        redirectTo: 'mannedspaceships-list',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MannedspaceshipRoutingModule { }
