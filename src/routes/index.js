import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import SingUp from '../pages/SignUp';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/register" exact component={SingUp} />
      <Route path="/dashboard" exact component={Dashboard} isPrivate />
      <Route path="/profile" exact component={Profile} isPrivate />
    </Switch>
  );
}
