import HomePage from '../../support/pageObjects/j2h_homePage_pom.js'

const homePage = new HomePage()

describe('Jet 2 Holidays Regression Testing', function () {

    before(function () {

        cy.fixture('dataHomePage').then(function (data) {
            this.data = data
        })

        cy.OpenSite()

    })

    it.skip('1.Home Page - Top Banner - Navigation', function () {

        cy.title().should('eq', this.data.title)
        cy.location('protocol').should('eq', this.data.protocol)
        homePage.topBannerJet2CityBreaks().should('have.attr', 'href').and('contain', '/city-breaks')
        homePage.topBannerJet2Villas().should('have.attr', 'href').and('contain', '/villas')
        homePage.topBannerIndulgentEscapes().should('have.attr', 'href').and('contain', 'indulgent-escapes')
        homePage.topBannerVibe().should('have.attr', 'href').and('contain', '/vibe')
        homePage.topBannerJet2Com().should('have.attr', 'href').and('contain', '/www.jet2.com')
        homePage.topBannerJet2CarHire().should('have.attr', 'href').and('contain', '/www.jet2carhire.com')
        homePage.topBannerJet2Insurance().should('have.attr', 'href').and('contain', '/www.jet2insurance.com')

    })

    it.skip('2.General Page Navigation', function () {

        homePage.incredibleDealsTitle().should('have.text', 'Incredible Deals')
        homePage.featuredHotelsTitle().should('have.text', 'Featured Hotels')
    })

    it.skip('3.API Positive test', function () {        
        cy.server()        
        cy.route('POST', '/api/jet2/sitesearch/HotelAndRegionList').as('hotelRegionList')
        cy.get('#search-input-desktop').type('menorca')
        cy.wait('@hotelRegionList')
            .its('status').should('eq', 200)
        cy.get('@hotelRegionList').should ((xhr) => {
            expect(xhr.method).to.equal('POST')
            expect(xhr.url).to.contain('HotelAndRegionList')
            expect(xhr.requestHeaders).to.not.be.null
            expect(xhr.requestBody).to.not.be.null
            expect(xhr.responseHeaders).to.not.be.null
            expect(xhr.responseBody).to.not.be.null
            expect(xhr.requestHeaders).to.have.property('Content-Type')
            expect(xhr.responseHeaders).to.include({
                'access-control-allow-origin': 'https://www.jet2holidays.com'
            })
            expect(xhr.responseBody[0].name).to.equal('Majorca')
    })

    it.only('4.API Negative test', function () {        
        cy.server()        
        cy.route('POST', '/api/jet2/sitesearch/HotelAndRegionList', {
            'status': 404
        }).as('hotelRegionList')
        cy.get('#search-input-desktop').type('menorca')
        cy.wait('@hotelRegionList')
    }) 

})
})
