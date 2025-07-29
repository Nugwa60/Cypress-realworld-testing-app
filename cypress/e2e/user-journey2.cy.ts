describe("User journey", () => {

    beforeEach(() => {
        // Step 1: Visit the homepage
    cy.visit('http://localhost:3000'); 
  })

  it("Course: Testing Your First Next.js Application", () => {
   

    // Step 2: Click the 'get-started' button
    cy.getByData("get-start-1")
      .should('exist')
      .eq(0)
      .click();

    // Step 3: Verify navigation to the course page
    cy.location("pathname")
      .should("eq", "/testing-your-first-application");

    // Step 4: Verify and click course progress links
    cy.getByData("lesson-progress-link-0")
      .contains("App Install and Overview")
      .should("be.visible")
      .click();
    cy.getByData("lesson-progress-link-1")
      .contains("Installing Cypress and writing our first test")
      .should("be.visible")
      .click();
    cy.getByData("lesson-progress-link-2")
      .contains("Setting up Data Before Each Test")
      .should("be.visible");

    // Step 5: Start the course by clicking 'next lesson' button
    cy.get('[data-test="next-lesson-button"]')
      .should('exist')
      .click();

    // Step 6: Verify navigation to the first lesson page
    cy.location("pathname")
      .should("eq", "/testing-your-first-application/app-install-and-overview");

    // Step 7: Complete the first quiz and proceed
    cy.getByData('challenge-answer-0')
      .check();
    cy.get('[data-test="next-lesson-button"]')
      .should('exist')
      .click();

    // Step 8: Verify navigation to the second lesson page
    cy.location("pathname")
      .should("eq", "/testing-your-first-application/installing-cypress-and-writing-our-first-test");

    // Step 9: Complete the second quiz and proceed
    cy.getByData("challenge-answer-0")
      .click();
    cy.getByData('next-lesson-button')
      .should('exist')
      .click();

    // Step 10: Verify navigation to the third lesson page
    cy.location("pathname")
      .should("eq", "/testing-your-first-application/setting-up-data-before-each-test");

    // Step 11: Complete the third quiz and proceed
    cy.getByData("challenge-answer-0")
      .click();
    cy.getByData("next-lesson-button")
      .should("exist")
      .click();

    // Step 12: Verify navigation back to the homepage
    cy.location("pathname")
      .should("eq", "/");
  });

  it("Course: Testing Foundations", () => {

    cy.getByData("get-started").should('exist').click();

    // Assert it is on the right page
    cy.location("pathname").should("equal", "/testing-foundations");

    // Assert that courses link are present
    cy.getByData("lesson-progress-link-0").should("exist").contains("Testing is a Mindset");
    cy.getByData("lesson-progress-link-1").should("exist").contains("Knowing What to Test");
    cy.getByData("lesson-progress-link-2").should("exist").contains("Manual vs Automated Testing");

    // Assert on the Start Course button
    cy.getByData("next-lesson-button").should("exist").contains("Start Course").click();

    // Assert it is on the correct page
    cy.location("pathname").should("eq", "/testing-foundations/testing-is-a-mindset");

    // Take the quiz by selecting the true option and clicking on the next course button
    cy.getByData("challenge-answer-0").check();
    cy.getByData("next-lesson-button").contains("Next Lesson").should("be.visible").click();
    
    // Assert that its redirected to correct page
    cy.location("pathname").should('eq', '/testing-foundations/knowing-what-to-test');

    // Take the quiz by selecting the true option and clicking on the next course button
    cy.getByData("challenge-answer-0").check();
    cy.getByData("next-lesson-button").contains("Next Lesson").should("be.visible").click();

    // Assert that its redirected to correct page
    cy.location("pathname").should('eq','/testing-foundations/manual-vs-automated-testing');

    //   Take the quiz by selecting the true option and clicking on the next course button
    cy.getByData("challenge-answer-0").check();
    cy.getByData("next-lesson-button").contains("Complete Course").should("be.visible").click();

    // Assert that it directs to the homepage
    cy.location("pathname").should("eq", "/");

    // Clear all cookies to reset the session
    cy.clearAllCookies()

  })
  
});
