import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HeroComponent } from "./hero.component";
import { DebugElement, NO_ERRORS_SCHEMA } from "@angular/core";
import { By } from "@angular/platform-browser";

describe("Hero Component (shallow tests)", () => {
  //Fixture for debugging and testing a component.
  let fixture: ComponentFixture<HeroComponent>;
  let component: HeroComponent;
  beforeEach(() => {
    //the test bed allows you to test the component and its template running together
    //We use to create a module to specifically test the component
    TestBed.configureTestingModule({
      declarations: [HeroComponent],
      //ignore errors related to unknown elements within the template in this case the router
      schemas: [NO_ERRORS_SCHEMA],
    });

    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
  });
  it("should have the correct hero", () => {
    component.hero = { id: 1, name: "Batman", strength: 10 };

    expect(component.hero.name).toEqual("Batman");
  });

  it("should render the hero name in the anchor tag", () => {
    component.hero = { id: 1, name: "Batman", strength: 10 };
    // fixture.detectChanges is typically called after you have changed the state of a component's data
    //in other words run change detection
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector("a").textContent).toContain(
      "Batman"
    );

    //we can also use debugElement to work with the template:
    // it is like the nativeElement, but its more like the wrapper that has a different functionality compared to the nativeElement which is used to access the DOM api
    //debugElement is a wrapper around a DOM node and it provides a lot of benefits
    const de: DebugElement = fixture.debugElement.query(By.css("a"));
    expect(de.nativeElement.textContent).toContain("Batman");
  });

  it("", () => {});
});
