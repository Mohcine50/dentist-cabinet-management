import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  add,
  addDays,
  eachDayOfInterval,
  eachMinuteOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isThisMonth,
  isToday,
  parse,
  startOfDay,
  startOfToday,
  startOfWeek,
  sub,
} from 'date-fns';
import { AppointmentsStore } from '../../../../stores/appointments/appointments.store';

@Component({
  selector: 'dem-monthly-calendar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './monthly-calendar.component.html',
  styleUrl: './monthly-calendar.component.scss',
})
export class MonthlyCalendarComponent implements OnInit {
  todayDate = startOfToday();
  firstDayOfWeek = startOfWeek(this.todayDate, { weekStartsOn: 1 });
  selectedMonth = format(this.todayDate, 'LLLL yyyy');
  weekDays = Array.from(Array(7)).map((e, i) =>
    format(addDays(this.firstDayOfWeek, i), 'EEEE')
  );
  appointmentsStore = inject(AppointmentsStore);
  appointments = this.appointmentsStore.appointments();
  protected readonly isToday = isToday;
  protected readonly isThisMonth = isThisMonth;

  constructor(private changeDetector: ChangeDetectorRef) {}

  get monthDays() {
    return eachDayOfInterval({
      start: startOfWeek(this.firstDayOfCurrentMonth, { weekStartsOn: 1 }),
      end: endOfWeek(endOfMonth(this.firstDayOfCurrentMonth), {
        weekStartsOn: 1,
      }),
    });
  }

  get firstDayOfCurrentMonth(): Date {
    return parse(this.selectedMonth, 'LLLL yyyy', new Date());
  }

  nextMonth() {
    const nextMonth = add(this.firstDayOfCurrentMonth, { months: 1 });
    this.selectedMonth = format(nextMonth, 'LLLL yyyy');
  }

  previousMonth() {
    const nextMonth = sub(this.firstDayOfCurrentMonth, { months: 1 });
    this.selectedMonth = format(nextMonth, 'LLLL yyyy');
  }

  byDayAppointment(day: any) {
    return this.appointments.filter((appointment) =>
      isSameDay(day, appointment['date'])
    );
  }

  ngOnInit(): void {}
}
