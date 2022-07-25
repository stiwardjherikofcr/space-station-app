import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShuttlevehicleRoutingModule } from './shuttlevehicle-routing.module';
import { ShuttlevehiclesListComponent } from './pages/shuttlevehicles-list/shuttlevehicles-list.component';
import { CoreModule } from '@core/core.module';


@NgModule({
  declarations: [
    ShuttlevehiclesListComponent
  ],
  imports: [
    CommonModule,
    ShuttlevehicleRoutingModule,
    CoreModule
  ]
})
export class ShuttlevehicleModule { }
