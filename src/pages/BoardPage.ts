import { Page, expect } from '@playwright/test';

export class BoardPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToProject(projectName: string) {
    await this.page.click(`text=${projectName}`);
  }

  async verifyTaskInColumn(taskName: string, columnName: string, tags: string[]) {
    const taskLocator = this.page.locator(`text=${taskName}`);
    await expect(taskLocator).toBeVisible();

    // Column check
    const columnLocator = taskLocator.locator(`xpath=ancestor::div[contains(@class, 'flex-col')]/h2[text()='${columnName}']`);
    await expect(columnLocator).toBeVisible();

    // Checking tags
    for (const tag of tags) {
      const tagLocator = taskLocator.locator(`xpath=following-sibling::div/span[text()='${tag}']`);
      await expect(tagLocator).toBeVisible();
    }
  }
}