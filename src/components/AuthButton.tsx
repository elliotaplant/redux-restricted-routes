import * as React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  withRouter
} from 'react-router-dom';

const AuthButton = withRouter(({ history }) => (
  fakeAuth.isAuthenticated ? (
    <p>
      Welcome! <button onClick={() => {
        fakeAuth.signout(() => history.push('/'));
      }}>Sign out</button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
));

export default AuthButton;
