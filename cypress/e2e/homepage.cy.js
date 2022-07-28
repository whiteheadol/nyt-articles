describe ('Example', () => {

  beforeEach(() => {
    cy.intercept('GET', "http://localhost:4000/api/v1/rivers", {
      statusCode: 200,
      fixture: 'miniRiverData'
    })
    cy.visit('http://localhost:3000/')
  });

  it('Should be true', () => {
    cy.visit('http://localhost:3000/')
  })

})
