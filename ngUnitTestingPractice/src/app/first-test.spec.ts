describe("my first test", () => {
  //sut - system under test
  let sut;
  beforeEach(() => {
    //always  clean state after Every test
    sut = {};
  });

  it("should be true if true", () => {
    //arrange
    sut.a = false;

    //act
    sut.a = true;

    //assert
    expect(sut.a).toBe(true);
  });
});
