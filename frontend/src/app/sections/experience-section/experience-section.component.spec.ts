import { CommonModule } from "@angular/common";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ExperienceSectionComponent } from "./experience-section.component";
import { Experience } from "../../models/experience.model";

describe("ExperienceSectionComponent", () => {
  let fixture: ComponentFixture<ExperienceSectionComponent>;
  let component: ExperienceSectionComponent;

  const experiences: Experience[] = [
    {
      company: "Enhance Fitness",
      start: "2022",
      end: "Present",
      location: "Dubai, UAE",
      workMode: "Remote",
      summary: "Backoffice and website development for a fitness and wellness company.",
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

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("renders the company name", () => {
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain("Enhance Fitness");
  });
});
