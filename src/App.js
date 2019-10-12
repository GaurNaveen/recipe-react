import React,{useEffect,useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { get } from 'https';

const App = () => {

  const APP_ID = '85fae3d6';
  const APP_KEY = 'aada471a9382fd5f84e236ad5a875e92';

  const exampleRequest = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`


  //Create a state here
  const [recipes,setRecipies]  = useState([]);

  // This is the function that will run everytime(useEffect)
  useEffect(() => {
    getRecipes();
  }, []); // [counter] is the second argument. If counter state changes then it will execute this function.

  // Create a function that will be used to make async calls and fetch recipes from the API.
  const getRecipes = async () => {
    const response = await fetch(exampleRequest);
    const data = await response.json();
    setRecipies(data.hits);
  }

  return(

    <div className="App">
      <form className="search-form">
        <input type='text' className='search-bar'/>
        <button type='submit' className='search-button'>Search</button>
      </form>
    </div>

  );
}

export default App;
