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
      <ArticlesContainer />
      <Article />
      <ArticleDetails />
      <FoF />
    </div>
  );
}

export default App;
