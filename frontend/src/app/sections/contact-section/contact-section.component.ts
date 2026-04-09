import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss'],
})
export class ContactSectionComponent {
  @Input() heading = 'Contact';
  @Input() lede = 'Open to full-time roles and freelance opportunities.';

  @Input() linkedinUrl = '';
  @Input() githubUrl = '';
  @Input() contactEmail = 'hello@isaacpalomo.com';

  @Input() resumePdfPath = '';

  get mailtoHref(): string {
    return `mailto:${this.contactEmail}`;
  }
}
