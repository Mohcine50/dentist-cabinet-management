import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  RouterModule,
} from '@angular/router';
import { MonthlyCalendarComponent } from '../monthly-calendar/monthly-calendar.component';
import { DailyCalendarComponent } from '../daily-calendar/daily-calendar.component';
import { WeeklyCalendarComponent } from '../weekly-calendar/weekly-calendar.component';
import { AppointmentsStore } from '../../../../stores/appointments/appointments.store';

@Component({
  selector: 'dem-calendar-view',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MonthlyCalendarComponent,
    DailyCalendarComponent,
    WeeklyCalendarComponent,
  ],
  templateUrl: './calendar-view.component.html',
  styleUrl: './calendar-view.component.scss',
})
export class CalendarViewComponent implements OnInit {
  calenderType: string | null = null;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((value) => {
      this.calenderType = value.get('filter');
    });
  }
}
