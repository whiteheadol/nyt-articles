describe ('Saved Articles', () => {

  beforeEach(() => {
    cy.intercept('GET', "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=GuWKVIUUyA3DlfmPdjbouV6EFbkXQbVv", {
      statusCode: 200,
      fixture: 'articlesData'
    })

    cy.visit('http://localhost:3000')
  });

  it('The user should be able to save an article to read later', () => {
    cy.get('.article-div').first().click()
    cy.get('.save-btn').click()
  })

  it('The user should be able to navigate to their saved articles and view details', () => {
    cy.get('.article-div').first().click()
    cy.get('.save-btn').click()

    cy.get('.saved-btn').click()
    cy.url('http://localhost:3000/saved')

    cy.get('.article-div').should('contain', 'Viral Infections and Gene Variant Are Linked to Child Hepatitis Cases')
    cy.get('.article-div').should('contain', 'By Emily Anthes')

    cy.get('.article-div').click()

    cy.get('.details-title').should('contain', 'Viral Infections and Gene Variant Are Linked to Child Hepatitis Cases')
    cy.get('.details-byline').should('contain', 'By Emily Anthes')
    cy.get('.details-abstract').should('contain', 'Some of the children were infected with adeno-associated virus 2 and shared a relatively uncommon gene variant, according to two small studies.')
    cy.get('.details-link').should('contain', 'Full Article')
    cy.get('.details-href').should('have.attr', 'href')
  })

  it('The user should be able to navigate back home', () => {
    cy.get('.article-div').first().click()
    cy.get('.save-btn').click()

    cy.get('.saved-btn').click()
    cy.url('http://localhost:3000/saved')

    cy.get('.home-btn').click()
    cy.url('http://localhost:3000')
  })

})
