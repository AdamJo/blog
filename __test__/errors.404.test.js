import Error404 from "../src/routes/errors/404";

describe("routes/Error404", () => {
  it("exports `Error404`", () => {
    expect(typeof Error404).toBe("function");
  });
});
