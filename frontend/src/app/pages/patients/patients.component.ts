import { Component, inject, OnInit, ViewChild } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RightSliderComponent } from "../../shared/components/right-slider/rightSlider.component";
import { AddTreatmentComponent } from "../treatments/addTreatment/add-treatment.component";
import { AddPatientComponent } from "./add-patient/add-patient.component";
import { PatientsStore } from "../../stores/patients/patients.store";

@Component({
  selector: "dem-patients",
  standalone: true,
  imports: [CommonModule, RightSliderComponent, AddPatientComponent],
  templateUrl: "./patients.component.html",
  styleUrl: "./patients.component.scss",
  providers: [PatientsStore],
})
export class PatientsComponent implements OnInit {
  @ViewChild("rightSliderComponent")
  protected rightSliderComponent!: RightSliderComponent;

  protected patientStore = inject(PatientsStore);

  ngOnInit(): void {
    this.patientStore.loadAllPatients();
  }

  addPatientForm() {
    this.rightSliderComponent.toggleSlideOver();
  }
}
