import React from 'react';
import { BrowserRouter as Router, Route }  from 'react-router-dom';
import * as ROUTES from './constants/routes';
import { Home, Browse, SignIn, SignUp } from './pages';
export default function app() {
  return (
      <Router>
        <Route exact path={ROUTES.HOME}>
          
        </Route>
      </Router>
  );
}


