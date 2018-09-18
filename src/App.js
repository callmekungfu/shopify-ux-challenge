import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="login-container container">
          <form>
            <input type="text" placeholder="username" className="text-purple"></input>
            <input type="password" placeholder="password" className="text-purple"></input>
            <input type="submit" value="Login"/>
          </form>
        </div>
        <div className="static-container container"></div>
      </div>
    );
  }
}

export default App;
