import Home from "../src/routes/home";

describe("routes/Home", () => {
  it("exports `Home`", () => {
    expect(typeof Home).toBe("function");
  });
});
