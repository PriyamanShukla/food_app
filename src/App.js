import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Recipes from "./Recipes";
import Axios from "axios";


function App() {
  const [search, setSerach] = useState("chiken");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "5e32c2f2";
  const APP_KEY = "f7b9e194ed82371fa2bb2b7886088b1f";

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const res = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`)

    setRecipes(res.data.hits);

  }

  const onInputChange = e => {
    setSerach(e.target.value);
  };
  const onSearchClick=()=>{
    getRecipes();
  }


  return (
    <div className="App">
      <Header 
      search={search} 
      onInputChange={onInputChange}
      onSearchClick={onSearchClick}
      />
      <div className="container">
      <Recipes recipes={recipes}/>
      </div>
      
    </div>
  );
}

export default App;