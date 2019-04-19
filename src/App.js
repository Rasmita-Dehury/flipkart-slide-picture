import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

import Slider from './slider';
import "./my-style.css";
import ImageSlider from './image-slider';
import { Slide1, Slide2 } from './slides';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Slider
          srcs={
            [
              "https://source.unsplash.com/WLUHO9A_xik/1600x400",
              "https://source.unsplash.com/xkaO0pO-GMU/1600x400",
              "https://source.unsplash.com/5RydGpXvpxE/1600x400",
              "https://source.unsplash.com/BBqMbaVUG_k/1600x400"
            ]
          }
        >
        </Slider> */}

        <ImageSlider >
          <Slide1 />
          <Slide2 />
          <Card1 />
          <Card2 />
        </ImageSlider>

      </div>
    );
  }
}

function Card1() {
  return (
    <div className="card">
      <img src="https://source.unsplash.com/WLUHO9A_xik/1600x600" alt="" />
      <h2 className="h2Text1">Ride Mountain</h2>
    </div>
  )
}
function Card2() {
  return (
    <div className="card" style={{ background: "greenyellow" }}>
      <img src="https://source.unsplash.com/xkaO0pO-GMU/1600x600" alt="" />
      <h2>hello2</h2>
    </div>
  )
}

export default App;
