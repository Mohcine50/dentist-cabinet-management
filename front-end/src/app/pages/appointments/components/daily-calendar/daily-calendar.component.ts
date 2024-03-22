import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  eachMinuteOfInterval,
  isWithinInterval,
  startOfToday,
  isToday,
  sub,
  add,
} from 'date-fns';

@Component({
  selector: 'dem-daily-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './daily-calendar.component.html',
  styleUrl: './daily-calendar.component.scss',
})
export class DailyCalendarComponent implements OnInit {
  todayDate = startOfToday();

  protected readonly isToday = isToday;

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
