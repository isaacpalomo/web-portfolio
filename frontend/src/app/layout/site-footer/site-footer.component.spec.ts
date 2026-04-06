import { ComponentFixture, TestBed } from "@angular/core/testing";
import { SiteFooterComponent } from "./site-footer.component";

describe("SiteFooterComponent", () => {
  let fixture: ComponentFixture<SiteFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SiteFooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SiteFooterComponent);
  });

  it("should create", () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it("shows attribution", () => {
    fixture.detectChanges();
    expect((fixture.nativeElement as HTMLElement).textContent).toContain(
      "Built by Isaac"
    );
  });
});
