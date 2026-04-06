import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 1,
  use: {
    baseURL: "http://127.0.0.1:3099",
  },
  webServer: {
    command: "npm run e2e:server",
    url: "http://127.0.0.1:3099/api/health",
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
