import React from 'react';
import './NavBar.css';

const NavBar = () => {

  return(
    <div className='nav'>
      <h1>NYT Article Archive</h1>
      <select name='selectCategory'
        id='selectCategory'
        >
        <option value='All'>All</option>
        <option value='arts'>Arts</option>
        <option value='automobiles'>Automobiles</option>
        <option value='books'>Books</option>
        <option value='business'>Business</option>
        <option value='fashion'>Fashion</option>
        <option value='food'>Food</option>
        <option value='health'>Health</option>
        <option value='home'>Home</option>
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
    </div>
  )
}
// onChange={seasonChangeHandler}
// value={seasonText}

export default NavBar;

// On change, change the value
// When the value changes, an onEffect to fetch that topic's stories
// 
