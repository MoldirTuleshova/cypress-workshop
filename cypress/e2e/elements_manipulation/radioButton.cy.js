/// <reference types="Cypress" />

describe('Radio Buttons: Radio Button actions', () => {
    before('Navigate to radio buttons page', () => {
      cy.visit('/radio-button');
    });
  
    it('Check different radio button actions', () => {
      cy.get('.custom-radio')
        .find('[type="radio"]')
        .then((radio) => {
          /* Get all radio buttons, select first one and verify that it is 
           checked and that we got confirmation text */
          cy.get('#yesRadio').check({ force: true }).should('be.checked');
          cy.contains('.text-success', 'Yes');
  
          /* Get all radio buttons, select second one and verify that it is 
           checked and that we got confirmation text */
          cy.get('#impressiveRadio').check({ force: true }).should('be.checked');
          cy.contains('.text-success', 'Impressive');
  
          // Verify that first radio button is no longer checked
          cy.get('#yesRadio').should('not.be.checked');
  
          // Verify that third button is disabled
          cy.get('#noRadio').should('be.disabled');
        });
    });
  });
  