import { Component, OnInit } from "@angular/core";
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";

@Component({
  selector: "dem-security-settings",
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: "./security-settings.component.html",
  styleUrl: "./security-settings.component.scss",
})
export class SecuritySettingsComponent implements OnInit {
  protected securityForm!: FormGroup;

  ngOnInit(): void {
    this.securityForm = new FormGroup<any>({
      oldPassword: new FormControl("", [Validators.required]),
      newPassword: new FormControl("", [Validators.required]),
      confirmNewPassword: new FormControl("", [Validators.required]),
    });
  }
}
