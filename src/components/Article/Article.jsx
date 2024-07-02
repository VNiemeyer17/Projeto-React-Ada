//importar logo da nav depois, abrir uma pasta assets => images


import React from "react";
import "./style.css";

export class Article extends React.Component  { 
  render(){
    return (
      <article id="article">
        <img src={this.props.thumbnail} alt="" />

        <div className="article-infos">

          <h2>{this.props.title}</h2>

          <h3>{this.props.provider}</h3>

          <p>{this.props.description}</p>

        </div>
      </article>
     );
  }
}

