import { faker } from '@faker-js/faker';
import { DATA_PREFIX } from '../constants';
import moment from 'moment-timezone';
const { sample } = Cypress._;

export const generateRandomEmail = () =>
  `${DATA_PREFIX}${moment().format('x')}_${faker.internet.email().toLowerCase()}`;
export const generateRandomFirstName = () => `${DATA_PREFIX}${faker.name.firstName()}`;
export const generateRandomLastName = () => `${DATA_PREFIX}${faker.name.lastName()}`;
export const generateRandomPassword = () => `${DATA_PREFIX}${faker.internet.password(10, true)}`;

// Contacts
const carrierCodes = [shouldBeCarrierCodes];
export const generateRandomPhone = () => faker.phone.phoneNumber(`${shouldbeCountryCode}${sample(carrierCodes)}####`);
