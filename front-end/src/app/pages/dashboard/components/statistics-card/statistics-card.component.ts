import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dem-statistics-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './statistics-card.component.html',
  styleUrl: './statistics-card.component.scss',
})
export class StatisticsCardComponent {
  @Input() title!: string;
  @Input() value!: string;
  @Input() percentage!: string;
}
