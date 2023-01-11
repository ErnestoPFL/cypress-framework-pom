import LoginPage from '../../page-objects/pages/loginPage';
import { DefaultUser, incorrectUser } from '../../factories/user';

describe('Login to Application', () => {
  beforeEach(() => {
    cy.visit(shouldbeURL);
  });

  it('User is able successfully to login to application', () => {
    const model = DefaultUser.build();
    LoginPage.login(model);
    cy.get(userNameSelector).should(
      'have.text',
      yourAssertionCredentials
    );
  });

  it('Error message appears when the user has entered incorrect data and tries to log into application', () => {
    const model = incorrectUser.build();
    LoginPage.login(model);
    LoginPage.displayErrorMessage();
  });
});
