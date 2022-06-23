import {
  animate,
  query,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shake',
  templateUrl: './shake.component.html',
  styleUrls: ['../slide-out/slide-out.component.css'],
  animations: [
    trigger('loadList', [transition(':enter', []), transition(':leave', [])]),
    trigger('shake', [
      transition('* <=> *', [
        query('li', [
          style({ transform: 'rotate(0)' }),
          animate('0.1s', style({ transform: 'rotate(2deg)' })),
          animate('0.1s', style({ transform: 'rotate(-2deg)' })),
          animate('0.1s', style({ transform: 'rotate(2deg)' })),
          animate('0.1s', style({ transform: 'rotate(0)' })),
        ]),
      ]),
    ]),
  ],
})
export class ShakeComponent implements OnInit {
  items: { id: number; text: string }[] = [];
  shakingState = false;

  constructor() {}

  ngOnInit(): void {
    for (let i = 1; i <= 10; i++) {
      this.items.push({ id: i, text: `Item ${i}` });
    }
  }

  shakeIt() {
    this.shakingState = !this.shakingState;
  }
}
