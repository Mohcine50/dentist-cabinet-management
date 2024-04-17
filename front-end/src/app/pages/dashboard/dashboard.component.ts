import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideBarComponent } from 'src/app/shared/components/sideBar/sideBar.component';
import { StatisticsCardComponent } from './components/statistics-card/statistics-card.component';
import { PatientsDemographicsComponent } from './components/patients-demographics/patients-demographics.component';

@Component({
  selector: 'dem-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    SideBarComponent,
    RouterModule,
    StatisticsCardComponent,
    PatientsDemographicsComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {}
