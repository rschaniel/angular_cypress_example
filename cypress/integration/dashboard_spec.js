describe('Testing the hero dashboard page', function() {

  it('should contain the word heroes', function() {
    cy.visit('http://localhost:4200');
    cy.contains("Heroes");
  })

});
