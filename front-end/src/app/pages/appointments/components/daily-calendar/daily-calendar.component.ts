import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  eachMinuteOfInterval,
  isWithinInterval,
  startOfToday,
  isToday,
  sub,
  add,
  parseISO,
  isThisMonth,
} from 'date-fns';
import { AppointmentsStore } from '../../../../stores/appointments/appointments.store';

@Component({
  selector: 'dem-daily-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './daily-calendar.component.html',
  styleUrl: './daily-calendar.component.scss',
})
export class DailyCalendarComponent implements OnInit {
  todayDate = startOfToday();
  appointmentsStore = inject(AppointmentsStore);
  protected readonly isToday = isToday;
  protected readonly isThisMonth = isThisMonth;

  get selectedDay() {
    return this.todayDate;
  }

  get hoursOfDay() {
    return eachMinuteOfInterval(
      {
        start: this.selectedDay.setHours(8, 30),
        end: this.selectedDay.setHours(18),
      },
      {
        step: 15,
      }
    ).filter(
      (minute) =>
        !isWithinInterval(minute, {
          start: this.selectedDay.setHours(11),
          end: this.selectedDay.setHours(13),
        })
    );
  }

  byTimeAppointment(time: Date) {
    return this.appointmentsStore.appointments().filter((appointment) => {
      const appointDate = appointment.date;
      const appointTime = appointment.startTime;

      const [hours, minutes] = appointTime.split(':');
      const date = parseISO(appointDate);
      date.setHours(hours);
      date.setMinutes(minutes);

      return isWithinInterval(date, {
        start: add(time, { minutes: -1 }),
        end: add(time, { minutes: 14 }),
      });
    });
  }

  previousDay() {
    const previousDay = sub(this.todayDate, { days: 1 });
    this.todayDate = previousDay;
  }

  nextDay() {
    const nextDay = add(this.todayDate, { days: 1 });
    this.todayDate = nextDay;
  }

  ngOnInit(): void {}
}
