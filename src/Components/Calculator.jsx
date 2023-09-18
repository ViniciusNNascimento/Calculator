import React, { useState } from "react";
import "./Calculator.css";
import { Box, Container } from "@mui/material";

export default function Calculator() {
  const[num,setNum]=useState(0);

  function inputNum(valor) {
    console.log(valor)
  }
  return (
    <div>
      <Box m={5} />

      <Container maxWidth="xs">
        <div className="wrapper">
          <box m={12} />
          <h1 className="result">{num}</h1>
          <button>AC</button>
          <button>+/-</button>
          <button>%</button>
          <button className="orange">/</button>
          <button className="grey">7</button>
          <button className="grey">8</button>
          <button className="grey">9</button>
          <button className="orange">X</button>
          <button className="grey">4</button>
          <button className="grey">5</button>
          <button className="grey">6</button>
          <button className="orange">-</button>
          <button className="grey">1</button>
          <button className="grey">2</button>
          <button className="grey">3</button>
          <button className="orange">+</button>
          <button className="grey">0</button>
          <button className="grey">,</button>
          <button className="grey" style={{ visibility: "hidden" }}>
            ,
          </button>
          <button className="orange">=</button>
        </div>
      </Container>
    </div>
  );
}
