describe('homepage', () => {
  beforeEach(() => {
  cy.visit('http://localhost:3000');
  })

  context("hero section", () => {
    it('Homepage header contains correct text', () => {
    cy.get('[data-test="hero-heading"]')
      .should('exist')
      .contains('Testing Next.js Applications with Cypress');

  })
    it("Homepage contains correct features", () => {
      cy.get('dt').eq(0).contains('4 Courses');
      cy.get('dt').eq(1).contains('25+ Lessons');
      
    })
  })

  context("courses section", () => {

    it("Course: Testing Your First Next.js Application", () => {
     cy.getByData("get-start-1").eq(0).click();
     cy.location('pathname').should('eq', '/testing-your-first-application'); 
    })
    it("Course: Testing Foundations", () => {
    cy.getByData("get-started").click();
    cy.location("pathname").should("eq", "/testing-foundations"); 
  })
  it("Course: Cypress Fundamentals", () => {
    cy.getByData("get-start-1").eq(1).click();
    cy.location("pathname").should("eq", "/cypress-fundamentals");
  })
  })
  
})