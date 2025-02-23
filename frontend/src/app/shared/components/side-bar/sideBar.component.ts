import { CommonModule } from '@angular/common';
import { Component, HostBinding } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'dem-side-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sideBar.component.html',
  styleUrl: './sideBar.component.scss',
  animations: [
    trigger('collapse', [
      state('collapsed', style({ transform: 'rotate(180deg)' })),
      state('expanded', style({ transform: 'rotate(0)' })),
      transition('collapsed <=> expanded', animate('300ms ease-in-out')),
    ]),
    trigger('collapseSideBar', [
      transition(':leave', [animate('300ms ease-in-out')]),
    ]),
  ],
})
export class SideBarComponent {
  @HostBinding('@collapseSideBar')
  collapsed = false;

  toggleCollapse() {
    this.collapsed = !this.collapsed;
  }
}
