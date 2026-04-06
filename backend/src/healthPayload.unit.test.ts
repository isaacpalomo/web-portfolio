import { healthPayload } from "./healthPayload";

describe("healthPayload", () => {
  it("returns a stable health shape", () => {
    expect(healthPayload()).toEqual({
      ok: true,
      service: "portfolio-site-api",
    });
  });
});
