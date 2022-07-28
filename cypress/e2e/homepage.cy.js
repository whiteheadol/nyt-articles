describe ('Example', () => {

  beforeEach(() => {
    cy.intercept('GET', "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=GuWKVIUUyA3DlfmPdjbouV6EFbkXQbVv", {
      statusCode: 200,
      fixture: 'articlesData'
    })
    cy.visit('http://localhost:3000')
  });

  it('The user should see a navigation bar and article thumbnails', () => {
    cy.get('.nav-title').should('have.text', 'NYT Article Archive')
    cy.get('.label').should('have.text', 'Explore by category:')
    cy.get('.dropdown').should('exist')

    cy.get('.article-div').first().should('have.text', '')

  })

})
