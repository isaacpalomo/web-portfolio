import { Component, Input } from "@angular/core";

@Component({
  selector: "app-hero-section",
  templateUrl: "./hero-section.component.html",
  styleUrls: ["./hero-section.component.scss"],
})
export class HeroSectionComponent {
  @Input() brandName = "";
  @Input() role = "";
  @Input() tagline = "";
  @Input() resumePdfPath = "assets/resume.pdf";
}
