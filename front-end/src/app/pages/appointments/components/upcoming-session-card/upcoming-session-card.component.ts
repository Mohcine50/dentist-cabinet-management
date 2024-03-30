import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dem-upcoming-session-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upcoming-session-card.component.html',
  styleUrl: './upcoming-session-card.component.scss',
})
export class UpcomingSessionCardComponent {
  @Input() appointment!: any;

  softLightColors: string[] = [
    '#FFE4E1',
    '#F5FFFA',
    '#87CEEB',
    '#FFE5B4',
    '#FFFFE0',
    '#C8A2C8',
    '#F08080',
  ];

  randomColor =
    this.softLightColors[
      Math.floor(Math.random() * this.softLightColors.length)
    ];
}
