import { Component, OnInit, inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute, RouterModule } from "@angular/router";
import { DataTableComponent } from "../../../../shared/components/data-table/data-table.component";
import { AppointmentsStore } from "../../../../stores/appointments/appointments.store";

@Component({
  selector: "dem-list-view",
  standalone: true,
  imports: [CommonModule, RouterModule, DataTableComponent],
  templateUrl: "./list-view.component.html",
  styleUrl: "./list-view.component.scss",
})
export class ListViewComponent implements OnInit {
  patientTableHeader: string[] = [
    "Full Name",
    "Treatment",
    "Time & Date",
    "Status",
  ];
  filter: string | null = null;

  appointmentsStore = inject(AppointmentsStore);
  appointments!: any[];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe((params) => {
      this.filter = params.get("filter");
      if (this.filter === null)
        this.appointments = this.appointmentsStore.appointments();
      else
        switch (this.filter) {
          case "upcoming":
            this.appointments = this.appointmentsStore.upcoming();
            break;
          case "expired":
            this.appointments = this.appointmentsStore.expired();
            break;
          case "canceled":
            this.appointments = this.appointmentsStore.canceled();
            break;
          default:
            this.appointments = this.appointmentsStore.appointments();
            break;
        }
    });
  }
}
