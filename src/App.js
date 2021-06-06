import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import PrivateRoute from 'Components/PrivateRoute';
import './App.css';

const Dashboard = React.lazy(() => import('Pages/Dashboard'));
const SignIn = React.lazy(() => import('Pages/SignIn'));
const SignUp = React.lazy(() => import('Pages/SignUp'));

export default function BasicExample() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <PrivateRoute component={SignIn} path="/" exact type="public" />
          <PrivateRoute component={SignIn} path="/signin" type="public" />
          <PrivateRoute component={SignUp} path="/signup" type="public" />
          <PrivateRoute component={Dashboard} path="/home" type="protected" />
        </Switch>{' '}
      </Suspense>
    </Router>
  );
}
