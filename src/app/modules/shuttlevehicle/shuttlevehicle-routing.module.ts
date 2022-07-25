import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from '@layout/default-layout/default-layout.component';
import { ShuttlevehiclesListComponent } from './pages/shuttlevehicles-list/shuttlevehicles-list.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'shuttlevehicles-list',
        pathMatch: 'full'
      },
      {
        path: 'shuttlevehicles-list',
        component: ShuttlevehiclesListComponent,
        data: { title: 'Shuttle Vehicles List' }
      },
      {
        path: '**',
        redirectTo: 'shuttlevehicles-list',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShuttlevehicleRoutingModule { }
