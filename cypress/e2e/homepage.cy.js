describe ('Homepage', () => {

  beforeEach(() => {
    cy.intercept('GET', "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=GuWKVIUUyA3DlfmPdjbouV6EFbkXQbVv", {
      statusCode: 200,
      fixture: 'articlesData'
    })

    cy.intercept('GET', "https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=GuWKVIUUyA3DlfmPdjbouV6EFbkXQbVv", {
      statusCode: 200,
      fixture: 'artData'
    })

    cy.visit('http://localhost:3000')
  });

  it('The user should see a navigation bar and article thumbnails', () => {
    cy.get('.nav-title').should('have.text', 'NYT Article Archive')
    cy.get('.label').should('have.text', 'Explore by category:')
    cy.get('.dropdown').should('exist')

    cy.get('.article-div').first().should('contain', 'Viral Infections and Gene Variant Are Linked to Child Hepatitis Cases')
    cy.get('.article-div').first().should('contain', 'By Emily Anthes')

    cy.get('.article-div').last().should('contain', 'Buzz Aldrin’s Space Memorabilia Sells for More Than $8 Million')
    cy.get('.article-div').last().should('contain', 'By Christine Chung')
  })

  it('The user should be able to click on a thumbnail to view more detailed information about the article', () => {

    cy.get('.article-div').first().click()

    cy.get('.details-title').should('contain', 'Viral Infections and Gene Variant Are Linked to Child Hepatitis Cases')
    cy.get('.details-byline').should('contain', 'By Emily Anthes')
    cy.get('.details-abstract').should('contain', 'Some of the children were infected with adeno-associated virus 2 and shared a relatively uncommon gene variant, according to two small studies.')
    cy.get('.details-link').should('contain', 'Full Article')
    cy.get('.details-href').should('have.attr', 'href')
  })

  it('The user should be able to click on a thumbnail to view more detailed information about the article', () => {

    // setTimeout(() => {
      cy.get('select').select('arts')
      cy.get('.article-div').should('contain', 'Who Can Play the King? Questions of Representation Fuel Casting Debates.')
      cy.get('.article-byline').should('contain', 'By Marc Tracy')

      cy.get('.article-div').click()
      cy.get('.details-title').should('contain', 'Who Can Play the King? Questions of Representation Fuel Casting Debates.')
      cy.get('.details-byline').should('contain', 'By Marc Tracy')
      cy.get('.details-abstract').should('contain', 'Should Shakespeare’s Richard III be reserved for disabled actors? Does the character have to be played by a white man? By a man at all? Three recent productions took different tacks.')
      cy.get('.details-link').should('contain', 'Full Article')
      cy.get('.details-href').should('have.attr', 'href')
    // }, 1000)
  })
})
