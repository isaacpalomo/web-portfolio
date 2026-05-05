import { Component } from '@angular/core';
import { Experience } from './models/experience.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly brandName = 'Isaac Palomo Salas';
  readonly role = 'QA Automation Engineer | Full-Stack Developer';
  readonly tagline =
    'Playwright (TypeScript) | E2E & Regression Testing | CI/CD Validation | Angular + Spring Boot';

  /** Replace with your public URLs and email before publishing. */
  linkedinUrl = 'https://www.linkedin.com/in/isaac-salas-48576a1a8/';
  githubUrl = 'https://github.com/isaacpalomo';
  resumePdfPath = '/assets/Isaac-Palomo-Salas-Resume.pdf';
  contactEmail = 'hello@isaacpalomo.com';

  experiences: Experience[] = [
    {
      company: 'Enhance Fitness',
      logo: '/assets/enhance.png',
      start: 'Feb 2022',
      end: 'May 2026',
      location: 'Remote',
      workMode: 'Remote',
      bulletPoints: [
        'Developed and maintained Playwright end-to-end automated tests for Angular-based web applications',
        'Validated critical user workflows including scheduling, booking, and trainer management features',
        'Investigated CI pipeline failures and analyzed logs to identify and fix failing Playwright tests',
        'Collaborated with developers to identify, reproduce, and resolve frontend and backend defects',
        'Contributed to full-stack feature development using Angular and Spring Boot',
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
      company: 'Cadena de Proveedores de la Industria en México',
      logo: '/assets/capim.png',
      start: '2017',
      end: '2019',

      location: 'Ciudad Juárez, México',

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
      location: 'Ciudad Juárez, México',
      workMode: 'On-site',
      bulletPoints: [
        'Developed internal reporting solutions using SQL Server Reporting Services (SSRS)',
        'Assisted in backend development tasks using .NET and SQL Server',
      ],
    },
  ];
}
