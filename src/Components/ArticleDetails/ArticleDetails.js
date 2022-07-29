import React from 'react';
import './ArticleDetails.css';
import {useEffect} from 'react';

const ArticleDetails = ({ currentArticle, savedArticles, setSavedArticles }) => {

  const checkIfSaved = (currentArticle, savedArticles) => {
    let value = false;
    savedArticles.forEach(element => {
      if(element.title === currentArticle.title) {
        value = true;
      }
    })
    return value;
  }

  const addArticle = () => {
    setSavedArticles(savedArticles => [...savedArticles, currentArticle])
  }


  return(
    <section className='article-details'>
      <h2 className='details details-title'>{currentArticle.title}</h2>
      <p className='details details-byline'>{currentArticle.byline}</p>
      <p className='details details-abstract'>{currentArticle.abstract}</p>
      {currentArticle.url && <a href={currentArticle.url} className='details-href'><p className='details-link'>Full Article</p></a>}
      {(!checkIfSaved(currentArticle, savedArticles) && currentArticle.url)&& <button className='save-btn' onClick={addArticle}><strong>Save for Later</strong></button>}
    </section>
  )
}

export default ArticleDetails;
