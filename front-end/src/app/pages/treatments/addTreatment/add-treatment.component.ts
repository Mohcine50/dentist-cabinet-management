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
import { TreatmentsStore } from '../../../stores/treatments/treatments.store';

@Component({
  selector: 'dem-add-treatment',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-treatment.component.html',
  styleUrl: './add-treatment.component.scss',
})
export class AddTreatmentComponent implements OnInit {
  @Output() event = new EventEmitter<void>();

  treatmentsStore = inject(TreatmentsStore);

  protected treatmentForm!: FormGroup;
  protected duration = new FormControl('', [Validators.required]);
  protected name = new FormControl('', [Validators.required]);
  protected price = new FormControl('', [Validators.required]);
  protected sessions = new FormControl<number>(1, [Validators.required]);

  ngOnInit(): void {
    this.treatmentForm = new FormGroup({
      name: this.name,
      price: this.price,
      sessions: this.sessions,
      duration: this.duration,
    });
  }

  addTreatmentForm(event: Event) {
    event.preventDefault();
    const { name, price, sessions, duration } = this.treatmentForm.value;
    this.treatmentsStore.addTreatment({
      name,
      price,
      sessions,
      duration,
    });
    this.event.emit();
  }
}
