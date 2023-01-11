import RegistrationPage from '../../page-objects/pages/registrationPage';

describe('Sign-up page window structure', () => {
  beforeEach(() => {
    cy.visit(urlToSignUpPage);
  });

  it('When the users goes to school registration page, they observe all required fields', () => {
    RegistrationPage.windowFieldStructureAssertions(
      shouldBeSelector
    );

    RegistrationPage.windowFieldStructureAssertions(
      shouldBeSelector
    );

    RegistrationPage.windowFieldStructureAssertions(
      shouldBeSelector
    );

    RegistrationPage.windowFieldStructureAssertions(shouldBeSelector);

    RegistrationPage.windowFieldStructureAssertions(
      shouldBeSelector
    );

    RegistrationPage.windowFieldStructureAssertions(
      shouldBeSelector
    );

    RegistrationPage.windowFieldHasPlaceholder(
      shouldBeSelector,
      yourPlaceholderText,
    );

    RegistrationPage.windowFieldHasPlaceholder(
      shouldBeSelector,
      yourPlaceholderText,
    );

    RegistrationPage.windowFieldHasPlaceholder(
      shouldBeSelector,
      yourPlaceholderText,
    );

    RegistrationPage.windowFieldHasPlaceholder(
      shouldBeSelector,
      yourPlaceholderText,
    );

    RegistrationPage.windowFieldHasPlaceholder(
      shouldBeSelector,
      yourPlaceholderText,
    );

    RegistrationPage.windowLinksStructureAssrtions(
      shouldBeSelector,
      linkPath,
    );
  });

  it('Links for create new school is visible for the user', () => {
    RegistrationPage.windowLinksStructureAssrtions(
      shouldBeSelector,
      linkPath,
    );

    RegistrationPage.windowLinksStructureAssrtions(
      shouldBeSelector,
      linkPath,
    );
  });
});
