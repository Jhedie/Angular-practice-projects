import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HeroesComponent } from "./heroes.component";
import { DebugElement, NO_ERRORS_SCHEMA } from "@angular/core";
import { Hero } from "../hero";
import { HeroService } from "../hero.service";
import { HeroComponent } from "../hero/hero.component";
import { of } from "rxjs";
import { By } from "@angular/platform-browser";

describe("Heroes Component (deep tests)", () => {
  let fixture: ComponentFixture<HeroesComponent>;
  let component: HeroesComponent;
  let mockHeroService: any;
  let HEROES: Hero[];
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
      declarations: [HeroesComponent, HeroComponent],
      providers: [{ provide: HeroService, useValue: mockHeroService }],
      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
  });

  it("should render each hero as a hero component", () => {
    mockHeroService.getHeroes.and.returnValue(of(HEROES));
    //run ngOnint
    fixture.detectChanges();

    const heroComponentDebugElements: DebugElement[] =
      fixture.debugElement.queryAll(By.directive(HeroComponent));
    expect(heroComponentDebugElements.length).toEqual(3);
    // check that every hero component within the template is the same as what is defined in the HEROES array
    expect(
      heroComponentDebugElements.filter((hero, index) => {
        return hero.componentInstance.hero !== HEROES[index];
      }).length
    ).toEqual(0);
  });
});
