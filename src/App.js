import React,{useEffect,useState} from 'react';
import logo from './logo.svg';
import Recipe from './Recipe';
import './App.css';
import { get } from 'https';

const App = () => {

  const APP_ID = '85fae3d6';
  const APP_KEY = 'aada471a9382fd5f84e236ad5a875e92';


  //Create a state here. Everything is stored in the "recipes" that comes from the API.
  const [recipes,setRecipies]  = useState([]);

  // Create a state for search items
  const [search, setSearch] = useState("");

  // Const create state for the search button that contains the query.
  const [query,setQuery] = useState('chicken');

  const exampleRequest = "https://api.themoviedb.org/3/movie/upcoming?api_key=fc018f9654a75af338a6a99476f7e8f3&language=en-US&page=1";


  // This is the function that will run everytime(useEffect)
  useEffect(() => {
    getRecipes();
  }, [query]); // [counter] is the second argument. If counter state changes then it will execute this function.

  // Create a function that will be used to make async calls and fetch recipes from the API.
  const getRecipes = async () => {

    const response = await fetch(exampleRequest);
    const data = await response.json();
    setRecipies(data.results);
    console.log(data.results);
  }

  // e means event
  const updateSearch = e => {
      setSearch(e.target.value); // This is the value of the input
      console.log(search);
  }

  const getQuery = e => {
    e.preventDefault();
    setQuery(search);
    setSearch(''); // Set it to empty after the button has been clicked
  }

  return(
    <div className="App">
      <h1 className="heading">Search for any recipes !</h1>

      <form onSubmit = {getQuery} className="search-form">
        <input type='text' className='search-bar' value={search} onChange = {updateSearch}/>
        <button type='submit' className='search-button'>Search</button>
      </form>
      <div className='recipe'>
      {recipes.map(recipes => (
          <Recipe
                  key = {recipes.id}
                  title = {recipes.title}
                    //calories = {recipes.recipe.calories} 
                    image = {"http://image.tmdb.org/t/p/w185/"+recipes.poster_path}
                    ingredients = {recipes.overview}/>
      ))}
      </div>
    </div>

  );
}

export default App;
