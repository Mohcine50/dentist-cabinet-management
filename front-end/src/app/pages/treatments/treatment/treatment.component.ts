import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Treatment } from '../models/treatment';

@Component({
  selector: 'dem-treatment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './treatment.component.html',
  styleUrl: './treatment.component.scss',
})
export class TreatmentComponent {
  @Input() treatment!: Treatment;
}
