import { CommonModule } from "@angular/common";
import { Component, inject, OnInit, ViewChild } from "@angular/core";
import { AppointmentCalendarComponent } from "./components/appointment-calendar/appointment-calendar.component";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterStateSnapshot,
} from "@angular/router";
import { CalendarViewComponent } from "./components/calendar-view/calendar-view.component";
import { ListViewComponent } from "./components/list-view/list-view.component";
import { UpcomingSessionCardComponent } from "./components/upcoming-session-card/upcoming-session-card.component";
import { AddTreatmentComponent } from "../treatments/addTreatment/add-treatment.component";
import { RightSliderComponent } from "../../shared/components/right-slider/rightSlider.component";
import { AddAppointmentComponent } from "./components/add-appointment/add-appointment.component";
import { AppointmentsStore } from "../../stores/appointments/appointments.store";
import { isToday, startOfToday } from "date-fns";

@Component({
  selector: "dem-appointment",
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
  templateUrl: "./appointments.component.html",
  styleUrl: "./appointments.component.scss",
  providers: [AppointmentsStore],
})
export class AppointmentComponent implements OnInit {
  view!: string | null;
  appointmentsStore = inject(AppointmentsStore);
  @ViewChild("rightSliderComponent")
  protected rightSliderComponent!: RightSliderComponent;

  constructor(private route: ActivatedRoute) {}

  get upcomingAppointments() {
    const todayAppointments = this.appointmentsStore
      .appointments()
      .filter((appointment) => isToday(appointment.date));

    return todayAppointments
      .sort((a, b) => this.getDate(a).getTime() - this.getDate(b).getTime())
      .slice(0, 5);
  }

  getDate(app: any) {
    const date = new Date();
    const [hours, minutes] = app.startTime.split(":");
    date.setHours(hours);
    date.setMinutes(minutes);
    return date;
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((value) => {
      this.view = value.get("view");
    });

    this.appointmentsStore.loadAllAppointments();
  }

  addAppointment() {
    this.rightSliderComponent.toggleSlideOver();
  }
}
