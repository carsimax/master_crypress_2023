describe('DemoBlaze', () => {
    beforeEach(() => {
        // cy = se instancia un objeto
        // .visit() = método de cy
        cy.visit('https://www.demoblaze.com/index.html'); // visita la url
        cy.get('#login2').click();
        cy.wait(2000);
        cy.get('#loginusername').first().type('marcosenesi');
        cy.get('#loginpassword').last().type('Cypress01');
        cy.get('#logInModal > div > div > div.modal-footer > button.btn.btn-primary').click();
        cy.wait(2000);
    })

    // it('Registrarse', () => {
    //     cy.get('#signin2').click();
    //     cy.wait(10000);
    //     cy.get('#sign-username').first().type('marcosenesi');
    //     cy.get('#sign-password').last().type('Cypress01');
    //     cy.get('#signInModal > div > div > div.modal-footer > button.btn.btn-primary').click();
    // })
    
    // it("La pagina puede ser abierta", () => {
    //     cy.contains("Home"); // verifica si esa página contiene el string "Home"
    // })

    // .only -> ejecuta solamente este test
    it('Agregar un telefono al carrito y ejecutar la compra', () => {
        const name = 'Marco';
        const country = 'Argentina';
        const city = 'Buenos Aires';
        const card = 1234345;

        cy.contains('Home').click();
        cy.contains('Samsung galaxy s6').click();
        cy.contains('Add to cart').click();
        cy.wait(2000);
        cy.contains('Cart').click();
        cy.get('#page-wrapper > div > div.col-lg-1 > button').click();
        cy.get('#name').type(name);
        cy.get('#country').type(country);
        cy.get('#city').type(city);
        cy.get('#card').type(card);
        cy.get('#month').type('Diciembre');
        cy.get('#year').type('2023');
        cy.get('#orderModal > div > div > div.modal-footer > button.btn.btn-primary').click();
        cy.get('body > div.sweet-alert.showSweetAlert.visible > div.sa-button-container > div > button').click();
    })

    it.only(('Agregar una notebook al carrito'), () => {
        cy.contains('Home').click();
        cy.get('#itemc').should('contain', 'Phones').click();
        // cy.get(#itemc).should('have.css', 'color, 'red'); -> deberia contener un estilo css color:red
    })
})