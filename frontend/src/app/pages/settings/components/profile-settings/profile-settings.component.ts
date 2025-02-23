import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { NgIf, NgOptimizedImage } from "@angular/common";

@Component({
  selector: "dem-profile-settings",
  standalone: true,
  imports: [NgIf, NgOptimizedImage, FormsModule, ReactiveFormsModule],
  templateUrl: "./profile-settings.component.html",
  styleUrl: "./profile-settings.component.scss",
})
export class ProfileSettingsComponent implements OnInit {
  protected profileForm: FormGroup | undefined;

  protected selectedFile: File | undefined;
  protected previewUrl: any;

  constructor() {}

  ngOnInit(): void {
    this.profileForm = new FormGroup({
      fullName: new FormControl("", Validators.required),
      profile: new FormControl(null, Validators.required),
    });
  }

  fileSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];

    if (file) {
      this.selectedFile = file;

      // Read file as Data URL for preview
      const reader = new FileReader();
      reader.onload = () => {
        this.previewUrl = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
