// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { defineConfig } from "vitest/config";
import { relativeRecordingsPath } from "@azure-tools/test-recorder";

process.env.RECORDINGS_RELATIVE_PATH = relativeRecordingsPath();

export default defineConfig({
  define: {
    "process.env": process.env,
  },
  test: {
    testTimeout: 50000,
    hookTimeout: 50000,
    reporters: ["verbose", "junit"],
    outputFile: {
      junit: "test-results.browser.xml",
    },
    browser: {
      instances: [
        {
          browser: "chromium",
        },
      ],
      enabled: true,
      headless: true,
      provider: "playwright",
    },
    fakeTimers: {
      toFake: ["setTimeout", "Date"],
    },
    watch: false,
    include: ["dist-test/browser/**/*.spec.js"],
    coverage: {
      include: ["dist-test/browser/**/*.spec.js"],
      provider: "istanbul",
      reporter: ["text", "json", "html"],
      reportsDirectory: "coverage-browser",
    },
  },
});
