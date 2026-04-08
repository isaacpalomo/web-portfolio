import { TestBed } from '@angular/core/testing';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should show your name and role in the hero', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain('Isaac Palomo Salas');
    expect(el.textContent).toContain('Frontend-Focused Full-Stack Developer');
  });

  it('should list experiences', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.experiences.length).toBeGreaterThan(0);
    expect(app.experiences.some((e) => e.company === 'Enhance Fitness')).toBe(
      true,
    );
  });

  it('composes layout and section components', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('app-site-header')).toBeTruthy();
    expect(el.querySelector('app-hero-section')).toBeTruthy();
    expect(el.querySelector('app-about-section')).toBeTruthy();
    expect(el.querySelector('app-experience-section')).toBeTruthy();
    expect(el.querySelector('app-site-footer')).toBeTruthy();
  });

  it('exposes main landmark for skip-link target', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector('main#main')).toBeTruthy();
  });
});
