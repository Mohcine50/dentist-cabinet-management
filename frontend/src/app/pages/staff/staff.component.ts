import { Component, effect, inject, OnInit, ViewChild } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RightSliderComponent } from "../../shared/components/rightSlider/rightSlider.component";
import { ReactiveFormsModule } from "@angular/forms";
import { AddTreatmentComponent } from "../treatments/addTreatment/add-treatment.component";
import { StaffStore } from "../../stores/staff/staff.store";
import { getState } from "@ngrx/signals";
import { AddStaffComponent } from "./addStaff/add-staff.component";
import { DataTableComponent } from "../../shared/components/dataTable/data-table.component";
import { RolesStore } from "../../stores/roles/roles.store";
import { StaffCardComponent } from "./staff-card/staff-card.component";
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  RouterLink,
  RouterLinkActive,
} from "@angular/router";
import { StaffDetailsComponent } from "./staff-details/staff-details.component";
import { DemLoadAllStaffMembersQuery } from "../../data-access/generated/generated";
import { TStaff } from "../../shared/types";

@Component({
  selector: "dem-staff",
  standalone: true,
  providers: [StaffStore],
  imports: [
    CommonModule,
    RightSliderComponent,
    ReactiveFormsModule,
    AddStaffComponent,
    StaffCardComponent,
    RouterLink,
    RouterLinkActive,
    StaffDetailsComponent,
  ],
  templateUrl: "./staff.component.html",
  styleUrl: "./staff.component.scss",
})
export class StaffComponent implements OnInit {
  readonly staffStore = inject(StaffStore);
  showLayout: string | null = null;
  @ViewChild("rightSliderComponent")
  protected rightSliderComponent!: RightSliderComponent;

  protected rightSliderAction: string | undefined;
  protected selectedStaff: any;

  constructor(private activatedRoute: ActivatedRoute) {}

  get getSliderTitle(): string {
    return this.rightSliderAction === "ADD" ? "Add Staff" : "Staff Details";
  }

  ngOnInit() {
    this.staffStore.loadStaffMembers();
    this.activatedRoute.queryParamMap.subscribe(
      (value) => (this.showLayout = value.get("view"))
    );
  }

  addStaffForm() {
    this.rightSliderAction = "ADD";
    this.rightSliderComponent.toggleSlideOver();
  }

  viewStaffDetails(staff: TStaff) {
    this.selectedStaff = staff;
    this.rightSliderAction = "DETAILS";
    this.rightSliderComponent.toggleSlideOver();
  }

  editStaff(id: any) {
    console.log(id);
  }
}
