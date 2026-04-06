import { CommonModule } from "@angular/common";
import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from "@angular/core/testing";
import { SkillsSectionComponent } from "./skills-section.component";
import { Skill } from "../../models/skill.model";

describe("SkillsSectionComponent", () => {
  let fixture: ComponentFixture<SkillsSectionComponent>;
  let component: SkillsSectionComponent;
  let originalIO: typeof IntersectionObserver | undefined;

  const sampleSkills: Skill[] = [
    { name: "Angular", level: 90 },
    { name: "CSS", level: 70 },
  ];

  beforeEach(async () => {
    originalIO = window.IntersectionObserver;
    window.IntersectionObserver = class {
      constructor(private readonly cb: IntersectionObserverCallback) {}
      observe(target: Element) {
        setTimeout(() => {
          this.cb(
            [
              {
                isIntersecting: true,
                target,
                intersectionRatio: 1,
                boundingClientRect: {} as DOMRectReadOnly,
                intersectionRect: {} as DOMRectReadOnly,
                rootBounds: null,
                time: 0,
              } as IntersectionObserverEntry,
            ],
            this as unknown as IntersectionObserver
          );
        }, 0);
      }
      disconnect() {}
      unobserve() {}
      takeRecords(): IntersectionObserverEntry[] {
        return [];
      }
      readonly root: Element | null = null;
      readonly rootMargin = "";
      readonly thresholds: ReadonlyArray<number> = [];
    } as unknown as typeof IntersectionObserver;

    await TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [SkillsSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SkillsSectionComponent);
    component = fixture.componentInstance;
    component.skills = sampleSkills;
  });

  afterEach(() => {
    if (originalIO) {
      window.IntersectionObserver = originalIO;
    } else {
      delete (window as unknown as { IntersectionObserver?: unknown })
        .IntersectionObserver;
    }
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("renders skill names after intersection observer fires", fakeAsync(() => {
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    expect(component.skillsVisible).toBe(true);
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain("Angular");
    expect(el.textContent).toContain("CSS");
  }));
});
