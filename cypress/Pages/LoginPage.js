class loginPage{
    constructor() {
        //Elementos de LoginPage
        this.username = '#user-name'
        this.password = '#password'
        this.submitButton = '#login-button'
        //Mensajes de LoginPage
        this.userNotFoundMessage= 'Epic sadface: Username and password do not match any user in this service'
        this.userBlockedMessage= 'Epic sadface: Sorry, this user has been locked out.'
    }
    login(username,password){
        cy.get(this.username)
            .type(username)
            .get(this.password)
            .type(password)
            .get(this.submitButton)
            .click()
    }
}
export default new loginPage()
