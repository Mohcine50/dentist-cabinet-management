import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  isThisMonth,
  isToday,
  startOfToday,
  startOfWeek,
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
  protected readonly isThisMonth = isThisMonth;
  protected readonly isToday = isToday;

  get weekDays() {
    return eachDayOfInterval({
      start: startOfWeek(this.firstDayOfWeek, { weekStartsOn: 1 }),
      end: endOfWeek(this.firstDayOfWeek, { weekStartsOn: 1 }),
    });
  }

  previousWeek() {}

  nextWeek() {}

  ngOnInit(): void {
    console.log(this.firstDayOfWeek);
    console.log(this.weekDays);
  }
}
