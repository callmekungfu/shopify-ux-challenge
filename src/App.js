import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      username: '',
      error: false
    };
    this.handleSubmitForm = this.handleSubmitForm.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
  }

  handlePasswordInput(e) {
    const input = e.target.value;
    this.setState({ username: input })
  }

  handleSubmitForm(e) {
    e.preventDefault();
    console.log(this.state.username);
    if(this.state.username === 'error') {
      this.setState({ error: true });
    } else {
      this.setState({ loading: true });
    }
  }

  render() {
    return (
      <div className="App">
        <div className="login-container container" hidden>
            <form onSubmit={this.handleSubmitForm}>
              <div className="login-inner">
                <div className="login-holder">
                  <input type="text" placeholder="username" className="text-purple border-bottom-purple shadowed input" onChange={this.handlePasswordInput}></input>
                  <input type="password" placeholder="password" className={"text-purple shadowed input " + (this.state.error ? 'error' : '')}></input>
                  <button type="submit" className="bg-purple shadowed input">
                    <ReactCSSTransitionGroup
                      transitionName="fade"
                      transitionEnterTimeout={300}
                      transitionLeaveTimeout={0}>
                      {!this.state.loading && <span>login</span>}
                      {this.state.loading && <div className="loader"></div>}
                    </ReactCSSTransitionGroup>
                  </button>
                  <p className={"error-message " + (this.state.error ? 'show' : '')}>password must be between 8 to 24 characters</p>
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
        <div className="post-login-container container bg-purple">
          <div>
            <div className="logo-container">
              <h1>Congratulations</h1>
              <p>You have successfully logged in.</p>
            </div>
            <div className="sign-out-container">
              <button className="logout-button">Sign out</button>
            </div>
          </div>
        </div>
        <div className="static-container container">
          <div className="logo-container">
            <h1>AcmeStack</h1>
            <div className="company-logo">
              <img src="/logo-acmestack.svg" alt="AcmeStack Company Logo"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
