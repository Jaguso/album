import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/Navbar';

class Routes extends Component {
  render() {
    return(
      <BrowserRouter>
        <main>
          <Navbar/>
          <Route exact path="/" component={Home}/>
        </main>
      </BrowserRouter>
    );
  }
}

export default Routes;