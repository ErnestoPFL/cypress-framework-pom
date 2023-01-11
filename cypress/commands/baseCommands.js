Cypress.Commands.add('isVisible', (selector) => {
  cy.get(selector).should('be.visible');
});

Cypress.Commands.add('isExist', (selector) => {
  cy.get(selector).should('exist');
});

Cypress.Commands.add('isEnabled', (selector) => {
  cy.get(selector).should('be.enabled');
});

Cypress.Commands.add('isDisabled', (selector) => {
  cy.get(selector).should('be.disabled');
});

Cypress.Commands.add('isHidden', (selector) => {
  cy.get(selector).should('not.exist');
});

Cypress.Commands.add('hasPlaceholder', (selector, placeholder) => {
  cy.get(selector).invoke('attr', 'placeholder').should('contain', placeholder);
});

Cypress.Commands.add('hasLink', (selector, pagePath) => {
  cy.get(selector).should('have.attr', 'href', pagePath);
});

Cypress.Commands.add('clickOnForgotPassword', (selector) => {
  cy.get(selector).should('be.enabled').click();
});
