import React from 'react';
import {useEffect} from 'react';
import { Link } from 'react-router-dom';


const FavNav = ({ setCurrentArticle }) => {

  const clearCurrent = () => {
    setCurrentArticle({})
  }

  return(
    <section className='nav'>
      <h1 className='nav-title'>NYT Article Archive</h1>
      <Link to={'/'} onClick={clearCurrent}><button className='btn'><strong>Back Home</strong></button></Link>
    </section>
  )
}

export default FavNav;
