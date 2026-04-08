import { Component, Input } from "@angular/core";
import { Experience } from "../../models/experience.model";

@Component({
  selector: "app-experience-section",
  templateUrl: "./experience-section.component.html",
  styleUrls: ["./experience-section.component.scss"],
})
export class ExperienceSectionComponent {
  @Input() experiences: Experience[] = [];

  getInitials(company: string): string {
    return (company || "")
      .split(/\s+/)
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join("");
  }
}
