import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideBarComponent } from 'src/app/shared/components/sideBar/sideBar.component';
import { HeaderComponent } from '../header/header.component';
import { RightSliderComponent } from '../rightSlider/rightSlider.component';

@Component({
  selector: 'dem-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SideBarComponent,
    HeaderComponent,
    RightSliderComponent,
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {}
