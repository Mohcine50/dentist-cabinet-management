import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  add,
  eachDayOfInterval,
  eachMinuteOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameMonth,
  isThisMonth,
  isToday,
  isWithinInterval,
  parse,
  startOfToday,
  startOfWeek,
  sub,
} from 'date-fns';

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
  startHour = new Date().setHours(8, 30);
  endHour = new Date().setHours(18);

  minutes = eachMinuteOfInterval(
    { start: this.startHour, end: this.endHour },
    {
      step: 15,
    }
  );
  protected readonly isThisMonth = isThisMonth;
  protected readonly isToday = isToday;

  get weekDays() {
    return eachDayOfInterval({
      start: startOfWeek(this.firstDayOfWeek, { weekStartsOn: 1 }),
      end: endOfWeek(this.firstDayOfWeek, { weekStartsOn: 1 }),
    });
  }

  get filteredMinutes() {
    return this.minutes.filter(
      (minute) =>
        !isWithinInterval(minute, {
          start: new Date().setHours(11),
          end: new Date().setHours(13),
        })
    );
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
    const previousWeek = sub(this.firstDayOfWeek, { weeks: 1 });
    this.firstDayOfWeek = previousWeek;
  }

  nextWeek() {
    const nextWeek = add(this.firstDayOfWeek, { weeks: 1 });
    this.firstDayOfWeek = nextWeek;
  }

  ngOnInit(): void {}
}
