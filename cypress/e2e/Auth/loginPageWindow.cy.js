import LoginPage from '../../page-objects/pages/loginPage';

describe('Login page window structure', () => {
  beforeEach(() => {
    cy.visit(urlToLoginPage);
  });

  it('When the user goes to the login page, they observe all required fields', () => {
    LoginPage.windowFieldStructureAssertions(shouldBeSelector);

    LoginPage.windowFieldHasPlaceholder(
      shouldBeSelector,
      yourPlaceholderText,
    );

    LoginPage.windowFieldStructureAssertions(shouldBeSelector,);

    LoginPage.windowFieldHasPlaceholder(
      shouldBeSelector,
      yourPlaceholderText,
    );

    LoginPage.windowFieldStructureAssertions(shouldBeSelector,);

    LoginPage.windowLinksStructureAssrtions(
      shouldBeSelector,
      linkPath,
    );

    LoginPage.windowLinksStructureAssrtions(
      shouldBeSelector,
      linkPath,
    );
  });

  it('Login page contain all required links', () => {
    LoginPage.windowLinksStructureAssrtions(
      shouldBeSelector,
      linkPath,
    );

    LoginPage.windowLinksStructureAssrtions(
      shouldBeSelector,
      linkPath,
    );
  });
});
