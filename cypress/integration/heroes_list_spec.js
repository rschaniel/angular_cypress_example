describe('Testing the hero list page', function() {

  it('should have heroes in the list', function() {
    cy.visit('http://localhost:4200/heroes');

    const heroesListElements = cy.get('ul.heroes > li');
    heroesListElements.should('have.length', 10);
  });

  it('should add a new hero to the list when creating a new hero', function() {
    cy.visit('http://localhost:4200/heroes');

    cy.get('input').type("Dr. Angular");
    cy.get('button').click();

    const heroesListElements = cy.get('ul.heroes > li');
    heroesListElements.should('have.length', 11);
  });

});
