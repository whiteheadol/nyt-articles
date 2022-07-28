import React from 'react';
import Article from '../Article/Article';
import './ArticlesContainer.css'

const ArticlesContainer = ({ displayedArticles }) => {

  const allArticles = displayedArticles.map(element => {
    return (
      <Article
        title={element.title}
        byline={element.byline}
      />
    )
  })

  return(
    <div className='all-articles'>
      {allArticles}
    </div>
  )
}

export default ArticlesContainer;
