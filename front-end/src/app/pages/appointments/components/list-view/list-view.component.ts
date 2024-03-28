import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataTableComponent } from '../../../../shared/components/dataTable/data-table.component';
import { AppointmentsStore } from '../../../../stores/appointments/appointments.store';

@Component({
  selector: 'dem-list-view',
  standalone: true,
  imports: [CommonModule, RouterModule, DataTableComponent],
  templateUrl: './list-view.component.html',
  styleUrl: './list-view.component.scss',
})
export class ListViewComponent {
  patientTableHeader: string[] = [
    'Full Name',
    'Treatment',
    'Time & Date',
    'Status',
  ];

  appointmentsStore = inject(AppointmentsStore);
}
