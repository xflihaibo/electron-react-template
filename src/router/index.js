import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../pages/home';
import Login from '../pages/login';
console.log('react-router-dom');
const BasicRoute = () => (
    <Router>
        <Switch>
            <Router>
                <Route path="/home" render={() => <Home />}></Route>
                <Route path="/login" render={() => <Login />}></Route>
                <Route exact path="/" render={() => <Login />}></Route>
            </Router>
        </Switch>
    </Router>
);

export default BasicRoute;
