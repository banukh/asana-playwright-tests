import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src/tests',
  timeout: 30000,
  expect: {
    timeout: 5000
  },
  fullyParallel: true,
  retries: 2,
  workers: undefined,
  reporter: 'html',
  use: {
    actionTimeout: 0,
    baseURL: 'https://animated-gingersnap-8cf7f2.netlify.app/',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  }
});