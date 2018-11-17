import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import ROUTES from './routes';
import Search from './search/Search';


class App extends Component {
  render() {
    return (
      <div className="App">
        
       
        <BrowserRouter>
          <Route exact path={ROUTES.SEARCH} component={Search}/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
