/// <reference types="Cypress" />

describe('Locators: Get elements by different locator strategies', () => {
  beforeEach('Navigate to test page', () => {
    cy.visit('/automation-practice-form');
  });

  xit('Check different locators strategies', () => {
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
    //added by me
      //cy.get ('#currentAddress').then((element) => {
       // expect(element).to.be.a('textarea');
      //}); 
    }); 
    
    //added by me
    it('Check with should and expect', () => { 
    //should assert
      //cy.get (['#city'])
        //.should('be.disabled');
      
    // state and city fieds 
     //cy.get ('#state').then((element) => {
       //expect(element).to.be.empty; //actually itsn't empty
     //})

     //cy.get('.dropdown-menu') - this is from cy doc with get examples
      //.should('have.lenth', 5)
     
    cy.get('[for="hobbies-checkbox-1"]')
      .should('contain', 'Sports')
      .and('have.class', 'custom-control-label');

    cy.get ('#hobbies-checkbox-2')
    .should('not.be.checked');
    });  
  });