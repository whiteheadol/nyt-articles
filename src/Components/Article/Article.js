import React from 'react';
import './Article.css'

const Article = ({ title, byline, setCurrentArticle, shorturl, displayedArticles }) => {

  const handleCurrentArticle = (e) => {
    let article = displayedArticles.find(element => {
      return element.short_url === shorturl;
    })
    setCurrentArticle(article)
  };

  return(
    <div className='article-div' onClick={handleCurrentArticle} id={shorturl}>
      <p className='article-title'>{title}</p>
      <p className='article-byline'>{byline}</p>
    </div>
  )
}

export default Article;
