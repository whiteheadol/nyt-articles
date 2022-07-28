import React from 'react';
import Article from '../Article/Article';
import './ArticlesContainer.css'

const ArticlesContainer = ({ displayedArticles }) => {

  const allArticles = displayedArticles.map(element => {
    if(element.short_url) {
      return (
        <Article
        title={element.title}
        byline={element.byline}
        key={element.short_url}
        />
      )
    }
  })

  return(
    <div className='all-articles'>
      {allArticles}
    </div>
  )
}

export default ArticlesContainer;
