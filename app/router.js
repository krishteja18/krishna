/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { Fragment } from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Switch, Route } from 'react-router-dom';
// import NotFoundPage from 'pages/NotFoundPage';
// import exception from './pages/Exception/500';
import BasicLayout from './layouts/BasicLayout';



// import Org from './pages/OrganizationType';




function RouterConfig({ history }) {
  return (
    <Fragment>
      <ConnectedRouter history={history}>
        <Switch>
        
          {/* <Route exact path="/staffJoy/register" component={LoginForm} /> */}
          {/* <Route exact path="/" component={Org} /> */}
          {/* <Route exact path="/bnc/exception/500" component={exception} /> */}
          {/* <Route path={`${process.env.PUBLIC_URL}/`} component={BasicLayout} /> */}
          <Route path="/" component={BasicLayout} />

          {/* <Route component={NotFoundPage}  /masterMenu/employeeGroup /> */}
        </Switch>
      </ConnectedRouter>
    </Fragment>
  );
}

export default RouterConfig;