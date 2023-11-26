class CRIC {
  visitCricbuzz(){
    cy.visit('https://www.cricbuzz.com/')
  }
  livescore(){
    cy.get('a[title="Live Cricket Score"]').click()
    cy.get('h1[class="cb-nav-hdr cb-font-24 line-ht30"]').should('have.text', 'Live Cricket Score')
    cy.get('a[class="cb-mat-mnu-itm cb-ovr-flo"]').first().click()
    cy.get('h2[class="cb-font-20 text-bold inline-block ng-binding"]').should('be.visible')
  }
}

export default CRIC;