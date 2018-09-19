import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="login-container container">
            <form>
              <div className="login-inner">
                <input type="text" placeholder="username" className="text-purple border-bottom-purple shadowed input"></input>
                <input type="password" placeholder="password" className="text-purple shadowed input"></input>
                <input type="submit" value="Login" className="bg-purple shadowed input"/>
              </div>
            </form>
            <div className="rmb-me-input">
              <input type="checkbox" name="rememberMe" className="checkbox"/><span class="checkmark"></span>
              <label className="text-purple">remember me</label>
            </div>
            
        </div>
        <div className="static-container container"></div>
      </div>
    );
  }
}

export default App;
