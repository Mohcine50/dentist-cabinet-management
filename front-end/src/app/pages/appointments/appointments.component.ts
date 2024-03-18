import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AppointmentCalendarComponent } from './components/appointment-calendar/appointment-calendar.component';

@Component({
  selector: 'dem-appointment',
  standalone: true,
  imports: [CommonModule, AppointmentCalendarComponent],
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.scss',
})
export class AppointmentComponent {}
