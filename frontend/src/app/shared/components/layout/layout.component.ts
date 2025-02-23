import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HeaderComponent } from "../header/header.component";
import { RightSliderComponent } from "../right-slider/rightSlider.component";
import { SideBarComponent } from "../side-bar/sideBar.component";

@Component({
  selector: "dem-layout",
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    SideBarComponent,
    HeaderComponent,
    RightSliderComponent,
  ],
  templateUrl: "./layout.component.html",
  styleUrl: "./layout.component.scss",
})
export class LayoutComponent {}
