Cypress.Commands.add('login', (model) => {
  if (model.email) {
    cy.get(emailFieldSelector).type(model.email);
  }
  if (model.password) {
    cy.get(passwordFieldSelector).type(model.password);
  }
  cy.get(submitButtonSelector).click();
});

Cypress.Commands.add('fillRegistrationForm', (model) => {
  if (model.firstName) {
    cy.get(firstNameFieldSelector).type(model.firstName);
  }
  if (model.lastName) {
    cy.get(lastNameFieldSelector).type(model.lastName);
  }
  if (model.phoneNumber) {
    cy.get(phoneFieldSelector).type(model.phoneNumber);
  }
  if (model.email) {
    cy.get(emailFieldSelector).type(model.email);
  }
  if (model.password) {
    cy.get(passwordFieldSelector).type(model.password);
  }
  cy.get(submitButtonSelector).click();
});
