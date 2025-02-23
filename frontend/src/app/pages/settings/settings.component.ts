import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterLinkActive,
} from "@angular/router";
import { of } from "rxjs/internal/observable/of";
import { Observable } from "rxjs/internal/Observable";
import { map, tap } from "rxjs";
import { ProfileSettingsComponent } from "./components/profile-settings/profile-settings.component";
import { SecuritySettingsComponent } from "./components/security-settings/security-settings.component";

@Component({
  selector: "dem-settings",
  standalone: true,
  imports: [
    CommonModule,
    RouterLinkActive,
    RouterLink,
    ProfileSettingsComponent,
    SecuritySettingsComponent,
  ],
  templateUrl: "./settings.component.html",
  styleUrl: "./settings.component.scss",
})
export class SettingsComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  get settingsSection(): Observable<boolean> {
    return this.route.queryParams.pipe(
      map((params) => {
        return !!params["on"];
      })
    );
  }
}
