import { Component, Input } from '@angular/core';

import { ISpaceship } from '@data/interfaces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() data: any;

  constructor() { }

}
