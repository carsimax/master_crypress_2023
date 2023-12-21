import loginPage from "../Pages/LoginPage";
import {VALID_CREDENTIALS,INVALID_CREDENTIALS,LOCKED_CREDENTIALS} from "../data/LoginData"
describe('Set de Pruebas Login', () => {
  beforeEach(() =>{
    cy.visit(Cypress.env('URL'))
    cy.url().should('include','/')
  })
  //Prueba de un login correcto
  it('Test Login Correcto', () => {
    loginPage.login(VALID_CREDENTIALS.USERNAME,VALID_CREDENTIALS.PASSWORD)
    cy.url().should('include','/inventory.html')
  })
  //Prueba de un login incorrecto
  it('Test Login Incorrecto', () => {
    loginPage.login(INVALID_CREDENTIALS.USERNAME,INVALID_CREDENTIALS.PASSWORD)
    cy.contains(loginPage.userNotFoundMessage)
  })
  //Prueba de un usuario bloqueado
  it('Test Login Bloqueado', () => {
    loginPage.login(LOCKED_CREDENTIALS.USERNAME,LOCKED_CREDENTIALS.PASSWORD)
    cy.contains(loginPage.userBlockedMessage)
  })
})