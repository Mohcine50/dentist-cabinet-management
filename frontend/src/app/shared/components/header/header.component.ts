import { Component } from "@angular/core";
import { CommonModule, NgOptimizedImage } from "@angular/common";
import { FormControl, ReactiveFormsModule, Validators } from "@angular/forms";
import { SearchInputComponent } from "../search-input/searchInput.component";

@Component({
  selector: "dem-header",
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    SearchInputComponent,
  ],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent {}
