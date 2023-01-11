import BasePage from '../BasePage';

export default class RegistrationPage extends BasePage {
  static fillRegistrationForm(model) {
    cy.fillRegistrationForm(model);
  }
}
