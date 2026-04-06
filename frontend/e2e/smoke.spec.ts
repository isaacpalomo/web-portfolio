import { test, expect } from "@playwright/test";

test.describe("portfolio frontend e2e", () => {
  test("loads the portfolio shell and hero", async ({ page }) => {
    await page.goto("/");
    await expect(page).toHaveTitle(/Isaac Palomo Salas/);
    await expect(page.locator("app-root")).toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Isaac Palomo Salas" })
    ).toBeVisible();
    await expect(
      page.getByText("Building robust and user-friendly web applications")
    ).toBeVisible();
  });

  test("header links point to in-page sections", async ({ page }) => {
    await page.goto("/");
    const nav = page.getByRole("navigation", { name: "Primary" });
    await expect(nav.getByRole("link", { name: "About" })).toHaveAttribute(
      "href",
      "#about"
    );
    await expect(nav.getByRole("link", { name: "Projects" })).toHaveAttribute(
      "href",
      "#projects"
    );
    await expect(nav.getByRole("link", { name: "Skills" })).toHaveAttribute(
      "href",
      "#skills"
    );
    await expect(nav.getByRole("link", { name: "Contact" })).toHaveAttribute(
      "href",
      "#contact"
    );
  });

  test("contact form fields and submit affordance are present", async ({
    page,
  }) => {
    await page.goto("/");
    const section = page.locator("#contact");
    await expect(section.getByRole("heading", { name: "Contact" })).toBeVisible();
    await expect(section.getByLabel("Name")).toBeVisible();
    await expect(section.getByLabel("Email")).toBeVisible();
    await expect(section.getByLabel("Message")).toBeVisible();
    await expect(
      section.getByRole("button", { name: "Send message" })
    ).toBeDisabled();
  });

  test("footer shows attribution", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText("Built by Isaac")).toBeVisible();
  });
});
