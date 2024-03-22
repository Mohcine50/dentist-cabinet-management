import { Component, effect, inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RightSliderComponent } from '../../shared/components/rightSlider/rightSlider.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddTreatmentComponent } from '../treatments/addTreatment/add-treatment.component';
import { StaffStore } from '../../stores/staff/staff.store';
import { getState } from '@ngrx/signals';
import { AddStaffComponent } from './addStaff/add-staff.component';
import { DataTableComponent } from '../../shared/components/dataTable/data-table.component';
import { RolesStore } from '../../stores/roles/roles.store';

@Component({
  selector: 'dem-staff',
  standalone: true,
  providers: [StaffStore],
  imports: [
    CommonModule,
    RightSliderComponent,
    ReactiveFormsModule,
    AddTreatmentComponent,
    AddStaffComponent,
    DataTableComponent,
  ],
  templateUrl: './staff.component.html',
  styleUrl: './staff.component.scss',
})
export class StaffComponent implements OnInit {
  readonly staffStore = inject(StaffStore);
  @ViewChild('rightSliderComponent')
  protected rightSliderComponent!: RightSliderComponent;

  constructor() {}

  get staffDataTableHeader() {
    return Object.keys(this.staffStore.staff()[0]);
  }

  ngOnInit() {
    this.staffStore.loadStaffMembers();
  }

  addStaffForm() {
    this.rightSliderComponent.toggleSlideOver();
  }

  editStaff(id: any) {
    console.log(id);
  }
}
