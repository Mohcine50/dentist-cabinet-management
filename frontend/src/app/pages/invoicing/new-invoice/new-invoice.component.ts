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
import { DatePipe } from "@angular/common";

@Component({
  selector: "app-new-invoice",
  standalone: true,
  imports: [
    FormsModule,
    SingleSelectInputComponent,
    ReactiveFormsModule,
    DatePipe,
  ],
  templateUrl: "./new-invoice.component.html",
  styleUrl: "./new-invoice.component.scss",
})
export class NewInvoiceComponent implements OnInit {
  treatmentsStore = inject(TreatmentsStore);
  patientsStore = inject(PatientsStore);
  protected invoiceForm!: FormGroup;

  protected treatmentsList: { name: string; price: number }[] = [];

  get patient() {
    console.log(this.invoiceForm.controls["patient"].value);
    return this.invoiceForm.controls["patient"].value;
  }

  get invoiceDate() {
    return this.invoiceForm.controls["date"].value;
  }

  get invoiceSubject() {
    return this.invoiceForm.controls["subject"].value || "-";
  }

  get selectedTreatments() {
    return this.invoiceForm.controls["treatments"].value;
  }

  get totalAmount(): number {
    if (!this.treatmentsList.length) return 0;

    return this.treatmentsList.reduce(
      (total, treatment) => total + treatment.price,
      0
    );
  }

  ngOnInit(): void {
    this.invoiceForm = new FormGroup({
      patient: new FormControl("", [Validators.required]),
      date: new FormControl(new Date(), [Validators.required]),
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
