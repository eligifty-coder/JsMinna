import React, { useState} from 'react';
import './App.css';
import Home from './Component/Home/Home '
import {NavLink,  BrowserRouter, Route, Switch, withRouter} from 'react-router-dom'
import Signup from './Component/Signup/Signup'

const  App= ()=>  {
  return(
      <BrowserRouter>
        <Switch>
          <Route exact path='/'>
          <Home />
          </Route>
          <Route exact path="/signup">
            <Signup/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
}

export default App;
