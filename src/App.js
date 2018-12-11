import React, { Component } from 'react';
import Snow from 'react-snow-effect';
import SnowStorm from 'react-snowstorm';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={require('./lithekod.png')} className="lithekod" alt="lithekod" />
        <header className="App-header">
          <img src="http://res.publicdomainfiles.com.s3.amazonaws.com/pdf_alternate/57/13529242816467.svg?AWSAccessKeyId=AKIAJBE24BKMOLMJBBXA&Expires=1544551784&Signature=5N22jLtwFXQHxTXwkdXDk8W6GhE%3D" className="App-logo" alt="logo" />
          <p> Welcome to Santa's (Lithe kod's) secret wish site. </p>
          <p> Please make a wish</p>
          <a
            className="App-link"
            href="http://lithekod.se/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lithe Jul
          </a>
        </header>
        <SnowStorm />
      </div>
    );
  }
}

export default App;
