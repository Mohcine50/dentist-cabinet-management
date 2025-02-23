import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { StatisticsCardComponent } from "./components/statistics-card/statistics-card.component";
import { PatientsDemographicsComponent } from "./components/patients-demographics/patients-demographics.component";
import { SideBarComponent } from "../../shared/components/side-bar/sideBar.component";

@Component({
  selector: "dem-dashboard",
  standalone: true,
  imports: [
    CommonModule,
    SideBarComponent,
    RouterModule,
    StatisticsCardComponent,
    PatientsDemographicsComponent,
  ],
  templateUrl: "./dashboard.component.html",
  styleUrl: "./dashboard.component.scss",
})
export class DashboardComponent {}
