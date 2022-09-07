export class NavigateTo {
  login() {
    cy.visit('/login');
  }

  profile() {
    cy.visit('/profile');
  }

  bookStoreFromProfile() {
    cy.get('#gotoStore').click();
  }
  
  //Added new nav by Moldir
  //button Back to Bookstore on UI
  bookStoreFromBookDetPage() {
    cy.get('.text-left > #addNewRecordButton').click();
    //cy.get('[class="text-left fullButton"]').click();
  }

}

export const navigateTo = new NavigateTo();
