import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Album from './components/Album/Album';

class Routes extends Component {
  render() {
    return(
      <BrowserRouter>
        <main>
          <Navbar/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/albums/:id" component={Album}/>
        </main>
      </BrowserRouter>
    );
  }
}

export default Routes;