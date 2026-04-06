import { ComponentFixture, TestBed } from "@angular/core/testing";
import { AboutSectionComponent } from "./about-section.component";

describe("AboutSectionComponent", () => {
  let fixture: ComponentFixture<AboutSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AboutSectionComponent);
  });

  it("should create", () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it("exposes the about section with id for in-page navigation", () => {
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector("#about")).toBeTruthy();
    expect(el.textContent).toContain("About");
    expect(el.textContent).toContain("6+ years");
  });
});
