import { Factory } from 'rosie';
import {
  generateRandomFirstName,
  generateRandomLastName,
  generateRandomPhone,
  generateRandomEmail,
  generateRandomPassword,
} from '../support/faker';

const Registration = new Factory().attrs({
  firstName: '',
  lastName: '',
  phoneNumber: '',
  email: '',
  password: '',
});

export const allRegistrationData = new Factory().extend(Registration).after((entity) => {
  return {
    ...entity,
    firstName: generateRandomFirstName(),
    lastName: generateRandomLastName(),
    phoneNumber: generateRandomPhone(),
    email: generateRandomEmail(),
    password: generateRandomPassword(),
  };
});

export const missedRegistrationData = new Factory().extend(Registration).after((entity) => {
  return {
    ...entity,
    firstName: generateRandomFirstName(),
    lastName: generateRandomLastName(),
    password: generateRandomPassword(),
  };
});
