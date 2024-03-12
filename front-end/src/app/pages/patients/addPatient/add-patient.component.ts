import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { SingleSelectInputComponent } from '../../../shared/components/singleSelectInput/single-select-input.component';
import { PatientsStore } from '../../../stores/patients/patients.store';

@Component({
  selector: 'dem-add-patient',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, SingleSelectInputComponent],
  templateUrl: './add-patient.component.html',
  styleUrl: './add-patient.component.scss',
})
export class AddPatientComponent implements OnInit {
  @Output() event = new EventEmitter<void>();
  protected patientStore = inject(PatientsStore);
  protected patientForm!: FormGroup;
  protected fullName = new FormControl('', [Validators.required]);
  protected bio = new FormControl('', [Validators.required]);
  protected phoneNumber = new FormControl('', [Validators.required]);
  protected gender = new FormControl('', [Validators.required]);
  protected address = new FormControl('', [Validators.required]);
  protected city = new FormControl('', [Validators.required]);
  protected otherPhoneNumber = new FormControl('', [Validators.required]);
  protected cinNumber = new FormControl('', [Validators.required]);
  protected treatment = new FormControl('', [Validators.required]);

  ngOnInit(): void {
    this.patientForm = new FormGroup({
      fullName: this.fullName,
      bio: this.bio,
      phoneNumber: this.phoneNumber,
      gender: this.gender,
      address: this.address,
      city: this.city,
      otherPhoneNumber: this.otherPhoneNumber,
      cinNumber: this.cinNumber,
      treatment: this.treatment,
    });
  }

  addPatientForm(event: Event) {
    event.preventDefault();
    this.patientStore.addPatient();
    this.event.emit();
  }
}
