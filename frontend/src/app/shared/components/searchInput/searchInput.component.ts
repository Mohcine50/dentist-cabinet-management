import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'dem-search-input',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './searchInput.component.html',
  styleUrl: './searchInput.component.scss',
})
export class SearchInputComponent {
  @Input() placeholder!: string;
  protected search = new FormControl('');
}
