import React, { Component } from 'react';
import logo from '@/static/images/logo.svg';
import '@/static/sass/App.scss';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload hot.
        </p>
          <a href='login/index.html'>login</a><br/>
          <a href='register/index.html'>register</a>
      </div>
    );
  }
}
export default App;
