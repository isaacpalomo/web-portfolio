import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SiteHeaderComponent } from './site-header.component';

describe('SiteHeaderComponent', () => {
  let fixture: ComponentFixture<SiteHeaderComponent>;
  let component: SiteHeaderComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SiteHeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SiteHeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('derives brandShort from first name + Palomo', () => {
    component.brandName = 'Isaac Palomo Salas';
    expect(component.brandShort).toBe('Isaac Palomo');
  });

  it('renders nav anchors to page sections', () => {
    component.brandName = 'Isaac Palomo Salas';
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    const links = el.querySelectorAll('a[href^="#"]');
    const hrefs = Array.from(links).map((a) => a.getAttribute('href'));
    expect(hrefs).toContain('#about');
    expect(hrefs).toContain('#experience');
  });
});
