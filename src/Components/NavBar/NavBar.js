import React from 'react';
import './NavBar.css';
import {useEffect} from 'react';


const NavBar = ({ setDisplayedArticles, displayedCategory, setDisplayedCategory, categoryText, setCategoryText }) => {

  useEffect(() => {
    fetch(`https://api.nytimes.com/svc/topstories/v2/${displayedCategory}.json?api-key=GuWKVIUUyA3DlfmPdjbouV6EFbkXQbVv`)
      .then(response => response.json())
      .then(data => {
        console.log(data.results)
        setDisplayedArticles(data.results)
        }
      )
  }, [displayedCategory])

  const categoryChangeHandler = (e) => {
    setCategoryText(e.target.value)
    setDisplayedCategory(e.target.value)
  }

  return(
    <section className='nav'>
      <h1>NYT Article Archive</h1>
      <p className='label'>Explore by category:</p>
      <select name='selectCategory'
        id='selectCategory'
        name='selectCategory'
        onChange={categoryChangeHandler}
        value={categoryText}
        className='dropdown'
        >
        <option value='home'>All</option>
        <option value='arts'>Arts</option>
        <option value='automobiles'>Automobiles</option>
        <option value='books'>Books</option>
        <option value='business'>Business</option>
        <option value='fashion'>Fashion</option>
        <option value='food'>Food</option>
        <option value='health'>Health</option>
        <option value='insider'>Insider</option>
        <option value='magazine'>Magazine</option>
        <option value='movies'>Movies</option>
        <option value='nyregion'>NYRegion</option>
        <option value='obituaries'>Obituaries</option>
        <option value='opinion'>Opinion</option>
        <option value='politics'>Politics</option>
        <option value='realestate'>Real Estate</option>
        <option value='science'>Science</option>
        <option value='sports'>Sports</option>
        <option value='sundayreview'>Sunday Review</option>
        <option value='technology'>Technology</option>
        <option value='theater'>Theater</option>
        <option value='t-magazine'>T-Magazine</option>
        <option value='travel'>Travel</option>
        <option value='upshot'>Upshot</option>
        <option value='us'>US</option>
        <option value='world'>World</option>
      </select>
    </section>
  )
}

export default NavBar;
