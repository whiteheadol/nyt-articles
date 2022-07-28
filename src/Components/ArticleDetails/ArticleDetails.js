import React from 'react';
import './ArticleDetails.css';
import {useEffect} from 'react';

const ArticleDetails = ({ currentArticle }) => {

  return(
    <div className='article-details'>
      <h2>{currentArticle.title}</h2>
      <p>{currentArticle.byline}</p>
      <p>{currentArticle.abstract}</p>
      <p>{currentArticle.url}</p>
      {currentArticle.url && <a href={currentArticle.url}><p>Full Article</p></a>}
    </div>
  )
}

export default ArticleDetails;
