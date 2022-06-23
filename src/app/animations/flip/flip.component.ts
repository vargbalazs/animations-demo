import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'flip',
  templateUrl: './flip.component.html',
  styleUrls: ['./flip.component.css'],
  animations: [
    trigger('cardFlip', [
      state(
        'default',
        style({
          transform: 'none',
        })
      ),
      state(
        'flipped',
        style({
          transform: 'rotateY(180deg)',
        })
      ),
      transition('default => flipped', [animate('400ms')]),
      transition('flipped => default', [animate('400ms')]),
    ]),
  ],
})
export class FlipComponent {
  cardState = 'default';

  flip() {
    this.cardState = this.cardState === 'default' ? 'flipped' : 'default';
  }
}
