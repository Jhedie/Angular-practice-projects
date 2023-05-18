import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HeroesComponent } from "./heroes.component";
import { Component, DebugElement, Input } from "@angular/core";
import { HeroService } from "../hero.service";
import { of } from "rxjs";
import { Hero } from "../hero";
import { By } from "@angular/platform-browser";

/**
 * Notes: Writing integration tests are only useful when you want to test the DOM elements
 *        If you do not want to test the directives or DOM elements you are better off writing
 *        isolated tests. See: /ngUnitTestingPractice/src/app/heroes/heroes.component.spec.ts
 */

describe("Heroes Component (shallow test)", () => {
  let fixture: ComponentFixture<HeroesComponent>;
  let component: HeroesComponent;
  let mockHeroService;
  let HEROES;

  @Component({
    selector: "app-hero",
    template: "<div></div>",
  })
  class MockHeroComponent {
    @Input() hero: Hero;
  }

  beforeEach(() => {
    HEROES = [
      { id: 1, name: "SpiderDude", strength: 8 },
      { id: 5, name: "Iron Man", strength: 11 },
      { id: 2, name: "BatGuy", strength: 10 },
    ];
    mockHeroService = jasmine.createSpyObj([
      "getHeroes",
      "addHero",
      "deleteHero",
    ]);

    TestBed.configureTestingModule({
      declarations: [HeroesComponent, MockHeroComponent],
      //provide the service
      providers: [{ provide: HeroService, useValue: mockHeroService }],
      //ignore child elements using NO_ERRORS_SCHEMA unless we want to add it to declarations
      // schemas: [NO_ERRORS_SCHEMA],
    });

    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
  });

  it("should set heroes correctly from the service", () => {
    mockHeroService.getHeroes.and.returnValue(of(HEROES));
    fixture.detectChanges();
    expect(component.heroes.length).toBe(3);
  });

  it("should create one li for each hero", () => {
    //arrange
    mockHeroService.getHeroes.and.returnValue(of(HEROES));
    //act
    fixture.detectChanges();

    //assert
    const heroesList: DebugElement[] = fixture.debugElement.queryAll(
      By.css("li")
    );
    expect(heroesList.length).toEqual(3);
  });
});
