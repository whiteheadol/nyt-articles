import './App.css';
import Article from './Components/Article/Article';
import ArticleDetails from './Components/ArticleDetails/ArticleDetails';
import ArticlesContainer from './Components/ArticlesContainer/ArticlesContainer';
import FoF from './Components/FoF/FoF';
import NavBar from './Components/NavBar/NavBar';


function App() {

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
