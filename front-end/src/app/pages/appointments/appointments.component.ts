import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, ViewChild } from '@angular/core';
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
import { AddTreatmentComponent } from '../treatments/addTreatment/add-treatment.component';
import { RightSliderComponent } from '../../shared/components/rightSlider/rightSlider.component';
import { AddAppointmentComponent } from './components/add-appointment/add-appointment.component';
import { AppointmentsStore } from '../../stores/appointments/appointments.store';

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
    AddTreatmentComponent,
    RightSliderComponent,
    AddAppointmentComponent,
  ],
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.scss',
  providers: [AppointmentsStore],
})
export class AppointmentComponent implements OnInit {
  view!: string | null;
  appointmentsStore = inject(AppointmentsStore);
  @ViewChild('rightSliderComponent')
  protected rightSliderComponent!: RightSliderComponent;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((value) => {
      this.view = value.get('view');
    });

    this.appointmentsStore.loadAllAllAppointments();
    console.log(this.appointmentsStore.appointments());
  }

  addAppointment() {
    this.rightSliderComponent.toggleSlideOver();
  }
}
