import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const CustomerProfile = React.lazy(() => import('./customer-profile'));

const CutomerDetailsPage = ({ match }) => (
  <Suspense fallback={<div className="loading" />}>
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/profile`} />
      <Route
        path={`${match.url}/profile`}
        exact
        render={(props) => <CustomerProfile {...props} />}
      />

      <Redirect to="/error" />
    </Switch>
  </Suspense>
);
export default CutomerDetailsPage;
