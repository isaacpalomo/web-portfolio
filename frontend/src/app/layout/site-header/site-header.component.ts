import { Component, Input } from "@angular/core";

@Component({
  selector: "app-site-header",
  templateUrl: "./site-header.component.html",
  styleUrls: ["./site-header.component.scss"],
})
export class SiteHeaderComponent {
  @Input() brandName = "";

  get brandShort(): string {
    const first = this.brandName.split(" ")[0] || "";
    return first ? `${first} Palomo` : "";
  }
}
