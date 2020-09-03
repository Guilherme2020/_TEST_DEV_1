import { cyan } from "color-name"
import { AssertionError } from "assert"

/*
Task #4
Write down a simple integration test to the task #3 you did before.
No need to check all the data retrieved by the button pushing. Just a Company name would be enough !
*/
describe('Test to be fulfilled by the candidate', () => {
  it('push the button implemented on task #3 and shows the company names', () => {
      let nameCompany = '';

      cy.visit('http://localhost:4200')
      cy.wait(3000);
      cy.get('.btn-get-company').click();

      cy.get(':nth-child(1) > .card-style > div > h4').then(($path) => {
        nameCompany = $path.text();
        cy.log($path.text())
      })
      cy.wait(3000);
      cy.get(':nth-child(1) > .card-style > div > h4').should(($path) => {
        expect($path.text()).to.equal(nameCompany);
      })

      cy.pause();
  })
})
