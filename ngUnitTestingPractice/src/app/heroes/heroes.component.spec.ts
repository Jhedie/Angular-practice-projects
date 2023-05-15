import { of } from "rxjs";
import { HeroesComponent } from "./heroes.component";

describe("HeroesComponent", () => {
  let component: HeroesComponent;
  let HEROES;
  let mockHeroService;

  beforeEach(() => {
    HEROES = [
      { id: 1, name: "SpiderDude", strength: 8 },
      { id: 5, name: "Iron Man", strength: 11 },
      { id: 2, name: "BatGuy", strength: 10 },
    ];

    // we will need to mock the HeroService so we can control
    mockHeroService = jasmine.createSpyObj([
      "getHeroes",
      "addHero",
      "deleteHero",
    ]);
    component = new HeroesComponent(mockHeroService);
  });

  describe("delete", () => {
    it("it should remove the indicated hero from the heroes list", () => {
      //arrange
      //use Jasmine to tell deleteHeroMethod to return Observable
      mockHeroService.deleteHero.and.returnValue(of(true));
      //add the heroes list to the component
      component.heroes = HEROES;

      //act
      component.delete(HEROES[2]);
      const batGuyNotFound = !!component.heroes.filter((hero) => hero.id === 2);
      //assert
      expect(component.heroes.length).toEqual(2);
      expect(batGuyNotFound).toEqual(true);
    });

    it("should call the deleteHero with desired hero", () => {
      //arrange
      component.heroes = HEROES;
      mockHeroService.deleteHero.and.returnValue(of(true));

      //act
      component.delete(HEROES[2]);

      //assert
      expect(mockHeroService.deleteHero).toHaveBeenCalledWith(HEROES[2]);
    });
  });
});
