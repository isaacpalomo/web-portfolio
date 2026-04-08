import { TestBed } from '@angular/core/testing';
import { AppComponent } from '../app/app.component';
import { AppModule } from '../app/app.module';

describe('AppModule (integration)', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents();
  });

  it('bootstraps AppComponent with the real module graph', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain('Isaac Palomo Salas');
  });

  it('renders primary sections end-to-end', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const text = (fixture.nativeElement as HTMLElement).textContent ?? '';

    expect(text).toMatch(/About/i);
    expect(text).toMatch(/Projects/i);
    expect(text).toMatch(/Experience/i);
    expect(text).toMatch(/Contact/i);
    expect(text).toContain('Bill reminders app');
    expect(text).toContain('Built by Isaac');
  });
});
