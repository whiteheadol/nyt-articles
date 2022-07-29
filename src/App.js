import React, {useState, useEffect} from 'react';
import './App.css';
import Article from './Components/Article/Article';
import ArticleDetails from './Components/ArticleDetails/ArticleDetails';
import ArticlesContainer from './Components/ArticlesContainer/ArticlesContainer';
import FoF from './Components/FoF/FoF';
import NavBar from './Components/NavBar/NavBar';
import FavNav from './Components/FavNav/FavNav';
import FavDetails from './Components/FavDetails/FavDetails';
import FavContainer from './Components/FavContainer/FavContainer';
import { Route, Switch } from 'react-router-dom';


function App() {

  const [displayedArticles, setDisplayedArticles] = useState([]);
  const [displayedCategory, setDisplayedCategory] = useState('home');
  const [categoryText, setCategoryText] = useState('home');
  const [currentArticle, setCurrentArticle] = useState({});
  const [savedArticles, setSavedArticles] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("https://api.nytimes.com/svc/topstories/v2/home.json?api-key=GuWKVIUUyA3DlfmPdjbouV6EFbkXQbVv")
      .then(response => {
        if (response.ok) {
          setError(false)
          return response.json()
        } else {
          setError(true)
        }
      })
      .then(data => {
        setDisplayedArticles(data.results)
        }
      )
  }, [])


  return (
    <div className='App'>
      {error && <p className='load-error'>Oh no! There was a problem loading articles, we're trying our best to get this resolved.</p>}
      <Switch>
        <Route exact path='/' render={() => {
          return <div>
              <div className='nav-and-details'>
                <NavBar
                setDisplayedArticles={setDisplayedArticles}
                displayedCategory={displayedCategory}
                setDisplayedCategory={setDisplayedCategory}
                categoryText={categoryText}
                setCategoryText={setCategoryText}
                setCurrentArticle={setCurrentArticle}
                error={error}
                setError={setError}
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
        }} />
        <Route exact path='/saved' render={() => {
          return <div>
            <div className='nav-and-details'>
              <FavNav
                setCurrentArticle={setCurrentArticle}
              />
              <FavDetails
                currentArticle={currentArticle}
                savedArticles={savedArticles}
                setSavedArticles={setSavedArticles}
              />
            </div>
            <FavContainer
              savedArticles={savedArticles}
              setCurrentArticle={setCurrentArticle}
            />
          </div>
        }} />
        <Route path="*" component={FoF} />
      </Switch>
    </div>
  );
}

export default App;


// <FoF />
// Worry about 404 page once funtionality is there -- Router!
// error handling for a failed fetch
// Test a failed network request

// Bit more buffer maybe a media query?
