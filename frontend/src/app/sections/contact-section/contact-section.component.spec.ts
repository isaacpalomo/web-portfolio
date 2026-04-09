import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactSectionComponent } from './contact-section.component';

describe('ContactSectionComponent', () => {
  let fixture: ComponentFixture<ContactSectionComponent>;
  let component: ContactSectionComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContactSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactSectionComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('mailtoHref uses contactEmail', () => {
    component.contactEmail = 'hire@example.com';
    expect(component.mailtoHref).toBe('mailto:hire@example.com');
  });

  it('renders contact options with bound hrefs', () => {
    component.contactEmail = 'hire@example.com';
    component.linkedinUrl = 'https://linkedin.example/in/test';
    component.githubUrl = 'https://github.example/u/test';
    fixture.detectChanges();

    const el = fixture.nativeElement as HTMLElement;
    const mailto = el.querySelector<HTMLAnchorElement>('a[href^="mailto:"]');
    expect(mailto?.getAttribute('href')).toBe('mailto:hire@example.com');

    const anchors = el.querySelectorAll<HTMLAnchorElement>('a[target=_blank]');
    const hrefs = Array.from(anchors).map((a) => a.href);
    expect(hrefs.some((h) => h.includes('linkedin.example'))).toBe(true);
    expect(hrefs.some((h) => h.includes('github.example'))).toBe(true);
  });
});
