// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import selectors from '../fixtures/selectors.json'
const { faker } = require("@faker-js/faker");

Cypress.Commands.add('accountFill', () => {
    let data = {
        userName: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        birthDate: faker.number.int({ min: 1, max: 31 }),
        birthMonth: faker.date.month(),
        birthYear: faker.number.int({ min: 1990, max: 2005 }).toString(),
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        address: faker.location.streetAddress(),
        city: faker.location.city(),
        state: faker.location.state(),
        zipCode: faker.location.zipCode(),
        mobileNumber: faker.phone.number('##########'),
    }

    cy.get(selectors.inputName).type(data.userName);
    cy.get(selectors.inputEmail).type(data.email);
    cy.get(selectors.inputButton).click();
    cy.get(selectors.radioAccountGender).first().click()
    cy.get(selectors.inputAccountPassword).type(data.password);
    cy.get(selectors.selectAccountBirthDay).select(data.birthDate);
    cy.get(selectors.selectAccountBirthMonth).select(data.birthMonth);
    cy.get(selectors.selectAccountBirthYear).select(data.birthYear);
    cy.get(selectors.inputAccountFirstName).type(data.firstName);
    cy.get(selectors.inputAccountLastName).type(data.lastName);
    cy.get(selectors.inputAccountAddress).type(data.address);
    cy.get(selectors.inputAccountCountry).select('United States');
    cy.get(selectors.inputAccountState).type(data.state);
    cy.get(selectors.inputAccountCity).type(data.city);
    cy.get(selectors.inputAccountZipcode).type(data.zipCode);
    cy.get(selectors.inputAccountMobile).type(data.mobileNumber);
    cy.get(selectors.buttonAccountCreateAccount).click();
    cy.get(selectors.continueButton).click();

    return cy.wrap(data);
})

Cypress.Commands.add('productSelection', () => {
    cy.get(selectors.productSelectorA).first().click();
    cy.get(selectors.quantityInput).clear().type('30');
    cy.get(selectors.addToCart).should('contain.text', selectors.addToCartText).click();
    cy.get(selectors.viewCartLink).last().click();
    cy.url().should('eq', selectors.urlViewCart);
    cy.get(selectors.checkoutButton).click();
    cy.get(selectors.loginButton).last().click();
    cy.url().should('eq', selectors.loginUrl);
})


Cypress.Commands.add('cardFill', () => {

    let data = {
        cardName: faker.person.fullName(),
        cardNumber: faker.finance.creditCardNumber(),
        cardCVC: faker.finance.creditCardCVV(),
        cardMonth: faker.date.month({ abbreviated: true }),
        cardYear: faker.number.int({ min: 2026, max: 2028 }).toString(),

    }

    cy.get(selectors.inputCardName).type(data.cardName);
    cy.get(selectors.inputCardNumber).type(data.cardNumber);
    cy.get(selectors.inputCardCvC).type(data.cardCVC);
    cy.get(selectors.inputCardExp).type(data.cardMonth);
    cy.get(selectors.inputCardYear).type(data.cardYear);
    cy.get(selectors.buttonCardSubmit).click();

})