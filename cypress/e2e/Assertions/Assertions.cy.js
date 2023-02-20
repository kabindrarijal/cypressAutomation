//Cypress Assertions

//1) Implicit assertions
//     should
//     and  
//2) Explicit assertions
//     expect     
//     assert

const visit = () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
}

describe("Assertions Demo", () => {
    it('Implicit Assertions', () => {
        visit()
        // using should and
        cy.url().should('include', 'orangehrmlive.com') //the url should contain given string
        cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') // given url should be equal to given string
        cy.url().should('contain', 'orangehrmlive')


    })
    it('using should', () => {
        visit()
        cy.url().should('include', 'orangehrmlive.com') //the url should contain given string
            .should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') // given url should be equal to given string
            .should('contain', 'orangehrmlive')
        //Note instead of capturing url multiple time .should keyword can be used as seen above example

        //same assertin can be written using and keyword
    })

    it('using and', () => {
        visit()
        cy.url().should('include', 'orangehrmlive.com') //the url should contain given string
            .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') // given url should be equal to given string
            .and('contain', 'orangehrmlive')
        //Note instead of capturing url multiple time .and keyword can be used as seen above example


    })


    //negative assertions    
    it('negative assertions', () => {
        visit()
        cy.url().should('include', 'orangehrmlive.com') //the url should contain given string
            .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') // given url should be equal to given string
            .and('not.contain', 'jeeahrangehrmlive') //using not.contain is negative assertions
        //Note instead of capturing url multiple time .and keyword can be used as seen above example       
    })

    //title assertions for checkoing title of the page
    it('title assertion', () => {
        visit()
        cy.url().should('include', 'orangehrmlive.com') //the url should contain given string
            .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') // given url should be equal to given string
            .and('not.contain', 'jeeahrangehrmlive') //using not.contain is negative assertions

        cy.title().should('include', 'Orange')
            .and('eq', 'OrangeHRM')
            .and('contain', "HRM")

    })
    it('validate logo element visibility', () => {
        visit()
        cy.get('.orangehrm-login-branding > img').should('be.visible') //Checking visibility of element
            .and('exist') //Checking existence of element
    })
})