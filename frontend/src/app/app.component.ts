import { Component } from "@angular/core";
import { Skill } from "./models/skill.model";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  readonly brandName = "Isaac Palomo Salas";
  readonly role = "Frontend-Focused Full-Stack Developer";
  readonly tagline = "Building robust and user-friendly web applications";

  /** Replace with your public URLs and email before publishing. */
  linkedinUrl = "https://www.linkedin.com/in/your-profile";
  githubUrl = "https://github.com/your-username";
  resumePdfPath = "assets/resume.pdf";
  contactEmail = "your.email@example.com";

  skills: Skill[] = [
    { name: "Angular", level: 92 },
    { name: "JavaScript / TypeScript", level: 88 },
    { name: "HTML / CSS", level: 90 },
    { name: "Node.js", level: 72 },
    { name: "SQL", level: 68 },
    { name: "QA & test automation", level: 80 },
  ];
}
