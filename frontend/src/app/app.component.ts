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
  readonly tagline =
    'Angular & Modern Web Technologies | QA Automation | Internal Tools & Platform Development';

  /** Replace with your public URLs and email before publishing. */
  linkedinUrl = 'https://www.linkedin.com/in/isaac-salas-48576a1a8/';
  githubUrl = 'https://github.com/isaacpalomo';
  resumePdfPath = '/assets/Isaac-Palomo-Salas-Resume.pdf';
  contactEmail = 'hello@isaacpalomo.com';

  experiences: Experience[] = [
    {
      company: 'Enhance Fitness',
      logo: '/assets/enhance.png',
      start: '2022',
      end: '2026',
      location: 'Dubai, UAE',
      workMode: 'Remote',
      bulletPoints: [
        'Built and maintained Angular-based backoffice and customer-facing applications supporting scheduling, booking, and trainer management workflows',
        'Designed and integrated RESTful APIs in Java to support core business processes across scheduling and operational systems',
        'Contributed to QA automation using Playwright, improving test coverage and stabilizing CI execution for application workflows',
      ],
    },
    {
      company: 'Build IT Solutions',
      logo: '/assets/buildit.png',
      start: '2019',
      end: '2022',
      location: 'Mexico City, Mexico',
      workMode: 'Remote',
      bulletPoints: [
        'Developed web and mobile applications using Angular and Ionic for real estate and logistics platforms',
        'Implemented backend services and APIs supporting pricing tools and business analytics features',
        'Collaborated on full-stack delivery of client-facing and internal applications across multiple projects',
      ],
    },
    {
      company: "Mexico's Industry Suppliers Chain",
      logo: '/assets/capim.png',
      start: '2017',
      end: '2019',
      location: 'Juárez City, Mexico',
      workMode: 'On-site',
      bulletPoints: [
        'Developed and maintained a PHP and MySQL-based platform for business networking and supplier catalogs',
        'Implemented and extended features for managing product and service listings within the platform',
      ],
    },
    {
      company: 'Lear Electrical Systems',
      logo: '/assets/lear.png',
      start: '2015',
      end: '2017',
      location: 'Juárez City, Mexico',
      workMode: 'On-site',
      bulletPoints: [
        'Developed internal reporting solutions using SQL Server Reporting Services (SSRS)',
        'Assisted in backend development tasks using .NET and SQL Server',
      ],
    },
  ];
}
