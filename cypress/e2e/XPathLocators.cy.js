// XPath locators
// cy.xpath(Xpath)
describe('XPath Locators', () => {
    it('Find numbers of cards', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get("[name='username']").type("Admin") //used attribute

        cy.get(".oxd-input[name='password']").type("admin123") //using class and attribute
        cy.get(".oxd-button").click() //used class

        cy.get(".oxd-topbar-header-title").contains("Dashboard") //Assertion

        //  Note: .get is only used for selecting CSS

        cy.xpath("//ul[@class='oxd-main-menu']/li").should('have.length', 11) //using XPath
    })

    it('Chained xpath',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get("[name='username']").type("Admin") //used attribute

        cy.get(".oxd-input[name='password']").type("admin123") //using class and attribute
        cy.get(".oxd-button").click() //used class

        cy.get(".oxd-topbar-header-title").contains("Dashboard") //Assertion

        //  Note: .get is only used for selecting CSS
        cy.xpath("//ul[@class='oxd-main-menu']").xpath("./li").should('have.length', 11) //using Chanined XPath
    })
})