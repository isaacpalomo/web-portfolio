import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule } from "@angular/forms";
import { ContactSectionComponent } from "./contact-section.component";

describe("ContactSectionComponent", () => {
  let fixture: ComponentFixture<ContactSectionComponent>;
  let component: ContactSectionComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ContactSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactSectionComponent);
    component = fixture.componentInstance;
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("buildMailtoHref encodes subject, body, and recipient", () => {
    component.contactEmail = "hire@example.com";
    component.contact = {
      name: "Ada",
      email: "ada@example.com",
      message: "Interested in your work",
    };

    const href = component.buildMailtoHref();

    expect(href.startsWith("mailto:hire@example.com")).toBe(true);
    expect(href).toContain(encodeURIComponent("Ada"));
    expect(href).toContain(encodeURIComponent("Interested in your work"));
  });

  it("renders social links with bound hrefs", () => {
    component.linkedinUrl = "https://linkedin.example/in/test";
    component.githubUrl = "https://github.example/u/test";
    fixture.detectChanges();

    const el = fixture.nativeElement as HTMLElement;
    const anchors = el.querySelectorAll<HTMLAnchorElement>("a[target=_blank]");
    const hrefs = Array.from(anchors).map((a) => a.href);
    expect(hrefs.some((h) => h.includes("linkedin.example"))).toBe(true);
    expect(hrefs.some((h) => h.includes("github.example"))).toBe(true);
  });
});
