import React, { Component } from 'react';
import './App.css';
import Menu from './Component/routte-link';
import { BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
      </div>
    );
  }
}

export default App;
