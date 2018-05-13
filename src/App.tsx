import * as React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  withRouter
} from 'react-router-dom';
import { Admin, Protected, Public } from './components/pages';
import Login from './components/pages/Login';

export default function AuthExample () {
  return (
    <Router>
      <div>
        <LogOutButton />
        <ul>
          <li><Link to="/public">Public Page</Link></li>
          <li><Link to="/login">Login Page</Link></li>
          <li><Link to="/protected">Protected Page</Link></li>
          <li><Link to="/admin">Admin Page</Link></li>
        </ul>
        <Route path="/public" component={Public}/>
        <Route path="/login" component={Login}/>
        <PrivateRoute path='/protected' component={Protected} />
        <AdminRoute path='/admin' component={Admin} />
      </div>
    </Router>
  );
}
