import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Calendar from './components/Calendar'

class App extends Component {
  render() {
    return (
        <div className="App">
          <header>
            <div id="logo">
              <span>
                <b>calendar app test</b>
              </span>
            </div>
          </header>
          <main>
            <Calendar />
          </main>
        </div>
    );
  }
}

export default App;
