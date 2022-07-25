import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MannedspaceshipRoutingModule } from './mannedspaceship-routing.module';
import { MannedspaceshipsListComponent } from './pages/mannedspaceships-list/mannedspaceships-list.component';
import { CoreModule } from '@core/core.module';


@NgModule({
  declarations: [
    MannedspaceshipsListComponent
  ],
  imports: [
    CommonModule,
    MannedspaceshipRoutingModule,
    CoreModule
  ]
})
export class MannedspaceshipModule { }
