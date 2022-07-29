import React from 'react';
import Article from '../Article/Article';

const FavContainer = ({ savedArticles, setCurrentArticle }) => {

  const allArticles = savedArticles.map(element => {
    if(element.short_url) {
      return (
        <Article
          title={element.title}
          byline={element.byline}
          key={element.short_url}
          setCurrentArticle={setCurrentArticle}
          shorturl={element.short_url}
          displayedArticles={savedArticles}
        />
      )
    }
  })

  //forEach? How does React handle elements of an array that are undefined or null?

  return(
    <section className='all-articles'>
      {allArticles}
    </section>
  )
}

export default FavContainer;
