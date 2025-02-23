import { Component, Input, OnInit } from "@angular/core";
import { TStaff } from "../../../shared/types";

@Component({
  selector: "dem-staff-details",
  standalone: true,
  imports: [],
  templateUrl: "./staff-details.component.html",
  styleUrl: "./staff-details.component.scss",
})
export class StaffDetailsComponent implements OnInit {
  @Input() selectedStaff!: TStaff;

  ngOnInit(): void {
    console.log("StaffDetailsComponent", this.selectedStaff);
  }
}
