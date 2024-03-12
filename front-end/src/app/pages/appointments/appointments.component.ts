import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'dem-appointment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.scss',
})
export class AppointmentComponent {}
