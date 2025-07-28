describe('Subscribe', () => {
  beforeEach(() => {
  cy.visit('http://localhost:3000');

  })

  it("subscribe with valid email", () => {
    cy.getByData("email-input").type("peka@yopmail.com")
    cy.getByData("submit-button").click();
    cy.getByData("success-message").should('exist').contains("Success: peka@yopmail.com has been successfully subscribed");
  })

  it("user cannot subscribe with invalid email", () => {
    cy.getByData("email-input").type("pek");
    cy.getByData("submit-button").click();
    cy.getByData("success-message").should("not.exist");
  })

   it("User cannot Subscibe with same email", () => {
    cy.getByData("email-input").type("john@example.com")
    cy.getByData("submit-button").click();
    cy.getByData("server-error-message").should('exist').contains("Error: john@example.com already exists. Please use a different email address.");
 }) 
 
 it("does NOT allow an invalid email address", () => {
  cy.getByData("email-input").type("invalidEmail")
  cy.getByData("submit-button").click()

  cy.getByData("email-input").then(($input) => {
    const inputEl = $input[0] as HTMLInputElement
    const message = inputEl.validationMessage

    expect(message).to.contain("Please include an '@' in the email address.");
  })
})
})