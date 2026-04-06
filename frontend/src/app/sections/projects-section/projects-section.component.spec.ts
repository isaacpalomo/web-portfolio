import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ProjectsSectionComponent } from "./projects-section.component";

describe("ProjectsSectionComponent", () => {
  let fixture: ComponentFixture<ProjectsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectsSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsSectionComponent);
  });

  it("should create", () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it("highlights the planned bill reminders project", () => {
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelector("#projects")).toBeTruthy();
    expect(el.textContent).toContain("Bill reminders app");
    expect(el.textContent).toContain("Interactive demo coming soon");
  });
});
