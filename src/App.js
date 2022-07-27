import React, {useState, useEffect} from 'react';
import './App.css';
import Article from './Components/Article/Article';
import ArticleDetails from './Components/ArticleDetails/ArticleDetails';
import ArticlesContainer from './Components/ArticlesContainer/ArticlesContainer';
import FoF from './Components/FoF/FoF';
import NavBar from './Components/NavBar/NavBar';


function App() {

  const [displayedArticles, setDisplayedArticles] = useState([]);

  useEffect(() => {
    fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=GuWKVIUUyA3DlfmPdjbouV6EFbkXQbVv")
      .then(response => response.json())
      .then(data => {
        setDisplayedArticles(data.results)
        }
      )
      .then(info => console.log('d', displayedArticles))
  }, [])

  return (
    <div className="App">
      <NavBar />
      <ArticlesContainer
        displayedArticles={displayedArticles}
      />
      <Article />
      <ArticleDetails />
      <FoF />
    </div>
  );
}

export default App;

// Pass displayed articles down to correct components to display
// Set up a dropdown menu (Build out navBar structure)
// Set up the most basic css for page structure
// Dropdown menu tied to a function that will fetch and update displayedArticles accordingly
// Worry about 404 page once funtionality is there
