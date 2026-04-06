import { TestBed } from "@angular/core/testing";
import { AppComponent } from "../app/app.component";
import { AppModule } from "../app/app.module";

describe("AppModule (integration)", () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule],
    }).compileComponents();
  });

  it("bootstraps AppComponent with the real module graph", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain("portfolio-frontend");
  });
});
