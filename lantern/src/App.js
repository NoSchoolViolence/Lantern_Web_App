import React, { Component } from 'react';
import Landing from './landing/landing';
import { BrowserRouter, Route } from 'react-router-dom';
// import logo from './logo.svg';
// import Text from './behaviors.txt';
import ROUTES from './routes';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import ROUTES from './routes';
import Search from './search/Search';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path={ROUTES.LANDING} component={Landing}/>
          <Route exact path={ROUTES.SEARCH} component={Search}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
