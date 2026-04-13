import { test as base, expect } from "@playwright/test";
import { LoginAction } from "../action/loginAction";
import { LoginPage } from "../page/loginPage";

type Fixture = {
  loginAction: LoginAction;
  loginPage: LoginPage;
};

export const test = base.extend<Fixture>({
  loginAction: async ({ page }, use) => {
    const loginAction = new LoginAction(page);
    await use(loginAction);
  },

  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  }
});
