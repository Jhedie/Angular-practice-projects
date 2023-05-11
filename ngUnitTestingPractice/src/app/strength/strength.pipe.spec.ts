import { StrengthPipe } from "./strength.pipe";

describe("StrengthPipe", () => {
  it("should display weak if the strength is 5", () => {
    //arrange
    let pipe = new StrengthPipe();

    //act
    let result = pipe.transform(5);

    //expect
    expect(result).toEqual("5 (weak)");
  });

  it("should display strong if the strength is 15", () => {
    let pipe = new StrengthPipe();

    let result = pipe.transform(15);

    expect(result).toEqual("15 (strong)");
  });

  it("should display unbelievable if the strength is more than 20", () => {
    let pipe = new StrengthPipe();

    let result = pipe.transform(21);

    expect(result).toEqual("21 (unbelievable)");
  });
});
