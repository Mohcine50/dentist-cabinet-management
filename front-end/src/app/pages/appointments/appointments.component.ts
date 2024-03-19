import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AppointmentCalendarComponent } from './components/appointment-calendar/appointment-calendar.component';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterStateSnapshot,
} from '@angular/router';
import { CalendarViewComponent } from './components/calendar-view/calendar-view.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { UpcomingSessionCardComponent } from './components/upcoming-session-card/upcoming-session-card.component';

@Component({
  selector: 'dem-appointment',
  standalone: true,
  imports: [
    CommonModule,
    AppointmentCalendarComponent,
    RouterLink,
    RouterLinkActive,
    CalendarViewComponent,
    ListViewComponent,
    UpcomingSessionCardComponent,
  ],
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.scss',
})
export class AppointmentComponent implements OnInit {
  view!: string | null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((value) => {
      this.view = value.get('view');
    });
  }
}
