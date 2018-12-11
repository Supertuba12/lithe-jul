import React, { Component } from 'react';
import Snow from 'react-snow-effect';
import SnowStorm from 'react-snowstorm';
import './App.css';
import TodoList from './TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">

        <img src={require('./lithekod.png')} className="lithekod" alt="lithekod" />
        <img src={require('./opera-logo.png')} className="opera" alt="operalogo" />
        <SnowStorm />

        <header className="App-header">
          <img src="https://www.pngarts.com/files/2/Snowflakes-Transparent-Background-PNG.png" className="App-logo" alt="logo" />
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
          <div className="WishList">
            <TodoList />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
