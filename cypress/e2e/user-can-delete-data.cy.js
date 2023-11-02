describe('template spec', () => {
  //before test case
  beforeEach(() => {
    //reset database using cypress command
    cy.exec(
      "cd ../demo-app-cypress-automation && php artisan migrate:fresh --seed"
    );
    //arrange
    cy.visit('http://127.0.0.1:8000/');
    //act
    cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
    cy.get(':nth-child(3) > .form-control').type('password');
    cy.get('.btn').click();
    cy.visit("http://127.0.0.1:8000/user-management/user");
  });

       //positif test case
  it('user can delete data', () => {
    // cy.get('.table td')
    // .contains('user')
    // .next()
    // .next()
    // .next()
    // .contains('Delete')
    // .click()
    // ;
    // cy.get('.table td').contains('user').nextAll().contains('Delete').click();
    cy.get('.table td')
    .contains('user')
    .parent()
    .find('button')
    .contains('Delete')
    .click();
    //make sure sweet alert visible
    cy.get('.swal-button-container').find('button').contains('OK').click();
    cy.get('.alert')
    .should('be.visible')
    .and('have.class', 'alert-success')
    // .and('have.class', 'User Deleted Successfully')
    .contains('User Deleted Successfully');
    cy.get('.table').should('not.contain', 'user')
  })
   //positif test case
   it('user can cancel delete data', () => {
    //arrange
    //act
     cy.get('.table td')
    .contains('user')
    .parent()
    .find('button')
    .contains('Delete')
    .click();
    //make sure sweet alert visible
    cy.get('.swal-button-container').find('button').contains('Cancel').click();
    //assert
    cy.get('.table td').contains('user').should('be.visible');
   })
  //negative test case
  it('dummy test', () => {
    //arrange
    //act
    //assert
  })

//CHALLENGE
it.only('user can delete data challenge', () => {
  // cy.get('.table td')
  // .contains('user')
  // .next()
  // .next()
  // .next()
  // .contains('Delete')
  // .click()
  // ;
  // cy.get('.table td').contains('user').nextAll().contains('Delete').click();
  cy.get('.table td')
  .contains('User Baru')
  .parent()
  .find('button')
  .contains('Delete')
  .click();
  //make sure sweet alert visible
  cy.get('.swal-button-container').find('button').contains('OK').click();
  cy.get('.alert')
  .should('be.visible')
  .and('have.class', 'alert-success')
  // .and('have.class', 'User Deleted Successfully')
  .contains('User Deleted Successfully');
  cy.get('.table').should('not.contain', 'User Baru')
})
})