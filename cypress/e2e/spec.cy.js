Cypress.on('uncaught:exception', () => {
    return false;
});

describe('template spec', () => {
    it('Connection a un compte', () => {
        cy.visit('https://www.doctolib.fr/')
        cy.wait(500)
        cy.get('#didomi-notice-disagree-button').click();


    })
})