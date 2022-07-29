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
  const [categoryText, setCategoryText] = useState('home');
  const [currentArticle, setCurrentArticle] = useState({});
  const [savedArticles, setSavedArticles] = useState([]);

  useEffect(() => {
    fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=GuWKVIUUyA3DlfmPdjbouV6EFbkXQbVv")
      .then(response => response.json())
      .then(data => {
        setDisplayedArticles(data.results)
        console.log('app')
        }
      )
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
        <ArticleDetails
          currentArticle={currentArticle}
          savedArticles={savedArticles}
          setSavedArticles={setSavedArticles}
        />
      </div>
        <ArticlesContainer
          displayedArticles={displayedArticles}
          setCurrentArticle={setCurrentArticle}
        />
    </div>
  );
}

export default App;


// <FoF />
// Worry about 404 page once funtionality is there -- Router!
// error handling for a failed fetch
// Test a failed network request
