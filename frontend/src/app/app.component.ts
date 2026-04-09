import { Component } from '@angular/core';
import { Experience } from './models/experience.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly brandName = 'Isaac Palomo Salas';
  readonly role = 'Full-Stack Developer';
  readonly tagline = 'Building robust and user-friendly web applications';

  /** Replace with your public URLs and email before publishing. */
  linkedinUrl = 'https://www.linkedin.com/in/isaac-salas-48576a1a8/';
  githubUrl = 'https://github.com/isaacpalomo';
  resumePdfPath = '/assets/Isaac-Palomo-Salas-Resume.pdf';
  contactEmail = 'hello@isaacpalomo.com';

  experiences: Experience[] = [
    {
      company: 'Enhance Fitness',
      start: '2022',
      end: 'Present',
      location: 'Dubai, UAE',
      workMode: 'Remote',
      summary:
        'Backoffice and website development for a fitness and wellness company that offers personal training sessions, including yoga, MMA and swimming',
    },
    {
      company: 'Build IT Solutions',
      start: '2019',
      end: '2022',
      location: 'Mexico City, Mexico',
      workMode: 'Remote',
      summary:
        'Web and mobile development for a real estate app, pricing tool for shipping materials and a company insights web application',
    },
    {
      company: "Mexico's Industry Suppliers Chain",
      start: '2017',
      end: '2019',
      location: 'Juárez City, Mexico',
      workMode: 'On-site',
      summary:
        'Support for a web application that serves business gatherings and a catalog of products and services',
    },
    {
      company: 'Lear Electrical Systems',
      start: '2015',
      end: '2017',
      location: 'Juárez City, Mexico',
      workMode: 'On-site',
      summary:
        'Backoffice development and creation of production reports with SQL Server Reporting Services (SSRS)',
    },
  ];
}
