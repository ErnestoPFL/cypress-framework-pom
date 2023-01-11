export default class BasePage {
  static pause(ms) {
    cy.wait(ms);
  }

  static logInfo(message) {
    cy.log(message);
  }

  static displayErrorMessage() {
    cy.isVisible(shouldBeYourSelector);
  }
  static windowFieldStructureAssertions(selector) {
    cy.isVisible(selector);
    cy.isExist(selector);
    cy.isEnabled(selector);
  }

  static windowLinksStructureAssrtions(selector, pagePath) {
    cy.isVisible(selector);
    cy.isExist(selector);
    cy.hasLink(selector, pagePath);
  }
  static windowFieldHasPlaceholder(selector, placeholder) {
    cy.hasPlaceholder(selector, placeholder);
  }

  static setMobileViewport() {
    cy.viewport('iphone-x');
  }
}
