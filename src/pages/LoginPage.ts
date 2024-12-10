import { Page } from '@playwright/test';

export class LoginPage {
  private page: Page;
  private userNameInput = '#username';
  private passwordInput = '#password';
  private signInButton = '[type="submit"]';

  constructor(page: Page) {
    this.page = page;
  }

  async login(email: string, password: string) {
    await this.page.fill(this.userNameInput, email);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.signInButton);
  }
}