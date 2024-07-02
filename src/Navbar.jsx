//importar logo da nav depois, abrir uma pasta assets => images


import React from "react";
import "./styles/App.css";
import logoIMG from "./assets/icons/Saturn.png"

class Navbar extends React.Component  {
  render(){
    return (
      <header>
        <nav id="navbar">
          <div className="nav-brand">
            <img src={logoIMG} alt="" />
            <h1>Space Flight News</h1>

          </div>

          <ul className="nav-list">
            <li>
              <a href="#">Home</a>
              </li>
            <li>
              <a href="#">Trending</a>
              </li>
            <li>
              <a href="#">Categoring</a>
              </li>
            <li>
              <a href="#">About us</a>
              </li>
          </ul>
        </nav>
      </header>
     );
  }
}

export default Navbar;
