///<reference types="cypress"/>

export function verifyDashboardPageUrl() {
    cy.url().should('contain', 'https://opensource-demo.orangehrmlive.com/index.php/dashboard')
}