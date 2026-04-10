import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExperienceSectionComponent } from './experience-section.component';
import { Experience } from '../../models/experience.model';

describe('ExperienceSectionComponent', () => {
  let fixture: ComponentFixture<ExperienceSectionComponent>;
  let component: ExperienceSectionComponent;

  const experiences: Experience[] = [
    {
      company: 'Enhance Fitness',
      logo: '/assets/enhance.png',
      start: '2022',
      end: '2026',
      location: 'Dubai, UAE',
      workMode: 'Remote',
      bulletPoints: [
        'Built and maintained Angular-based backoffice and customer-facing applications supporting scheduling, booking, and trainer management workflows',
      ],
    },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [ExperienceSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ExperienceSectionComponent);
    component = fixture.componentInstance;
    component.experiences = experiences;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders the company name', () => {
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain('Enhance Fitness');
  });
});
