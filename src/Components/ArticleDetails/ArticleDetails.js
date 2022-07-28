import React from 'react';
import './ArticleDetails.css';
import {useEffect} from 'react';

const ArticleDetails = ({ currentArticle }) => {

  return(
    <section className='article-details'>
      <h2 className='details'>{currentArticle.title}</h2>
      <p className='details'>{currentArticle.byline}</p>
      <p className='details'>{currentArticle.abstract}</p>
      {currentArticle.url && <a href={currentArticle.url}><p>Full Article</p></a>}
    </section>
  )
}

export default ArticleDetails;
