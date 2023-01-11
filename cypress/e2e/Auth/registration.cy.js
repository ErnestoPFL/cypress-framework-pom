import RegistrationPage from '../../page-objects/pages/registrationPage';
import { allRegistrationData, missedRegistrationData } from '../../factories/registration';


describe('School registration', () => {
  beforeEach(() => {
    cy.visit(urlToregisterSchool);
  });

  it('User is able successfully register new school', () => {
    const model = allRegistrationData.build();
    RegistrationPage.fillRegistrationForm(model);
    cy.get(selectorToNameInitials).should(
      'have.text',
      shouldBeYourFullNameForAssert
    );
  });

  it('Error message appears when the user has entered incorrect data and tries to sign up school', () => {
    const model = missedRegistrationData.build();
    RegistrationPage.fillRegistrationForm(model);
    RegistrationPage.displayErrorMessage();
    cy.contains(shouldBeErrorMessage);
    cy.contains(shouldBeErrorMessage);
  });
});
