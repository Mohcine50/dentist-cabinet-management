import {
  Component,
  effect,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { RolesStore } from '../../../stores/roles/roles.store';
import { getState } from '@ngrx/signals';
import { DemLoadAllRolesQuery } from '../../../data-access/generated/generated';
import { MultiSelectInputComponent } from '../../../shared/components/multiSelectInput/multi-select-input.component';
import { SingleSelectInputComponent } from '../../../shared/components/singleSelectInput/single-select-input.component';

@Component({
  selector: 'dem-add-staff',
  providers: [RolesStore],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MultiSelectInputComponent,
    SingleSelectInputComponent
  ],
  templateUrl: './add-staff.component.html',
  styleUrl: './add-staff.component.scss'
})
export class AddStaffComponent implements OnInit {
  readonly rolesStore = inject(RolesStore);

  @Output() event = new EventEmitter<void>();
  selectedOptions: any;
  protected staffForm!: FormGroup;
  protected fullName = new FormControl('', [Validators.required]);
  protected username = new FormControl('', [Validators.required]);
  protected bio = new FormControl('', [Validators.required]);
  protected phoneNumber = new FormControl('', [Validators.required]);
  protected gender = new FormControl('', [Validators.required]);
  protected address = new FormControl('', [Validators.required]);
  protected city = new FormControl('', [Validators.required]);
  protected otherPhoneNumber = new FormControl('', [Validators.required]);
  protected cinNumber = new FormControl('', [Validators.required]);
  protected email = new FormControl('', [Validators.required]);
  protected roles = new FormControl('', [Validators.required]);

  constructor() {
    effect(() => {
      const state = getState(this.rolesStore);
    });
  }

  get rolesList(): DemLoadAllRolesQuery['loadAllRoles'] {
    return this.rolesStore.roles();
  }

  ngOnInit(): void {
    this.staffForm = new FormGroup({
      fullName: this.fullName,
      username: this.username,
      bio: this.bio,
      phoneNumber: this.phoneNumber,
      gender: this.gender,
      address: this.address,
      city: this.city,
      otherPhoneNumber: this.otherPhoneNumber,
      cinNumber: this.cinNumber,
      email: this.email,
      roles: this.roles
    });

    this.rolesStore.loadAllRoles();
  }

  addStaffForm(event: Event) {
    event.preventDefault();
    console.log(this.staffForm.value);
    this.event.emit();
  }

  onSelectionChange($event: string[]) {
    console.log($event);
  }
}
