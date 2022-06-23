import {
  animate,
  query,
  sequence,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bouncing',
  templateUrl: './bouncing.component.html',
  styleUrls: ['../slide-out/slide-out.component.css'],
  animations: [
    trigger('loadList', [transition(':enter', []), transition(':leave', [])]),
    trigger('listAnimation', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'scale(0.5)' }),
            animate(
              '0.6s cubic-bezier(.8, -0.6, 0.2, 1.5)',
              style({
                opacity: 1,
                transform: 'scale(1)',
              })
            ),
          ],
          {
            optional: true,
          }
        ),
        query(
          ':leave',
          [
            style({ transform: 'scale(1)', opacity: 1, height: '*' }),
            sequence([
              animate(
                '0.6s cubic-bezier(.8, -0.6, 0.2, 1.5)',
                style({
                  opacity: 0,
                  transform: 'scale(0.5)',
                })
              ),
              animate(
                '0.1s linear',
                style({
                  height: '0px',
                  margin: '0px',
                })
              ),
            ]),
          ],
          {
            optional: true,
          }
        ),
      ]),
    ]),
  ],
})
export class BouncingComponent implements OnInit {
  items: { id: number; text: string }[] = [];

  constructor() {}

  ngOnInit(): void {
    for (let i = 1; i <= 10; i++) {
      this.items.push({ id: i, text: `Item ${i}` });
    }
  }

  itemClicked(id: number) {
    this.items = this.items.filter((item) => item.id !== id);
  }

  addItem() {
    const nextId = Math.max(...this.items.map((item) => item.id)) + 1;
    this.items.push({ id: nextId, text: 'New item' });
  }

  itemTrackById(index: number, item: { id: number; text: string }) {
    return item.id;
  }
}
