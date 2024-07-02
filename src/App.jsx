import React from "react";
import Navbar  from "./Navbar";
import { Counter } from "./components/Counter/Counter"
import { Article }  from "./components/Article/Article";

import article1 from "./assets/images/Article 1.png";
import article2 from "./assets/images/Article 2.png";
import article3 from "./assets/images/Article 3.png"

import "./styles/App.css";

class App extends React.Component{

    render() {
        return (
        <>
        <Navbar />

        <Counter />

        <section id="articles">

        <Article 
        
        title="Designing Dashboards"  provider="Nasa" description = "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." thumbnail = {article1}/>

        <Article title="Vibrant Portraits of 2020"  provider="Space Flights" description = "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." thumbnail = {article2} />


        <Article title="36 Days of Malayalam type"  provider="Space Flights News" description = "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." thumbnail = {article3}  />


        <Article title="36 Days of Malayalam type"  provider="Space Flights News" description = "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." thumbnail = {article1} />

        </section> 

    

        </>
        );

    }

}

export default App;