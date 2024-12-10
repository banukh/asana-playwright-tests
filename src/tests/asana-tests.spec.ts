import { test } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { BoardPage } from '../pages/BoardPage';
import testCases from '../data/test-cases.json';

test.describe('Asana Demo App Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    const loginPage = new LoginPage(page);
    await loginPage.login(
      testCases.loginCredentials.email, 
      testCases.loginCredentials.password
    );
  });

  testCases.testCases.forEach(testCase => {
    test(testCase.name, async ({ page }) => {
      const boardPage = new BoardPage(page);
      await boardPage.navigateToProject(testCase.project);
      await boardPage.verifyTaskInColumn(
        testCase.task, 
        testCase.column, 
        testCase.tags
      );
    });
  });
});