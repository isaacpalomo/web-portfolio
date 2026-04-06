/** @type {import("jest").Config} */
module.exports = {
  projects: [
    {
      displayName: "unit",
      preset: "ts-jest",
      testEnvironment: "node",
      testMatch: ["<rootDir>/src/**/*.unit.test.ts"],
      transform: {
        "^.+\\.tsx?$": [
          "ts-jest",
          { tsconfig: "<rootDir>/tsconfig.jest.json" },
        ],
      },
    },
    {
      displayName: "integration",
      preset: "ts-jest",
      testEnvironment: "node",
      testMatch: ["<rootDir>/src/**/*.integration.test.ts"],
      transform: {
        "^.+\\.tsx?$": [
          "ts-jest",
          { tsconfig: "<rootDir>/tsconfig.jest.json" },
        ],
      },
    },
  ],
  modulePathIgnorePatterns: ["<rootDir>/e2e/"],
};
