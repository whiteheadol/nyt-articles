import React from 'react';
import './Article.css'

const Article = ({ title, byline }) => {

  return(
    <div className='article-div'>
      <p className='article-title'>{title}</p>
      <p className='article-byline'>{byline}</p>
    </div>
  )
}

export default Article;
