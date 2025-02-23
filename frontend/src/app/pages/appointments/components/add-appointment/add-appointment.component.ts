import { Component, EventEmitter, inject, OnInit, Output } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { TreatmentsStore } from "../../../../stores/treatments/treatments.store";
import { SingleSelectInputComponent } from "../../../../shared/components/single-select-input/single-select-input.component";
import { PatientsStore } from "../../../../stores/patients/patients.store";
import { AppointmentsStore } from "../../../../stores/appointments/appointments.store";

@Component({
  selector: "dem-add-appointment",
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SingleSelectInputComponent],
  templateUrl: "./add-appointment.component.html",
  styleUrl: "./add-appointment.component.scss",
})
export class AddAppointmentComponent implements OnInit {
  @Output() event = new EventEmitter<void>();

  treatmentsStore = inject(TreatmentsStore);
  patientsStore = inject(PatientsStore);
  appointmentsStore = inject(AppointmentsStore);
  protected appointmentForm!: FormGroup;
  protected startTime = new FormControl("", [Validators.required]);
  protected date = new FormControl("", [Validators.required]);
  protected status = new FormControl("", [Validators.required]);
  protected notes = new FormControl("", [Validators.required]);
  protected treatment = new FormControl("", [Validators.required]);
  protected patient = new FormControl("", [Validators.required]);

  ngOnInit(): void {
    this.appointmentForm = new FormGroup({
      date: this.date,
      status: this.status,
      startTime: this.startTime,
      patient: this.patient,
      treatment: this.treatment,
      notes: this.notes,
    });

    this.patientsStore.loadAllPatients();
  }

  addAppointment(event: Event) {
    event.preventDefault();
    this.appointmentsStore.addAppointment({
      appointment: this.appointmentForm.value,
    });
    this.event.emit();
  }
}
