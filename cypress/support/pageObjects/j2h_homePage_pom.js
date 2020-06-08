class HomePage {

    cookiesAcceptButton() {
        return cy.get('#onetrust-accept-btn-handler')
    }

    topBannerJet2CityBreaks() {
        return cy.get('.hub-nav-menu__item').contains('Jet2CityBreaks')
    }

    topBannerJet2Villas() {
        return cy.get('.hub-nav-menu__item').contains('Jet2Villas')
    }

    topBannerIndulgentEscapes() {
        return cy.get('.hub-nav-menu__item').contains('Indulgent Escapes')
    }

    topBannerVibe() {
        return cy.get('.hub-nav-menu__item').contains('VIBE')
    }

    topBannerJet2Com() {
        return cy.get('.hub-nav-menu__item').contains('Jet2.com')
    }

    topBannerJet2CarHire() {
        return cy.get('.hub-nav-menu__item').contains('Jet2carhire')
    }

    topBannerJet2Insurance() {
        return cy.get('.hub-nav-menu__item').contains('Jet2insurance')
    }

    incredibleDealsTitle() {
        return cy.get('h2.section-head__title.section-head').eq(0)
    }

    featuredHotelsTitle() {
        return cy.get('h2.section-head__title.section-head').eq(1)
    }

}

export default HomePage;