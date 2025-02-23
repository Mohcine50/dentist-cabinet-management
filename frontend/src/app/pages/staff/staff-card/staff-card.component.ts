import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { staff } from '../models/staff/staff.model';

@Component({
  selector: 'dem-staff-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './staff-card.component.html',
  styleUrl: './staff-card.component.scss',
})
export class StaffCardComponent {
  @Input() staff!: staff;

  showMenu = false;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }
}
