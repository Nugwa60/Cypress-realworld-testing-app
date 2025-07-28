/// <reference types="cypress" />


// cypress/support/commands.ts

// Cypress.Commands.add("getByData", (selector: string) => {
//   return cy.get(`[data-test="${selector}"]`);
// });

declare namespace Cypress {
  interface Chainable {
    getByData(dataTestAttribute: string): Chainable<JQuery<HTMLElement>>
  }
}

Cypress.Commands.add("getByData", (selector) => {
  return cy.get(`[data-test="${selector}"]`);
});
