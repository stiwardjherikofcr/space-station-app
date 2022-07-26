import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ModalComponent } from './components/modal/modal.component';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
    ModalComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    ModalComponent,
    CardComponent
  ]
})
export class CoreModule { }
