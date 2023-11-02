describe('User Can Open Login Page', () => {
  it('User can open login page edited', () => {
    cy.visit('http://127.0.0.1:8000/')
    cy.get('h4').should("have.text", "Login")
  })
})