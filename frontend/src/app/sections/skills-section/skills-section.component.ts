import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  NgZone,
  OnDestroy,
  ViewChild,
} from "@angular/core";
import { Skill } from "../../models/skill.model";

@Component({
  selector: "app-skills-section",
  templateUrl: "./skills-section.component.html",
  styleUrls: ["./skills-section.component.scss"],
})
export class SkillsSectionComponent implements AfterViewInit, OnDestroy {
  @Input() skills: Skill[] = [];

  @ViewChild("skillsRoot") skillsRoot?: ElementRef<HTMLElement>;

  skillsVisible = false;

  private observer?: IntersectionObserver;

  constructor(private ngZone: NgZone) {}

  ngAfterViewInit(): void {
    if (typeof IntersectionObserver === "undefined") {
      this.skillsVisible = true;
      return;
    }
    const el = this.skillsRoot?.nativeElement;
    if (!el) {
      this.skillsVisible = true;
      return;
    }
    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          this.ngZone.run(() => {
            this.skillsVisible = true;
          });
          this.observer?.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
