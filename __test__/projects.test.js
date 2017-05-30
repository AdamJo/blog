import Projects from "../src/routes/projects";

describe("routes/Projects", () => {
  it("exports `Projects`", () => {
    expect(typeof Projects).toBe("function");
  });
});
