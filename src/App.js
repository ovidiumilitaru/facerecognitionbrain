import React, { Component } from "react";
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo";
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm";
import Rank from "./components/Rank/Rank";
import "./App.css";

const app = new Clarifai.App({
  apiKey: '7eb22c6af4ab4d4da8635301e25e2f8c'
 });

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 80
      }
    }
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
    }
  }

  onInputChange = (event) => {
    console.log(event.target.value);
  }

  onButtonSubmit = () => {
    console.log('click');
    app.models
      .predict(
        "7eb22c6af4ab4d4da8635301e25e2f8c", 
        "https://samples.clarifai.com/face-det.jpg")
      .then(
        function(response) {
        console.log(response);
        // do something with response
      },
      function(err) {
        // there was an error
      }
    );
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles' params={particlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm 
        onInputChange={this.onInputChange} 
        onButtonSubmit={this.onButtonSubmit}/>

        {/* <FaceRecognition /> */}
      </div>
    );
  }
}

export default App;
