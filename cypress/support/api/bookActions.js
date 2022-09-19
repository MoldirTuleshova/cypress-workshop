export const addBook = (userId, collectionOfIsbns) =>
 cy
.request ({
    method: 'POST',
    url: '$Cypress.env('apiUrl')}${Cypress.env('apiAddBook')}',
    body {
        userId: userId,
        collectionOfIsbns,
    },
   })
   //I don't knwo what to write in then, smth like  - expect(response.body).to.have. or it's more suitable for TCs only
   .then((response) => {

   });

 
 export const deleteBook = (isbn, userId) =>
  cy
  .request ({
    method: 'DELETE'
    url: '$Cypress.env('apiUrl')}${Cypress.env('apiDeleteBook')}',
    body {
        isbn: isbn,
        userId: userId,
    },
  })
   .then ((response) => {

   }
