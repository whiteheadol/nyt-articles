import React from 'react';
import Article from '../Article/Article';

const ArticlesContainer = ({ displayedArticles }) => {

  const allArticles = displayedArticles.map(element => {
    return (
      <Article
      />
    )
  })

  return(
    <div>
      <p>{allArticles}</p>
    </div>
  )
}

export default ArticlesContainer;
