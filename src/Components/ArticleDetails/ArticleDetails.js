import React from 'react';
import './ArticleDetails.css';
import {useEffect} from 'react';

const ArticleDetails = ({ currentArticle }) => {

  return(
    <section className='article-details'>
      <h2 className='details details-title'>{currentArticle.title}</h2>
      <p className='details details-byline'>{currentArticle.byline}</p>
      <p className='details details-abstract'>{currentArticle.abstract}</p>
      {currentArticle.url && <a href={currentArticle.url} className='details-href'><p className='details-link'>Full Article</p></a>}
    </section>
  )
}

export default ArticleDetails;
