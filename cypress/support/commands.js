import HomePage from './pageObjects/j2h_homePage_pom.js'

const homePage = new HomePage()

Cypress.Commands.add('OpenSite', () => {

    cy.visit(Cypress.env('baseUrl'), {
        headers: {
            "Accept-Encoding": "gzip, deflate"
        }
    })

    homePage.cookiesAcceptButton().click()
})