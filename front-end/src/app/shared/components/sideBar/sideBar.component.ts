import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'dem-side-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sideBar.component.html',
  styleUrl: './sideBar.component.scss',
})
export class SideBarComponent {}
