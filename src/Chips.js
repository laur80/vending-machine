import React, { useState } from "react";
import Message from "./Message";

import { Link } from "react-router-dom";
import chipsImg from "./Chips.png";

import "./Chips.css";

function Chips (props) {

    const [state, setState] = useState({
      bags: []
    });
    
 function  handleClick() {
    const x = window.innerWidth * Math.random();
    const y = window.innerHeight * Math.random();
    setState(prevState => ({
      bags: [...prevState.bags, { x, y }]
    }));
  }

 
    const bags = state.bags.map((bag, i) => (
      <img
        key={i}
        src={chipsImg}
        className='bag'
        style={{ top: `${bag.y}px`, left: `${bag.x}px` }}
        alt="bag of lay's chips"
      />
    ));
    return (
      <div className='Chips'>
        <Message>
          <h1>bags eaten: {state.bags.length}</h1>
          <button onClick={handleClick}>nom nom nom</button>
          <h1>
            <Link to='/'>Go Back</Link>
          </h1>
        </Message>
        {bags}
      </div>
    );
  
}

export default Chips;
