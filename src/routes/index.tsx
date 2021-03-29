import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Login from '../pages/login';

const Routes: React.FC = ()=> {
    return (
        <Switch>
            <Route path="/" exact component={Dashboard} />
            <Route path="/Login" exact component={Login} />
        </Switch>
    )
}

export default Routes;
