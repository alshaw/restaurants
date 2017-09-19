import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Menu from './components/Menu';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => (
     <div>
       <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/login" component={Login} />
          <ProtectedRoute path="/dashboard" component={Dashboard} />    
          <ProtectedRoute path="/menus/:id" component={Menu} />

          <Route component={NoMatch} />
        </Switch>
    </div>
);

export default App;
