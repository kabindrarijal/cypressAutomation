//CSS selector
//XPath locator can be used using XPath plugin
//cy.get('Locator')
//Supported CSS selectors
// tag id ('#id')
// tag class ('.class')
// tag attribute ([attribute='value'])
// tag class attribute (.class[attribute='value'])
//Note: tag is optional

describe('CSSLocator test',()=>{
    it('CSSLocators',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

        cy.get("[name='username']").type("Admin") //used attribute
       
        cy.get(".oxd-input[name='password']").type("admin123") //using class and attribute
        cy.get(".oxd-button").click() //used class

        cy.get(".oxd-topbar-header-title").contains("Dashboard") //Assertion



    })
})
