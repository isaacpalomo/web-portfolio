import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroSectionComponent } from './hero-section.component';

describe('HeroSectionComponent', () => {
  let fixture: ComponentFixture<HeroSectionComponent>;
  let component: HeroSectionComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeroSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroSectionComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders bound hero copy', () => {
    component.brandName = 'Test User';
    component.role = 'Engineer';
    component.tagline = 'Ship quality UI';
    component.resumePdfPath = 'assets/cv.pdf';
    fixture.detectChanges();

    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('h1')?.textContent).toContain('Test User');
    expect(el.textContent).toContain('Engineer');
    expect(el.textContent).toContain('Ship quality UI');
  });
});
