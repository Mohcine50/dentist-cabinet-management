import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'dem-data-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss',
})
export class DataTableComponent implements OnInit {
  @Input() tableHeader!: string[];
  @Input() tableData!: any[];
  @Output() editEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onEditEventClick(id: any) {
    this.editEvent.emit(id);
  }
}
