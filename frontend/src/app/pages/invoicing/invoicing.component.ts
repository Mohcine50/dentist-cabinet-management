import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: "dem-invoicing",
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: "./invoicing.component.html",
  styleUrl: "./invoicing.component.scss",
})
export class InvoicingComponent {
  createInvoice() {}
}
