import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Appointment {
  day: number; // Index of the day (0 for Sunday, 1 for Monday, etc.)
  start: number; // Start time in minutes
  end: number; // End time in minutes
  title: string;
}

@Component({
  selector: 'dem-appointment-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './appointment-calendar.component.html',
  styleUrl: './appointment-calendar.component.scss',
})
export class AppointmentCalendarComponent implements OnInit {
  appointments: Appointment[] = [];
  daysInWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  timeSlots: string[] = [];
  timeSlotsInDay = 30; // Number of 10-minute intervals from 8:30 AM to 6:00 PM
  protected readonly Math = Math;
  protected readonly Array = Array;

  constructor() {}

  ngOnInit(): void {
    // Initialize appointments (You can load this from a service or API)
    this.initializeTimeSlots();
    this.appointments = [
      { day: 0, start: 30, end: 60, title: 'Meeting 1' }, // Example appointment on Sunday from 0:30 to 1:00
      { day: 1, start: 90, end: 150, title: 'Meeting 2' }, // Example appointment on Monday from 1:30 to 2:30
      // Add more appointments as needed
    ];
  }

  initializeTimeSlots(): void {
    const startTime = 8 * 60 + 30; // Start time in minutes (8:30 AM)
    for (let i = 0; i < this.timeSlotsInDay; i++) {
      const time = startTime + i * 10; // Increment by 10 minutes
      const hours = Math.floor(time / 60);
      const minutes = time % 60;
      const formattedTime = `${('0' + hours).slice(-2)}:${('0' + minutes).slice(
        -2
      )}`;
      this.timeSlots.push(formattedTime);
    }
  }

  getAppointmentPosition(appointment: Appointment): any {
    const column = appointment.day + 1; // Adjust for the day header column
    const rowStart = appointment.start / 10; // Each slot represents 10 minutes
    const rowEnd = appointment.end / 10;
    return {
      gridColumn: `${column} / span 1`,
      gridRow: `${rowStart + 1} / span ${rowEnd - rowStart}`,
    };
  }
}
