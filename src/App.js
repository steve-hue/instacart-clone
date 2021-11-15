import React from "react"
import {GiHamburgerMenu} from "react-icons/gi"
import {FaCarrot} from "react-icons/fa";
import Header from "./Components.js/Header"
import Stores from "./Components.js/Stores"
import Groceries from "./Components.js/Groceries"
import Services from "./Components.js/Services"
import Questions from "./Components.js/Questions"
import './App.css';

function App() {
  return (
    <div className="App">
    <div className="navbar">
      <div className="navbar-container">
        <div className="nav-left">
        <button><GiHamburgerMenu size={20}/></button>
        <div><img src="https://www.instacart.com/assets/beetstrap/brand/instacart-logo-color-4db9d81ca0b7638befdc4bd331f64a2633df790c0b55ef627c99b1ba77af72b7.svg" /></div>
        

        </div>

        <div className="nav-right">
          <div className="nav-rightc"> <p>Log in</p></div>
          <div className="nav-rightl"><p>Sign up</p></div>
        </div>
      </div>
    </div>
    <Header />
    <Stores />
    <Groceries />
    <Services />
    <Questions />
    
      
    </div>
  );
}

export default App;
