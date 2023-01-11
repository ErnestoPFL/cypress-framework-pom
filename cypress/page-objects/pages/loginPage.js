import BasePage from '../BasePage';

export default class LoginPage extends BasePage {
  static login(model) {
    cy.login(model);
  }

  static clickForgotPasswordLink(selector) {
    cy.clickOnForgotPassword(selector);
  }
}
