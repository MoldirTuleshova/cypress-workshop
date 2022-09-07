/// <reference types="Cypress" />

import { auth } from '../../support/bookstore_page_objects/auth';
import { bookActions } from '../../support/bookstore_page_objects/book_store';
import { profileActions } from '../../support/bookstore_page_objects/profile';
import { navigateTo } from '../../support/bookstore_page_objects/navigation';

describe('Collections: Add Book To Collection', () => {
  // Perform login
  beforeEach('Perform login', () => {
    navigateTo.login();
    cy.fixture('users').then((users) => {
      auth.login(users.user2.username, users.user2.password);
    });
  });

  // Delete the book from collection
  afterEach('Delete book from profile collection', () => {
    cy.fixture('books').then((books) => {
      profileActions.deleteBookFromTable(books.collection1.Git, 'ok');
      cy.verifyWindowAlertText(`Book deleted.`);
      cy.get('.rt-tbody').should('not.contain', books.collection1.Git);
      //profileActions.deleteBookFromTable(books.collection1.DesignPatternsJS, 'ok');
      //cy.verifyWindowAlertText(`Book deleted.`);
      //cy.get('.rt-tbody').should('not.contain', books.collection1.DesignPatternsJS);
      //profileActions.deleteBookFromTable(books.collection1.SpeakingJS, 'ok');
      //cy.verifyWindowAlertText(`Book deleted.`);
      //cy.get('.rt-tbody').should('not.contain', books.collection1.SpeakingJS);
      cy.get('.rt-noData').should('contain', 'No rows found').should('be.visible');
    });
  });

  it('Check adding book to profile collection', () => {
    // Navigate to book store
    navigateTo.bookStoreFromProfile();
    // Load books fixture
    cy.fixture('books').then((books) => {
      // Add first books to collection
      bookActions.addBookToCollection(books.collection1.Git);
      // Handle alert and verify alert message
      cy.verifyWindowAlertText(`Book added to your collection.`);
      // Navigate to user profile and verify that book is in collection table
      navigateTo.profile();
      cy.get('.rt-tbody').find('.rt-tr-group').first().should('contain', books.collection1.Git);
    });
  });
 
  xit('Check adding several books to profile',() => {
    //Added by Moldir
    //Navigate to book store
    navigateTo.bookStoreFromProfile();
    cy.fixture('books').then((books) => {
      //1st book
    bookActions.addBookToCollection(books.collection1.DesignPatternsJS);
    cy.verifyWindowAlertText('Book added to your collection.');
    navigateTo.bookStoreFromBookDetPage();
    //do we need to call fixture here too or it can be skipped??
    //cy.fixture('books').then((books) => {
      //2nd book
    bookActions.addBookToCollection(books.collection1.SpeakingJS);
    //alert
    cy.verifyWindowAlertText('Book added to your collection.');
    //verify that books in table on profile page
    navigateTo.profile();
    //cy.get()
    });
  });
});