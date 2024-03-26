import selectors from '../fixtures/selectors.json'

describe('User flow test', () => {

  it('should perform the user flow', () => {
    cy.visit('/');
    cy.url().should('eq', selectors.urlHome);
    cy.scrollTo('center');
    //Product selection
    cy.productSelection();
    //Account filler
    cy.accountFill().then((data) => {
      cy.get(selectors.viewCartLink).first().click();
      cy.get(selectors.checkoutButton).click();
      cy.get(selectors.textAreaComment).type('I like this product');
      cy.get(selectors.buttonCheckout).click();
      //
      cy.cardFill();
      //
      cy.get(selectors.buttonContinue).click();
      cy.get(selectors.linkLogout).click();
      //
      cy.get(selectors.inputLoginEmail).type(data.email);
      cy.get(selectors.inputPassword).type(data.password);
      cy.get(selectors.buttonLogin).click();
      //Contact
      cy.get(selectors.linkContactUs).click();
      cy.get(selectors.inputNameContact).type(data.firstName);
      cy.get(selectors.inputEmailContact).type(data.email);
      cy.get(selectors.inputSubject).type("Product did not arrive");
      cy.get(selectors.textAreaMessageContact).type("Test comment");
      cy.get(selectors.buttonSubmitContact).click();
      cy.get(selectors.linkLogout).click();

    });
  


  })
})