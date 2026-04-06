import { test, expect } from "@playwright/test";

test.describe("portfolio frontend e2e", () => {
  test("loads the shell and shows the app title in the page", async ({
    page,
  }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/PortfolioFrontend/);
    await expect(page.locator("app-root")).toBeVisible();
    await expect(page.getByText(/portfolio-frontend app is running/i)).toBeVisible();
  });
});
