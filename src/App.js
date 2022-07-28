import React, {useState, useEffect} from 'react';
import './App.css';
import Article from './Components/Article/Article';
import ArticleDetails from './Components/ArticleDetails/ArticleDetails';
import ArticlesContainer from './Components/ArticlesContainer/ArticlesContainer';
import FoF from './Components/FoF/FoF';
import NavBar from './Components/NavBar/NavBar';


function App() {

  const [displayedArticles, setDisplayedArticles] = useState([]);
  const [displayedCategory, setDisplayedCategory] = useState('home');
  const [categoryText, setCategoryText] = useState('home')

  useEffect(() => {
    fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=GuWKVIUUyA3DlfmPdjbouV6EFbkXQbVv")
      .then(response => response.json())
      .then(data => {
        console.log(data.results)
        setDisplayedArticles(data.results)
        }
      )
      // .then(info => console.log('d', displayedArticles))
  }, [])

  return (
    <div className='App'>
      <div className='nav-and-details'>
        <NavBar
          setDisplayedArticles={setDisplayedArticles}
          displayedCategory={displayedCategory}
          setDisplayedCategory={setDisplayedCategory}
          categoryText={categoryText}
          setCategoryText={setCategoryText}
        />
        <ArticleDetails />
      </div>
        <ArticlesContainer
          displayedArticles={displayedArticles}
        />
    </div>
  );
}

export default App;
// <FoF />

// Pass displayed articles down to correct components to display
// Set up a dropdown menu (Build out navBar structure)
// Set up the most basic css for page structure
// Dropdown menu tied to a function that will fetch and update displayedArticles accordingly
// Worry about 404 page once funtionality is there
// Add basic styling to each article (border?) to see if it's working correctly
