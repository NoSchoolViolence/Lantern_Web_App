import React, { Component } from 'react';
import Landing from './landing/landing';
import { BrowserRouter, Route } from 'react-router-dom';
import ROUTES from './routes';
import './App.css';
import Search from './search/Search';


class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path={ROUTES.LANDING} component={Landing}/>
        </BrowserRouter>
        <BrowserRouter>
          <Route path={ROUTES.SEARCH} component={Search}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
