describe('My First test', () => {
    it('verify title-positive', () => {
        //steps
        //launch applications
        //cy can be used to all the commands in cypress

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq', 'OrangeHRM') //Verify title of the page
    })
    it('verify title-Negative test', () => {
        //steps
        //launch applications
        //cy can be used to all the commands in cypress

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.title().should('eq', 'OrangHRM') //Verify title of the page
    })
})