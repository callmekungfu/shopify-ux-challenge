import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
  }

  handleSubmitForm(e) {
    e.preventDefault();
    this.setState({ loading: true });
  }

  render() {
    return (
      <div className="App">
        <div className="login-container container">
            <form onSubmit={this.handleSubmitForm}>
              <div className="login-inner">
                <div className="login-holder">
                  <input type="text" placeholder="username" className="text-purple border-bottom-purple shadowed input"></input>
                  <input type="password" placeholder="password" className="text-purple shadowed input"></input>
                  <button type="submit" className="bg-purple shadowed input"><span hidden={this.state.loading}>login</span><div className="loader" hidden={!this.state.loading}></div></button>
                </div>
              </div>
            </form>
            <div className="rmb-me-input">
              <input type="checkbox" name="rememberMe" className="checkbox"/><span className="checkmark"></span>
              <label className="text-purple">remember me</label>
            </div>
            <div className="external-login-container">
              <p className="login-prompt">or login with </p>
              <div className="provider-holder">
                <div className="social-icon">
                  <i className="fab fa-google"></i>
                </div>
                <div className="social-icon">
                  <i className="fab fa-facebook"></i>
                </div>
                <div className="social-icon">
                  <i className="fab fa-twitter"></i>
                </div>
              </div>
            </div>
        </div>
        <div className="static-container container">
          <div className="logo-container">
            <h1>AcmeStack</h1>
            <div className="company-logo">
              <CSSTransitionGroup
                transitionName="example"
                transitionEnterTimeout={500}
                transitionLeaveTimeout={300}>
                <img src="/logo-acmestack.svg" alt="AcmeStack Company Logo"/>
              </CSSTransitionGroup>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
