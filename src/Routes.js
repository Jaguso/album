import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import Home from './components/Home';

class Routes extends Component {
  render() {
    return(
      <BrowserRouter>
        <main>
          <Route exact path="/" component={Home}/>
        </main>
      </BrowserRouter>
    );
  }
}

export default Routes;