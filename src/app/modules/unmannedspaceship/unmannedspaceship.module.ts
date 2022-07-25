import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnmannedspaceshipRoutingModule } from './unmannedspaceship-routing.module';
import { UnmannedspaceshipsListComponent } from './pages/unmannedspaceships-list/unmannedspaceships-list.component';
import { CoreModule } from '@core/core.module';


@NgModule({
  declarations: [
    UnmannedspaceshipsListComponent
  ],
  imports: [
    CommonModule,
    UnmannedspaceshipRoutingModule,
    CoreModule
  ]
})
export class UnmannedspaceshipModule { }
