import { Factory } from 'rosie';
import { generateRandomEmail, generateRandomPassword } from '../support/faker';

export const User = new Factory().attrs({
  email: '',
  password: '',
});

export const DefaultUser = new Factory().extend(User).after((entity) => {
  return {
    ...entity,
    email: Cypress.env('userLogin'),
    password: Cypress.env('userPassword'),
  };
});

export const incorrectUser = new Factory().extend(User).after((entity) => {
  return {
    ...entity,
    email: generateRandomEmail(),
    password: generateRandomPassword(),
  };
});
