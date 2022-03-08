import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const CustomerList = React.lazy(() =>import('./Customer-list'));
const AccountList = React.lazy(() => import('./account-list'));
const Activities = React.lazy(() =>import('./activities'));
const SecondMenu = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/second`} />
      <Route
        path={`${match.url}/second`}
        exact
        render={(props) => <CustomerList {...props} />}
      />
      <Route
        path={`${match.url}/second/account`}
        exact
        render={(props) => <AccountList {...props} />}
      />
      <Route
        path={`${match.url}/second/activies`}
        exact
        render={(props) => <Activities {...props} />}
      />
      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default SecondMenu;
