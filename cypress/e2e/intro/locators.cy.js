/// <reference types="Cypress" />

describe('Locators: Get elements by different locator strategies', () => {
  beforeEach('Navigate to test page', () => {
    cy.visit('/automation-practice-form');
  });

  it('Check different locators strategies', () => {
    // By id
    cy.get('#firstName');

    // By tag name
    cy.get('input');

    // By attribute name
    cy.get('[placeholder]');

    // By attribute name and value
    cy.get('[placeholder="First Name"]');

    // By class name
    cy.get('.col-md-3');

    // By class value
    cy.get('[class="mr-sm-2 form-control"]');

    // By tag name and attribute with value
    cy.get('input[placeholder="First Name"]');

    // By different attributes
    cy.get('[placeholder="First Name"][id="firstName"]');

    // By tag name, attribute with value, ID and class name
    cy.get('input[placeholder="First Name"]#firstName.form-control');

    // // Recommended way - unique attribute + value
    // cy.get('[data-test="first_name"]');
  });

  xit('Check finding elements by travelling through DOM', () => {
    // Travel through DOM to find Submit button
    cy.get('#firstName').parents('form').find('button').should('contain', 'Submit');
  });

  xit('Check different types of assetions', () => {
      // Should assertion
      cy.get('[for="gender-radio-2"]')
        .should('contain', 'Female')
        .and('have.class', 'custom-control-label');
  });  
          
  xit('Check expect assertion', () => {
    // Expect assertion
      cy.get('[for="gender-radio-2"]').then((element) => {
        expect(element).to.have.text('Female');
        //and(element).to.have.class('custom-control-label');
      });

    //TC1 added by me 
      //cy.get ('#currentAddress').then((element) => {
       // expect(element).to.be.a('textarea');
      //}); 
    }); 
    
    //TC2 added by me
    xit('Check with should and expect', () => { 
    //should assert
      cy.get('#react-select-4-input')
        .should('be.disabled');
    }); 
    //TC3 state and city fieds 
     //cy.get ('[class="css-1wa3eu0-placeholder"]').then((element) => {
      // expect(element).to.have.text('Select State'); //actually itsn't empty
     //})
    
     xit('TC4-1st option with index', () => { 
      cy.get ('#state') 
        .eq(0)
        .should('contain.text','NCR');
  
      cy.get ('#state')
         .eq(0)
         .should('contain.text', 'Uttar Pradesh');
      }); 
  
      xit('TC4-2nd option - select method', () => { 
      cy.fixture('state').then((state) => {
      cy.get('#state option').each((option, index) => {
         const optionText = option.text();
         cy.get('#state')
           .select(optionText)
           .should('have.value', option.val())
           .contains(state[index]); 
          });      
        });  
      }); 
   
    it('TC4-3rd option - single select', () => {
      cy.get('#state').click();
      cy.get('#react-select-3-option-2').click();
      cy.get('#state').contains('Haryana')
    }
    )

  
  xit('check with should', () => {   
     cy.get('[for="hobbies-checkbox-1"]')
       .should('contain', 'Sports')
       .and('have.class', 'custom-control-label');

    cy.get ('#hobbies-checkbox-2')
    .should('not.be.checked');
    });
  
  });