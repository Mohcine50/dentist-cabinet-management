import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  add,
  eachDayOfInterval,
  eachMinuteOfInterval,
  endOfWeek,
  format,
  isSameMonth,
  isThisMonth,
  isToday,
  isWithinInterval,
  parseISO,
  startOfToday,
  startOfWeek,
  sub,
} from 'date-fns';
import { AppointmentsStore } from '../../../../stores/appointments/appointments.store';

@Component({
  selector: 'dem-weekly-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './weekly-calendar.component.html',
  styleUrl: './weekly-calendar.component.scss',
})
export class WeeklyCalendarComponent implements OnInit {
  todayDate = startOfToday();
  firstDayOfWeek = startOfWeek(this.todayDate, { weekStartsOn: 1 });
  appointmentsStore = inject(AppointmentsStore);
  protected readonly isToday = isToday;
  protected readonly isThisMonth = isThisMonth;

  get hoursOfDay() {
    return eachMinuteOfInterval(
      {
        start: this.todayDate.setHours(8, 30),
        end: this.todayDate.setHours(18),
      },
      {
        step: 15,
      }
    ).filter(
      (minute) =>
        !isWithinInterval(minute, {
          start: this.todayDate.setHours(11),
          end: this.todayDate.setHours(13),
        })
    );
  }

  get weekDays() {
    return eachDayOfInterval({
      start: startOfWeek(this.firstDayOfWeek, { weekStartsOn: 1 }),
      end: endOfWeek(this.firstDayOfWeek, { weekStartsOn: 1 }),
    });
  }

  get currentMonth() {
    const firstDay = this.weekDays[0];
    const lastDay = this.weekDays[this.weekDays.length - 1];
    if (isSameMonth(firstDay, lastDay)) return format(firstDay, 'LLLL yyyy');
    else
      return `${format(firstDay, 'LLLL')} to ${format(lastDay, 'LLLL yyyy')}`;
  }

  generateTimesFromDayTime(date: Date) {
    const startTime = date.setHours(8, 30);
    const endTime = date.setHours(18);
    const minutes = eachMinuteOfInterval(
      { start: startTime, end: endTime },
      {
        step: 15,
      }
    );
    return minutes.filter(
      (minute) =>
        !isWithinInterval(minute, {
          start: date.setHours(11),
          end: date.setHours(13),
        })
    );
  }

  previousWeek() {
    this.firstDayOfWeek = sub(this.firstDayOfWeek, { weeks: 1 });
  }

  nextWeek() {
    this.firstDayOfWeek = add(this.firstDayOfWeek, { weeks: 1 });
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

  ngOnInit(): void {}
}
