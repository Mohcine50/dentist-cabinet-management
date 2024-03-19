import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DataTableComponent } from '../../../../shared/components/dataTable/data-table.component';

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

  tableData = [
    {
      'Full Name': 'Mohcine Lahnin',
      Treatment: 'Detartrage',
      'Time & Date': '10:29 AM | 22/04/2024',
      Status: 'Canceled',
    },
  ];
}
