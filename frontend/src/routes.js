import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './pages/Main';
import Login from './pages/Login';

export default function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={Main} />
            <Route path="/Login" exact component={Login} />
        </BrowserRouter>
    );
}

//           <Route path="/dev/:id" component={Main} />