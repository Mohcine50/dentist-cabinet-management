import { Component, inject, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { SingleSelectInputComponent } from "../../../shared/components/single-select-input/single-select-input.component";
import { TreatmentsStore } from "../../../stores/treatments/treatments.store";
import { PatientsStore } from "../../../stores/patients/patients.store";

@Component({
  selector: "app-new-invoice",
  standalone: true,
  imports: [FormsModule, SingleSelectInputComponent, ReactiveFormsModule],
  templateUrl: "./new-invoice.component.html",
  styleUrl: "./new-invoice.component.scss",
})
export class NewInvoiceComponent implements OnInit {
  treatmentsStore = inject(TreatmentsStore);
  patientsStore = inject(PatientsStore);
  protected invoiceForm!: FormGroup;

  protected treatmentsList: { name: string; price: string }[] = [];

  ngOnInit(): void {
    this.invoiceForm = new FormGroup({
      patient: new FormControl("", [Validators.required]),
      date: new FormControl("", [Validators.required]),
      subject: new FormControl("", [Validators.required]),
      treatments: new FormControl(this.treatmentsList, [Validators.required]),
    });
  }

  createInvoice(event: Event) {}

  onTreatmentSelected(treatment: any) {
    this.treatmentsList.push({ name: treatment.name, price: treatment.price });
  }

  deleteTreatment(i: number) {
    this.treatmentsList.splice(i, 1);
  }
}
