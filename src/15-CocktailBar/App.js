import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import About from "./pages/About";
import SingleCocktail from "./pages/SingleCocktail";
import Error from "./pages/Error";

// import components
import NavbarCocktail from "./components/Navbar";

function CocktailApp() {
  return <h2>Cocktail App</h2>;
}

export default CocktailApp;
