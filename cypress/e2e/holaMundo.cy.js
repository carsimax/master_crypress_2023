describe('Set de Pruebas 1', () => {
  it('Prueba 1', () => {
    cy.visit('https://www.saucedemo.com/v1/')
    .get('#user-name')
    .type('standard_user')
    .get('#password')
    .type('secret_sauce')
    .get('#login-button').click()
  })
})