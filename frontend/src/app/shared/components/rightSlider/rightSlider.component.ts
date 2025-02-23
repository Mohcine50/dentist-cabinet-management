import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'dem-right-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rightSlider.component.html',
  styleUrl: './rightSlider.component.scss',
  animations: [
    trigger('slideOver', [
      transition(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate(500, style({ transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)' }),
        animate(500, style({ transform: 'translateX(100%)' })),
      ]),
    ]),
  ],
})
export class RightSliderComponent {
  isSlideOver = false;
  @Input() title!: string;
  
  toggleSlideOver() {
    this.isSlideOver = !this.isSlideOver;
  }
}
