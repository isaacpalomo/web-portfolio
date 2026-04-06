import { Component, Input } from "@angular/core";

@Component({
  selector: "app-contact-section",
  templateUrl: "./contact-section.component.html",
  styleUrls: ["./contact-section.component.scss"],
})
export class ContactSectionComponent {
  @Input() linkedinUrl = "";
  @Input() githubUrl = "";
  @Input() contactEmail = "your.email@example.com";

  contact = {
    name: "",
    email: "",
    message: "",
  };

  buildMailtoHref(): string {
    const { name, email, message } = this.contact;
    const subject = encodeURIComponent(`Portfolio: message from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} <${email}>`);
    return `mailto:${this.contactEmail}?subject=${subject}&body=${body}`;
  }

  onContactSubmit(): void {
    window.location.href = this.buildMailtoHref();
  }
}
