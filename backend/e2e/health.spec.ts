import { test, expect } from "@playwright/test";

test.describe("portfolio-site-api e2e", () => {
  test("GET /api/health returns JSON", async ({ request }) => {
    const res = await request.get("/api/health");
    expect(res.ok()).toBeTruthy();
    await expect(res).toBeOK();
    expect(await res.json()).toEqual({
      ok: true,
      service: "portfolio-site-api",
    });
  });
});
